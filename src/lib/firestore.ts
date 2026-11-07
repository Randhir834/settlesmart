import { firebaseConfig } from '../config'

/**
 * Minimal Firestore writer using the REST API, so the marketing site doesn't
 * ship the full Firebase SDK. Writes land in the same `settsmartly` project the
 * mobile app uses. Access is governed by the rules in firebase/marketing.rules.
 */

type Primitive = string | number | boolean | Date

const toValue = (v: Primitive) => {
  if (v instanceof Date) return { timestampValue: v.toISOString() }
  if (typeof v === 'boolean') return { booleanValue: v }
  if (typeof v === 'number') return Number.isInteger(v) ? { integerValue: String(v) } : { doubleValue: v }
  return { stringValue: v }
}

export class SaveError extends Error {
  constructor(public status: number) {
    super(`Firestore write failed (${status})`)
  }
}

/**
 * Create a document. Empty/undefined fields are omitted.
 * With `docId`, a second write for the same id resolves to 'duplicate'
 * (rules allow create only, never update).
 */
export async function createDoc(
  collection: string,
  data: Record<string, Primitive | null | undefined>,
  docId?: string,
): Promise<'ok' | 'duplicate'> {
  const fields: Record<string, unknown> = {}
  for (const [k, v] of Object.entries(data)) {
    if (v === null || v === undefined || v === '') continue
    fields[k] = toValue(v)
  }

  const base = `https://firestore.googleapis.com/v1/projects/${firebaseConfig.projectId}/databases/(default)/documents/${collection}`
  const params = new URLSearchParams({ key: firebaseConfig.apiKey })
  if (docId) params.set('documentId', docId)

  let res: Response
  try {
    res = await fetch(`${base}?${params}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ fields }),
    })
  } catch {
    throw new SaveError(0)
  }

  if (res.ok) return 'ok'
  // Existing doc: either ALREADY_EXISTS, or the rules reject it as an update.
  if (res.status === 409) return 'duplicate'
  throw new SaveError(res.status)
}

/** SHA-256 hex of a string, used as a stable, non-revealing waitlist doc id. */
export async function sha256(text: string): Promise<string> {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text))
  return Array.from(new Uint8Array(buf), (b) => b.toString(16).padStart(2, '0')).join('')
}

/** Build a mailto: link, used as a fallback when a save can't complete. */
export const mailto = (to: string, subject: string, body: string) =>
  `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

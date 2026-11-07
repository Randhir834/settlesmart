/**
 * Site-wide settings. Edit these before going live.
 */
export const site = {
  name: 'Settsmartly',
  url: 'https://settsmartly.com',
  tagline: 'Split. Track. Settle. Smartly.',
  // Replace with the real inboxes before publishing.
  supportEmail: 'support@settsmartly.com',
  businessEmail: 'hello@settsmartly.com',
  linkedin: 'https://www.linkedin.com/company/settsmartly/about/',
  // Set once the app's web login exists; until then "Log In" shows a pre-launch page.
  appLoginUrl: '' as string,
  // Date shown on the legal pages.
  legalUpdated: '7 November 2026',
}

/**
 * Public web config of the `settsmartly` Firebase project (same as the mobile app).
 * These values are not secrets; Firestore security rules control access.
 */
export const firebaseConfig = {
  apiKey: (import.meta.env.VITE_FIREBASE_API_KEY as string | undefined) || 'AIzaSyC42pvS8qVQrMpiFBcrqJJq53EcVIjk014',
  projectId: (import.meta.env.VITE_FIREBASE_PROJECT_ID as string | undefined) || 'settsmartly',
}

/** Google Analytics 4 measurement ID (G-XXXXXXX). Analytics loads only when this is set. */
export const gaMeasurementId = (import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined) || ''

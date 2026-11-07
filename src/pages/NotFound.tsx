import { Link } from 'react-router-dom'
import PageMeta from '../components/PageMeta'
import { AppIcon } from '../components/Logo'

const NotFound = () => (
  <>
    <PageMeta title="Page not found – Settsmartly" description="The page you're looking for doesn't exist." path="/404" />
    <section className="container-site flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <AppIcon className="mb-6 h-20 w-20 drop-shadow-lg" />
      <p className="amount font-display text-6xl font-extrabold text-brand-700">404</p>
      <h1 className="mt-4 text-3xl font-extrabold">This page doesn't add up</h1>
      <p className="mt-3 text-ink-600">The page you're looking for doesn't exist or has moved.</p>
      <Link to="/" className="btn-primary mt-8">
        Back to home
      </Link>
    </section>
  </>
)

export default NotFound

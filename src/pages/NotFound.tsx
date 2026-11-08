import { Link } from 'react-router-dom'
import PageMeta from '../components/PageMeta'

const NotFound = () => (
  <>
    <PageMeta path="/404" />
    <section className="container-site flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <p className="amount font-display text-6xl font-bold text-brand-200">404</p>
      <h1 className="mt-4 text-3xl font-bold">This page doesn’t add up</h1>
      <p className="mt-3 max-w-md text-ink-600">The page you were looking for doesn’t exist, or it has moved. Try one of these instead:</p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link to="/" className="btn-primary">
          Go to the home page
        </Link>
        <Link to="/guides" className="btn-secondary">
          Read the guides
        </Link>
      </div>
    </section>
  </>
)

export default NotFound

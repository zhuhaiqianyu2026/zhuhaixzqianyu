import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import Knowledge from './pages/Knowledge'
import KnowledgeArticle from './pages/KnowledgeArticle'
import Guide from './pages/Guide'
import About from './pages/About'
import Cases from './pages/Cases'
import CaseDetail from './pages/CaseDetail'
import Contact from './pages/Contact'
import FAQ from './pages/FAQ'
import Partner from './pages/Partner'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import SitemapPage from './pages/SitemapPage'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/knowledge" element={<Knowledge />} />
        <Route path="/knowledge/:slug" element={<KnowledgeArticle />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/about" element={<About />} />
        <Route path="/cases" element={<Cases />} />
        <Route path="/cases/:slug" element={<CaseDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/sitemap" element={<SitemapPage />} />
      </Route>
    </Routes>
  )
}

export default App

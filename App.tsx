import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./pages/Home"));
const Services = lazy(() => import("./pages/Services"));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail"));
const Knowledge = lazy(() => import("./pages/Knowledge"));
const ArticleDetail = lazy(() => import("./pages/ArticleDetail"));
const Guide = lazy(() => import("./pages/Guide"));
const About = lazy(() => import("./pages/About"));
const Cases = lazy(() => import("./pages/Cases"));
const CaseDetail = lazy(() => import("./pages/CaseDetail"));
const Contact = lazy(() => import("./pages/Contact"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Partner = lazy(() => import("./pages/Partner"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const SitemapPage = lazy(() => import("./pages/SitemapPage"));

function LoadingFallback() {
  return (
    <div className="min-h-screen bg-[#0A0A0F] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-8 h-8 border-2 border-[#4A7CFF] border-t-transparent rounded-full animate-spin" />
        <p className="text-[#8A8A9A] text-sm">加载中...</p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/knowledge" element={<Knowledge />} />
        <Route path="/knowledge/:slug" element={<ArticleDetail />} />
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
      </Routes>
    </Suspense>
  );
}

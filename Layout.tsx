import { useEffect } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { SchemaInjector } from "./SchemaInjector";
import { websiteSchema, organizationSchema } from "@/lib/schemaData";
import type { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  schemas?: Array<Record<string, unknown>>;
}

export function Layout({ children, schemas }: LayoutProps) {
  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const defaultSchemas = [websiteSchema, organizationSchema];
  const allSchemas = schemas ? [...defaultSchemas, ...schemas] : defaultSchemas;

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-[#F0F0F5] font-sans">
      <SchemaInjector schemas={allSchemas} />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

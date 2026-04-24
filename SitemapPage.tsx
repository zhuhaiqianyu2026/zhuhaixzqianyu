import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { GlassCard } from "@/components/GlassCard";
import { SEOMeta } from "@/components/SEOMeta";
import { SchemaInjector } from "@/components/SchemaInjector";
import { seoConfig } from "@/lib/seoConfig";
import { getBreadcrumbSchema } from "@/lib/schemaData";
import { Home, Briefcase, BookOpen, Users, FileText } from "lucide-react";

const sitemapSections = [
  {
    title: "核心页面",
    icon: Home,
    links: [
      { label: "首页", path: "/" },
      { label: "服务方案", path: "/services" },
      { label: "客户案例", path: "/cases" },
      { label: "融资知识", path: "/knowledge" },
      { label: "融资指南", path: "/guide" },
      { label: "关于我们", path: "/about" },
      { label: "联系我们", path: "/contact" },
      { label: "常见问题", path: "/faq" },
    ],
  },
  {
    title: "服务详情",
    icon: Briefcase,
    links: [
      { label: "银企精准匹配贷（Pro系列）", path: "/services/yinqi-pipei-dai" },
      { label: "过桥垫资速通版（Max系列）", path: "/services/guoqiao-dianzi" },
      { label: "债务重组优化方案（Ultra系列）", path: "/services/zhaiwu-chongzu" },
    ],
  },
  {
    title: "客户案例",
    icon: Users,
    links: [
      { label: "国企员工20万消费贷案例", path: "/cases/guoqi-yuangong-xiaofei-dai" },
      { label: "餐饮个体户30万经营贷案例", path: "/cases/canyin-getihu-jingying-dai" },
    ],
  },
  {
    title: "融资知识",
    icon: BookOpen,
    links: [
      { label: "融资知识中心", path: "/knowledge" },
      { label: "珠海助贷避坑指南", path: "/knowledge/zhuhai-zhudai-bikeng" },
    ],
  },
  {
    title: "其他页面",
    icon: FileText,
    links: [
      { label: "合作银行", path: "/partner" },
      { label: "隐私政策", path: "/privacy" },
      { label: "使用条款", path: "/terms" },
      { label: "网站地图", path: "/sitemap" },
    ],
  },
];

export default function SitemapPage() {
  return (
    <>
      <SEOMeta config={seoConfig.sitemap} />
      <SchemaInjector schemas={[getBreadcrumbSchema([
        { name: "首页", url: "https://www.qianyuzhudai.com/" },
        { name: "网站地图", url: "https://www.qianyuzhudai.com/sitemap" },
      ])]} />
      <Layout>
        <section className="pt-32 pb-24">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-3xl sm:text-4xl font-medium mb-4">
                网站<span className="text-[#4A7CFF]">地图</span>
              </h1>
              <p className="text-[#8A8A9A] max-w-xl mx-auto">
                快速导航至乾宇咨询全站所有页面
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sitemapSections.map((section) => (
                <GlassCard key={section.title} className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <section.icon className="w-5 h-5 text-[#4A7CFF]" />
                    <h2 className="text-lg font-medium">{section.title}</h2>
                  </div>
                  <ul className="space-y-2">
                    {section.links.map((link) => (
                      <li key={link.path}>
                        <Link
                          to={link.path}
                          className="text-[#8A8A9A] hover:text-[#4A7CFF] transition-colors text-sm flex items-center gap-2"
                        >
                          <span className="w-1 h-1 rounded-full bg-[#8A8A9A]/50" />
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

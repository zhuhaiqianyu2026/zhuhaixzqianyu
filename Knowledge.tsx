import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { GlassCard } from "@/components/GlassCard";
import { SEOMeta } from "@/components/SEOMeta";
import { SchemaInjector } from "@/components/SchemaInjector";
import { seoConfig } from "@/lib/seoConfig";
import { getBreadcrumbSchema } from "@/lib/schemaData";
import { Calendar, Tag } from "lucide-react";

const articles = [
  {
    title: "2025珠海助贷避坑指南：正规助贷公司怎么选？",
    desc: "揭秘珠海助贷行业常见陷阱，教你如何识别正规助贷公司。从合规标准、收费透明、服务流程等维度，为您提供专业避坑建议。",
    image: "/images/knowledge-1.jpg",
    link: "/knowledge/zhuhai-zhudai-bikeng",
    date: "2025-01-15",
    category: "避坑指南",
    readTime: "8分钟",
  },
  {
    title: "珠海银行贷款政策全解读：2025年最新版",
    desc: "深度解读珠海地区各大银行最新贷款政策，包括利率变动、审批条件、放款时效等关键信息，助您做出最优融资决策。",
    image: "/images/knowledge-2.jpg",
    link: "/knowledge",
    date: "2025-01-10",
    category: "政策解读",
    readTime: "12分钟",
  },
  {
    title: "珠海个体户经营贷申请全攻略",
    desc: "针对珠海个体户的经营贷申请指南，从资质准备到银行选择，手把手教你成功获批经营贷，解决资金周转难题。",
    image: "/images/knowledge-3.jpg",
    link: "/knowledge",
    date: "2025-01-05",
    category: "贷款攻略",
    readTime: "10分钟",
  },
  {
    title: "珠海房产抵押贷款：利率对比与申请技巧",
    desc: "详细对比珠海各大银行房产抵押贷款利率，分享提高通过率的专业技巧，帮助您以最低成本获得最大额度。",
    image: "/images/service-pro.jpg",
    link: "/knowledge",
    date: "2024-12-28",
    category: "贷款攻略",
    readTime: "15分钟",
  },
  {
    title: "债务重组全解析：什么情况下需要债务优化？",
    desc: "全面了解债务重组的适用场景、操作流程和注意事项，帮助高负债人群找到最优的债务解决方案。",
    image: "/images/service-ultra.jpg",
    link: "/knowledge",
    date: "2024-12-20",
    category: "债务优化",
    readTime: "10分钟",
  },
  {
    title: "过桥垫资知识科普：安全使用短期融资工具",
    desc: "科普过桥垫资的基本概念、适用场景、风险控制等知识，帮助您安全高效地使用这一短期融资工具。",
    image: "/images/service-max.jpg",
    link: "/knowledge",
    date: "2024-12-15",
    category: "融资知识",
    readTime: "8分钟",
  },
];

const categories = ["全部", "避坑指南", "政策解读", "贷款攻略", "债务优化", "融资知识"];

export default function Knowledge() {
  return (
    <>
      <SEOMeta config={seoConfig.knowledge} />
      <SchemaInjector schemas={[getBreadcrumbSchema([
        { name: "首页", url: "https://www.qianyuzhudai.com/" },
        { name: "融资知识", url: "https://www.qianyuzhudai.com/knowledge" },
      ])]} />
      <Layout>
        <section className="pt-32 pb-16">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-3xl sm:text-4xl font-medium mb-4">
                融资<span className="text-[#4A7CFF]">知识中心</span>
              </h1>
              <p className="text-[#8A8A9A] max-w-2xl mx-auto text-lg">
                专业、可信赖的融资知识，助您做出明智决策
              </p>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`px-4 py-2 rounded-full text-sm transition-all ${
                    cat === "全部"
                      ? "bg-[#4A7CFF] text-white"
                      : "bg-white/[0.04] text-[#8A8A9A] hover:bg-white/[0.08] hover:text-[#F0F0F5]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article) => (
                <Link key={article.title} to={article.link} className="group">
                  <GlassCard className="h-full overflow-hidden">
                    <div className="relative h-44 overflow-hidden">
                      <img
                        src={article.image}
                        alt={`zhuhai-zhudai-knowledge-${article.title}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] to-transparent" />
                      <span className="absolute top-3 left-3 px-2 py-1 rounded-full bg-[#4A7CFF]/20 text-[#4A7CFF] text-xs font-medium">
                        {article.category}
                      </span>
                    </div>
                    <div className="p-5">
                      <h3 className="text-base font-medium mb-2 group-hover:text-[#4A7CFF] transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-[#8A8A9A] text-sm leading-relaxed mb-4 line-clamp-2">
                        {article.desc}
                      </p>
                      <div className="flex items-center gap-4 text-[#8A8A9A]/60 text-xs">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {article.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Tag className="w-3 h-3" />
                          {article.readTime}
                        </span>
                      </div>
                    </div>
                  </GlassCard>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

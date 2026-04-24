import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { GlassCard } from "@/components/GlassCard";
import { SEOMeta } from "@/components/SEOMeta";
import { SchemaInjector } from "@/components/SchemaInjector";
import { seoConfig } from "@/lib/seoConfig";
import { getBreadcrumbSchema, getArticleSchema } from "@/lib/schemaData";
import { ArrowRight, Calendar, User, Tag } from "lucide-react";

const articlesData: Record<string, {
  config: typeof seoConfig.bikeng;
  title: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  content: Array<{ type: string; title?: string; text: string }>;
}> = {
  "zhuhai-zhudai-bikeng": {
    config: seoConfig.bikeng,
    title: "2025珠海助贷避坑指南：正规助贷公司怎么选？",
    date: "2025-01-15",
    category: "避坑指南",
    readTime: "8分钟",
    image: "/images/knowledge-1.jpg",
    content: [
      { type: "intro", text: "在珠海，随着助贷行业的快速发展，越来越多的个人和企业选择通过助贷公司来申请贷款。然而，市场上鱼龙混杂，正规助贷公司与黑中介并存，如何辨别、如何选择成为了许多借款人的首要难题。本文将从专业角度为您揭秘珠海助贷行业的常见陷阱，并提供选择正规助贷公司的实用标准。" },
      { type: "heading", title: "一、珠海助贷行业常见陷阱", text: "" },
      { type: "paragraph", text: "在珠海助贷市场中，借款人常常会遇到以下几种陷阱：" },
      { type: "paragraph", text: "**1. '包过'承诺陷阱**：一些不良中介为了吸引客户，会承诺'100%下款'、'无视征信'等，这些都是不实的宣传。正规银行和金融机构都有严格的审批流程，不存在'包过'的情况。" },
      { type: "paragraph", text: "**2. 前期收费陷阱**：黑中介往往会在贷款审批前就要求支付各种名目的费用，如'保证金'、'审核费'、'通道费'等。正规助贷公司通常是在贷款成功后才收取服务费。" },
      { type: "paragraph", text: "**3. 利率欺诈陷阱**：部分中介会故意隐瞒真实利率，或者将月利率说成是年利率，导致借款人实际承担的成本远高于预期。" },
      { type: "paragraph", text: "**4. 个人信息泄露风险**：一些无资质的中介会将客户的个人信息出售给第三方，造成严重的隐私泄露和财产损失风险。" },
      { type: "heading", title: "二、正规助贷公司的六大标准", text: "" },
      { type: "paragraph", text: "那么，如何判断一家助贷公司是否正规呢？以下六大标准供您参考：" },
      { type: "paragraph", text: "**1. 合法营业执照**：正规助贷公司必须持有工商部门颁发的营业执照，经营范围应包含'信息咨询'、'贷款咨询'等相关业务。您可以通过国家企业信用信息公示系统查询企业信息。" },
      { type: "paragraph", text: "**2. 固定办公场所**：正规公司都有固定的办公地址，您可以实地考察。如果对方只愿意线上沟通，或者办公场所频繁变动，需要提高警惕。" },
      { type: "paragraph", text: "**3. 透明的收费模式**：正规助贷公司会在签约前明确告知所有费用，包括服务费的标准和收取方式。乾宇咨询承诺：透明收费，无隐性费用，所有收费项目均在合同中明确列示。" },
      { type: "paragraph", text: "**4. 银行合作关系**：正规助贷公司与多家银行建立了正式合作关系，能够为客户提供多种贷款产品选择。您可以要求查看合作协议或咨询银行核实。" },
      { type: "paragraph", text: "**5. 专业的服务团队**：正规公司拥有专业的顾问团队，能够根据客户的具体情况提供个性化的融资方案，而不是简单地推销某一产品。" },
      { type: "paragraph", text: "**6. 良好的口碑和案例**：通过查看客户评价、成功案例等方式，了解公司的服务质量和专业水平。" },
      { type: "heading", title: "三、乾宇咨询的合规实践", text: "" },
      { type: "paragraph", text: "作为珠海本地正规助贷服务商，乾宇咨询始终坚持合规经营、透明服务的理念：" },
      { type: "paragraph", text: "• 持有合法营业执照，经营地址固定可查（珠海市香洲吉大景园路3号309室）" },
      { type: "paragraph", text: "• 与珠海20+家银行建立正式合作关系" },
      { type: "paragraph", text: "• 所有费用透明公开，签约前明确告知" },
      { type: "paragraph", text: "• 专业顾问一对一服务，量身定制融资方案" },
      { type: "paragraph", text: "• 累计服务5000+客户，好评率99%" },
      { type: "heading", title: "四、结语", text: "" },
      { type: "paragraph", text: "选择正规助贷公司是保障您资金安全和合法权益的第一步。希望通过本文的分享，能够帮助您在珠海助贷市场中做出明智的选择。如果您有任何关于贷款咨询的需求，欢迎随时联系乾宇咨询，我们将竭诚为您提供专业、合规、透明的融资服务。" },
    ],
  },
};

export default function ArticleDetail() {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? articlesData[slug] : null;

  if (!article) {
    return (
      <Layout>
        <div className="pt-32 pb-24 text-center">
          <h1 className="text-2xl mb-4">文章未找到</h1>
          <Link to="/knowledge" className="text-[#4A7CFF]">返回知识中心</Link>
        </div>
      </Layout>
    );
  }

  const articleSchema = getArticleSchema(
    article.title,
    article.content[0].text,
    article.date,
    `https://www.qianyuzhudai.com/knowledge/${slug}`
  );
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "首页", url: "https://www.qianyuzhudai.com/" },
    { name: "融资知识", url: "https://www.qianyuzhudai.com/knowledge" },
    { name: article.title, url: `https://www.qianyuzhudai.com/knowledge/${slug}` },
  ]);

  return (
    <>
      <SEOMeta config={article.config} />
      <SchemaInjector schemas={[breadcrumbSchema, articleSchema]} />
      <Layout schemas={[articleSchema]}>
        <section className="pt-32 pb-24">
          <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-[#8A8A9A] mb-6">
              <Link to="/" className="hover:text-[#4A7CFF] transition-colors">首页</Link>
              <ArrowRight className="w-3 h-3" />
              <Link to="/knowledge" className="hover:text-[#4A7CFF] transition-colors">融资知识</Link>
              <ArrowRight className="w-3 h-3" />
              <span className="text-[#F0F0F5]">{article.title}</span>
            </div>

            {/* Header */}
            <GlassCard className="overflow-hidden mb-8">
              <div className="relative h-56 sm:h-72 overflow-hidden">
                <img
                  src={article.image}
                  alt={`zhuhai-zhudai-knowledge-${article.title}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] to-transparent" />
              </div>
              <div className="p-6 sm:p-8">
                <span className="inline-block px-3 py-1 rounded-full bg-[#4A7CFF]/20 text-[#4A7CFF] text-xs font-medium mb-4">
                  {article.category}
                </span>
                <h1 className="text-2xl sm:text-3xl font-medium mb-4">{article.title}</h1>
                <div className="flex items-center gap-4 text-[#8A8A9A] text-sm">
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    乾宇咨询
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {article.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Tag className="w-4 h-4" />
                    {article.readTime}
                  </span>
                </div>
              </div>
            </GlassCard>

            {/* Content */}
            <div className="space-y-6">
              {article.content.map((block, i) => {
                if (block.type === "heading") {
                  return (
                    <h2 key={i} className="text-xl sm:text-2xl font-medium text-[#F0F0F5] mt-10">
                      {block.title}
                    </h2>
                  );
                }
                return (
                  <p
                    key={i}
                    className={`text-[#8A8A9A] leading-relaxed ${
                      block.type === "intro" ? "text-base font-medium text-[#F0F0F5]/90" : ""
                    }`}
                    dangerouslySetInnerHTML={{ __html: block.text.replace(/\*\*(.*?)\*\*/g, "<strong class='text-[#F0F0F5]'>$1</strong>") }}
                  />
                );
              })}
            </div>

            {/* CTA */}
            <GlassCard className="mt-12 p-6 sm:p-8 text-center">
              <h3 className="text-xl font-medium mb-3">需要专业贷款咨询？</h3>
              <p className="text-[#8A8A9A] mb-6">
                乾宇咨询为您提供免费的一对一贷款咨询服务，助您找到最适合的融资方案。
              </p>
              <a
                href="tel:13676065240"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#4A7CFF] hover:bg-[#3A6CEF] text-white rounded-full font-medium transition-all"
              >
                免费咨询：13676065240
              </a>
            </GlassCard>
          </div>
        </section>
      </Layout>
    </>
  );
}

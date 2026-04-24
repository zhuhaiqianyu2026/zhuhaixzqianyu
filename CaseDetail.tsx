import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { GlassCard } from "@/components/GlassCard";
import { SEOMeta } from "@/components/SEOMeta";
import { SchemaInjector } from "@/components/SchemaInjector";
import { seoConfig } from "@/lib/seoConfig";
import { getBreadcrumbSchema, getCaseStudySchema } from "@/lib/schemaData";
import { ArrowRight, TrendingUp, Percent, Clock, CheckCircle, Phone, Star, Target } from "lucide-react";

const casesData: Record<string, {
  config: typeof seoConfig.caseGuoqi;
  title: string;
  customer: string;
  industry: string;
  painPoint: string;
  solution: string[];
  results: Array<{ label: string; value: string; icon: typeof TrendingUp }>;
  image: string;
  relatedService: string;
  relatedServiceLink: string;
}> = {
  "guoqi-yuangong-xiaofei-dai": {
    config: seoConfig.caseGuoqi,
    title: "国企员工20万装修消费贷",
    customer: "张先生（化名）",
    industry: "珠海某国企",
    painPoint: "张先生购置新房后需要进行装修，预计装修费用20万。手头资金不足，自行咨询了几家银行，均因信用贷额度限制（最高10-15万）无法满足需求。同时担心多笔申请会影响征信。",
    solution: [
      "通过客户画像分析，确认客户国企员工身份，月收入稳定，征信良好",
      "匹配某国有银行针对优质单位员工的专项信用消费贷产品",
      "协助客户准备收入证明、在职证明等材料",
      "专人跟进银行审批流程，加快审批速度",
      "3个工作日内完成审批放款",
    ],
    results: [
      { label: "放款金额", value: "20万", icon: TrendingUp },
      { label: "年化利率", value: "3.2%", icon: Percent },
      { label: "放款时效", value: "3天", icon: Clock },
      { label: "月供金额", value: "约3700元", icon: Target },
    ],
    image: "/images/case-1.jpg",
    relatedService: "银企精准匹配贷",
    relatedServiceLink: "/services/yinqi-pipei-dai",
  },
  "canyin-getihu-jingying-dai": {
    config: seoConfig.caseCanyin,
    title: "餐饮个体户30万经营贷",
    customer: "李先生（化名）",
    industry: "珠海餐饮行业",
    painPoint: "李先生在珠海经营一家餐饮店已有5年，因店面扩张需要30万资金。由于没有完整的财务报表，且之前从未申请过贷款，担心无法通过银行审批。",
    solution: [
      "通过经营流水和实际营收评估客户经营状况",
      "匹配适合个体户的经营贷产品，降低对财务报表的要求",
      "协助客户整理营业执照、经营流水、租赁合同等材料",
      "提供贷款申请指导，帮助客户提高通过率",
      "5个工作日内完成审批放款",
    ],
    results: [
      { label: "放款金额", value: "30万", icon: TrendingUp },
      { label: "年化利率", value: "3.8%", icon: Percent },
      { label: "放款时效", value: "5天", icon: Clock },
      { label: "还款期限", value: "3年", icon: Target },
    ],
    image: "/images/case-2.jpg",
    relatedService: "银企精准匹配贷",
    relatedServiceLink: "/services/yinqi-pipei-dai",
  },
};

export default function CaseDetail() {
  const { slug } = useParams<{ slug: string }>();
  const caseData = slug ? casesData[slug] : null;

  if (!caseData) {
    return (
      <Layout>
        <div className="pt-32 pb-24 text-center">
          <h1 className="text-2xl mb-4">案例未找到</h1>
          <Link to="/cases" className="text-[#4A7CFF]">返回案例列表</Link>
        </div>
      </Layout>
    );
  }

  const caseSchema = getCaseStudySchema(
    caseData.title,
    caseData.painPoint,
    "2025-01-15"
  );
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "首页", url: "https://www.qianyuzhudai.com/" },
    { name: "客户案例", url: "https://www.qianyuzhudai.com/cases" },
    { name: caseData.title, url: `https://www.qianyuzhudai.com/cases/${slug}` },
  ]);

  return (
    <>
      <SEOMeta config={caseData.config} />
      <SchemaInjector schemas={[breadcrumbSchema, caseSchema]} />
      <Layout schemas={[caseSchema]}>
        <section className="pt-32 pb-24">
          <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-[#8A8A9A] mb-6">
              <Link to="/" className="hover:text-[#4A7CFF] transition-colors">首页</Link>
              <ArrowRight className="w-3 h-3" />
              <Link to="/cases" className="hover:text-[#4A7CFF] transition-colors">客户案例</Link>
              <ArrowRight className="w-3 h-3" />
              <span className="text-[#F0F0F5]">{caseData.title}</span>
            </div>

            {/* Header */}
            <GlassCard className="overflow-hidden mb-8">
              <div className="relative h-56 sm:h-72 overflow-hidden">
                <img
                  src={caseData.image}
                  alt={`zhuhai-zhudai-case-${caseData.title}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] to-transparent" />
              </div>
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-2 mb-3">
                  <Star className="w-4 h-4 text-[#D4A843]" />
                  <span className="text-[#4A7CFF] text-xs font-medium">成功案例</span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-medium mb-3">{caseData.title}</h1>
                <div className="flex flex-wrap gap-4 text-[#8A8A9A] text-sm">
                  <span>客户：{caseData.customer}</span>
                  <span>行业：{caseData.industry}</span>
                </div>
              </div>
            </GlassCard>

            {/* Pain Point */}
            <GlassCard className="p-6 sm:p-8 mb-6">
              <h2 className="text-xl font-medium mb-4">核心痛点</h2>
              <p className="text-[#8A8A9A] leading-relaxed">{caseData.painPoint}</p>
            </GlassCard>

            {/* Solution */}
            <GlassCard className="p-6 sm:p-8 mb-6">
              <h2 className="text-xl font-medium mb-4">乾宇解决方案</h2>
              <div className="space-y-3">
                {caseData.solution.map((step, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#4A7CFF] shrink-0 mt-0.5" />
                    <span className="text-[#F0F0F5]/90 text-sm">{step}</span>
                  </div>
                ))}
              </div>
            </GlassCard>

            {/* Results */}
            <GlassCard className="p-6 sm:p-8 mb-6">
              <h2 className="text-xl font-medium mb-6 text-center">量化成果</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {caseData.results.map((r) => (
                  <div key={r.label} className="text-center">
                    <r.icon className="w-6 h-6 text-[#4A7CFF] mx-auto mb-2" />
                    <div className="text-xl font-medium text-[#F0F0F5] mb-1">{r.value}</div>
                    <div className="text-[#8A8A9A] text-xs">{r.label}</div>
                  </div>
                ))}
              </div>
            </GlassCard>

            {/* Related Service */}
            <GlassCard className="p-6 sm:p-8 text-center mb-8">
              <p className="text-[#8A8A9A] mb-4">
                此案例使用了我们的 <span className="text-[#4A7CFF] font-medium">{caseData.relatedService}</span> 服务
              </p>
              <Link
                to={caseData.relatedServiceLink}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#4A7CFF] hover:bg-[#3A6CEF] text-white rounded-full font-medium transition-all"
              >
                了解该服务 <ArrowRight className="w-4 h-4" />
              </Link>
            </GlassCard>

            {/* CTA */}
            <GlassCard className="p-6 sm:p-8 text-center">
              <h3 className="text-xl font-medium mb-3">您也有类似的融资需求？</h3>
              <p className="text-[#8A8A9A] mb-6">
                联系我们，获取免费的融资方案评估
              </p>
              <a
                href="tel:13676065240"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#4A7CFF] hover:bg-[#3A6CEF] text-white rounded-full font-medium transition-all"
              >
                <Phone className="w-4 h-4" />
                免费咨询：13676065240
              </a>
            </GlassCard>
          </div>
        </section>
      </Layout>
    </>
  );
}

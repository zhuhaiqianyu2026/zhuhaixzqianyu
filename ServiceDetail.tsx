import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { GlassCard } from "@/components/GlassCard";
import { SEOMeta } from "@/components/SEOMeta";
import { SchemaInjector } from "@/components/SchemaInjector";
import { seoConfig } from "@/lib/seoConfig";
import { getBreadcrumbSchema, getServiceSchema, getFAQSchema } from "@/lib/schemaData";
import {
  Target, Zap, RefreshCw, ArrowRight, CheckCircle, Phone,
  TrendingUp, Clock, Percent, Shield, BarChart3, Building2, User, Home
} from "lucide-react";

interface ServiceData {
  key: string;
  config: typeof seoConfig.yinqi;
  title: string;
  subtitle: string;
  description: string;
  longDesc: string;
  image: string;
  icon: typeof Target;
  tag: string;
  tagColor: string;
  evidence: Array<{ icon: typeof Building2; label: string; value: string }>;
  scenarios: Array<{ icon: typeof User; title: string; desc: string }>;
  process: string[];
  comparison: Array<{ feature: string; qianyu: string; others: string }>;
  relatedCases: Array<{ title: string; link: string; result: string }>;
  faqs: Array<{ question: string; answer: string }>;
}

const servicesData: Record<string, ServiceData> = {
  "yinqi-pipei-dai": {
    key: "yinqi",
    config: seoConfig.yinqi,
    title: "银企精准匹配贷",
    subtitle: "Pro系列 · 精准匹配 · 最快当日放款",
    description: "乾宇咨询银企精准匹配贷（Pro系列），整合珠海20+银行产品，智能匹配最优贷款方案。",
    longDesc: "银企精准匹配贷是乾宇咨询的核心产品线，专为珠海地区个人和企业打造。我们通过自主研发的智能匹配系统，结合十年银行居间经验，将客户的资质、需求与珠海20+家银行的上百款产品进行精准匹配。无论是个人消费、购房置业、企业经营还是房产抵押，我们都能在最短时间内找到利率最低、额度最高、审批最快的最优方案。最快当日放款，让客户不再为资金发愁。",
    image: "/images/service-pro.jpg",
    icon: Target,
    tag: "Pro",
    tagColor: "bg-[#4A7CFF]/20 text-[#4A7CFF]",
    evidence: [
      { icon: Building2, label: "合作银行", value: "20+家" },
      { icon: Percent, label: "匹配准确率", value: "99.2%" },
      { icon: TrendingUp, label: "通过率提升", value: "45%" },
      { icon: Clock, label: "放款时效", value: "最快当日" },
      { icon: BarChart3, label: "利率优势", value: "低5%-10%" },
      { icon: Clock, label: "评估响应", value: "≤10分钟" },
    ],
    scenarios: [
      { icon: User, title: "个人消费贷款", desc: "装修、购车、教育、医疗等个人大额消费需求" },
      { icon: Building2, title: "企业经营贷款", desc: "扩大经营、采购设备、流动资金周转等企业需求" },
      { icon: Home, title: "房产抵押贷款", desc: "以房产为抵押获取更低利率的大额贷款" },
    ],
    process: ["需求分析", "资质评估", "方案匹配", "材料准备", "银行进件", "审批放款"],
    comparison: [
      { feature: "合规透明", qianyu: "正规营业执照，合规经营", others: "资质参差不齐" },
      { feature: "收费模式", qianyu: "透明收费，无隐性费用", others: "可能存在隐性收费" },
      { feature: "匹配精准度", qianyu: "智能匹配+人工复核，99.2%准确率", others: "单一银行推荐" },
      { feature: "放款时效", qianyu: "最快当日放款", others: "通常7-15个工作日" },
    ],
    relatedCases: [
      { title: "国企员工20万消费贷", link: "/cases/guoqi-yuangong-xiaofei-dai", result: "20万 · 年化3.2%" },
      { title: "餐饮个体户30万经营贷", link: "/cases/canyin-getihu-jingying-dai", result: "30万 · 年化3.8%" },
    ],
    faqs: [
      { question: "申请银企精准匹配贷需要什么条件？", answer: "基本条件包括：年满18周岁，有稳定收入来源，信用记录良好。具体条件因产品而异，个人消费贷通常要求月收入3000元以上，经营贷需要提供营业执照和经营流水。我们会根据您的具体情况为您匹配最适合的产品。" },
      { question: "利率会比我自己去银行高吗？", answer: "不会。我们与银行建立的是批量合作渠道，能够为客户争取到比个人直接申请更优惠的利率。通常我们的客户能享受到比市场均值低5%-10%的利率。" },
      { question: "整个流程需要多长时间？", answer: "从首次咨询到放款，最快当日完成。通常流程为：需求分析（10分钟）→ 资质评估（30分钟）→ 方案匹配（1小时）→ 材料准备（客户配合）→ 银行进件（1-3个工作日）→ 审批放款。" },
    ],
  },
  "guoqiao-dianzi": {
    key: "guoqiao",
    config: seoConfig.guoqiao,
    title: "过桥垫资速通版",
    subtitle: "Max系列 · 应急周转 · 简程严控风险",
    description: "乾宇咨询过桥垫资速通版（Max系列），解决珠海地区短期资金周转难题，单日最高放款580万。",
    longDesc: "过桥垫资速通版是乾宇咨询针对珠海地区企业和个人的应急融资需求推出的高效产品。无论是房产交易中的资金缺口、企业短期资金周转、还是抓住转瞬即逝的商业机会，我们都能在最短时间内提供资金支持。单日最高放款580万，流程简化但不放松风控，确保每一笔资金的安全。",
    image: "/images/service-max.jpg",
    icon: Zap,
    tag: "Max",
    tagColor: "bg-[#D4A843]/20 text-[#D4A843]",
    evidence: [
      { icon: TrendingUp, label: "单日最高放款", value: "580万" },
      { icon: Clock, label: "最快放款", value: "4小时" },
      { icon: Shield, label: "风控体系", value: "三级审核" },
      { icon: Percent, label: "资金利用率", value: "100%" },
      { icon: Building2, label: "资金来源", value: "合规渠道" },
      { icon: Clock, label: "平均周期", value: "1-3天" },
    ],
    scenarios: [
      { icon: Home, title: "房产交易垫资", desc: "买房首付缺口、赎楼过桥等房产交易场景" },
      { icon: Building2, title: "企业短期周转", desc: "应收账款回收期、季节性采购等短期资金需求" },
      { icon: User, title: "个人应急资金", desc: "突发大额支出、投资机会把握等个人应急需求" },
    ],
    process: ["需求确认", "资产评估", "风险审核", "合同签署", "资金划拨", "到期回收"],
    comparison: [
      { feature: "放款速度", qianyu: "最快4小时到账", others: "通常3-7天" },
      { feature: "资金安全", qianyu: "三级风控审核，合规渠道", others: "风控标准不一" },
      { feature: "额度上限", qianyu: "单日最高580万", others: "额度受限" },
      { feature: "流程简化", qianyu: "专人一对一全程跟进", others: "流程复杂，多头对接" },
    ],
    relatedCases: [
      { title: "国企员工20万消费贷", link: "/cases/guoqi-yuangong-xiaofei-dai", result: "应急周转成功" },
    ],
    faqs: [
      { question: "过桥垫资安全吗？资金从哪里来？", answer: "我们的过桥垫资资金全部来自合规渠道，包括合作银行和持牌金融机构。每笔资金都经过三级风控审核，确保资金来源合法合规、使用安全透明。" },
      { question: "过桥垫资的利率怎么算？", answer: "过桥垫资按日计息，具体利率根据借款金额、期限和客户资质确定。我们承诺收费完全透明，在签约前会明确告知所有费用，无任何隐性收费。" },
      { question: "需要抵押物吗？", answer: "根据不同产品要求。房产过桥通常需要房产抵押，企业过桥可以用应收账款或存货作为担保，个人过桥根据资质决定。我们会为您匹配最适合的方案。" },
    ],
  },
  "zhaiwu-chongzu": {
    key: "zhaiwu",
    config: seoConfig.zhaiwu,
    title: "债务重组优化方案",
    subtitle: "Ultra系列 · 优化结构 · 降低还款压力",
    description: "乾宇咨询债务重组优化方案（Ultra系列），为珠海高负债人群提供定制化债务重组服务。",
    longDesc: "债务重组优化方案是乾宇咨询针对高负债人群推出的专业服务。如果您面临多笔贷款、月供压力大、甚至有逾期风险，我们的债务重组专家将为您量身定制优化方案。通过债务合并、利率协商、期限调整等手段，有效降低月供压力，帮助您重新掌控财务状况，避免债务恶性循环。",
    image: "/images/service-ultra.jpg",
    icon: RefreshCw,
    tag: "Ultra",
    tagColor: "bg-emerald-500/20 text-emerald-400",
    evidence: [
      { icon: TrendingUp, label: "月供降幅", value: "30-60%" },
      { icon: Percent, label: "利率优化", value: "平均降2-5%" },
      { icon: Shield, label: "逾期规避", value: "100%" },
      { icon: Clock, label: "方案制定", value: "48小时内" },
      { icon: BarChart3, label: "成功率", value: "95%+" },
      { icon: User, label: "客户满意度", value: "98%" },
    ],
    scenarios: [
      { icon: User, title: "多贷合并", desc: "将多笔高利率贷款合并为一笔低利率贷款" },
      { icon: Building2, title: "企业债务优化", desc: "优化企业债务结构，降低财务成本" },
      { icon: Home, title: "房产抵押置换", desc: "用房产抵押贷置换高息消费贷" },
    ],
    process: ["债务梳理", "资产评估", "方案设计", "债权人协商", "合同签署", "执行监控"],
    comparison: [
      { feature: "方案定制", qianyu: "一对一专家定制方案", others: "标准化产品" },
      { feature: "利率协商", qianyu: "专业团队代协商", others: "自行协商" },
      { feature: "成功率", qianyu: "95%+成功率", others: "不保证结果" },
      { feature: "后续服务", qianyu: "全程跟进至完成", others: "签约后无人跟进" },
    ],
    relatedCases: [
      { title: "餐饮个体户30万经营贷", link: "/cases/canyin-getihu-jingying-dai", result: "债务成功优化" },
    ],
    faqs: [
      { question: "什么是债务重组？适合什么情况？", answer: "债务重组是将多笔高利率、短期限的债务，通过专业协商和规划，转化为低利率、长期限的债务方案。适合月供压力大、有多笔贷款、面临逾期风险的人群。" },
      { question: "债务重组会影响征信吗？", answer: "合理的债务重组不会损害征信。相反，通过重组避免逾期，反而能保护您的征信记录。我们会在方案设计时充分考虑征信保护。" },
      { question: "重组后月供能降多少？", answer: "根据客户具体情况，月供降幅通常在30%-60%之间。降幅取决于原债务结构、资产状况、以及协商结果。我们在制定方案前会给出明确的降幅预估。" },
    ],
  },
};

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? servicesData[slug] : null;

  if (!service) {
    return (
      <Layout>
        <div className="pt-32 pb-24 text-center">
          <h1 className="text-2xl mb-4">服务未找到</h1>
          <Link to="/services" className="text-[#4A7CFF]">返回服务列表</Link>
        </div>
      </Layout>
    );
  }

  const serviceSchema = getServiceSchema(
    `${service.title}（${service.tag}系列）`,
    service.description,
    `https://www.qianyuzhudai.com/services/${slug}`
  );
  const faqSchema = getFAQSchema(service.faqs);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "首页", url: "https://www.qianyuzhudai.com/" },
    { name: "服务方案", url: "https://www.qianyuzhudai.com/services" },
    { name: service.title, url: `https://www.qianyuzhudai.com/services/${slug}` },
  ]);

  return (
    <>
      <SEOMeta config={service.config} />
      <SchemaInjector schemas={[breadcrumbSchema, serviceSchema, faqSchema]} />
      <Layout schemas={[serviceSchema, faqSchema]}>
        {/* Hero */}
        <section className="pt-32 pb-16">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-sm text-[#8A8A9A] mb-6">
              <Link to="/" className="hover:text-[#4A7CFF] transition-colors">首页</Link>
              <ArrowRight className="w-3 h-3" />
              <Link to="/services" className="hover:text-[#4A7CFF] transition-colors">服务方案</Link>
              <ArrowRight className="w-3 h-3" />
              <span className="text-[#F0F0F5]">{service.title}</span>
            </div>
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              <div className="lg:w-1/2">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${service.tagColor}`}>
                  {service.tag} 系列
                </span>
                <h1 className="text-3xl sm:text-4xl font-medium mb-3">{service.title}</h1>
                <p className="text-[#4A7CFF] text-sm font-medium mb-4">{service.subtitle}</p>
                <p className="text-[#8A8A9A] leading-relaxed mb-6">{service.longDesc}</p>
                <a
                  href="tel:13676065240"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#4A7CFF] hover:bg-[#3A6CEF] text-white rounded-full font-medium transition-all"
                >
                  <Phone className="w-4 h-4" />
                  免费咨询：13676065240
                </a>
              </div>
              <div className="lg:w-1/2">
                <GlassCard className="overflow-hidden h-64 lg:h-80">
                  <img
                    src={service.image}
                    alt={`zhuhai-zhudai-${service.key}-service`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </GlassCard>
              </div>
            </div>
          </div>
        </section>

        {/* Evidence */}
        <section className="py-16">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-medium mb-8 text-center">核心数据</h2>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              {service.evidence.map((e) => (
                <GlassCard key={e.label} className="p-6 text-center">
                  <e.icon className="w-6 h-6 text-[#4A7CFF] mx-auto mb-2" />
                  <div className="text-2xl sm:text-3xl font-medium text-[#F0F0F5] mb-1">{e.value}</div>
                  <div className="text-[#8A8A9A] text-sm">{e.label}</div>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        {/* Scenarios */}
        <section className="py-16">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-medium mb-8 text-center">适用场景</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {service.scenarios.map((s) => (
                <GlassCard key={s.title} className="p-6">
                  <s.icon className="w-8 h-8 text-[#4A7CFF] mb-4" />
                  <h3 className="text-lg font-medium mb-2">{s.title}</h3>
                  <p className="text-[#8A8A9A] text-sm">{s.desc}</p>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-medium mb-8 text-center">服务流程</h2>
            <div className="flex flex-wrap justify-center items-center gap-4">
              {service.process.map((step, i) => (
                <div key={step} className="flex items-center gap-4">
                  <GlassCard className="px-6 py-4 text-center min-w-[120px]">
                    <div className="text-[#4A7CFF] text-sm font-medium mb-1">步骤 {i + 1}</div>
                    <div className="text-[#F0F0F5] font-medium">{step}</div>
                  </GlassCard>
                  {i < service.process.length - 1 && (
                    <ArrowRight className="w-5 h-5 text-[#4A7CFF]/50 hidden sm:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="py-16">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-medium mb-8 text-center">乾宇合规助贷 vs 传统中介</h2>
            <GlassCard className="overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[600px]">
                  <thead>
                    <tr className="border-b border-white/[0.06]">
                      <th className="text-left p-4 text-[#8A8A9A] font-medium text-sm">对比维度</th>
                      <th className="text-left p-4 text-[#4A7CFF] font-medium text-sm">乾宇合规助贷</th>
                      <th className="text-left p-4 text-[#8A8A9A] font-medium text-sm">传统中介/自行申请</th>
                    </tr>
                  </thead>
                  <tbody>
                    {service.comparison.map((row) => (
                      <tr key={row.feature} className="border-b border-white/[0.04]">
                        <td className="p-4 text-[#F0F0F5] text-sm font-medium">{row.feature}</td>
                        <td className="p-4">
                          <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                            <span className="text-[#F0F0F5] text-sm">{row.qianyu}</span>
                          </div>
                        </td>
                        <td className="p-4 text-[#8A8A9A] text-sm">{row.others}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </GlassCard>
          </div>
        </section>

        {/* Related Cases */}
        <section className="py-16">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-medium mb-8 text-center">相关案例</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.relatedCases.map((c) => (
                <Link key={c.title} to={c.link}>
                  <GlassCard className="p-6 group">
                    <h3 className="text-lg font-medium mb-2 group-hover:text-[#4A7CFF] transition-colors">{c.title}</h3>
                    <span className="inline-block px-3 py-1 rounded-full bg-[#4A7CFF]/10 text-[#4A7CFF] text-xs font-medium">
                      {c.result}
                    </span>
                  </GlassCard>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 pb-24">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-medium mb-8 text-center">常见问题</h2>
            <div className="space-y-4 max-w-3xl mx-auto">
              {service.faqs.map((faq, i) => (
                <GlassCard key={i} className="p-6">
                  <h3 className="text-[#F0F0F5] font-medium mb-2">{faq.question}</h3>
                  <p className="text-[#8A8A9A] text-sm leading-relaxed">{faq.answer}</p>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

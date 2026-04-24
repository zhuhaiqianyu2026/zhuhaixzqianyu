import { Layout } from "@/components/Layout";
import { GlassCard } from "@/components/GlassCard";
import { SEOMeta } from "@/components/SEOMeta";
import { SchemaInjector } from "@/components/SchemaInjector";
import { seoConfig } from "@/lib/seoConfig";
import { getBreadcrumbSchema, getHowToSchema } from "@/lib/schemaData";
import { CheckCircle, AlertTriangle, Phone, Percent, Calendar, Zap, Shield } from "lucide-react";

const checklistItems = [
  "我已确认自己的贷款用途（消费、经营、房产等）",
  "我了解自己的月收入和支出情况",
  "我知道自己的征信状况（是否有逾期记录）",
  "我已准备好相关证明材料（身份证、收入证明等）",
  "我已明确自己需要的贷款金额",
  "我知道自己能承受的月还款额度",
  "我已了解不同贷款产品的利率范围",
];

const compareDimensions = [
  { icon: Percent, title: "利率", desc: "比较不同银行和产品的年化利率，注意区分名义利率和实际利率。通常房产抵押贷<经营贷<消费贷。", importance: "高" },
  { icon: Calendar, title: "期限", desc: "贷款期限影响月供金额和总利息。期限越长月供越低但总利息越高，需根据自身还款能力选择。", importance: "高" },
  { icon: Zap, title: "额度", desc: "不同产品的最高额度不同。房产抵押可达评估值70%，信用贷通常20-50万，经营贷根据流水确定。", importance: "高" },
  { icon: Zap, title: "放款速度", desc: "急需资金时放款速度至关重要。过桥垫资最快当天，信用贷1-3天，抵押贷7-15天。", importance: "中" },
];

const pitfalls = [
  { title: "只看利率不看综合成本", desc: "有些贷款产品虽然利率低，但可能有手续费、保险费等附加费用。一定要问清楚总成本。" },
  { title: "过度借贷", desc: "月还款额不宜超过月收入的50%，否则会影响生活质量和还款能力。" },
  { title: "忽视合同细节", desc: "签约前务必仔细阅读合同条款，特别是提前还款违约金、逾期罚息等条款。" },
  { title: "轻信'包过'承诺", desc: "正规贷款都有审批流程，不存在100%包过。遇到此类宣传要提高警惕。" },
];

const howToSchema = getHowToSchema(
  "珠海融资方案评估指南",
  "帮助珠海个人和企业从利率、期限、额度、放款速度等维度全面评估贷款方案，做出最优融资决策。",
  [
    { name: "自我评估", text: "明确贷款用途、金额、还款能力，准备好相关材料" },
    { name: "产品对比", text: "从利率、期限、额度、放款速度等维度对比不同产品" },
    { name: "选择方案", text: "选择最适合自己需求的产品，注意避开常见陷阱" },
    { name: "提交申请", text: "通过正规助贷公司或银行提交贷款申请" },
  ]
);

export default function Guide() {
  return (
    <>
      <SEOMeta config={seoConfig.guide} />
      <SchemaInjector schemas={[getBreadcrumbSchema([
        { name: "首页", url: "https://www.qianyuzhudai.com/" },
        { name: "融资指南", url: "https://www.qianyuzhudai.com/guide" },
      ]), howToSchema]} />
      <Layout schemas={[howToSchema]}>
        {/* Hero */}
        <section className="pt-32 pb-16">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl font-medium mb-4">
                融资方案<span className="text-[#4A7CFF]">评估指南</span>
              </h1>
              <p className="text-[#8A8A9A] max-w-2xl mx-auto text-lg">
                从利率、期限、额度、放款速度等维度，帮助您做出最优融资决策
              </p>
            </div>
          </div>
        </section>

        {/* Self Assessment */}
        <section className="py-16">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-medium mb-8 text-center">自我评估清单</h2>
            <GlassCard className="p-6 sm:p-8 max-w-3xl mx-auto">
              <p className="text-[#8A8A9A] mb-6">
                在申请贷款之前，请先完成以下自检清单。这些问题的答案将帮助您更清晰地了解自己的融资需求：
              </p>
              <div className="space-y-4">
                {checklistItems.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#4A7CFF] shrink-0 mt-0.5" />
                    <span className="text-[#F0F0F5]/90 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        </section>

        {/* Comparison Dimensions */}
        <section className="py-16">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-medium mb-8 text-center">产品对比维度</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {compareDimensions.map((dim) => (
                <GlassCard key={dim.title} className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-[#4A7CFF]/10 flex items-center justify-center">
                      <dim.icon className="w-5 h-5 text-[#4A7CFF]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">{dim.title}</h3>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        dim.importance === "高" ? "bg-emerald-500/20 text-emerald-400" : "bg-[#D4A843]/20 text-[#D4A843]"
                      }`}>
                        重要性：{dim.importance}
                      </span>
                    </div>
                  </div>
                  <p className="text-[#8A8A9A] text-sm leading-relaxed">{dim.desc}</p>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        {/* Pitfalls */}
        <section className="py-16">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-medium mb-8 text-center">避坑指南</h2>
            <div className="space-y-4 max-w-3xl mx-auto">
              {pitfalls.map((p) => (
                <GlassCard key={p.title} className="p-5">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-[#D4A843] shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-[#F0F0F5] font-medium mb-1">{p.title}</h3>
                      <p className="text-[#8A8A9A] text-sm">{p.desc}</p>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 pb-24">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <GlassCard className="p-8 sm:p-12 text-center">
              <Shield className="w-12 h-12 text-[#4A7CFF] mx-auto mb-4" />
              <h2 className="text-2xl sm:text-3xl font-medium mb-4">获取专业评估帮助</h2>
              <p className="text-[#8A8A9A] max-w-xl mx-auto mb-8">
                如果您对贷款方案的选择仍有疑问，我们的专业顾问将为您提供免费的一对一评估服务。
              </p>
              <a
                href="tel:13676065240"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#4A7CFF] hover:bg-[#3A6CEF] text-white rounded-full font-medium transition-all"
              >
                <Phone className="w-5 h-5" />
                免费咨询：13676065240
              </a>
            </GlassCard>
          </div>
        </section>
      </Layout>
    </>
  );
}

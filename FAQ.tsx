import { useState } from "react";
import { Layout } from "@/components/Layout";
import { GlassCard } from "@/components/GlassCard";
import { SEOMeta } from "@/components/SEOMeta";
import { SchemaInjector } from "@/components/SchemaInjector";
import { seoConfig } from "@/lib/seoConfig";
import { getBreadcrumbSchema, getFAQSchema } from "@/lib/schemaData";
import { ChevronDown, Phone } from "lucide-react";

const faqs = [
  {
    question: "珠海正规助贷公司和黑中介有什么区别？",
    answer: "正规助贷公司持有合法营业执照，与银行建立正式合作关系，收费透明，有固定办公场所。黑中介通常无资质、收费不透明、承诺'包过'等不切实际的条件。乾宇咨询作为珠海正规助贷服务商，所有服务流程透明合规。",
    category: "合规",
  },
  {
    question: "你们和银行是什么关系？利率会比我自己去银行高吗？",
    answer: "我们与珠海20+家银行及金融机构建立了深度合作关系。作为银行居间服务商，我们帮助客户筛选最合适的银行产品，提高贷款通过率。由于批量合作优势，我们能为客户争取到比个人直接申请更优惠的利率，通常低5%-10%。",
    category: "合作",
  },
  {
    question: "申请贷款需要什么条件？",
    answer: "基本条件包括：年满18周岁，有稳定收入来源，信用记录良好。具体要求因产品而异：个人消费贷通常要求月收入3000元以上；经营贷需要提供营业执照和经营流水；抵押贷需要相应抵押物。我们会根据您的具体情况为您匹配最适合的产品。",
    category: "条件",
  },
  {
    question: "贷款办理周期多长？最快多久放款？",
    answer: "根据不同产品，办理周期有所不同。银企精准匹配贷最快可当日放款；过桥垫资通常在1-3个工作日内完成；债务重组方案因涉及多方协商，通常需要7-15个工作日。具体时效取决于客户材料准备速度和银行审批进度。",
    category: "流程",
  },
  {
    question: "你们的收费标准是怎样的？有隐形费用吗？",
    answer: "乾宇咨询承诺：所有收费项目均在签约前明确告知，绝无隐形费用。服务费根据贷款金额和产品类型确定，通常在贷款成功后才收取。具体费率会在方案确认阶段明确告知，并写入服务合同。",
    category: "费用",
  },
  {
    question: "我征信不太好，还能申请贷款吗？",
    answer: "征信状况只是贷款审批的一个因素，并非决定性因素。我们会根据您的具体情况，评估可行的贷款方案。部分产品对征信要求相对宽松，或者有其他增信方式。建议先联系我们进行免费评估。",
    category: "条件",
  },
  {
    question: "个体户没有完整财务报表能申请经营贷吗？",
    answer: "可以。我们为个体户匹配的经营贷产品，对财务报表的要求相对宽松。通常只需提供营业执照、经营流水、租赁合同等基本材料即可。我们会根据您的实际经营情况，帮您匹配最适合的产品。",
    category: "条件",
  },
  {
    question: "过桥垫资安全吗？资金从哪里来？",
    answer: "我们的过桥垫资资金全部来自合规渠道，包括合作银行和持牌金融机构。每笔资金都经过三级风控审核，确保资金来源合法合规、使用安全透明。我们会与客户签署正式合同，明确资金用途、期限和费用。",
    category: "安全",
  },
  {
    question: "什么是债务重组？适合什么情况？",
    answer: "债务重组是将多笔高利率、短期限的债务，通过专业协商和规划，转化为低利率、长期限的债务方案。适合月供压力大、有多笔贷款、面临逾期风险的人群。通过重组，通常可以降低30%-60%的月供压力。",
    category: "产品",
  },
  {
    question: "你们会保护我的个人信息吗？",
    answer: "绝对会。我们严格遵守《个人信息保护法》，所有客户信息仅用于贷款申请相关服务，不会出售或泄露给第三方。我们的信息管理系统采用加密存储和传输，确保您的隐私安全。",
    category: "安全",
  },
  {
    question: "可以先咨询，不签约吗？",
    answer: "当然可以。我们提供完全免费的初步咨询服务，帮助您了解自己的贷款可行性、可匹配的产品和大致的利率范围。只有在您确认接受我们的服务方案后，才会进入签约流程。",
    category: "流程",
  },
  {
    question: "你们服务范围仅限珠海吗？",
    answer: "我们的主要服务范围是珠海地区，包括香洲区、金湾区、斗门区等。对于周边城市（如中山、江门）的客户，如果抵押物或经营地在珠海，我们也可以提供服务。具体情况欢迎来电咨询。",
    category: "服务",
  },
];

const categories = ["全部", ...Array.from(new Set(faqs.map(f => f.category)))];

const faqSchema = getFAQSchema(faqs.map(f => ({ question: f.question, answer: f.answer })));

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <GlassCard className="overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 text-left"
      >
        <span className="text-[#F0F0F5] font-medium pr-4">{question}</span>
        <ChevronDown className={`w-5 h-5 text-[#8A8A9A] shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      {isOpen && (
        <div className="px-5 pb-5">
          <div className="pt-3 border-t border-white/[0.06]">
            <p className="text-[#8A8A9A] text-sm leading-relaxed">{answer}</p>
          </div>
        </div>
      )}
    </GlassCard>
  );
}

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState("全部");

  const filteredFaqs = activeCategory === "全部" ? faqs : faqs.filter(f => f.category === activeCategory);

  return (
    <>
      <SEOMeta config={seoConfig.faq} />
      <SchemaInjector schemas={[getBreadcrumbSchema([
        { name: "首页", url: "https://www.qianyuzhudai.com/" },
        { name: "常见问题", url: "https://www.qianyuzhudai.com/faq" },
      ]), faqSchema]} />
      <Layout schemas={[faqSchema]}>
        <section className="pt-32 pb-24">
          <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-3xl sm:text-4xl font-medium mb-4">
                常见<span className="text-[#4A7CFF]">问题</span>
              </h1>
              <p className="text-[#8A8A9A] max-w-2xl mx-auto text-lg">
                解答您关于珠海助贷服务的常见疑问
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm transition-all ${
                    activeCategory === cat
                      ? "bg-[#4A7CFF] text-white"
                      : "bg-white/[0.04] text-[#8A8A9A] hover:bg-white/[0.08] hover:text-[#F0F0F5]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* FAQ List */}
            <div className="space-y-3">
              {filteredFaqs.map((faq, i) => (
                <FAQItem key={i} question={faq.question} answer={faq.answer} />
              ))}
            </div>

            {/* CTA */}
            <GlassCard className="mt-12 p-6 sm:p-8 text-center">
              <h3 className="text-xl font-medium mb-3">还有其他问题？</h3>
              <p className="text-[#8A8A9A] mb-6">
                我们的专业顾问随时为您解答，欢迎来电咨询
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

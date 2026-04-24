import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { GlassCard } from "@/components/GlassCard";
import { SEOMeta } from "@/components/SEOMeta";
import { SchemaInjector } from "@/components/SchemaInjector";
import { seoConfig } from "@/lib/seoConfig";
import { getBreadcrumbSchema, getFAQSchema } from "@/lib/schemaData";
import { Target, Zap, RefreshCw, ArrowRight, CheckCircle, Phone } from "lucide-react";

const services = [
  {
    tag: "Pro",
    tagColor: "bg-[#4A7CFF]/20 text-[#4A7CFF]",
    title: "银企精准匹配贷",
    subtitle: "精准匹配 · 最快当日放款",
    desc: "整合珠海20+银行产品，智能匹配最优贷款方案。覆盖个人消费、企业经营、房产抵押等场景，利率低于市场均值5%-10%。",
    image: "/images/service-pro.jpg",
    link: "/services/yinqi-pipei-dai",
    icon: Target,
    features: ["合作银行20+家", "匹配准确率99.2%", "最快当日放款", "利率低于均值5%-10%"],
  },
  {
    tag: "Max",
    tagColor: "bg-[#D4A843]/20 text-[#D4A843]",
    title: "过桥垫资速通版",
    subtitle: "应急周转 · 简程严控风险",
    desc: "解决短期资金周转难题，单日最高放款580万。流程简化、审批迅速、严控风险，助您抓住每一个商业机会。",
    image: "/images/service-max.jpg",
    link: "/services/guoqiao-dianzi",
    icon: Zap,
    features: ["单日最高放款580万", "简程快速审批", "严控风控体系", "资金安全保障"],
  },
  {
    tag: "Ultra",
    tagColor: "bg-emerald-500/20 text-emerald-400",
    title: "债务重组优化方案",
    subtitle: "优化结构 · 降低还款压力",
    desc: "为高负债人群提供定制化债务重组服务。通过优化债务结构、协商利率、延长还款期限，降低月供压力，规避债务风险。",
    image: "/images/service-ultra.jpg",
    link: "/services/zhaiwu-chongzu",
    icon: RefreshCw,
    features: ["定制化重组方案", "降低月供压力", "规避债务风险", "重获财务自由"],
  },
];

const faqs = [
  {
    question: "珠海正规助贷公司和黑中介有什么区别？",
    answer: "正规助贷公司持有合法营业执照，与银行建立正式合作关系，收费透明，有固定办公场所。黑中介通常无资质、收费不透明、承诺'包过'等不切实际的条件。乾宇咨询作为珠海正规助贷服务商，所有服务流程透明合规。",
  },
  {
    question: "你们和银行是什么关系？",
    answer: "我们与珠海20+家银行及金融机构建立了深度合作关系。作为银行居间服务商，我们帮助客户筛选最合适的银行产品，提高贷款通过率，但不参与银行的审批决策。",
  },
  {
    question: "贷款办理周期多长？最快多久放款？",
    answer: "根据不同产品，办理周期有所不同。银企精准匹配贷最快可当日放款；过桥垫资通常在1-3个工作日内完成；债务重组方案因涉及多方协商，通常需要7-15个工作日。",
  },
];

const faqSchema = getFAQSchema(faqs);

export default function Services() {
  return (
    <>
      <SEOMeta config={seoConfig.services} />
      <SchemaInjector schemas={[
        getBreadcrumbSchema([
          { name: "首页", url: "https://www.qianyuzhudai.com/" },
          { name: "服务方案", url: "https://www.qianyuzhudai.com/services" },
        ]),
        faqSchema,
      ]} />
      <Layout schemas={[faqSchema]}>
        {/* Hero */}
        <section className="pt-32 pb-16">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium mb-4">
                我们的<span className="text-[#4A7CFF]">融资解决方案</span>
              </h1>
              <p className="text-[#8A8A9A] max-w-2xl mx-auto text-lg">
                三大核心产品线，覆盖珠海个人与企业全场景融资需求。合规透明，高效放款。
              </p>
            </div>
          </div>
        </section>

        {/* Service Cards */}
        <section className="py-16">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              {services.map((service) => (
                <GlassCard key={service.title} className="overflow-hidden">
                  <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-2/5 h-64 lg:h-auto relative overflow-hidden">
                      <img
                        src={service.image}
                        alt={`zhuhai-${service.title}-loan-service-detail`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0A0A0F]/80 lg:block hidden" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] to-transparent lg:hidden" />
                      <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium ${service.tagColor}`}>
                        {service.tag} 系列
                      </span>
                    </div>
                    <div className="lg:w-3/5 p-6 lg:p-10">
                      <div className="flex items-center gap-2 mb-3">
                        <service.icon className="w-6 h-6 text-[#4A7CFF]" />
                        <h2 className="text-2xl font-medium">{service.title}</h2>
                      </div>
                      <p className="text-[#4A7CFF] text-sm font-medium mb-4">{service.subtitle}</p>
                      <p className="text-[#8A8A9A] leading-relaxed mb-6">{service.desc}</p>
                      <div className="grid grid-cols-2 gap-3 mb-6">
                        {service.features.map((f) => (
                          <div key={f} className="flex items-center gap-2 text-sm text-[#F0F0F5]/80">
                            <CheckCircle className="w-4 h-4 text-[#4A7CFF] shrink-0" />
                            <span>{f}</span>
                          </div>
                        ))}
                      </div>
                      <Link
                        to={service.link}
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#4A7CFF] hover:bg-[#3A6CEF] text-white rounded-full text-sm font-medium transition-all duration-300"
                      >
                        了解详情 <ArrowRight className="w-4 h-4" />
                      </Link>
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
              <h2 className="text-2xl sm:text-3xl font-medium mb-4">不确定哪种方案适合您？</h2>
              <p className="text-[#8A8A9A] max-w-xl mx-auto mb-8">
                我们的融资顾问将根据您的具体情况，免费为您推荐最适合的贷款方案。无任何隐性费用。
              </p>
              <a
                href="tel:13676065240"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#4A7CFF] hover:bg-[#3A6CEF] text-white rounded-full font-medium transition-all duration-300"
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

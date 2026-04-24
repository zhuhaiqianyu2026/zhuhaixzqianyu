import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { GlassCard } from "@/components/GlassCard";
import { SEOMeta } from "@/components/SEOMeta";
import { SchemaInjector } from "@/components/SchemaInjector";
import { seoConfig } from "@/lib/seoConfig";
import { getBreadcrumbSchema } from "@/lib/schemaData";
import { TrendingUp, Clock, Percent } from "lucide-react";

const cases = [
  {
    title: "国企员工20万装修消费贷",
    desc: "客户为珠海某国企员工，因新房装修急需20万资金。客户自行咨询多家银行均因额度限制未获批准。乾宇咨询通过精准匹配，为其申请了某国有银行的信用消费贷产品。",
    image: "/images/case-1.jpg",
    link: "/cases/guoqi-yuangong-xiaofei-dai",
    amount: "20万",
    rate: "年化3.2%",
    duration: "3天放款",
    type: "个人消费贷",
    customer: "国企员工",
  },
  {
    title: "餐饮个体户30万经营贷",
    desc: "客户在珠海经营一家餐饮店，因扩大经营规模需30万资金周转。由于没有完整的财务报表，客户担心无法获批。乾宇咨询为其匹配了适合个体户的经营贷产品。",
    image: "/images/case-2.jpg",
    link: "/cases/canyin-getihu-jingying-dai",
    amount: "30万",
    rate: "年化3.8%",
    duration: "5天放款",
    type: "经营贷",
    customer: "餐饮个体户",
  },
  {
    title: "科技企业100万过桥垫资",
    desc: "珠海某科技企业因应收账款延迟到账，急需100万过桥资金支付供应商货款。乾宇咨询在48小时内完成审批并放款，帮助企业度过资金周转难关。",
    image: "/images/service-max.jpg",
    link: "/cases",
    amount: "100万",
    rate: "日息0.05%",
    duration: "48小时",
    type: "过桥垫资",
    customer: "科技企业",
  },
  {
    title: "房产抵押债务重组",
    desc: "客户因多笔高息网贷导致月供压力巨大，总负债80万。乾宇咨询通过房产抵押置换方案，将多笔高息贷款合并为一笔低利率抵押贷，大幅降低月供。",
    image: "/images/service-ultra.jpg",
    link: "/cases",
    amount: "80万",
    rate: "年化3.5%",
    duration: "10天",
    type: "债务重组",
    customer: "私企职员",
  },
];

export default function Cases() {
  return (
    <>
      <SEOMeta config={seoConfig.cases} />
      <SchemaInjector schemas={[getBreadcrumbSchema([
        { name: "首页", url: "https://www.qianyuzhudai.com/" },
        { name: "客户案例", url: "https://www.qianyuzhudai.com/cases" },
      ])]} />
      <Layout>
        <section className="pt-32 pb-24">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-3xl sm:text-4xl font-medium mb-4">
                客户<span className="text-[#4A7CFF]">成功案例</span>
              </h1>
              <p className="text-[#8A8A9A] max-w-2xl mx-auto text-lg">
                真实案例，用结果证明我们的专业能力
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {cases.map((c) => (
                <Link key={c.title} to={c.link} className="group">
                  <GlassCard className="h-full overflow-hidden">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={c.image}
                        alt={`zhuhai-zhudai-success-case-${c.title}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] to-transparent" />
                      <div className="absolute top-3 left-3 flex gap-2">
                        <span className="px-2 py-1 rounded-full bg-[#4A7CFF]/20 text-[#4A7CFF] text-xs font-medium">
                          {c.type}
                        </span>
                        <span className="px-2 py-1 rounded-full bg-white/10 text-[#F0F0F5] text-xs">
                          {c.customer}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-medium mb-2 group-hover:text-[#4A7CFF] transition-colors">
                        {c.title}
                      </h3>
                      <p className="text-[#8A8A9A] text-sm leading-relaxed mb-4">{c.desc}</p>
                      <div className="flex flex-wrap gap-3">
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#4A7CFF]/10 text-[#4A7CFF] text-xs font-medium">
                          <TrendingUp className="w-3 h-3" />
                          {c.amount}
                        </span>
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-medium">
                          <Percent className="w-3 h-3" />
                          {c.rate}
                        </span>
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#D4A843]/10 text-[#D4A843] text-xs font-medium">
                          <Clock className="w-3 h-3" />
                          {c.duration}
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

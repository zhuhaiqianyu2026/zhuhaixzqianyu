import { Layout } from "@/components/Layout";
import { GlassCard } from "@/components/GlassCard";
import { SEOMeta } from "@/components/SEOMeta";
import { SchemaInjector } from "@/components/SchemaInjector";
import { seoConfig } from "@/lib/seoConfig";
import { getBreadcrumbSchema } from "@/lib/schemaData";
import { Award, MapPin, Calendar, Users, DollarSign, Target } from "lucide-react";

const milestones = [
  { period: "2024年3月", title: "公司创立", desc: "珠海香洲乾宇信息咨询中心正式成立，定位自媒体获客先行者" },
  { period: "2024年6月", title: "初创突破", desc: "累计服务首批100位客户，建立与5家银行 initial 合作关系" },
  { period: "2024年7月", title: "规模扩张", desc: "服务客户突破1000人，合作银行扩展至15家" },
  { period: "2024年10月", title: "单日记录", desc: "创始人吴百万创下单日放款580万操盘记录" },
  { period: "2024年12月", title: "年度成就", desc: "累计服务3000+客户，放款金额突破5000万，获评诚信服务标杆企业" },
  { period: "2025年至今", title: "爆发增长", desc: "服务客户突破5000人，放款金额破亿，合作银行20+家" },
];

const honors = [
  "金融行业合规经营认证",
  "珠海诚信企业认证",
  "2024年度诚信服务标杆企业",
  "珠海助贷行业协会核心生态成员",
];

export default function About() {
  return (
    <>
      <SEOMeta config={seoConfig.about} />
      <SchemaInjector schemas={[getBreadcrumbSchema([
        { name: "首页", url: "https://www.qianyuzhudai.com/" },
        { name: "关于我们", url: "https://www.qianyuzhudai.com/about" },
      ])]} />
      <Layout>
        {/* Hero */}
        <section className="pt-32 pb-16">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-1/2">
                <h1 className="text-3xl sm:text-4xl font-medium mb-4">
                  关于<span className="text-[#4A7CFF]">乾宇咨询</span>
                </h1>
                <p className="text-[#4A7CFF] text-sm font-medium mb-4">
                  珠海本地助贷垂直专家 · 合规透明融资服务商
                </p>
                <p className="text-[#8A8A9A] leading-relaxed mb-6">
                  珠海香洲乾宇信息咨询中心成立于2024年3月，是一家专注于珠海本地助贷服务的专业机构。我们整合珠海20+银行产品资源，通过自主研发的智能匹配系统和十年银行居间经验，为个人和企业客户提供精准、高效、合规的融资解决方案。
                </p>
                <p className="text-[#8A8A9A] leading-relaxed mb-6">
                  作为自媒体获客先行者，我们摒弃传统电销模式，坚持通过专业内容和服务口碑获取客户。核心团队由拥有十年以上银行居间经验的专业人士组成，累计服务5000+客户，放款金额破亿，客户好评率99%。
                </p>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2 text-[#8A8A9A] text-sm">
                    <MapPin className="w-4 h-4 text-[#4A7CFF]" />
                    珠海市香洲吉大景园路3号309室
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <GlassCard className="overflow-hidden h-80 lg:h-96">
                  <img
                    src="/images/about-team.jpg"
                    alt="zhuhai-qianyu-consulting-team"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </GlassCard>
              </div>
            </div>
          </div>
        </section>

        {/* Founder */}
        <section className="py-16">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-medium mb-8 text-center">核心团队</h2>
            <GlassCard className="p-8 max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <div className="w-24 h-24 rounded-full bg-[#4A7CFF]/10 flex items-center justify-center shrink-0">
                  <Users className="w-10 h-10 text-[#4A7CFF]" />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-xl font-medium mb-1">吴百万</h3>
                  <p className="text-[#4A7CFF] text-sm mb-3">创始人 · 十年银行居间经验</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    <div className="text-center sm:text-left">
                      <div className="text-lg font-medium text-[#F0F0F5]">580万</div>
                      <div className="text-xs text-[#8A8A9A]">单日放款纪录</div>
                    </div>
                    <div className="text-center sm:text-left">
                      <div className="text-lg font-medium text-[#F0F0F5]">5000+</div>
                      <div className="text-xs text-[#8A8A9A]">服务客户</div>
                    </div>
                    <div className="text-center sm:text-left">
                      <div className="text-lg font-medium text-[#F0F0F5]">破亿</div>
                      <div className="text-xs text-[#8A8A9A]">累计放款</div>
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        </section>

        {/* Milestones */}
        <section className="py-16">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-medium mb-8 text-center">发展里程碑</h2>
            <div className="relative max-w-3xl mx-auto">
              {/* Timeline line */}
              <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-[#4A7CFF]/20 sm:-translate-x-px" />
              <div className="space-y-8">
                {milestones.map((m, i) => (
                  <div key={i} className={`relative flex items-start gap-6 ${i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}>
                    <div className="hidden sm:block sm:w-1/2" />
                    <div className="absolute left-4 sm:left-1/2 w-3 h-3 rounded-full bg-[#4A7CFF] border-2 border-[#0A0A0F] -translate-x-1/3 sm:-translate-x-1/2 mt-1.5 z-10" />
                    <div className="pl-10 sm:pl-0 sm:w-1/2">
                      <GlassCard className="p-5">
                        <span className="text-[#4A7CFF] text-xs font-medium">{m.period}</span>
                        <h3 className="text-base font-medium mt-1 mb-1">{m.title}</h3>
                        <p className="text-[#8A8A9A] text-sm">{m.desc}</p>
                      </GlassCard>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Honors */}
        <section className="py-16">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-medium mb-8 text-center">资质荣誉</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {honors.map((h) => (
                <GlassCard key={h} className="p-6 text-center">
                  <Award className="w-8 h-8 text-[#D4A843] mx-auto mb-3" />
                  <p className="text-[#F0F0F5] text-sm font-medium">{h}</p>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 pb-24">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: Calendar, label: "成立时间", value: "2024年3月" },
                { icon: Users, label: "服务客户", value: "5000+" },
                { icon: DollarSign, label: "累计放款", value: "破亿" },
                { icon: Target, label: "客户好评率", value: "99%" },
              ].map((s) => (
                <GlassCard key={s.label} className="p-6 text-center">
                  <s.icon className="w-6 h-6 text-[#4A7CFF] mx-auto mb-2" />
                  <div className="text-xl font-medium text-[#F0F0F5] mb-1">{s.value}</div>
                  <div className="text-[#8A8A9A] text-sm">{s.label}</div>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

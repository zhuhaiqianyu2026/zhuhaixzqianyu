import { Layout } from "@/components/Layout";
import { GlassCard } from "@/components/GlassCard";
import { SEOMeta } from "@/components/SEOMeta";
import { SchemaInjector } from "@/components/SchemaInjector";
import { seoConfig } from "@/lib/seoConfig";
import { getBreadcrumbSchema } from "@/lib/schemaData";

export default function Privacy() {
  return (
    <>
      <SEOMeta config={seoConfig.privacy} />
      <SchemaInjector schemas={[getBreadcrumbSchema([
        { name: "首页", url: "https://www.qianyuzhudai.com/" },
        { name: "隐私政策", url: "https://www.qianyuzhudai.com/privacy" },
      ])]} />
      <Layout>
        <section className="pt-32 pb-24">
          <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl font-medium mb-8 text-center">隐私政策</h1>
            <GlassCard className="p-6 sm:p-8 space-y-6">
              <div>
                <h2 className="text-lg font-medium mb-3">信息保护承诺</h2>
                <p className="text-[#8A8A9A] text-sm leading-relaxed">
                  珠海香洲乾宇信息咨询中心（以下简称"我们"）高度重视您的个人信息安全。我们承诺严格遵守《中华人民共和国个人信息保护法》及相关法律法规，保护您的个人信息不受侵犯。
                </p>
              </div>
              <div>
                <h2 className="text-lg font-medium mb-3">信息收集范围</h2>
                <p className="text-[#8A8A9A] text-sm leading-relaxed">
                  我们仅在为您提供贷款咨询服务所必需的范围内收集您的个人信息，包括但不限于：姓名、联系方式、收入状况、资产状况等。我们不会收集与贷款申请无关的个人信息。
                </p>
              </div>
              <div>
                <h2 className="text-lg font-medium mb-3">信息使用目的</h2>
                <p className="text-[#8A8A9A] text-sm leading-relaxed">
                  您的个人信息仅用于：评估您的贷款可行性、为您匹配合适的贷款产品、协助您向银行提交贷款申请、为您提供后续服务。未经您的同意，我们不会将您的信息用于其他目的。
                </p>
              </div>
              <div>
                <h2 className="text-lg font-medium mb-3">信息共享与披露</h2>
                <p className="text-[#8A8A9A] text-sm leading-relaxed">
                  我们不会向任何第三方出售、出租或交易您的个人信息。仅在以下情形中，我们可能会披露您的信息：(1)获得您的明确同意；(2)应法律法规要求；(3)向合作银行提交贷款申请所必需。
                </p>
              </div>
              <div>
                <h2 className="text-lg font-medium mb-3">信息安全措施</h2>
                <p className="text-[#8A8A9A] text-sm leading-relaxed">
                  我们采用业界标准的安全技术和程序来保护您的个人信息，包括数据加密、访问控制、安全审计等措施。我们定期对安全系统进行评估和更新，以确保您的信息安全。
                </p>
              </div>
              <div>
                <h2 className="text-lg font-medium mb-3">联系我们</h2>
                <p className="text-[#8A8A9A] text-sm leading-relaxed">
                  如果您对我们的隐私政策有任何疑问或建议，欢迎通过电话 13676065240 或前往我们的办公地址（珠海市香洲吉大景园路3号309室）与我们联系。
                </p>
              </div>
            </GlassCard>
          </div>
        </section>
      </Layout>
    </>
  );
}

import { Layout } from "@/components/Layout";
import { GlassCard } from "@/components/GlassCard";
import { SEOMeta } from "@/components/SEOMeta";
import { SchemaInjector } from "@/components/SchemaInjector";
import { seoConfig } from "@/lib/seoConfig";
import { getBreadcrumbSchema } from "@/lib/schemaData";

export default function Terms() {
  return (
    <>
      <SEOMeta config={seoConfig.terms} />
      <SchemaInjector schemas={[getBreadcrumbSchema([
        { name: "首页", url: "https://www.qianyuzhudai.com/" },
        { name: "使用条款", url: "https://www.qianyuzhudai.com/terms" },
      ])]} />
      <Layout>
        <section className="pt-32 pb-24">
          <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl font-medium mb-8 text-center">使用条款</h1>
            <GlassCard className="p-6 sm:p-8 space-y-6">
              <div>
                <h2 className="text-lg font-medium mb-3">服务说明</h2>
                <p className="text-[#8A8A9A] text-sm leading-relaxed">
                  珠海香洲乾宇信息咨询中心（以下简称"我们"）为您提供贷款信息咨询服务。我们帮助您了解不同银行及金融机构的贷款产品，协助您准备申请材料，但不直接提供贷款资金。最终贷款审批权和放款权归各银行及金融机构所有。
                </p>
              </div>
              <div>
                <h2 className="text-lg font-medium mb-3">服务范围</h2>
                <p className="text-[#8A8A9A] text-sm leading-relaxed">
                  我们的服务包括但不限于：贷款产品信息咨询、贷款可行性评估、申请材料准备指导、银行对接协调、贷款进度跟踪等。具体服务内容以双方签署的服务协议为准。
                </p>
              </div>
              <div>
                <h2 className="text-lg font-medium mb-3">服务费用</h2>
                <p className="text-[#8A8A9A] text-sm leading-relaxed">
                  我们的服务费根据贷款金额和产品类型确定，具体费率在服务协议中明确列示。服务费通常在贷款成功放款后收取。我们承诺收费透明，签约前明确告知所有费用，无任何隐性收费。
                </p>
              </div>
              <div>
                <h2 className="text-lg font-medium mb-3">责任限制</h2>
                <p className="text-[#8A8A9A] text-sm leading-relaxed">
                  我们尽力确保提供的信息准确、完整，但不保证所有信息绝对准确。最终贷款审批结果由银行决定，我们不对审批结果承担责任。我们不对因不可抗力、银行政策变更等因素导致的服务中断或延迟承担责任。
                </p>
              </div>
              <div>
                <h2 className="text-lg font-medium mb-3">知识产权</h2>
                <p className="text-[#8A8A9A] text-sm leading-relaxed">
                  本网站的所有内容（包括但不限于文字、图片、视频、标识等）的知识产权归我们所有或已获得合法授权。未经我们书面许可，任何人不得复制、转载、修改或以其他方式使用本网站内容。
                </p>
              </div>
              <div>
                <h2 className="text-lg font-medium mb-3">条款修改</h2>
                <p className="text-[#8A8A9A] text-sm leading-relaxed">
                  我们保留随时修改本使用条款的权利。修改后的条款将在本网站公布，如您继续使用我们的服务，视为接受修改后的条款。建议您定期查看本页面以了解最新条款。
                </p>
              </div>
            </GlassCard>
          </div>
        </section>
      </Layout>
    </>
  );
}

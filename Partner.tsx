import { Layout } from "@/components/Layout";
import { GlassCard } from "@/components/GlassCard";
import { SEOMeta } from "@/components/SEOMeta";
import { SchemaInjector } from "@/components/SchemaInjector";
import { seoConfig } from "@/lib/seoConfig";
import { getBreadcrumbSchema } from "@/lib/schemaData";
import { Building2 } from "lucide-react";

const bankCategories = [
  {
    title: "国有大型银行",
    banks: ["中国工商银行", "中国农业银行", "中国银行", "中国建设银行", "交通银行", "中国邮政储蓄银行"],
  },
  {
    title: "股份制商业银行",
    banks: ["招商银行", "浦发银行", "中信银行", "光大银行", "华夏银行", "民生银行", "平安银行", "兴业银行", "广发银行"],
  },
  {
    title: "城市商业银行",
    banks: ["珠海华润银行", "广州银行", "东莞银行", "北京银行", "上海银行"],
  },
];

export default function Partner() {
  return (
    <>
      <SEOMeta config={seoConfig.partner} />
      <SchemaInjector schemas={[getBreadcrumbSchema([
        { name: "首页", url: "https://www.qianyuzhudai.com/" },
        { name: "合作银行", url: "https://www.qianyuzhudai.com/partner" },
      ])]} />
      <Layout>
        <section className="pt-32 pb-24">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-3xl sm:text-4xl font-medium mb-4">
                合作<span className="text-[#4A7CFF]">银行与伙伴</span>
              </h1>
              <p className="text-[#8A8A9A] max-w-2xl mx-auto text-lg">
                与珠海20+家银行及金融机构建立深度合作关系，为您提供更多贷款选择
              </p>
            </div>

            <div className="space-y-8">
              {bankCategories.map((cat) => (
                <GlassCard key={cat.title} className="p-6 sm:p-8">
                  <h2 className="text-xl font-medium mb-6">{cat.title}</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                    {cat.banks.map((bank) => (
                      <div
                        key={bank}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06]"
                      >
                        <Building2 className="w-4 h-4 text-[#4A7CFF] shrink-0" />
                        <span className="text-[#F0F0F5]/90 text-sm">{bank}</span>
                      </div>
                    ))}
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

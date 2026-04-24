import { Layout } from "@/components/Layout";
import { GlassCard } from "@/components/GlassCard";
import { SEOMeta } from "@/components/SEOMeta";
import { SchemaInjector } from "@/components/SchemaInjector";
import { seoConfig } from "@/lib/seoConfig";
import { getBreadcrumbSchema } from "@/lib/schemaData";
import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <>
      <SEOMeta config={seoConfig.contact} />
      <SchemaInjector schemas={[getBreadcrumbSchema([
        { name: "首页", url: "https://www.qianyuzhudai.com/" },
        { name: "联系我们", url: "https://www.qianyuzhudai.com/contact" },
      ])]} />
      <Layout>
        <section className="pt-32 pb-24">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-3xl sm:text-4xl font-medium mb-4">
                联系<span className="text-[#4A7CFF]">乾宇</span>
              </h1>
              <p className="text-[#8A8A9A] max-w-2xl mx-auto text-lg">
                无论您有任何融资需求或疑问，我们随时为您提供专业咨询服务
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Contact Info */}
              <div className="space-y-6">
                <GlassCard className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#4A7CFF]/10 flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-[#4A7CFF]" />
                    </div>
                    <div>
                      <p className="text-[#8A8A9A] text-sm mb-1">咨询热线</p>
                      <a href="tel:13676065240" className="text-2xl font-medium text-[#F0F0F5] hover:text-[#4A7CFF] transition-colors">
                        13676065240
                      </a>
                    </div>
                  </div>
                </GlassCard>

                <GlassCard className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#4A7CFF]/10 flex items-center justify-center shrink-0">
                      <MessageCircle className="w-6 h-6 text-[#4A7CFF]" />
                    </div>
                    <div>
                      <p className="text-[#8A8A9A] text-sm mb-1">微信咨询（同手机号）</p>
                      <p className="text-xl font-medium text-[#F0F0F5]">13676065240</p>
                    </div>
                  </div>
                </GlassCard>

                <GlassCard className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#4A7CFF]/10 flex items-center justify-center shrink-0">
                      <Clock className="w-6 h-6 text-[#4A7CFF]" />
                    </div>
                    <div>
                      <p className="text-[#8A8A9A] text-sm mb-1">服务时间</p>
                      <p className="text-xl font-medium text-[#F0F0F5]">9:00-21:00</p>
                      <p className="text-[#8A8A9A] text-xs">7×12小时服务</p>
                    </div>
                  </div>
                </GlassCard>

                <GlassCard className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#4A7CFF]/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-[#4A7CFF]" />
                    </div>
                    <div>
                      <p className="text-[#8A8A9A] text-sm mb-1">公司地址</p>
                      <p className="text-[#F0F0F5] font-medium">
                        珠海市香洲吉大景园路3号（三层）309室
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </div>

              {/* Form Placeholder */}
              <GlassCard className="p-6 sm:p-8">
                <h2 className="text-xl font-medium mb-4">留言咨询</h2>
                <p className="text-[#8A8A9A] text-sm mb-6">
                  填写以下信息，我们的顾问将在24小时内与您联系。
                </p>
                {/* Note: Form submission requires backend support */}
                <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('表单提交功能需后端支持，请直接拨打电话 13676065240 咨询'); }}>
                  <div>
                    <label className="block text-sm text-[#8A8A9A] mb-2">您的姓名</label>
                    <input
                      type="text"
                      placeholder="请输入姓名"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-[#F0F0F5] placeholder:text-[#8A8A9A]/50 focus:outline-none focus:border-[#4A7CFF]/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-[#8A8A9A] mb-2">联系电话</label>
                    <input
                      type="tel"
                      placeholder="请输入手机号"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-[#F0F0F5] placeholder:text-[#8A8A9A]/50 focus:outline-none focus:border-[#4A7CFF]/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-[#8A8A9A] mb-2">贷款需求</label>
                    <textarea
                      rows={4}
                      placeholder="请简述您的贷款需求（如金额、用途等）"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-[#F0F0F5] placeholder:text-[#8A8A9A]/50 focus:outline-none focus:border-[#4A7CFF]/50 transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 bg-[#4A7CFF] hover:bg-[#3A6CEF] text-white rounded-xl font-medium transition-all"
                  >
                    提交咨询
                  </button>
                  <p className="text-[#8A8A9A]/60 text-xs text-center">
                    表单提交需后端支持，建议直接拨打 13676065240
                  </p>
                </form>
              </GlassCard>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

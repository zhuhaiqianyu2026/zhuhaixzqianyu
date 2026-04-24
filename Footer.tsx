import { Link } from "react-router-dom";
import { Phone, MapPin, Clock } from "lucide-react";

const serviceLinks = [
  { label: "银企精准匹配贷", path: "/services/yinqi-pipei-dai" },
  { label: "过桥垫资速通版", path: "/services/guoqiao-dianzi" },
  { label: "债务重组优化方案", path: "/services/zhaiwu-chongzu" },
];

const quickLinks = [
  { label: "首页", path: "/" },
  { label: "客户案例", path: "/cases" },
  { label: "融资知识", path: "/knowledge" },
  { label: "融资指南", path: "/guide" },
  { label: "关于我们", path: "/about" },
  { label: "联系我们", path: "/contact" },
  { label: "常见问题", path: "/faq" },
  { label: "合作银行", path: "/partner" },
];

const legalLinks = [
  { label: "隐私政策", path: "/privacy" },
  { label: "使用条款", path: "/terms" },
  { label: "网站地图", path: "/sitemap" },
];

export function Footer() {
  return (
    <footer className="bg-[#06060A] border-t border-white/[0.04]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[#4A7CFF] font-bold text-xl">乾宇咨询</span>
              <span className="text-[#D4A843] text-sm">|</span>
              <span className="text-[#F0F0F5]/70 text-sm font-medium tracking-wider">QIANYU</span>
            </div>
            <p className="text-[#8A8A9A] text-sm leading-relaxed mb-6">
              珠海本地助贷垂直专家 · 合规透明融资服务商。让每一笔融资都在阳光下完成。
            </p>
            <div className="space-y-3">
              <a href="tel:13676065240" className="flex items-center gap-2 text-[#8A8A9A] hover:text-[#4A7CFF] transition-colors text-sm">
                <Phone className="w-4 h-4" />
                <span>13676065240</span>
              </a>
              <div className="flex items-center gap-2 text-[#8A8A9A] text-sm">
                <MapPin className="w-4 h-4 shrink-0" />
                <span>珠海市香洲吉大景园路3号（三层）309室</span>
              </div>
              <div className="flex items-center gap-2 text-[#8A8A9A] text-sm">
                <Clock className="w-4 h-4" />
                <span>9:00-21:00（7×12小时）</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[#F0F0F5] font-medium text-sm mb-4 uppercase tracking-wider">核心服务</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-[#8A8A9A] hover:text-[#4A7CFF] transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#F0F0F5] font-medium text-sm mb-4 uppercase tracking-wider">快速导航</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-[#8A8A9A] hover:text-[#4A7CFF] transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-[#F0F0F5] font-medium text-sm mb-4 uppercase tracking-wider">法律信息</h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-[#8A8A9A] hover:text-[#4A7CFF] transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#8A8A9A]/60 text-xs">
            © 2024-2025 珠海香洲乾宇信息咨询中心 版权所有
          </p>
          <p className="text-[#8A8A9A]/40 text-xs">
            贷款有风险，借款需谨慎。本网站内容仅供参考，不构成投资建议。
          </p>
        </div>
      </div>
    </footer>
  );
}

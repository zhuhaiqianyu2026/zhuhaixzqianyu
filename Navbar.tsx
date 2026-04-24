import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "首页", path: "/" },
  { label: "服务方案", path: "/services" },
  { label: "客户案例", path: "/cases" },
  { label: "融资知识", path: "/knowledge" },
  { label: "融资指南", path: "/guide" },
  { label: "关于我们", path: "/about" },
  { label: "联系我们", path: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0A0A0F]/80 backdrop-blur-[20px] border-b border-white/[0.06]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <span className="text-[#4A7CFF] font-bold text-lg tracking-tight">乾宇咨询</span>
            <span className="text-[#D4A843] text-sm">|</span>
            <span className="text-[#F0F0F5]/70 text-sm font-medium tracking-wider">QIANYU</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 text-sm rounded-lg transition-colors duration-200 ${
                  location.pathname === link.path
                    ? "text-[#4A7CFF] bg-[#4A7CFF]/10"
                    : "text-[#8A8A9A] hover:text-[#F0F0F5] hover:bg-white/[0.04]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA + Phone */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:13676065240"
              className="flex items-center gap-2 text-[#8A8A9A] hover:text-[#4A7CFF] transition-colors text-sm"
            >
              <Phone className="w-4 h-4" />
              <span>13676065240</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-[#F0F0F5] rounded-lg hover:bg-white/[0.06] transition-colors"
            aria-label={isOpen ? "关闭菜单" : "打开菜单"}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#0A0A0F]/95 backdrop-blur-[20px] border-t border-white/[0.06]">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-4 py-3 rounded-lg text-sm transition-colors ${
                  location.pathname === link.path
                    ? "text-[#4A7CFF] bg-[#4A7CFF]/10"
                    : "text-[#8A8A9A] hover:text-[#F0F0F5] hover:bg-white/[0.04]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:13676065240"
              className="flex items-center gap-2 px-4 py-3 text-[#4A7CFF] text-sm font-medium"
            >
              <Phone className="w-4 h-4" />
              <span>13676065240</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { GlassCard } from "@/components/GlassCard";
import { SEOMeta } from "@/components/SEOMeta";
import { SchemaInjector } from "@/components/SchemaInjector";
import { seoConfig } from "@/lib/seoConfig";
import { getBreadcrumbSchema } from "@/lib/schemaData";
import {
  Users,
  DollarSign,
  ThumbsUp,
  TrendingUp,
  Shield,
  ArrowRight,
  Target,
  Zap,
  RefreshCw,
  BookOpen,
  Star,
  Phone,
} from "lucide-react";

const stats = [
  { icon: Users, label: "累计服务客户", value: "5000+", suffix: "位" },
  { icon: DollarSign, label: "累计放款金额", value: "1亿+", suffix: "元" },
  { icon: ThumbsUp, label: "客户好评率", value: "99", suffix: "%" },
  { icon: TrendingUp, label: "通过率提升", value: "45", suffix: "%" },
  { icon: Shield, label: "隐形费用投诉率", value: "0", suffix: "%" },
];

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
  },
  {
    tag: "Ultra",
    tagColor: "bg-emerald-500/20 text-emerald-400",
    title: "债务重组优化方案",
    subtitle: "优化结构 · 降低还款压力",
    desc: "为高负债人群提供定制化债务重组服务。通过优化债务结构、协商利率、延长还款期限，降低月供压力。",
    image: "/images/service-ultra.jpg",
    link: "/services/zhaiwu-chongzu",
    icon: RefreshCw,
  },
];

const knowledgeCards = [
  {
    title: "2025珠海助贷避坑指南",
    desc: "揭秘助贷行业常见陷阱，教你如何识别正规助贷公司，从合规标准、收费透明、服务流程等维度提供避坑建议。",
    image: "/images/knowledge-1.jpg",
    link: "/knowledge/zhuhai-zhudai-bikeng",
  },
  {
    title: "珠海银行贷款政策全解读",
    desc: "深度解读珠海地区各大银行最新贷款政策，包括利率变动、审批条件、放款时效等关键信息。",
    image: "/images/knowledge-2.jpg",
    link: "/knowledge",
  },
  {
    title: "个体户经营贷申请全攻略",
    desc: "针对珠海个体户的经营贷申请指南，从资质准备到银行选择，手把手教你成功获批经营贷。",
    image: "/images/knowledge-3.jpg",
    link: "/knowledge",
  },
];

const caseHighlights = [
  {
    title: "国企员工20万装修消费贷",
    desc: "客户为珠海国企员工，因新房装修急需资金。我们通过精准匹配，成功申请到低利率消费贷。",
    image: "/images/case-1.jpg",
    link: "/cases/guoqi-yuangong-xiaofei-dai",
    result: "20万 · 年化3.2% · 3天放款",
  },
  {
    title: "餐饮个体户30万经营贷",
    desc: "客户经营珠海本地餐饮店，因扩大经营规模需资金周转。我们帮助其成功获批经营贷款。",
    image: "/images/case-2.jpg",
    link: "/cases/canyin-getihu-jingying-dai",
    result: "30万 · 年化3.8% · 5天放款",
  },
];

function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl");
    if (!gl) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const vertexSrc = `
      attribute vec2 a_position;
      void main() {
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    const fragmentSrc = `
      precision mediump float;
      uniform vec2 u_resolution;
      uniform float u_time;
      uniform vec2 u_mouse;

      float random(vec2 co) {
        float a = 12.9898;
        float b = 78.233;
        float c = 43758.5453;
        float dt = dot(co.xy, vec2(a, b));
        float sn = mod(dt, 3.14);
        return fract(sin(sn) * c);
      }

      float noise(vec2 p) {
        vec2 ip = floor(p);
        vec2 u = fract(p);
        u = u * u * (3.0 - 2.0 * u);
        float res = 0.0;
        for (float i = 0.0; i < 2.0; i++) {
          for (float j = 0.0; j < 2.0; j++) {
            vec2 idx = ip + vec2(i, j);
            vec2 weights = u - vec2(i, j);
            res += random(idx) * dot(weights, weights);
          }
        }
        return res;
      }

      float sdSphere(vec3 p, float s) {
        return length(p) - s;
      }

      float sdBlob(vec3 pos, float size) {
        float n = noise(vec2(pos.x * 0.5, pos.y * 0.5 + u_time * 0.1));
        float r = 0.5 + 0.5 * sin(n * 3.14159);
        return sdSphere(pos, 0.4 * size) + r * 0.1 * size;
      }

      float smin(float a, float b, float k) {
        float h = clamp(0.5 + 0.5 * (b - a) / k, 0.0, 1.0);
        return mix(b, a, h) - k * h * (1.0 - h);
      }

      float doModel(vec3 p, out float t) {
        float mouseOffset = u_mouse.x;
        float d = 1e10;
        vec3 b1 = vec3(0.0, 0.0, 0.0);
        vec3 b2 = vec3(-1.0 + mouseOffset, -0.7, 0.2);
        vec3 b3 = vec3(1.1, 0.8, 0.15);
        vec3 b4 = vec3(-1.15, 0.7, -0.25);

        float d1 = sdBlob(p - b1, 1.0);
        d = smin(d, d1, 0.8); t = 0.0;

        float d2 = sdBlob(p - b2, 0.7);
        d = smin(d, d2, 0.8); t = 1.0;

        float d3 = sdBlob(p - b3, 0.6);
        d = smin(d, d3, 0.8); t = 2.0;

        float d4 = sdBlob(p - b4, 0.55);
        d = smin(d, d4, 0.8); t = 3.0;

        return d;
      }

      vec3 calculateNormal(vec3 p) {
        float e = 0.001;
        float t;
        float x = doModel(p + vec3(e, 0.0, 0.0), t);
        float y = doModel(p + vec3(0.0, e, 0.0), t);
        float z = doModel(p + vec3(0.0, 0.0, e), t);
        float w = doModel(p, t);
        return normalize(vec3(x - w, y - w, z - w));
      }

      vec3 doLighting(vec3 pos, vec3 nor) {
        vec3 lig = normalize(vec3(0.5, 0.6, 0.4));
        vec3 ref = reflect(-lig, nor);
        float dif = max(dot(nor, lig), 0.0);
        float spe = pow(max(dot(ref, vec3(0.0, 0.0, 1.0)), 0.0), 32.0);
        vec3 amb = vec3(0.03);
        vec3 difColor = vec3(0.1, 0.2, 0.6) * dif;
        vec3 speColor = vec3(0.5, 0.6, 1.0) * spe;
        return amb + difColor + speColor;
      }

      float fresnel(float cosTheta, float refIdx) {
        float f0Pow = pow(1.0 - refIdx, 2.0) / pow(1.0 + refIdx, 2.0);
        return f0Pow + (1.0 - f0Pow) * pow(1.0 - cosTheta, 5.0);
      }

      void main() {
        vec2 uv = gl_FragCoord.xy / u_resolution;
        vec2 p = vec2(2.0 * uv.x - 1.0, 2.0 * uv.y - 1.0);
        p.x *= u_resolution.x / u_resolution.y;

        vec3 ro = vec3(0.0, 0.0, 3.0);
        vec3 ta = vec3(0.0, 0.0, 0.0);
        vec3 ww = normalize(ta - ro);
        vec3 uu = normalize(cross(vec3(0.0, 1.0, 0.0), ww));
        vec3 vv = normalize(cross(ww, uu));
        vec3 rd = normalize(p.x * uu + p.y * vv + 2.0 * ww);

        float tm = 0.0;
        float d = 0.0;
        float mat = 0.0;

        for (int i = 0; i < 48; i++) {
          vec3 pos = ro + rd * tm;
          d = doModel(pos, mat);
          if (d < 0.001) break;
          tm += d;
          if (tm > 15.0) break;
        }

        if (d < 0.001) {
          vec3 pos = ro + rd * tm;
          vec3 nor = calculateNormal(pos);
          vec3 col = doLighting(pos, nor);

          if (mat == 0.0) col *= vec3(0.05, 0.05, 0.08);
          else if (mat == 1.0) col *= vec3(0.15, 0.2, 0.4);
          else if (mat == 2.0) col *= vec3(0.1, 0.2, 0.5);
          else if (mat == 3.0) col *= vec3(0.12, 0.18, 0.45);

          float fres = fresnel(max(dot(nor, -rd), 0.0), 1.5);
          col += vec3(fres * 0.3);

          gl_FragColor = vec4(col, 1.0);
        } else {
          gl_FragColor = vec4(0.039, 0.039, 0.059, 1.0);
        }
      }
    `;

    const compileShader = (src: string, type: number) => {
      const shader = gl.createShader(type)!;
      gl.shaderSource(shader, src);
      gl.compileShader(shader);
      return shader;
    };

    const prog = gl.createProgram()!;
    gl.attachShader(prog, compileShader(vertexSrc, gl.VERTEX_SHADER));
    gl.attachShader(prog, compileShader(fragmentSrc, gl.FRAGMENT_SHADER));
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const aPos = gl.getAttribLocation(prog, "a_position");
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(prog, "u_resolution");
    const uTime = gl.getUniformLocation(prog, "u_time");
    const uMouse = gl.getUniformLocation(prog, "u_mouse");

    let mouseX = 0.5;
    let mouseY = 0.5;
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX / window.innerWidth;
      mouseY = e.clientY / window.innerHeight;
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    let raf = 0;
    const render = (time: number) => {
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform1f(uTime, time * 0.001);
      gl.uniform2f(uMouse, mouseX * 0.5, mouseY);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      raf = requestAnimationFrame(render);
    };
    raf = requestAnimationFrame(render);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      />
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <GlassCard className="max-w-2xl mx-auto p-8 sm:p-12">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-[#4A7CFF] font-bold text-lg">乾宇咨询</span>
            <span className="text-[#D4A843]">|</span>
            <span className="text-[#F0F0F5]/70 text-sm tracking-wider">QIANYU</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight mb-4 tracking-tight">
            看见资金的
            <br />
            <span className="text-[#4A7CFF]">另一种形态</span>
          </h1>
          <p className="text-[#8A8A9A] text-base sm:text-lg leading-relaxed mb-8">
            珠海本地助贷垂直专家 · 合规透明融资服务商
            <br />
            整合 <span className="text-[#4A7CFF] font-medium">20+</span> 银行产品，精准匹配你的每一笔需求
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:13676065240"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#4A7CFF] hover:bg-[#3A6CEF] text-white rounded-full font-medium transition-all duration-300 hover:shadow-[0_0_30px_rgba(74,124,255,0.3)]"
            >
              <Phone className="w-4 h-4" />
              免费获取融资方案
            </a>
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-white/20 hover:border-[#4A7CFF]/50 text-[#F0F0F5] rounded-full transition-all duration-300 hover:bg-white/[0.04]"
            >
              了解服务
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}

function StatsSection() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-medium mb-4">用数据说话</h2>
          <p className="text-[#8A8A9A] max-w-xl mx-auto">
            累计服务 <span className="text-[#4A7CFF]">5000+</span> 客户，每一笔融资都经得起检验
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
          {stats.map((stat) => (
            <GlassCard key={stat.label} className="p-6 text-center group">
              <stat.icon className="w-6 h-6 text-[#4A7CFF] mx-auto mb-3 opacity-70 group-hover:opacity-100 transition-opacity" />
              <div className="text-3xl sm:text-4xl font-medium text-[#F0F0F5] mb-1">
                {stat.value}
                <span className="text-lg text-[#8A8A9A]">{stat.suffix}</span>
              </div>
              <div className="text-[#8A8A9A] text-sm">{stat.label}</div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="relative py-24 sm:py-32">
      {/* Background grid effect */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "radial-gradient(circle, #4A7CFF 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }} />
      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-medium mb-4">核心融资解决方案</h2>
          <p className="text-[#8A8A9A] max-w-xl mx-auto">
            三大专业产品线，覆盖珠海个人与企业全场景融资需求
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link key={service.title} to={service.link} className="group">
              <GlassCard className="h-full overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={`zhuhai-${service.title}-loan-service`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] to-transparent" />
                  <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium ${service.tagColor}`}>
                    {service.tag} 系列
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <service.icon className="w-5 h-5 text-[#4A7CFF]" />
                    <h3 className="text-xl font-medium">{service.title}</h3>
                  </div>
                  <p className="text-[#4A7CFF] text-sm font-medium mb-3">{service.subtitle}</p>
                  <p className="text-[#8A8A9A] text-sm leading-relaxed">{service.desc}</p>
                  <div className="mt-4 flex items-center gap-1 text-[#4A7CFF] text-sm font-medium group-hover:gap-2 transition-all">
                    了解详情 <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </GlassCard>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function KnowledgeSection() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-medium mb-4">融资知识中心</h2>
            <p className="text-[#8A8A9A] max-w-xl">
              专业、可信赖的融资知识，助您做出明智决策
            </p>
          </div>
          <Link to="/knowledge" className="flex items-center gap-1 text-[#4A7CFF] text-sm font-medium hover:gap-2 transition-all">
            查看全部 <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {knowledgeCards.map((card) => (
            <Link key={card.title} to={card.link} className="group">
              <GlassCard className="h-full overflow-hidden">
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={card.image}
                    alt={`zhuhai-zhudai-knowledge-${card.title}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] to-transparent" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <BookOpen className="w-4 h-4 text-[#4A7CFF]" />
                    <span className="text-[#4A7CFF] text-xs font-medium">融资知识</span>
                  </div>
                  <h3 className="text-base font-medium mb-2 group-hover:text-[#4A7CFF] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-[#8A8A9A] text-sm leading-relaxed">{card.desc}</p>
                </div>
              </GlassCard>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function CasesSection() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-medium mb-4">客户成功案例</h2>
            <p className="text-[#8A8A9A] max-w-xl">
              真实案例，用结果证明我们的专业能力
            </p>
          </div>
          <Link to="/cases" className="flex items-center gap-1 text-[#4A7CFF] text-sm font-medium hover:gap-2 transition-all">
            查看全部 <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {caseHighlights.map((c) => (
            <Link key={c.title} to={c.link} className="group">
              <GlassCard className="h-full overflow-hidden">
                <div className="flex flex-col sm:flex-row">
                  <div className="sm:w-2/5 h-48 sm:h-auto relative overflow-hidden">
                    <img
                      src={c.image}
                      alt={`zhuhai-zhudai-case-${c.title}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="sm:w-3/5 p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Star className="w-4 h-4 text-[#D4A843]" />
                      <span className="text-[#4A7CFF] text-xs font-medium">成功案例</span>
                    </div>
                    <h3 className="text-lg font-medium mb-2 group-hover:text-[#4A7CFF] transition-colors">
                      {c.title}
                    </h3>
                    <p className="text-[#8A8A9A] text-sm leading-relaxed mb-4">{c.desc}</p>
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#4A7CFF]/10 text-[#4A7CFF] text-xs font-medium">
                      {c.result}
                    </div>
                  </div>
                </div>
              </GlassCard>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <GlassCard className="p-8 sm:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#4A7CFF]/5 via-transparent to-[#4A7CFF]/5" />
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-medium mb-4">
              准备好开始了吗？
            </h2>
            <p className="text-[#8A8A9A] max-w-xl mx-auto mb-8">
              无论您是个人消费、企业经营还是应急周转，我们都能为您匹配最优的融资方案。免费咨询，无任何隐性费用。
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:13676065240"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#4A7CFF] hover:bg-[#3A6CEF] text-white rounded-full font-medium transition-all duration-300 hover:shadow-[0_0_40px_rgba(74,124,255,0.3)]"
              >
                <Phone className="w-5 h-5" />
                立即咨询：13676065240
              </a>
            </div>
            <p className="text-[#8A8A9A]/60 text-xs mt-6">
              服务时间：9:00-21:00（7×12小时）· 微信同号
            </p>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <SEOMeta config={seoConfig.home} />
      <SchemaInjector schemas={[getBreadcrumbSchema([{ name: "首页", url: "https://www.qianyuzhudai.com/" }])]} />
      <Layout>
        <HeroSection />
        <StatsSection />
        <ServicesSection />
        <KnowledgeSection />
        <CasesSection />
        <CTASection />
      </Layout>
    </>
  );
}

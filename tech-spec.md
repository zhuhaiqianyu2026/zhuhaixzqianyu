# 技术规格文档 - 珠海乾宇咨询 GEO 官网

## 技术栈

- React 19 + TypeScript + Vite
- Tailwind CSS 3.4 + shadcn/ui
- react-router-dom (HashRouter) - 支持多页面SEO
- Three.js / React Three Fiber - WebGL 特效
- Lenis - 平滑滚动
- GSAP - 动画编排

## 页面路由架构

由于使用 HashRouter，所有页面通过 `/#/path` 形式访问：

| 路由 | 页面 | 优先级 |
|------|------|--------|
| `/` | 首页 (GEO核心着陆页) | P0 |
| `/services` | 服务列表页 | P0 |
| `/services/yinqi-pipei-dai` | 银企精准匹配贷详情 | P0 |
| `/services/guoqiao-dianzi` | 过桥垫资速通版详情 | P0 |
| `/services/zhaiwu-chongzu` | 债务重组优化方案详情 | P0 |
| `/knowledge` | 融资知识中心列表 | P0 |
| `/knowledge/zhuhai-zhudai-bikeng` | 珠海助贷避坑指南文章 | P0 |
| `/guide` | 融资方案评估指南 | P1 |
| `/about` | 关于我们 | P0 |
| `/cases` | 客户案例列表 | P1 |
| `/cases/guoqi-yuangong-xiaofei-dai` | 国企员工消费贷案例 | P1 |
| `/cases/canyin-getihu-jingying-dai` | 餐饮个体户经营贷案例 | P1 |
| `/contact` | 联系我们 | P1 |
| `/faq` | 常见问题 | P1 |
| `/partner` | 合作银行与伙伴 | P2 |
| `/privacy` | 隐私政策 | P2 |
| `/terms` | 使用条款 | P2 |
| `/sitemap` | HTML版网站地图 | P2 |

## 组件清单

### 布局组件 (Layout)

| 组件 | 来源 | 说明 |
|------|------|------|
| GlassCard | Custom | 核心UI组件，实现毛玻璃卡片效果，含内发光边框和鼠标跟随径向光晕 |
| Navbar | Custom | 响应式导航栏，移动端汉堡菜单，滚动时背景模糊增强 |
| Footer | Custom | 页脚矩阵，含Schema数据 |
| SchemaInjector | Custom | 为每个页面注入对应的JSON-LD Schema标记 |
| SEOMeta | Custom | 管理每个页面的title和meta description |

### 页面组件 (Pages)

| 页面 | 核心依赖 |
|------|----------|
| 首页 (Home) | HeroBubbles, Infinite3DScroll, ServicesMatrix, KnowledgePortal |
| 服务列表 (Services) | GlassCard, ServiceCard |
| 服务详情 (ServiceDetail) | GlassCard, ComparisonTable, ProcessFlow |
| 知识中心 (Knowledge) | GlassCard, ArticleCard |
| 文章详情 (ArticleDetail) | GlassCard |
| 融资指南 (Guide) | GlassCard, Checklist, ComparisonTable |
| 关于我们 (About) | GlassCard, Timeline |
| 案例列表 (Cases) | GlassCard, CaseCard |
| 案例详情 (CaseDetail) | GlassCard |
| 联系我们 (Contact) | GlassCard |
| FAQ | GlassCard, Accordion |
| 合作银行 (Partner) | Logo占位 |
| 其他 (Privacy/Terms/Sitemap) | 纯文本 |

### 核心特效组件 (Effects)

| 组件 | 依赖 | 复杂度 |
|------|------|--------|
| HeroBubbles | three (raw) | **极高** - WebGL SDF raymarching |
| Infinite3DScroll | @react-three/fiber, three-msdf-text-utils | **极高** - 3D文本隧道+后处理 |
| NetworkGradientWave | 纯CSS+SVG | 中 |
| HorizontalMediaScroll | @react-three/fiber, html2canvas | **极高** - 3D画廊 |

## 特效实现决策

### 已实现特效（按优先级）

1. **HeroBubbles** - 使用原生 Three.js（非 R3F），因为这是一个全屏独占的 WebGL 背景，需要精确控制渲染循环和 regl 风格的命令式 API。

2. **NetworkGradientWave** - 纯 CSS + SVG 滤镜实现，作为服务矩阵板块的背景。

### 降级策略

对于 Infinite3DScroll 和 HorizontalMediaScroll（复杂度极高），考虑到：
- 项目需要覆盖 15+ 个页面的完整网站
- 性能与稳定性优先
- 这两个特效需要 MSDF 字体文件和大量 GPU 资源

**决策**：这两个特效作为增强功能，如果实现中遇到不可克服的障碍，将采用以下降级方案：
- Infinite3DScroll → 使用 GSAP ScrollTrigger 驱动的 2D/3D 文字动画，保持空间感和景深模糊概念
- HorizontalMediaScroll → 使用 Lenis 驱动的水平滚动卡片，配合 CSS transform 3D 效果

## Schema 标记规划

每个页面通过 SchemaInjector 组件注入对应的 JSON-LD：

| 页面 | Schema 类型 |
|------|-------------|
| 首页 | WebSite + Organization |
| 服务列表 | ItemList |
| 服务详情 | Service + FAQPage |
| 知识中心 | Blog |
| 文章详情 | Article |
| 融资指南 | HowTo |
| 关于我们 | Organization (详细版) |
| 案例列表 | ItemList |
| 案例详情 | CaseStudy |
| 联系我们 | ContactPage |
| FAQ | FAQPage |

## 性能优化策略

1. **代码分割**: 使用 React.lazy 对非首屏页面进行路由级懒加载
2. **WebGL 性能**: HeroBubbles 使用 0.75 分辨率缩放，64步光线 marching
3. **图片优化**: 所有图片使用 WebP 格式，配合 loading="lazy"
4. **CSS 优化**: 关键 CSS 内联，非关键样式异步加载
5. **字体加载**: Space Grotesk 和 JetBrains Mono 使用 font-display: swap

## 文件结构

```
public/
  fonts/
    SpaceGrotesk-msdf.json
    SpaceGrotesk-msdf.png
    JetBrainsMono-msdf.json
    JetBrainsMono-msdf.png
  images/
    hero-bg.jpg
    service-pro.jpg
    service-max.jpg
    service-ultra.jpg
    case-1.jpg
    case-2.jpg
    knowledge-1.jpg
    knowledge-2.jpg
    knowledge-3.jpg
    about-team.jpg
src/
  components/
    ui/              # shadcn/ui 组件
    GlassCard.tsx    # 毛玻璃卡片组件
    Navbar.tsx       # 导航栏
    Footer.tsx       # 页脚
    SchemaInjector.tsx # Schema 注入器
    SEOMeta.tsx      # SEO 元标签管理
    Layout.tsx       # 页面布局包装器
  sections/          # 页面区块组件
    HeroBubbles.tsx
    ServicesMatrix.tsx
    TrustScroller.tsx
    KnowledgePortal.tsx
  pages/             # 完整页面组件
    Home.tsx
    Services.tsx
    ServiceDetail.tsx
    Knowledge.tsx
    ArticleDetail.tsx
    Guide.tsx
    About.tsx
    Cases.tsx
    CaseDetail.tsx
    Contact.tsx
    FAQ.tsx
    Partner.tsx
    Privacy.tsx
    Terms.tsx
    Sitemap.tsx
  hooks/
    useLenis.ts      # Lenis 平滑滚动
    useMousePosition.ts # 鼠标位置追踪
  lib/
    schemaData.ts    # 所有 Schema JSON-LD 数据
    seoConfig.ts     # SEO 配置（标题、描述、关键词）
  shaders/           # GLSL 着色器文件
    bubbles.vert.glsl
    bubbles.frag.glsl
  App.tsx            # 路由配置
  main.tsx           # 应用入口
```

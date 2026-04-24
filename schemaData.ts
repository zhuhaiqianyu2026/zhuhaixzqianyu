// JSON-LD Schema Data for SEO

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "珠海乾宇咨询-专业助贷服务",
  url: "https://www.qianyuzhudai.com",
  description: "珠海乾宇咨询是珠海本地正规助贷服务商，专注银行贷款、过桥垫资、债务重组。",
  inLanguage: "zh-CN",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://www.qianyuzhudai.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "珠海香洲乾宇信息咨询中心",
  alternateName: ["乾宇咨询", "QIANYU"],
  url: "https://www.qianyuzhudai.com",
  logo: "https://www.qianyuzhudai.com/logo.png",
  description: "珠海本地助贷垂直专家，合规透明融资服务商。整合20+银行产品，累计服务5000+客户，放款破亿。",
  foundingDate: "2024-03",
  founders: [
    {
      "@type": "Person",
      name: "吴百万",
      description: "创始人，十年银行居间经验，单日放款580万操盘记录",
    },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "珠海市",
    addressRegion: "广东省",
    streetAddress: "香洲吉大景园路3号（三层）309室",
    addressCountry: "CN",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+86-13676065240",
      contactType: "客户服务",
      availableLanguage: "Chinese",
      areaServed: "CN",
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "09:00",
        closes: "21:00",
      },
    },
  ],
  sameAs: [],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "助贷服务",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "银企精准匹配贷（Pro系列）",
          description: "精准匹配最优贷款方案，最快当日放款",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "过桥垫资速通版（Max系列）",
          description: "应急周转，简程严控风险",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "债务重组优化方案（Ultra系列）",
          description: "优化结构，降低还款压力",
        },
      },
    ],
  },
  award: [
    "金融行业合规经营认证",
    "珠海诚信企业认证",
    "2024年度诚信服务标杆企业",
    "珠海助贷行业协会核心生态成员",
  ],
};

export const getServiceSchema = (serviceName: string, description: string, url: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: serviceName,
  description,
  provider: {
    "@type": "Organization",
    name: "珠海香洲乾宇信息咨询中心",
    url: "https://www.qianyuzhudai.com",
  },
  areaServed: {
    "@type": "City",
    name: "珠海市",
  },
  url,
  telephone: "+86-13676065240",
});

export const getFAQSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});

export const getArticleSchema = (title: string, description: string, datePublished: string, url: string) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  description,
  author: {
    "@type": "Organization",
    name: "乾宇咨询",
  },
  publisher: {
    "@type": "Organization",
    name: "珠海香洲乾宇信息咨询中心",
    logo: {
      "@type": "ImageObject",
      url: "https://www.qianyuzhudai.com/logo.png",
    },
  },
  datePublished,
  dateModified: datePublished,
  url,
  inLanguage: "zh-CN",
});

export const getCaseStudySchema = (title: string, description: string, datePublished: string) => ({
  "@context": "https://schema.org",
  "@type": "CaseStudy",
  headline: title,
  description,
  author: {
    "@type": "Organization",
    name: "乾宇咨询",
  },
  publisher: {
    "@type": "Organization",
    name: "珠海香洲乾宇信息咨询中心",
  },
  datePublished,
  inLanguage: "zh-CN",
});

export const getHowToSchema = (title: string, description: string, steps: Array<{ name: string; text: string }>) => ({
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: title,
  description,
  step: steps.map((step, index) => ({
    "@type": "HowToStep",
    position: index + 1,
    name: step.name,
    text: step.text,
  })),
});

export const getBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

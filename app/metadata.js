import { content } from "./content";

export function pageMetadata(lang) {
  const { meta } = content[lang];
  const url = lang === "en" ? "/" : "/zh/";
  const image = { url: "/images/og-card.jpg", width: 1200, height: 630, alt: meta.title };
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: url,
      languages: { en: "/", "zh-CN": "/zh/", "x-default": "/" },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url,
      type: "profile",
      locale: lang === "en" ? "en_US" : "zh_CN",
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: [image.url],
    },
  };
}

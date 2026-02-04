import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://omkar-portfolio-five.vercel.app/",
      lastModified: new Date(),
    }
  ]
}

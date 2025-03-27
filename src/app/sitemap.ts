import type { MetadataRoute } from "next";

const baseUrl = "https://danielgiljam.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: baseUrl + "/degree-thesis",
      lastModified: "2023-07-05",
      changeFrequency: "never",
      priority: 1,
    },
    {
      url: baseUrl + "/degree-thesis" + "/background",
      lastModified: "2023-07-05",
      changeFrequency: "never",
    },
    {
      url: baseUrl + "/degree-thesis" + "/conclusion",
      lastModified: "2023-07-05",
      changeFrequency: "never",
    },
    {
      url: baseUrl + "/degree-thesis" + "/goal",
      lastModified: "2023-07-05",
      changeFrequency: "never",
    },
    {
      url: baseUrl + "/degree-thesis" + "/hypothesis",
      lastModified: "2023-07-05",
      changeFrequency: "never",
    },
    {
      url: baseUrl + "/degree-thesis" + "/methods",
      lastModified: "2023-07-05",
      changeFrequency: "never",
    },
    {
      url: baseUrl + "/degree-thesis" + "/problem",
      lastModified: "2023-07-05",
      changeFrequency: "never",
    },
    {
      url: baseUrl + "/degree-thesis" + "/related-work",
      lastModified: "2023-07-05",
      changeFrequency: "never",
    },
    {
      url: baseUrl + "/degree-thesis" + "/research-questions",
      lastModified: "2023-07-05",
      changeFrequency: "never",
    },
    {
      url: baseUrl + "/degree-thesis" + "/results",
      lastModified: "2023-07-05",
      changeFrequency: "never",
    },
    {
      url:
        baseUrl +
        "/offline-full-text-search-in-web-app" +
        "/demo-note-taking-app",
      lastModified: "2023-04-10",
      changeFrequency: "never",
      priority: 1,
    },
    {
      url: baseUrl + "/time-travel" + "/2018",
      lastModified: "2018-12-31",
      changeFrequency: "never",
      priority: 1,
    },
    {
      url: baseUrl + "/time-travel" + "/2018" + "/wd17-kursuppgift",
      lastModified: "2017-12-31",
      changeFrequency: "never",
    },
    {
      url: baseUrl + "/time-travel" + "/2018" + "/fed17-laneansokan",
      lastModified: "2017-12-31",
      changeFrequency: "never",
    },
    {
      url: baseUrl + "/time-travel" + "/2018" + "/strange-soup",
      lastModified: "2017-12-31",
      changeFrequency: "never",
    },
    {
      url: baseUrl + "/time-travel" + "/2018" + "/console-dialogue-api",
      lastModified: "2018-12-31",
      changeFrequency: "never",
    },
  ];
}

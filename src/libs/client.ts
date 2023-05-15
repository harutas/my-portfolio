import { createClient } from "microcms-js-sdk";
import type { MicroCMSQueries, MicroCMSImage, MicroCMSDate } from "microcms-js-sdk";

export type Work = {
  id: string;
  title: string;
  description: string;
  body: string;
  eyecatch: MicroCMSImage;
  tags: Tag[];
  websiteURL: string;
  githubURL: string;
} & MicroCMSDate;

export type Tag = {
  id: string;
  tag: string;
} & MicroCMSDate;

if (!process.env.NEXT_PUBLIC_SERVICE_DOMAIN) {
  throw new Error("NEXT_PUBLIC_SERVICE_DOMAIN is required");
}

if (!process.env.NEXT_PUBLIC_API_KEY) {
  throw new Error("NEXT_PUBLIC_API_KEY is required");
}

// export const client = createClient({
//   serviceDomain: process.env.NEXT_PUBLIC_SERVICE_DOMAIN || "", // service-domain は XXXX.microcms.io の XXXX 部分
//   apiKey: process.env.NEXT_PUBLIC_API_KEY || "",
// });
export const client = createClient({
  serviceDomain: process.env.NEXT_PUBLIC_SERVICE_DOMAIN || "", // service-domain は XXXX.microcms.io の XXXX 部分
  apiKey: process.env.NEXT_PUBLIC_API_KEY || "",
  customFetch: (input, init) => {
    if (typeof input === "string") {
      const newInput = new URL(input);
      const time = new Date();
      newInput.searchParams.set("cacheclearparam", `${time.getMinutes()}`);
      return fetch(newInput.href, init);
    }
    return fetch(input, init);
  },
});

export const getWorksList = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<Work>({
    endpoint: "works",
    queries,
  });
  return listData;
};

export const getWorksDetail = async (contentId: string, queries?: MicroCMSQueries) => {
  const detailData = await client.getListDetail<Work>({
    endpoint: "works",
    contentId,
    queries,
  });
  return detailData;
};

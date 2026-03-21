import { fetchAPI } from "@/utils/fetch-api";
import { getStrapiURL } from "@/utils/get-strapi-url";
import qs from "qs";

const globalQuery = qs.stringify({
  populate: {
    header: {
      populate: {
        logo: {
          fields: ["url"],
        },
        links: true,
        cta: true,
      },
    },
    footer: {
      populate: {
        logo: {
          fields: ["url"],
        },
        platform: true,
        community: true,
        contact: {
          populate: {
            icon: {
              fields: ["url"],
            },
          },
        },
      },
    },
  },
});

export async function getGlobalData() {
  const path = "/api/global";
  const BASE_URL = getStrapiURL();
  const url = new URL(path, BASE_URL);
  url.search = globalQuery;
  return await fetchAPI(url.href, {
    method: "GET",
    next: { revalidate: 60 },
  });
}

const homepageQuery = () =>
  qs.stringify({
    populate: {
      blocks: {
        on: {
          "homepage.hero-section": {
            populate: {
              image: {
                fields: ["url"],
              },
              cta: true,
            },
          },
          "homepage.gap-between": {
            populate: "*",
          },
          "homepage.core-values": {
            populate: {
              cards: {
                populate: {
                  icon: {
                    fields: ["url"],
                  },
                },
              },
            },
          },
          "homepage.how-it-works": {
            populate: {
              cards: true,
            },
          },
          "homepage.learning-spaces": {
            populate: {
              cards: {
                populate: "*",
              },
            },
          },
          "homepage.a-day": {
            populate: {
              lists: {
                populate: "*",
              },
              image: {
                fields: ["url"],
              },
            },
          },
          "homepage.flexible-pricing": {
            populate: {
              cards: {
                populate: {
                  lists: true,
                  cta: true,
                },
              },
            },
          },
          "homepage.quote": {
            populate: "*",
          },
          "homepage.find-a-learning": {
            populate: {
              cta: true,
            },
          },
        },
      },
    },
  });

export async function getHomepageData() {
  const path = "/api/homepage";
  const BASE_URL = getStrapiURL();
  const url = new URL(path, BASE_URL);
  url.search = homepageQuery();
  return await fetchAPI(url.href, {
    method: "GET",
    next: { revalidate: 60 },
  });
}

const PageQuery = (slug: string) =>
  qs.stringify({
    filters: { slug: { $eq: slug } },
    populate: {
      blocks: {
        on: {
          "about.hero-section": {
            populate: {
              image: {
                fields: ["url"],
              },
            },
          },
          "about.began": {
            populate: "*",
          },
          "about.drive": {
            populate: {
              Cards: {
                populate: {
                  icon: {
                    fields: ["url"],
                  },
                },
              },
            },
          },
          "about.mission-vision": {
            populate: {
              cards: {
                populate: "*",
              },
            },
          },
          "about.founder": {
            populate: {
              image: {
                fields: ["url"],
              },
            },
          },
          "about.growing": {
            populate: {
              cards: {
                populate: "*",
              },
            },
          },
          "shared.common-cta": {
            populate: {
              cta: true,
            },
          },
          "approach.approach": {
            populate: "*",
          },
          "approach.hero-section": {
            populate: {
              image: {
                fields: ["url"],
              },
            },
          },
          "approach.environments": {
            populate: {
              cards: {
                populate: {
                  icon: {
                    fields: ["url"],
                  },
                },
              },
            },
          },
          "approach.supporting": {
            populate: {
              image: {
                fields: ["url"],
              },
              lists: {
                populate: {
                  icon: {
                    fields: ["url"],
                  },
                },
              },
            },
          },
          "approach.working": {
            populate: {
              cards: true,
            },
          },
          "works.how": {
            populate: "*",
          },
          "works.journey": {
            populate: {
              cards: {
                populate: {
                  lists: true,
                  image: {
                    fields: ["url"],
                  },
                },
              },
            },
          },
          "works.safe": {
            populate: {
              cards: {
                populate: {
                  icon: {
                    fields: ["url"],
                  },
                },
              },
            },
          },
          "works.curriculum": {
            populate: {
              cards: {
                populate: {
                  icon: {
                    fields: ["url"],
                  },
                },
              },
            },
          },
          "works.future": {
            populate: {
              cards: {
                populate: {
                  icon: {
                    fields: ["url"],
                  },
                },
              },
            },
          },
          "works.portal": {
            populate: "*",
          },
          "contact.happens": {
            populate: {
              lists: true,
            },
          },
          "contact.questions": {
            populate: {
              cards: true,
            },
          },
        },
      },
    },
  });

export async function getPageData(slug: string) {
  const BASE_URL = getStrapiURL();
  const query = PageQuery(slug);
  const url = `${BASE_URL}/api/pages?${query}`;
  const response = await fetchAPI(url, { method: "GET" });
  return await fetchAPI(url, {
    method: "GET",
    next: { tags: ["strapi-data"] }, // Tag this request
  });
}

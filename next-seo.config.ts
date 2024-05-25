import { DefaultSeoProps } from "next-seo";

const url = "https://webmart-sigma.vercel.app";
const description =
  "Webmart is an online marketplace for buying and selling products.";
const title = "Webmart";

const config: DefaultSeoProps = {
  description,
  defaultTitle: title,
  canonical: url,
  additionalLinkTags: [
    {
      rel: "icon",
      href: `${url}/favicon.ico`,
    },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url,
    title,
    siteName: title,
    description,
    // Add your Open Graph image URL and properties here
    // images: [
    //   {
    //     url: "",
    //     alt: "",
    //     type: "image/png",
    //     secureUrl: "",
    //   },
    // ],
  },
  //   twitter: {
  //     handle: "@your_twitter_handle",
  //     site: "@your_twitter_site",
  //     cardType: "summary_large_image",
  //   },
};

export default config;

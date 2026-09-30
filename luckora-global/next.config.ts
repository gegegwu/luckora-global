import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/introvert-test",
        destination: "/guides/am-i-an-introvert-or-just-drained",
        permanent: true,
      },
      {
        source: "/attachment-style-test",
        destination: "/love-language-test",
        permanent: true,
      },
      {
        source: "/love-personality-test",
        destination: "/love-language-test",
        permanent: true,
      },
      {
        source: "/mbti-test",
        destination: "/personality-types",
        permanent: true,
      },
      {
        source: "/career-personality-test",
        destination: "/guides/personality-test-for-career-direction",
        permanent: true,
      },
    ];
  },
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;

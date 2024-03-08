/** @type {import('next').NextConfig} */

const debug = process.env.NODE_ENV !== "production";
const repository = "blg";

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: !debug ? `/${repository}/` : "", // 프로덕션 환경에서만 `/blg/` prefix 추가
  trailingSlash: true, // URL 끝에 슬래시(/) 추가
  output: "export", // SSG 사용
  env: {
    basePath: !debug ? "/blg" : "", // 프로덕션 환경에서만 `/blg` prefix 설정
  },
};

export default nextConfig;

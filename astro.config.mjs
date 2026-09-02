import { defineConfig } from "astro/config";

const githubUsername = process.env.PUBLIC_GITHUB_USERNAME || "jameschristophersan-pm";
const repoName = process.env.PUBLIC_GITHUB_REPO || "pm-portfolio";

export default defineConfig({
  site: `https://${githubUsername}.github.io`,
  base: `/${repoName}`,
  output: "static"
});

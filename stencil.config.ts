import { Config } from "@stencil/core";
import dotenvPlugin from "rollup-plugin-dotenv";
import html from "rollup-plugin-html";
import replace from "@rollup/plugin-replace";

// https://stenciljs.com/docs/config

export const config: Config = {
  namespace: "atomic-project",
  globalStyle: "src/style/index.css",
  taskQueue: "async",
  outputTargets: [
    {
      type: "www",
      serviceWorker: null, // disable service workers
      copy: [
        { src: "pages", keepDirStructure: false },
        {
          src: "../node_modules/@coveo/atomic/dist/atomic",
          dest: "atomic",
          keepDirStructure: false,
        },
      ],
    },
    {
      type: "dist",
    },
    {
      type: "dist-custom-elements",
    },
  ],
  devServer: {
    port: 3333,
  },
  plugins: [
    dotenvPlugin(),
    replace({
      "process.env.PLATFORM_URL": `'${process.env.PLATFORM_URL}'`,
      "process.env.ORGANIZATION_ID": `'${process.env.ORGANIZATION_ID}'`,
      "process.env.API_KEY": `'${process.env.API_KEY}'`,
    }),
  ],
  rollupPlugins: {
    before: [
      html({
        include: "src/components/**/*.html",
      }),
    ],
  },
};

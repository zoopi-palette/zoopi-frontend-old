/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    // ref: https://stackoverflow.com/a/61706308/11681543
    const fileLoaderRule = config.module.rules.find(rule => rule.test && rule.test.test(".svg"));
    fileLoaderRule.exclude = /\.svg$/;  

    config.module.rules.push({
      test: /\.svg$/,
      enforce: "pre",
      use: [{
        loader: "@svgr/webpack",
        options: {
          // ref: https://stackoverflow.com/a/71127131/11681543
          svgoConfig: {
            plugins: [
              {removeViewBox: false},
            ],
          },
        },
      }],
    });

    return config;
  }
}

module.exports = nextConfig

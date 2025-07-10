module.exports = () => {
  const appName = process.env.APP_NAME || "MyAppTemplate";
  const bundleId = process.env.BUNDLE_ID || "com.myapptemplate.default";
  const version = process.env.APP_VERSION || "1.0.0";

  return {
    expo: {
      name: appName,
      slug: appName.toLowerCase().replace(/\s+/g, "-"),
      version: version,
      orientation: "portrait",
      icon: "./assets/icon.png",
      userInterfaceStyle: "automatic",
      splash: {
        image: "./assets/splash.png",
        resizeMode: "contain",
        backgroundColor: "#ffffff",
      },
      assetBundlePatterns: ["**/*"],
      ios: {
        bundleIdentifier: bundleId,
        supportsTablet: true,
      },
      android: {
        package: bundleId,
      },
      updates: {
        enabled: true,
        url: "https://u.expo.dev/your-project-id",
      },
      runtimeVersion: {
        policy: "sdkVersion",
      },
    },
  };
};

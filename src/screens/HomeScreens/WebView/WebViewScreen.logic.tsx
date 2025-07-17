import { Linking } from "react-native";

export const userId = "123"; // add parameters that need to be passed to the web
export const defaultWebViewUrl = "https://edition.cnn.com/";

export function handleShouldStartLoadWithRequest(request: {
  url: string;
  navigationType?: string;
}): boolean {
  const { url, navigationType } = request;

  if (url === defaultWebViewUrl) return true;

  if (navigationType !== "click") {
    return true;
  }

  try {
    try {
      const testUrl = new URL(url);
      if (testUrl.protocol !== "http:" && testUrl.protocol !== "https:") {
        return false;
      }
    } catch {
      if (!url.startsWith("/")) {
        return false;
      }
    }

    const fullUrl = url.startsWith("http")
      ? url
      : new URL(url, defaultWebViewUrl).toString();

    const parsedUrl = new URL(fullUrl);
    parsedUrl.searchParams.set("userId", userId);

    Linking.openURL(parsedUrl.toString());
  } catch (e) {}

  return false;
}

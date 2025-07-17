import React from "react";
import { WebView } from "react-native-webview";

import {
  defaultWebViewUrl,
  handleShouldStartLoadWithRequest,
} from "./WebViewScreen.logic";

export function WebViewScreen() {
  return (
    <WebView
      source={{ uri: defaultWebViewUrl }}
      onShouldStartLoadWithRequest={handleShouldStartLoadWithRequest}
      originWhitelist={["*"]}
    />
  );
}

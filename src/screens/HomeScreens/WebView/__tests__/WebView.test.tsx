import {
  handleShouldStartLoadWithRequest,
  userId,
  defaultWebViewUrl,
} from "../WebViewScreen.logic";
import { Linking } from "react-native";

describe("handleShouldStartLoadWithRequest", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("allows loading default URL", () => {
    expect(handleShouldStartLoadWithRequest({ url: defaultWebViewUrl })).toBe(
      true
    );
  });

  it("opens external links with userId param", () => {
    const openURLMock = jest
      .spyOn(Linking, "openURL")
      .mockResolvedValue(undefined);

    const url = "https://example.com/page";
    const result = handleShouldStartLoadWithRequest({
      url,
      navigationType: "click",
    });

    expect(result).toBe(false);
    expect(openURLMock).toHaveBeenCalledWith(
      expect.stringContaining(`userId=${userId}`)
    );

    openURLMock.mockRestore();
  });

  it("handles invalid URL gracefully", () => {
    const warnMock = jest.spyOn(console, "warn").mockImplementation(() => {});
    const openURLMock = jest
      .spyOn(Linking, "openURL")
      .mockResolvedValue(undefined);

    const badUrl = "ht!tp://bad_url";

    const result = handleShouldStartLoadWithRequest({
      url: badUrl,
      navigationType: "click",
    });

    expect(result).toBe(false);
    expect(openURLMock).not.toHaveBeenCalled();

    warnMock.mockRestore();
    openURLMock.mockRestore();
  });
});

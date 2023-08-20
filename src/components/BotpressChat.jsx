import { useEffect } from "react";

function BotpressChat() {
  useEffect(() => {
    const injectScript = document.createElement("script");
    injectScript.src = "https://cdn.botpress.cloud/webchat/v0/inject.js";
    injectScript.async = true;

    document.head.appendChild(injectScript);

    const configScript = document.createElement("script");
    configScript.src =
      "https://mediafiles.botpress.cloud/3f6677f8-17aa-4258-8fb3-3aa9c273f9ce/webchat/config.js";
    configScript.defer = true;

    document.head.appendChild(configScript);

    return () => {
      document.head.removeChild(injectScript);
      document.head.removeChild(configScript);
    };
  }, []);

  return null; // No need for a wrapping div
}

export default BotpressChat;

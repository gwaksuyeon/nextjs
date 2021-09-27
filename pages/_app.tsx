import type { AppProps } from "next/app";
import { useEffect } from "react";
import Head from "next/head";
import "styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    if (navigator.userAgent.match(/MSIE|Internet Explorer|Trident/i)) {
      alert(
        "해당 사이트는 Microsoft Edge, Chrome 브라우저에 최적화 되어있습니다. \n 원활한 사용을 원하시면 Microsoft Edge, Chrome 브라우저를 권장합니다. \n 확인 버튼을 누르면 Edge브라우저로 자동으로 이동됩니다."
      );
      window.location.href = "microsoft-edge:" + window.location.href;
    }
  }, []);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no"
        />
        <title>next 테스트</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;

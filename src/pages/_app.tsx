import React from "react";
import { ConfigProvider } from "antd";
import type { AppProps } from "next/app";
import Layout from "@/components/layout";
import "@/styles/globals.css";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { SessionProvider } from "next-auth/react";

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => (
  <Provider store={store}>
    <SessionProvider session={session}>
      <ConfigProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ConfigProvider>
    </SessionProvider>
  </Provider>
);

export default App;

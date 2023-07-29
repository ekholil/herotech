import React from "react";
import { ConfigProvider } from "antd";
import type { AppProps } from "next/app";
import Layout from "@/components/layout";
import "@/styles/globals.css";

const App = ({ Component, pageProps }: AppProps) => (
  <ConfigProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ConfigProvider>
);

export default App;

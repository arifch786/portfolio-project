import Layout from "@/components/layout";
import "@/styles/globals.css";
import Home from ".";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

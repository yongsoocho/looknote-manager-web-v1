import "../styles/globals.css";
import Layout from "../layouts/Layout";
import { wrapper } from "./../redux/index";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default wrapper.withRedux(MyApp);

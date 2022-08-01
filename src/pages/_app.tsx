import "antd/dist/antd.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

import store from "../services/redux/store";

import { globalStyles } from "../styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;

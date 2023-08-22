// pages/_app.js

import "../styles/global.scss";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { ReduxProvider } from "./redux/features/provider";

function MyApp({ Component, pageProps }) {
  return (
    <ReduxProvider>
      <Component {...pageProps} />
    </ReduxProvider>
  );
}

export default MyApp;

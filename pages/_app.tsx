import "../styles/globals.css";
import type { AppProps } from "next/app";
import { store, persistor } from "store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { ErrorBoundary } from "components";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ErrorBoundary>
          <Component {...pageProps} />
        </ErrorBoundary>
      </PersistGate>
    </Provider>
  );
}

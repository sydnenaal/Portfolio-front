import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { incrementVisits } from "api";
import { rootReducer } from "ducks";
import { ModalContact } from "components";

incrementVisits();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

type Props = {
  Component: any;
  pageProps: any;
};

function MyApp({ Component, pageProps }: Props) {
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
        <ModalContact />
      </Provider>
    </>
  );
}

export default MyApp;

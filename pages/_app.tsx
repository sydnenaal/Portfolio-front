import { useEffect } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { incrementVisits } from "api";
import { rootReducer } from "ducks";
import { ModalContact } from "components";
import { useRequest } from "hooks";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

type Props = {
  Component: any;
  pageProps: any;
};

function MyApp({ Component, pageProps }: Props) {
  const queryWrapper = useRequest();

  useEffect(() => {
    queryWrapper(incrementVisits);
  }, [queryWrapper]);

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

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { incrementVisits } from "api";
import { rootReducer } from "ducks";
import ModalContact from "components/contact/component";

incrementVisits();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

type Props = {
  Component: any;
  pageProps: any;
};

const MyApp: React.FC<Props> = ({ Component, pageProps }) => {
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
        <ModalContact />
      </Provider>
    </>
  );
};

export default MyApp;

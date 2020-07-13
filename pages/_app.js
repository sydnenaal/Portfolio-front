import { useEffect } from "react";

import { incrementVisits } from "api";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    incrementVisits();
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;

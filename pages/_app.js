import "../styles/globals.css";
import DynamicFavicon from "../components/DynamicFavicon";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DynamicFavicon />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

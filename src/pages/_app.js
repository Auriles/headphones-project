import Theme from '../themes/Theme';
import "../../sass/main.scss";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}

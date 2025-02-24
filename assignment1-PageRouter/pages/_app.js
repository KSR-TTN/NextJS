import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main className="p-4">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default MyApp;

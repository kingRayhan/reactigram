import LoadingProvider from "@/components/LoadingProvider";
import AuthContextProvider from "@/contexts/AuthContext";
import "../styles/app.scss";

const App = ({ Component, pageProps }) => {
  return (
    <AuthContextProvider>
      <LoadingProvider>
        <Component {...pageProps} />
      </LoadingProvider>
    </AuthContextProvider>
  );
};

export default App;

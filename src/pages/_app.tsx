// pages/_app.tsx
import { AppProps } from "next/app";
import { AuthContext, AuthProvider } from "../contexts/AuthContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { getTokenLocal } from "@/utils/common";

function MyApp({ Component, pageProps }: AppProps) {
  const authContext = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!getTokenLocal()) {
      router.push("/login"); // Redirect to the login page if not authenticated
    } else {
      authContext?.setAuthenticated(true);
    }
  }, []);

  return (
    <AuthProvider>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </AuthProvider>
  );
}

export default MyApp;

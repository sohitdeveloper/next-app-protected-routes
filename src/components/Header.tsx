import { AuthContext } from "@/contexts/AuthContext";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import Link from "next/link";
import HTTPService from "@/services/HttpService";
import UrlConstants from "@/utils/constants/UrlConstants";
import { flushLocalstorage, getTokenLocal } from "@/utils/common";

const headerStyles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#333",
    color: "white",
    padding: "1rem",
  },
  logo: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  nav: {
    flex: 1,
    marginLeft: "1rem",
  },
  navList: {
    listStyle: "none",
    display: "flex",
    justifyContent: "space-around",
  },
  navItem: {
    margin: "0 0.5rem",
    color: "white",
    textDecoration: "none",
  },
  loginLogout: {
    backgroundColor: "transparent",
    border: "none",
    color: "white",
    cursor: "pointer",
    fontSize: "16px",
  },
};

const Header: React.FC = () => {
  const authContext = useContext(AuthContext);
  const router = useRouter();

  const handleLogout = () => {
    let accessToken = getTokenLocal() ? true : false;
    HTTPService(
      "POST",
      UrlConstants.base_url + UrlConstants.logout,
      false,
      false,
      true,
      accessToken
    )
      .then((res: any) => {
        flushLocalstorage();
        router.push("/login");
        authContext?.setAuthenticated(false);
      })
      .catch((err: any) => {
        console.log(err);
      });
  };

  if (authContext?.isAuthenticated) {
    return (
      <header style={headerStyles.header}>
        <div style={headerStyles.logo}>Your Logo</div>
        <nav style={headerStyles.nav}>
          <ul style={headerStyles.navList}>
            <li style={headerStyles.navItem}>
              <Link href="/" style={{ color: "white", textDecoration: "none" }}>
                Home
              </Link>
            </li>
            <li style={headerStyles.navItem}>
              <Link
                href="/dashboard"
                style={{ color: "white", textDecoration: "none" }}
              >
                Dashboard
              </Link>
            </li>
            <li style={headerStyles.navItem}>
              <Link
                href="/contacts"
                style={{ color: "white", textDecoration: "none" }}
              >
                Contacts
              </Link>
            </li>
          </ul>
        </nav>
        <div>
          <button
            style={headerStyles.loginLogout}
            onClick={() => handleLogout()}
          >
            Logout
          </button>
        </div>
      </header>
    );
  } else {
    return <></>;
  }
};

export default Header;

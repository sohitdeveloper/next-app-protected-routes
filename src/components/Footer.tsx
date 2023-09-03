import React from "react";

const Footer = () => {
  return (
    <footer>
      <div
        style={{
          background: "#f5f5f5",
          padding: "20px",
          margin: "20px 0",
        }}
      >
        <div style={{ display: "flex", marginBottom: "20px" }}>
          <div style={{ flex: 1 }}>
            <h3 style={{ textAlign: "center" }}>About Us</h3>
            <p style={{ textAlign: "center" }}>
              We are a team of developers who are passionate about creating
              great software.
            </p>
          </div>
          <div style={{ flex: 1 }}>
            <h3 style={{ textAlign: "center" }}>Contact Us</h3>
            <p style={{ textAlign: "center" }}>
              You can contact us at{" "}
              <a href="mailto:info@example.com">info@example.com</a>.
            </p>
          </div>
          <div style={{ flex: 1 }}>
            <h3 style={{ textAlign: "center" }}>Social Media</h3>
            <ul
              style={{ textAlign: "center", listStyleType: "none", padding: 0 }}
            >
              <li>
                <a href="https://www.facebook.com/example">Facebook</a>
              </li>
              <li>
                <a href="https://twitter.com/example">Twitter</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/example">LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

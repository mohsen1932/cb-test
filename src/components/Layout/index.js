import React from "react";
import PropTypes from "prop-types";
import Header from "components/Header";
import './layout.scss'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        <div className="container-xl">{children}</div>
      </main>
      {/* Footer */}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.any,
};

export default Layout;

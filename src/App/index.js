import React from "react";
import Layout from "components/Layout";
import PopularList from "components/PopularList";
import ThemePacks from "components/ThemePacks";
import "./app.scss";

const App = () => (
  <Layout>
    <div className="container-xl">
      <div className="row">
        <div className="col">
          <PopularList />
          <ThemePacks />
        </div>
      </div>
    </div>
  </Layout>
);

export default App;

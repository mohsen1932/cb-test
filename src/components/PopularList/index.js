import React, { useEffect, useState } from "react";
import List from "./List";
import "./popular-list.scss";

const PopularList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(async () => {
    setLoading(true);
    const response = await fetch(
      "http://localhost:9000/assets/popular-searches.json"
    );
    const items = await response.json();
    setData(items);
    setLoading(false);
  }, []);
  return (
    <>
      <h2 className="d-none d-lg-flex">Popular Searches</h2>
      {loading && <span>loading ...</span>}
      <ul className="popular-list row">
        {/* Normally i should do data.map()
           but since i wanted to arrange the items like the desings,
            i created a component to chunck them into columns */}
        <List items={data} desktopCols={4} mobileCols={2} />
      </ul>
    </>
  );
};

export default PopularList;

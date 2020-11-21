import React from "react";
import PropTypes from "prop-types";
import keygen from "Helpers/keygen";

const List = ({ items, desktopCols = 1, mobileCols = 1 }) => {
  if (items.length === 0) return null;
  // if the items count is less than expected columns
  if (items.length < desktopCols) {
    return (
      <div className="col">
        {items.map((item) => (
          <li key={keygen()}>
            <a href={item.url}>{item.name}</a>
          </li>
        ))}
      </div>
    );
  }
  let output = [];
  const chunk = items.length / desktopCols;
  for (let i = 0; i < items.length; i += chunk) {
    let temparray = items.slice(i, i + chunk);
    let row = temparray.map((item) => (
      <li key={keygen()}>
        <a href={item.url}>{item.name}</a>
      </li>
    ));
    output.push(
      <div
        className={`col col-lg-${12 / desktopCols} col-${12 / mobileCols}`}
        key={keygen()}
        id={`col_${i}`}
      >
        {row}
      </div>
    );
  }
  return output;
};

List.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      url: PropTypes.string,
    })
  ).isRequired,
  desktopCols: PropTypes.number,
  mobileCols: PropTypes.number,
};

export default List;

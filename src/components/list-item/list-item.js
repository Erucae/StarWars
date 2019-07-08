import React from "react";
import "./list-item.css";

const ListItem = ({ id, item, onClickItem, renderItem }) => (
  <div className="list-item-wrapper">
    <span
      className="item-name"
      onClick={() => {
        onClickItem(id);
      }}
    >
      {renderItem(item)}
    </span>
    <hr />
  </div>
);

export default ListItem;

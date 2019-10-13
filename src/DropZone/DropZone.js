import React, { useState } from "react";
import "./dropzone.css";

function DropZone(props) {
  const [classifiedItems, setClassifiedItems] = useState([]);
  const [dragOverStyles, setDragOverStyles] = useState({});

  function addNewItem(item) {
    setClassifiedItems(items => {
      if (items.includes(item)) {
        return items;
      } else {
        return [...items, item];
      }
    });
  }

  function handleDragOver(ev) {
    ev.preventDefault();
    ev.dataTransfer.dropEffect = "move";
    setDragOverStyles({
      border: "1px solid red"
    });
  }

  function handleDrop(ev) {
    ev.preventDefault();
    const orgId = ev.dataTransfer.getData("orgId");
    addNewItem(orgId);
    setDragOverStyles({});
  }

  function handleDragLeave(event) {
    event.preventDefault();
    setDragOverStyles({});
  }

  return (
    <div
      className="dropzone"
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      style={dragOverStyles}
    >
      <h4>{props.category}</h4>
      <h2>{classifiedItems.length}</h2>
    </div>
  );
}

export default DropZone;

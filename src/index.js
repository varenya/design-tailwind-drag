import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Card, CardHeader, CardName, CardDOB, CardAddress } from "./Card";
import { CardDBProvider, useCardDB } from "./CardDB";
import DropZone from "./DropZone";

import "./styles.css";

function DraggableCard(props) {
  const { cardData, addDroppedItem } = props;

  function handleDragStart(event) {
    event.dataTransfer.setData("orgId", cardData.orgId);
  }

  function handleDragEnd(event) {
    event.preventDefault();
    if (event.dataTransfer.dropEffect !== "none") {
      addDroppedItem(cardData.orgId);
    }
  }
  return (
    <Card draggable onDragEnd={handleDragEnd} onDragStart={handleDragStart}>
      <CardHeader
        planet={cardData.planet}
        org={cardData.org}
        orgId={cardData.orgId}
      />
      <CardName name={cardData.name} />
      <CardDOB dob={cardData.dob.toDateString()} />
      <CardAddress company={cardData.compay} address={cardData.address} />
    </Card>
  );
}

function App() {
  const [droppedItems, setDroppedItems] = useState([]);
  function addDroppedItem(item) {
    setDroppedItems(items => [...items, item]);
  }
  const cardData = useCardDB();
  return (
    <div className="App">
      <h1>Drag and Drop to choose team</h1>
      <section className="choose_teams">
        <section className="cards">
          {cardData
            .filter(({ orgId }) => !droppedItems.includes(orgId))
            .map(eachCardData => (
              <DraggableCard
                key={eachCardData.orgId}
                cardData={eachCardData}
                addDroppedItem={addDroppedItem}
              />
            ))}
        </section>
        <section className="dropzones">
          <DropZone category="Team Captain" />
          <DropZone category="Team Iron Man" />
        </section>
      </section>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <CardDBProvider>
    <App />
  </CardDBProvider>,
  rootElement
);

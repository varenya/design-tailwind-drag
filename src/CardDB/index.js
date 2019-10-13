import React, { useContext } from "react";

const CardDB = React.createContext([]);

const cardData = [
  {
    name: "Capt. Steve Rogers",
    planet: "Earth-616",
    org: "S.H.I.E.L.D",
    orgId: "678-136-7092",
    dob: new Date("04-26-2019"),
    company: "Stark Industries",
    address: "Avengers Facility, Upstate, New York"
  },
  {
    name: "Hulk",
    planet: "Earth-616",
    org: "S.H.I.E.L.D",
    orgId: "678-136-7093",
    dob: new Date("04-26-1991"),
    company: "Stark Industries",
    address: "Avengers Facility, Upstate, New York"
  },
  {
    name: "Iron Man",
    planet: "Earth-616",
    org: "S.H.I.E.L.D",
    orgId: "678-136-7094",
    dob: new Date("04-26-1973"),
    company: "Stark Industries",
    address: "Avengers Facility, Upstate, New York"
  },
  {
    name: "Spider Man",
    planet: "Earth-616",
    org: "S.H.I.E.L.D",
    orgId: "678-136-7095",
    dob: new Date("04-26-1973"),
    company: "Stark Industries",
    address: "Avengers Facility, Upstate, New York"
  },
  {
    name: "Captain Marvel",
    planet: "Earth-616",
    org: "S.H.I.E.L.D",
    orgId: "678-136-7097",
    dob: new Date("04-26-1973"),
    company: "Stark Industries",
    address: "Avengers Facility, Upstate, New York"
  }
];

function CardDBProvider(props) {
  return <CardDB.Provider value={cardData}>{props.children}</CardDB.Provider>;
}

function useCardDB() {
  const cardData = useContext(CardDB);
  if (cardData === undefined) {
    throw new Error("card data not provided");
  }
  return cardData;
}

export { CardDBProvider, useCardDB };

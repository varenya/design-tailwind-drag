import React from "react";
import "./card.css";

function CardHeader(props) {
  const { planet, org, orgId, ...rest } = props;
  return (
    <div className="header" {...rest}>
      <div>
        <span>{props.planet}</span>
      </div>
      <div>
        <span>{props.org}</span>
      </div>
      <div>
        <span>{props.orgId}</span>
      </div>
    </div>
  );
}

function CardName(props) {
  return (
    <div className="name" {...props}>
      <h4>{props.name}</h4>
    </div>
  );
}
function CardDOB(props) {
  return (
    <div className="dob" {...props}>
      {props.dob}
    </div>
  );
}

function CardAddress(props) {
  return (
    <>
      <div className="company">{props.company}</div>
      <div className="address">{props.address}</div>
    </>
  );
}

function Card(props) {
  const { style, ...rest } = props;
  return <div className="card" style={props.style} {...rest} />;
}

export { Card, CardHeader, CardName, CardDOB, CardAddress };

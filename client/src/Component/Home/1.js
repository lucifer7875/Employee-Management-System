import React from "react";
import welcome from "../assets/welcome.png";
import Hello from "../assets/logo.png";

const One = () => {
  return (
    <div>
      <img src={Hello} style={{margin:"80px 0px 0px 30px",width:"300px"}}/>
      <br />
      <img src={welcome} style={{margin:"59px 0px 0px 250px",width:"450px"}} />
    </div>
  );
};

export default One;

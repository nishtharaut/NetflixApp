import React from "react";
import Card from "./Cards";
import Sdata from "./Sdata";

const Amazon=()=>{
return (
    <Card
      key={Sdata[5].id}
      imgsrc={Sdata[5].imgsrc}
      title={Sdata[5].title}
      sname={Sdata[5].sname}
      link={Sdata[5].link}
    />
  );
}
export default Amazon;
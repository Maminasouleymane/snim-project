import React, { useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import EmptyEpGraphe from "./EmptyEpGraphe";
import EmptyRendementGraphe from "./EmptyRendementGraphe";
import EmptyMtbfGraphe from "./EmptyMtbfGraphe";
import EmptySpHuileGraphe from "./EmptySpHuileGraphe";
import EmptyTmarcheGraphe from "./EmptyTmarcheGraphe";
import ArretGraphe from "./ArretGraphe";
import LiaisonGraphe from "./LiaisonGraphe";
import EmptySpCombustibleGraphe from "./EmptySpCombustibleGraphe";
import moment from "moment";

const Index = () => {
  const currentMonth = moment().format("MMMM");
  console.log("im the current month", currentMonth);
  const [months, setMonths] = useState(moment.months());
  console.log(months);
  const p = moment.months().filter((mon) => mon !== moment().format("MMMM"));
  // console.log(p);
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className="grapheContainer">
      {/* <h3 className="printButton" align="center"></h3>  
      <select name="mois" style={{width: "120px"}} onChange={(e) => console.log(e.target.value)}>
      {months.map((month) => {
          return <option value={month}>{month}</option>
      })}
      </select>
      <button onClick={handlePrint}> Imprimer </button> */}
      <h1> PRINCIPAUX INDOCATEURS DE PERFORMANCES DE LA CENTRALE NDB </h1>
      <h1>
        Période du: {moment().startOf("month").format("DD/MM/YYYY")} au{" "}
        {moment().format("DD/MM/YYYY")}{" "}
      </h1>
      <div ref={componentRef}>
        <div>
          <div className="ctn">
            <EmptyRendementGraphe />
            <EmptyEpGraphe />
          </div>
          <div className="wrapper2">
            <EmptyMtbfGraphe />
            <EmptyTmarcheGraphe />
          </div>
          <div className="wrapper3">
            <EmptySpHuileGraphe />
            <EmptySpCombustibleGraphe />
          </div>
          <div className="ctn1">
            <ArretGraphe />

            <LiaisonGraphe />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

import React, {useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import EpGraphe from "./EpGraphe";
import RendementGraphe from "./RendementGraphe";
import MtbfGraphe from "./MtbfGraphe";
import SpHuileGraphe from "./SpHuileGraphe"
import TmarcheGraphe from "./TmarcheGraphe"
import ArretGraphe from "./ArretGraphe"
import LiaisonGraphe from "./LiaisonGraphe"
import SpCombustibleGraphe from "./SpCombustibleGraphe"
import moment from "moment";

const Index = () => {
  // const months = moment.months();
  
const currentMonth = moment().format("MMMM")
console.log('im the current month' , currentMonth)
const [months, setMonths] = useState(moment.months())
console.log(months);
  const p = moment.months().filter((mon) => mon !== moment().format("MMMM"));
  // console.log(p);
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className="grapheContainer">
  {  /* <h3 className="printButton" align="center"></h3>  
      <select name="mois" style={{width: "120px"}} onChange={(e) => console.log(e.target.value)}>
      {months.map((month) => {
          return <option value={month}>{month}</option>
      })}
      </select>
      <button onClick={handlePrint}> Imprimer </button> */}
      <h1 > PRINCIPAUX INDOCATEURS DE PERFORMANCES DE LA CENTRALE NDB </h1>
       <h1>Periode du: {moment().startOf("month").format("DD/MM/YYYY")} au {moment().format("DD/MM/YYYY")} </h1>
      <div ref={componentRef}>
      <div className="wrapper1">
        <EpGraphe />
        <RendementGraphe />
      </div>
        
        <div className="wrapper2">
        <MtbfGraphe />
        <TmarcheGraphe />
        </div>
        
        <div className="wrapper3">
          <SpHuileGraphe />
           <SpCombustibleGraphe />
        </div>

        <div className="wrapper4">
        <ArretGraphe />
        <LiaisonGraphe />
        </div>
        
      </div>
    </div>
  );
};

export default Index;

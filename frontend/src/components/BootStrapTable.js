import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import cellEditFactory from "react-bootstrap-table2-editor";
import { connect } from "react-redux";
import { sendGroupe } from "../actions/groupe";
import { useHistory } from "react-router-dom"
import SaisieHeader from "./SaisieHeader"
import axios from "axios";


const columns = [
  {
    dataField: "groupe",
    text: "Groupe",
  },
  {
    dataField: "ep",
    text: "EP Mwh",
    // validator: (newValue, row, column) => {
    //   if (isNaN(newValue)) {
    //     return {
    //       valid: false,
    //       message: "Price should be numeric",
    //     };
    //   }
    //   if (typeof newValue === "string") {
    //     return {
    //       valid: false,
    //       message: "champ doit etre un chiffre",
    //     };
    //   }
    //   return true;
    // },
  },
  {
    dataField: "hmarche",
    text: "Hmarche",
  },
  {
    dataField: "np",
    text: "NP",
  },
  {
    dataField: "huile",
    text: "Huile",
  },
  {
    dataField: "comb",
    text: "Comb",
  },
  {
    dataField: "ap",
    text: "AP",
  },
  {
    dataField: "ai",
    text: "AI",
  },
];
const groupes = [
  { groupe: "GR3", ep: 0, hmarche: 0, np: 0, huile: 0, comb: 0, ai: 0, ap: 0 },
  { groupe: "GR7", ep: 0, hmarche: 0, np: 0, huile: 0, comb: 0, ai: 0, ap: 0 },
  { groupe: "GR8", ep: 0, hmarche: 0, np: 0, huile: 0, comb: 0, ai: 0, ap: 0 },
  { groupe: "GR10", ep: 0, hmarche: 0, np: 0, huile: 0, comb: 0, ai: 0, ap: 0 },
  { groupe: "EO", ep: 0, hmarche: 0, np: 0, huile: 0, comb: 0, ai: 0, ap: 0 },
];



const GroupesTables = (props) => {
  const history = useHistory();
  const sendToServer = () => {
  axios.post("http://localhost:3009/add_groupe", groupes).then(
    (response) => {
      console.log(response);
      window.confirm(response.data); // need to add some confirmation in here
      history.push("/sjmcndb");
      location.reload();
    },
    (error) => {
      console.log(error);
    }
  );
};
  return (
    <div className="container">
    <div className="">
    <SaisieHeader name={" Les groupes"} />
    </div>
    
    <div className="dataTable">
     <BootstrapTable
        keyField="groupe"
        data={groupes}
        columns={columns}
        cellEdit={cellEditFactory({ mode: "click", blurToSave: true })}
        striped
        hover
        condensed
      />
      <button
        className="btn btn-primary"
        style={{
          float: "right",
          marginBottom: "4rem",
          width: "17rem",
        }}
        onClick={sendToServer}
      >
        Enregistrer
      </button>
    </div>
     
    </div>
  );
};

const mapStateToProps = (state) => {
  const { groupe } = state;
  return {
    groupe,
  };
};

export default connect(mapStateToProps)(GroupesTables);

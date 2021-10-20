import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import cellEditFactory from "react-bootstrap-table2-editor";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import SaisieHeader from "./SaisieHeader";
import axios from "axios";

const columns = [
  {
    dataField: "auxillier",
    text: "Auxiliaire",
  },
  {
    dataField: "valeur",
    text: "Valeur",
  },
];
const auxillier = [
  { auxillier: "OBB1", valeur: 0 },
  { auxillier: "OBB2", valeur: 0 },
  { auxillier: "SPEDM", valeur: 0 },
];

const OperationTable = () => {
  const history = useHistory();
  const sendToServer = () => {
    let data = {
      obb1: auxillier[0].valeur,
      obb2: auxillier[1].valeur,
      spedm: auxillier[2].valeur,
    };
    console.log(data);
    axios.post("http://localhost:3009/addAuxiliair", data).then(
      (response) => {
        window.confirm(response.data); // need to add some confirmation in here
        history.push("/auxiliaireHistory");
        location.reload();
      },
      (error) => {
        console.log(error);
      }
    );
  };

  return (
    <div className="operationContainer">
      <SaisieHeader name={" Les auxiliaires"} />
      <div className="OperationTable">
        <BootstrapTable
          keyField="auxillier"
          style={{ width: "70%" }}
          data={auxillier}
          columns={columns}
          cellEdit={cellEditFactory({ mode: "click", blurToSave: true })}
          striped
          hover
          condensed
        />
      </div>
      <div className="btnContainer">
        <button className="btn btn-primary" onClick={sendToServer}>
          Enregistrer
        </button>
      </div>
    </div>
  );
};

export default connect()(OperationTable);

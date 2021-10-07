import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import cellEditFactory from "react-bootstrap-table2-editor";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import { connect } from "react-redux";
import { sendGroupe } from "../actions/groupe";
import SaisieHeader from "./SaisieHeader"
import axios from "axios";

const columns = [
  {
    dataField: "operation",
    text: "Operation",
  },
  {
    dataField: "valeur",
    text: "Valeur",
  },
];
const operation = [
  { operation: "OP1", valeur: 0 },
  { operation: "OP2", valeur: 0 },
  { operation: "OP3", valeur: 0 },
];

const sendToServer = (props) => {
  let data = {
    op1: operation[0].valeur,
    op2: operation[1].valeur,
    op3: operation[2].valeur,
  };
  console.log(data);
  axios.post("http://localhost:3009/add_operation", data).then(
    (response) => {
      console.log(response);
      window.confirm(response.data); // need to add some confirmation in here
      props.history.push("/")
    },
    (error) => {
      console.log(error);
    }
  );
};

const OperationTable = (props) => {
  return (
    <div className="operationContainer">
    <SaisieHeader name={"Les operations"} />
    <div className="OperationTable">
    <BootstrapTable
        keyField="operation"
        style ={{width :"70%"}}
        data={operation}
        columns={columns}
        cellEdit={cellEditFactory({ mode: "click", blurToSave: true })}
        striped
        hover
        condensed
      />
    </div>
    <div className="btnContainer">
     <button
        className="btn btn-primary"
       
        onClick={sendToServer}
      >   
        Enregistrer
      </button>
    </div>
    </div>
  );
};

export default connect()(OperationTable);

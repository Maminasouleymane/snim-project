import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import cellEditFactory from "react-bootstrap-table2-editor";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import { connect } from "react-redux";
import { sendGroupe } from "../actions/groupe";
import SaisieHeader from "./SaisieHeader";
import { useHistory } from "react-router-dom";
import moment from "moment";
import axios from "axios";

const columns = [
  {
    dataField: "consomateur",
    text: "Producteur",
  },
  {
    dataField: "ead",
    text: "index début EA",
  },
  {
    dataField: "erd",
    text: "index début ER",
  },
  {
    dataField: "eaf",
    text: "index fin EA",
  },
  {
    dataField: "erf",
    text: "index fin ER",
  },
  {
    dataField: "ea",
    text: "EA",
  },
  {
    dataField: "er",
    text: "ER",
  },
];
const date = moment().format("DD/MM/YYYY");
const liaison = [
  { date, consomateur: "snim", ead: 0, erd: 0, eaf: 0, erf: 0, ea: 0, er: 0 },
  { date, consomateur: "somlec", ead: 0, erd: 0, eaf: 0, erf: 0, ea: 0, er: 0 },
];

const SmlVersSnim = () => {
  const history = useHistory();

  const sendToServer = () => {
    axios.post("http://localhost:3009/addLiaison", liaison).then(
      (response) => {
        console.log(response);
        window.confirm(response.data); // need to add some confirmation in here
        history.push("/laisonsnimsomlec");
        location.reload();
      },
      (error) => {
        console.log(error);
      }
    );
  };
  return (
    <div style={{ marginTop: "15rem", marginLeft: "10rem", width: "80%" }}>
      <SaisieHeader name="la liason SNIM/SML" />
      <BootstrapTable
        keyField="consomateur"
        data={liaison}
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
  );
};

const mapStateToProps = (state) => {
  const { groupe } = state;
  return {
    groupe,
  };
};

export default connect()(SmlVersSnim);

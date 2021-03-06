import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import cellEditFactory from "react-bootstrap-table2-editor";
import { connect } from "react-redux";
import { sendGroupe } from "../../actions/groupe";
import { useHistory } from "react-router-dom";
import SaisieHeader from "../SaisieHeader";
import axios from "axios";
import moment from "moment";

const date = moment().format("DD/MM/YYYY");

const columns = [
  {
    dataField: "numero",
    text: "Numero",
  },
  {
    dataField: "ep",
    text: "EP Mwh",
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
  {
    date,
    numero: "GR3",
    ep: 0,
    hmarche: 0,
    np: 0,
    huile: 0,
    comb: 0,
    ai: 0,
    ap: 0,
  },
  {
    date,
    numero: "GR7",
    ep: 0,
    hmarche: 0,
    np: 0,
    huile: 0,
    comb: 0,
    ai: 0,
    ap: 0,
  },
  {
    date,
    numero: "GR8",
    ep: 0,
    hmarche: 0,
    np: 0,
    huile: 0,
    comb: 0,
    ai: 0,
    ap: 0,
  },
  {
    date,
    numero: "GR10",
    ep: 0,
    hmarche: 0,
    np: 0,
    huile: 0,
    comb: 0,
    ai: 0,
    ap: 0,
  },
  {
    date,
    numero: "EO",
    ep: 0,
    hmarche: 0,
    np: 0,
    huile: 0,
    comb: 0,
    ai: 0,
    ap: 0,
  },
];

const GroupeInsertion = () => {
  const history = useHistory();
  const sendToServer = () => {
    axios.post("http://localhost:3009/groupe", groupes).then(
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
    <div className="groupeContainer">
      <div className="container">
        <div className="">
          <SaisieHeader name={" Les groupes"} />
        </div>

        <div className="dataTable">
          <BootstrapTable
            keyField="numero"
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
    </div>
  );
};

const mapStateToProps = (state) => {
  const { groupe } = state;
  return {
    groupe,
  };
};

export default connect(mapStateToProps)(GroupeInsertion);

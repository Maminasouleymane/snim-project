import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import cellEditFactory from "react-bootstrap-table2-editor";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import { connect, useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import SaisieHeader from "../SaisieHeader";
import axios from "axios";
import { saveAuxiliaire } from "../../reducers/auxiliaire";
import SendInfo from "../../selectors/sendData";

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
const AuxiliaireInsertion = () => {
  const auxiliaire = useSelector((state) => state.auxiliaire);
  const dispatch = useDispatch();
  const history = useHistory();
  let data = {
    obb1: auxillier[0].valeur,
    obb2: auxillier[1].valeur,
    spedm: auxillier[2].valeur,
  };
  console.log(data);

  // const sendToServer = () => dispatch(saveAuxiliaire());
  const sendToServer = () => {
    alert(data);
    axios.post("http://localhost:3009/auxiliair", data).then(
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
    <div className="groupeContainer">
      <div className="container">
        <div className="">
          <SaisieHeader name={" Les auxiliaires"} />
        </div>

        <div className="dataTable">
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

        <button
          className="btn btn-primary"
          onClick={sendToServer}
          style={{
            float: "right",
            marginBottom: "4rem",
            width: "17rem",
          }}
        >
          Enregistrer
        </button>
      </div>
    </div>
  );
};

export default connect()(AuxiliaireInsertion);

import React from "react";
import { connect } from "react-redux";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryGroup,
  VictoryLabel,
} from "victory";
import selectedData from "../../selectors/info";
import MtbfGraphe from "./MtbfGraphe";

const EmptyMtbfGraphe = (props) => {
  if (props.groupe.length === 0) {
    return <h2>Empty</h2>;
  }
  return <MtbfGraphe />;
};

const mapStateToProps = (state) => {
  const { groupe, filters } = state;
  return {
    groupe: selectedData(groupe, filters),
  };
};
export default connect(mapStateToProps)(EmptyMtbfGraphe);

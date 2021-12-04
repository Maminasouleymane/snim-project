import React, { useState } from "react";
import { connect } from "react-redux";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryGroup,
  VictoryLabel,
} from "victory";
import selectedData from "../selectors/info";
import RendementGraphe from "./RendementGraphe";

const EmptyRendementGraphe = (props) => {
  if (props.groupe.length === 0) {
    return (
      <div className="emptyGraphe">
        <VictoryChart>
          <VictoryGroup offset={20} colorScale={"qualitative"}>
            <VictoryBar
              labels={({ datum }) => datum.y}
              style={{
                labels: { fill: "green", fontSize: 8, fontStyle: "Bold" },
              }}
              labelComponent={<VictoryLabel dy={-10} size={5} />}
              data={[
                { x: 1, y: 0 },
                { x: 2, y: 0 },
                { x: 3, y: 0 },
                { x: 4, y: 0 },
                { x: 5, y: 0 },
              ]} // daily value
            />
            <VictoryBar
              labels={({ datum }) => datum.y}
              style={{ labels: { fill: "blue", fontSize: 8 } }}
              labelComponent={<VictoryLabel dy={-10} />}
              data={[
                { x: 1, y: 0 },
                { x: 2, y: 0 },
                { x: 3, y: 0 },
                { x: 4, y: 0 },
                { x: 5, y: 0 },
              ]} //monthly value
            />
            <VictoryAxis
              tickValues={["G3", "G7", "G8", "G10", "Thermique"]}
              label="Rendement (%)"
            />
            <VictoryAxis
              dependentAxis
              tickValues={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
              label="%"
              style={{ labels: { fill: "blue" } }}
            />
          </VictoryGroup>
        </VictoryChart>
      </div>
    );
  }
  return <RendementGraphe />;
};

const mapStateToProps = (state) => {
  const { groupe, filters } = state;
  return {
    groupe: selectedData(groupe, filters),
  };
};
export default connect(mapStateToProps)(EmptyRendementGraphe);

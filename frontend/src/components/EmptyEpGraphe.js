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
import EpGraphe from "./EpGraphe";

const EmptyEpGraphe = (props) => {
  if (props.groupe.length === 0) {
    return (
      <div>
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
              tickValues={["G3", "G7", "G8", "G10", "EO", "Total"]}
              label="Energie Produite (Mwh)"
            />
            <VictoryAxis
              dependentAxis
              tickValues={[
                0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100,
                1200, 1300, 1400, 1500,
              ]}
              label=""
              style={{ labels: { fill: "blue" } }}
            />
          </VictoryGroup>
        </VictoryChart>
      </div>
    );
  }
  return <EpGraphe />;
};

const mapStateToProps = (state) => {
  const { groupe, filters } = state;
  return {
    groupe: selectedData(groupe, filters),
  };
};

export default connect(mapStateToProps)(EmptyEpGraphe);

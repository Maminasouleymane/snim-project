import React, { useState, useEffect } from "react";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryGroup,
  VictoryLabel,
} from "victory";
import { connect } from "react-redux";
import { startSetGroupe } from "../../actions/groupe";
import Loading from "../Loading";
import selectedData from "../../selectors/info";

const EpGraphe = (props) => {
  const [groupe, setGroupe] = useState(null);
  console.log("read", props.groupe);
  const result = props.groupe.reduce((r, o) => {
    let k = o.numero; // unique `loc` key
    if (r[k] || (r[k] = []))
      r[k].push({ date: o.date, numero: o.numero, ep: o.ep });
    return r;
  }, []);
  const { GR3, GR7, GR8, GR10 } = result;

  let cumG3 = GR3.reduce((sum, arr) => {
    return sum + arr.ep;
  }, 0);

  let cumG7 = GR7.reduce((sum, arr) => {
    return sum + arr.ep;
  }, 0);

  let cumG8 = GR8.reduce((sum, arr) => {
    return sum + arr.ep;
  }, 0);

  let cumG10 = GR10.reduce((sum, arr) => {
    return sum + arr.ep;
  }, 0);

  let gr3Today = GR3[GR3.length - 1].ep;
  let gr7Today = GR7[GR7.length - 1].ep;
  let gr8Today = GR8[GR8.length - 1].ep;
  let gr10Today = GR10[GR10.length - 1].ep;

  let totalDeLaJourne = gr8Today + gr3Today + gr7Today + gr10Today;
  let totalMansuel = cumG3 + cumG7 + cumG8 + cumG10;
  if (props.groupe.length === 0) {
    return (
      <div>
        <h2> Empty EREA </h2>
      </div>
    );
  }
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
              { x: 1, y: gr3Today },
              { x: 2, y: gr7Today },
              { x: 3, y: gr8Today },
              { x: 4, y: gr10Today },
              { x: 5, y: gr10Today },
              ,
              { x: 6, y: totalDeLaJourne },
            ]} // daily value
          />
          <VictoryBar
            labels={({ datum }) => datum.y}
            style={{ labels: { fill: "blue", fontSize: 8 } }}
            labelComponent={<VictoryLabel dy={-10} />}
            data={[
              { x: 1, y: cumG3 },
              { x: 2, y: cumG7 },
              { x: 3, y: cumG8 },
              { x: 4, y: cumG10 },
              { x: 5, y: cumG10 },
              { x: 6, y: totalMansuel },
            ]} //monthly value
          />
          <VictoryAxis
            tickValues={["G3", "G7", "G8", "G10", "EO", "Total"]}
            label="Energie Produite (Mwh)"
          />
          <VictoryAxis
            dependentAxis
            tickValues={[
              0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200,
              1300, 1400, 1500,
            ]}
            label=""
            style={{ labels: { fill: "blue" } }}
          />
        </VictoryGroup>
      </VictoryChart>
    </div>
  );
};
const mapStateToProps = (state) => {
  const { groupe, filters } = state;
  return {
    groupe: selectedData(groupe, filters),
  };
};

export default connect(mapStateToProps)(EpGraphe);

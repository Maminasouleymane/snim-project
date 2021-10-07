import React, { useState, useEffect } from "react";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryGroup,
  VictoryLabel,
} from "victory";
import { connect } from "react-redux";
import { startSetGroupe } from "../actions/groupe";
import Loading from "./Loading";
import selectedData from "../selectors/info";

const MtbfGraphe = (props) => {
  const result = props.groupe.reduce((r, o) => {
    let k = o.numero;
    let rend =
      o.ep && o.hmarche !== 0
        ? Number(((100 * o.ep) / (400 * o.hmarche)).toFixed(3))
        : 0;
    let mtbf = o.np && o.hmarche !== 0 ? o.hmarche / o.np : 0;
    if (r[k] || (r[k] = []))
      r[k].push({
        date: o.date,
        numero: o.numero,
        ep: o.ep,
        hmarche: o.hmarche,
        rend,
        mtbf,
      });
    return r;
  }, []);
  const { GR3, GR7, GR8, GR10 } = result;

  console.log(GR7[0].mtbf);
  console.log(GR8[0].mtbf);
  let cumG3 = GR3.reduce((sum, arr) => {
    return sum + arr.mtbf;
  }, 0);

  let cumG7 = GR7.reduce((sum, arr) => {
    return sum + arr.mtbf;
  }, 0);

  let cumG8 = GR8.reduce((sum, arr) => {
    return sum + arr.mtbf;
  }, 0);

  let cumG10 = GR10.reduce((sum, arr) => {
    return sum + arr.mtbf;
  }, 0);

  let gr3Today = GR3[GR3.length - 1].mtbf;
  let gr7Today = GR7[GR7.length - 1].mtbf;
  let gr8Today = GR8[GR8.length - 1].mtbf;
  let gr10Today = GR10[GR10.length - 1].mtbf;

  let totalDeLaJourne = gr8Today + gr3Today + gr7Today + gr10Today;
  let totalMansuel = cumG3 + cumG7 + cumG8 + cumG10;
  if (props.groupe.length === 0) {
    return (
      <div>
        <Loading />;
      </div>
    );
  } else {
    return (
      <div className="epg">
        <VictoryChart>
          <VictoryGroup offset={20} colorScale={"qualitative"}>
            <VictoryBar
              labels={({ datum }) => datum.y}
              style={{
                labels: { fill: "green", fontSize: 8, fontStyle: "Bold" },
              }}
              labelComponent={<VictoryLabel dy={-10} size={5} />}
              data={[
                { x: 1, y: Number(gr3Today.toFixed(0)) },
                { x: 2, y: Number(gr7Today.toFixed(0)) },
                { x: 3, y: Number(gr8Today.toFixed(0)) },
                { x: 4, y: Number(gr10Today.toFixed(0)) },
                { x: 5, y: Number(totalDeLaJourne.toFixed(0) ) },
              ]} // daily value
            />
            <VictoryBar
              labels={({ datum }) => datum.y}
              style={{ labels: { fill: "blue", fontSize: 8 } }}
              labelComponent={<VictoryLabel dy={-10} />}
              data={[
                { x: 1, y: Number(cumG3.toFixed(0)) },
                { x: 2, y: Number(cumG7.toFixed(0)) },
                { x: 3, y: Number(cumG8.toFixed(0)) },
                { x: 4, y: Number(cumG10.toFixed(0)) },
                { x: 5, y: Number(totalMansuel.toFixed(0)) },
              ]} //monthly value
            />
            <VictoryAxis
              tickValues={["G3", "G7", "G8", "G10", "Thermique"]}
              label="MTBF"
            />
            <VictoryAxis
              dependentAxis
              tickValues={[0, 90, 180, 270]}
              label="Heures "
              style={{ labels: { fill: "rgb(69, 178, 157)" } }}
            />
          </VictoryGroup>
        </VictoryChart>
      </div>
    );
  }
};
const mapStateToProps = (state) => {
  const { groupe, filters } = state;
  return {
    groupe: selectedData(groupe, filters),
  };
};
export default connect(mapStateToProps)(MtbfGraphe);

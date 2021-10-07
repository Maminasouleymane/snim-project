import React, { useState, useEffect } from "react";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryGroup,
  VictoryLabel,
} from "victory";
import { connect } from "react-redux";
import Loading from "./Loading";
import { startSetGroupe } from "../actions/groupe";
import selectedData from "../selectors/info";
import moment from "moment"

const day = parseInt(moment().format("DD"))  
console.log(day , typeof day)


const RendementGraphe = (props) => {
  const result = props.groupe.reduce((r, o) => {
    let k = o.numero;
    let rend =
      o.ep && o.hmarche !== 0
        ? Number(((100 * o.ep) / (400 * o.hmarche)).toFixed(3))
        : 0;
    if (r[k] || (r[k] = []))
      r[k].push({
        date: o.date,
        numero: o.numero,
        ep: o.ep,
        hmarche: o.hmarche,
        rend,
      });
    return r;
  }, []);
  const { GR3, GR7, GR8, GR10 } = result;

// console.log(Object.values(result))
const stuff = (param) => {
  param.forEach((res) => {
  return res.reduce((sum, {rend} ) => {
    return sum + rend * 100;
  }, 0)
})
} 

console.log("im stuff " , stuff(Object.values(result)))
  let cumG3 = GR3.reduce((sum, arr) => {
    return sum + arr.rend * 100;
  }, 0);

  let cumG7 = GR7.reduce((sum, arr) => {
    return sum + arr.rend * 100;
  }, 0);

  let cumG8 = GR8.reduce((sum, arr) => {
    return sum + arr.rend * 100 ;
  }, 0);

  let cumG10 = GR10.reduce((sum, arr) => {
    return sum + arr.rend * 100;
  }, 0);

  let gr3Today = Number((GR3[GR3.length - 1].rend * 100).toFixed(0));
  let gr7Today = Number((GR7[GR7.length - 1].rend * 100).toFixed(0));
  let gr8Today = Number((GR8[GR8.length - 1].rend * 100).toFixed(0));
  let gr10Today = Number((GR10[GR10.length - 1].rend * 100).toFixed(0));

  let totalDeLaJourne = (gr8Today + gr3Today + gr7Today + gr10Today)/4;
  let totalMansuel = (cumG3 + cumG7 + cumG8 + cumG10)/4;
  if (props.groupe.length === 0) {
    return (
      <div>
        <Loading />
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
                { x: 1, y: gr3Today },
                { x: 2, y: gr7Today },
                { x: 3, y: gr8Today },
                { x: 4, y: gr10Today },
                { x: 5, y: totalDeLaJourne },
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
};
const mapStateToProps = (state) => {
  const { groupe, filters } = state;
  return {
    groupe: selectedData(groupe, filters),
  };
};
export default connect(mapStateToProps)(RendementGraphe);

import React from 'react'
import moment from "moment"

export default function SaisieHeader(props) {
    return (
        <div className="saisie">
        <h1>Saisie journaliére concernant  {props.name} </h1>
        <span> le  {moment().format("DD/MM/YYYY")}</span>
        </div>
    )
}
import React from "react";

export const PlanetsInfo = ({planet})=> {
    return <ul className="list-group">
        <li className="list-group-item"> diameter: {planet.diameter}</li>
        <li className="list-group-item"> gravity: {planet.gravity}</li>
        <li className="list-group-item"> population: {planet.population}</li>
        <li className="list-group-item"> climate: {planet.climate}</li>
    </ul>
}
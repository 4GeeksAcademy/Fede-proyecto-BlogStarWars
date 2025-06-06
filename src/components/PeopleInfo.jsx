import React from "react";

export const PeopleInfo = ({person})=> {
    return <ul className="list-group">
        <li className="list-group-item"> birth_year: {person.birth_year}</li>
        <li className="list-group-item"> height: {person.height}</li>
        <li className="list-group-item"> mass: {person.mass}</li>
        <li className="list-group-item"> hair_color: {person.hair_color}</li>
    </ul>
}
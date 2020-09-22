import React from "react";

export default function NewsTemplate(props) {
  const { country, temp, temp_min, temp_max, city, feels_like } = props.weatherData;
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Country</th>
            <th scope="col">City</th>
            <th scope="col">Temp</th>
            <th scope="col">Feels Like</th>
            <th scope="col">Temp_Min</th>
            <th scope="col">Temp_Max</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>{country}</th>
            <td>{city}</td>
            <td>{temp}</td>
            <td>{feels_like}</td>
            <td>{temp_min}</td>
            <td>{temp_max}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

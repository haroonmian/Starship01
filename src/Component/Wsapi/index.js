import React, { useState, useEffect } from "react";

const Wsapi = () => {
  const [lists, setLists] = useState([]);
  const [starships, setStarships] = useState([]);
  // const [selectedMunfecturer,setSelectedMenufecturer]=useState('')
  // const test =  list.results !==undefined && list.results.length > 0 && list.results

  useEffect(() => {
    const getList = async () => {
      await fetch("https://swapi.dev/api/starships")
        .then((response) => response.json())
        .then((data) => {
          setLists(data.results);
          setStarships(data.results);
        });
    };
    getList();
  }, []);

  const selectHandler = (e) => {
    let value = [];
    if (e.target.value == "none") {
      value = starships;
    } else {
      value = starships.filter(
        (list) => list.manufacturer === e.target.value
      );
    }
    setLists(value);
  };
  
  return (
    <div className="container mt-5">
      <div className="row d-flex justify-content-center">
        <div className="col-md-8 ">
          <select
            className="form-select"
            name="starship"
            id="cars"
            form="starship"
            onChange={selectHandler}
          >
            <option value="none"> none</option>
            {starships.length &&
              starships.map((list, idx) => {
                return (
                  <option value={list.manufacturer} key={idx}>
                    {list.manufacturer}
                  </option>
                );
              })}
          </select>
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        <div className="col-md-8 ">
          <table className="table table-bordered mt-5">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Model</th>
                <th scope="col">Manufacturer</th>
                <th scope="col">Cost In Credits</th>{" "}
              </tr>
            </thead>
            <tbody>
              {lists.map((list, idx) => {
                return (
                  <tr key={idx}>
                    <td scope="col">{list.name}</td>
                    <td>{list.model}</td>
                    <td>{list.manufacturer}</td>
                    <td>{list.cost_in_credits}</td>{" "}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Wsapi;

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
    if (e.target.value == "none") {
      const allItems = starships;
      setLists(allItems);
      console.log("abc");
    } else {
      const newList = starships.filter(
        (list) => list.manufacturer === e.target.value
      );
      setLists(newList);
    }
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
                <th scope="col">name</th>
                <th scope="col">model</th>
                <th scope="col">manufacturer</th>
                <th scope="col"> cost_in_credits</th>{" "}
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

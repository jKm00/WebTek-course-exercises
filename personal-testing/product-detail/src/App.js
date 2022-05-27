import { useState, useEffect } from "react";

import Detail from "./Detail";

import "./styles.css";

const LOCAL_STORAGE_KEY = "details";

function App() {
  const [input, setInput] = useState("");
  const [details, setDetails] = useState([]);

  /**
   * Add a detail to the list
   * @param {*} event the event of pressing the submit button
   */
  function addItem(event) {
    event.preventDefault();
    if (input !== "") {
      setDetails((oldArray) => [...oldArray, input]);
      setInput("");
    }
  }

  /**
   * Delete a detail from the list
   * @param {*} index index of the item to delete
   */
  function deleteItem(index) {
    setDetails([
      ...details.slice(0, index),
      ...details.slice(index + 1, details.length),
    ]);
  }

  /**
   * Removes all items from the list
   */
  function resetList() {
    setInput("");
    setDetails([]);
  }

  return (
    <div className="box">
      <form className="header" onSubmit={addItem}>
        <input
          className="input"
          type="text"
          placeholder="Add detail..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></input>
        <button className="btn btn--important" type="submit">
          Add detail
        </button>
        <button className="btn" onClick={resetList}>
          Remove all
        </button>
      </form>
      <ul className="list">
        {details.length === 0 ? (
          <p className="error-msg">No items added...</p>
        ) : (
          details.map((detail, index) => (
            <Detail
              key={index}
              detail={detail}
              index={index}
              deleteDetail={deleteItem}
            />
          ))
        )}
      </ul>
    </div>
  );
}

export default App;

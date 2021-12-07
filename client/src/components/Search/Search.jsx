import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { searchByName } from "../../actions/actions";

import "./Search.css";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  function handleInput(e) {
    e.preventDefault();
    setText(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    let wow = text.toLowerCase();
    // let name = wow[0].toUpperCase() + wow.slice(1);
    // console.log(name);
    dispatch(searchByName(wow));
    setText("");
  }

  return (
    <div>
      <form className="form" action="">
        <label>
          <input
            type="text"
            placeholder=" Search..."
            value={text}
            onChange={(e) => handleInput(e)}
          />
        </label>

        <button
          type="Submit"
          onClick={(e) =>
            e.target.value !== null ||
            e.target.value !== undefined ||
            e.target.value[0] !== ""
              ? handleSubmit(e)
              : alert()
          }
        >
          <span className="material-icons">search</span>
        </button>
      </form>
    </div>
  );
}

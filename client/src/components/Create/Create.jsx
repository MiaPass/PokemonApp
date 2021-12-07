import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { getTypes, createPokemon } from "../../actions/actions";

import "./Create.css";

export default function Create() {
  const dispatch = useDispatch();

  const { types } = useSelector((state) => state);

  const [active, setActive] = useState(false);

  const [form, setForm] = useState({
    name: "",
    hp: "",
    speed: "",
    attack: "",
    defense: "",
    height: "",
    weight: "",
    img: "",
    image: "",
    types: [],
  });

  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name) {
      alert("Name cannot be empty");
    } else if (!form.types) {
      alert("Select a type");
    } else if (!form.hp) {
      alert("HP cannot be empty");
    } else if (!form.speed) {
      alert("Speed cannot be empty");
    } else if (!form.attack) {
      alert("Attack cannot be empty");
    } else if (!form.defense) {
      alert("Defense cannot be empty");
    } else if (!form.height) {
      alert("Height cannot be empty");
    } else if (!form.weight) {
      alert("Weight cannot be empty");
    } else {
      dispatch(createPokemon(form));
      alert("Pokemon created!");
    }
  };

  const handleInput = (e) => {
    e.preventDefault();
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectTypes = (e) => {
    e.preventDefault();
    setActive(!active);
    let allTypes = form.types;
    let selectedT = e.target.value;
    if (!allTypes.includes(selectedT)) {
      allTypes.push(selectedT);
    } else {
      let pos = allTypes.indexOf(selectedT);
      allTypes.splice(pos, 1);
    }
    console.log(allTypes);
  };

  return (
    <div className="allPage">
      <div className="allInfo">
        <form onSubmit={(e) => handleSubmit(e)}>
          <ul>
            <h1>Create your Pokemon!</h1>
          </ul>
          <ul>
            <h3>Name*:</h3>
            <input
              name="name"
              type="text"
              placeholder=" Name..."
              value={form.name}
              onChange={(e) => handleInput(e)}
              required
            />
          </ul>
          <ul>
            <h3>HP*:</h3>
            <input
              name="hp"
              placeholder=" 0 "
              type="number"
              min="0"
              max="300"
              onChange={(e) => handleInput(e)}
              value={form.hp}
              required
            />
          </ul>
          <ul>
            <h3>Speed*:</h3>
            <input
              name="speed"
              placeholder=" 0 "
              type="number"
              min="0"
              max="200"
              onChange={(e) => handleInput(e)}
              value={form.speed}
              required
            />
          </ul>
          <ul>
            <h3>Attack*:</h3>
            <input
              name="attack"
              placeholder=" 0 "
              type="number"
              min="0"
              max="200"
              onChange={(e) => handleInput(e)}
              value={form.attack}
              required
            />
          </ul>
          <ul>
            <h3>Defense*:</h3>
            <input
              name="defense"
              placeholder=" 0 "
              type="number"
              min="0"
              max="200"
              onChange={(e) => handleInput(e)}
              value={form.defense}
              required
            />
          </ul>
          <ul>
            <h3>Height*:</h3>
            <input
              name="height"
              placeholder=" 0 "
              type="number"
              min="0"
              max="100"
              onChange={(e) => handleInput(e)}
              value={form.height}
              required
            />
          </ul>
          <ul>
            <h3>Weight*:</h3>
            <input
              name="weight"
              placeholder=" 0 "
              type="number"
              min="0"
              max="3000"
              onChange={(e) => handleInput(e)}
              value={form.weight}
              required
            />
          </ul>
          <ul>
            <div>
              <h3>Image upload from web: </h3>
              <input
                name="img"
                type="text"
                placeholder=" Url or link of your image"
                value={form.img}
                onChange={(e) => handleInput(e)}
              />
            </div>
          </ul>

          <ul>
            <div>
              <h3>Selected*:</h3>
              <h4>
                {form.types.length <= 0
                  ? "No types selected"
                  : form.types.join(", ")}
              </h4>
            </div>
          </ul>
          <h3>Types*:</h3>
          <div className="Types">
            {types.map((p) => (
              <ul key={p.name}>
                <button
                  key={p.name}
                  value={p.name}
                  onClick={(e) => handleSelectTypes(e)}
                >
                  {p.name}
                </button>
              </ul>
            ))}
          </div>

          <hr />

          <div className="buttonsCreate">
            <button type="submit" className="buttons">
              Save
            </button>
            <div />
            <Link to={`/home`} className="links">
              <button className="buttons">Home</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

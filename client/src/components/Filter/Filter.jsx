import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { filterByOwned, filterByType } from "../../actions/actions";

export default function Filter() {
  const dispatch = useDispatch();

  const { types } = useSelector((state) => state);

  /* -------------------- FILTER -------------------- */

  /* -------------- BY DB/API -------------- */

  const handleSelectFilterByOwned = (e) => {
    e.preventDefault();
    dispatch(filterByOwned(e.target.value));
  };

  /* -------------- BY GENRE -------------- */

  const handleSelectFilterByType = (e) => {
    e.preventDefault();
    dispatch(filterByType(e.target.value));
  };

  return (
    <div className="Filter">
      <label className="FilterLabel">
        {/* -------------- GENRE -------------- */}

        <ul>
          <select onChange={(e) => handleSelectFilterByType(e)}>
            <option value="Default"> Type </option>
            {types.map((t) => (
              <option key={t.name} value={t.name}>
                {t.name}
              </option>
            ))}
          </select>
        </ul>

        {/* -------------- OWNED -------------- */}

        <ul>
          <select onChange={(e) => handleSelectFilterByOwned(e)}>
            <option value="Default"> DB or API </option>
            <option value="DB"> Created </option>
            <option value="API"> API </option>
          </select>
        </ul>
      </label>
    </div>
  );
}

import { useState } from "react";
import "./Search.css";

const Search = () => {
  const [input, setInput] = useState({});

  return (
    <div>
      <form action="" className="form">
        <div className="form--content">
          <h2 className="form--content__title">Sun Exposure</h2>
          <div className="form--content__input">
            <label htmlFor="full-sun" className="form--content__input__label">
              Full Sun
            </label>
            <input type="checkbox" name="full-sun" id="full-sun" />
          </div>
          <div className="form--content__input">
            <label htmlFor="part-sun" className="form--content__input__label">
              Part Sun
            </label>
            <input type="checkbox" name="part-sun" id="part-sun" />
          </div>
          <div className="form--content__input">
            <label htmlFor="shade" className="form--content__input__label">
              Shade
            </label>
            <input type="checkbox" name="shade" id="shade" />
          </div>
        </div>
        <div className="form--content">
          <h2 className="form--content__title">Moisture</h2>
          <div className="form--content__input">
            <label htmlFor="dry" className="form--content__input__label">
              Dry
            </label>
            <input type="checkbox" name="dry" id="dry" />
          </div>
          <div className="form--content__input">
            <label htmlFor="average" className="form--content__input__label">
              Average
            </label>
            <input type="checkbox" name="average" id="average" />
          </div>
          <div className="form--content__input">
            <label htmlFor="wet" className="form--content__input__label">
              Wet
            </label>
            <input type="checkbox" name="wet" id="wet" />
          </div>
        </div>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Search;

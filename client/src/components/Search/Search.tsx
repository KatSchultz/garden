import { ChangeEvent, FormEvent, useState } from "react";
import "./Search.css";
import { PlantFilter } from "../../models/fitler";

const Search = () => {
  const [input, setInput] = useState<PlantFilter>({
    full: false,
    part: false,
    shade: false,
    dry: false,
    ave: false,
    wet: false,
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setInput({ ...input, ...{ [e.target.name]: e.target.checked } });
    } else {
      setInput({ ...input, ...{ [e.target.name]: "" } });
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(input);
  };

  return (
    <div>
      <form action="" className="form" onSubmit={handleSubmit}>
        <div className="form--content">
          <h2 className="form--content__title">Sun Exposure</h2>
          <div className="form--content__input">
            <label htmlFor="full" className="form--content__input__label">
              Full Sun
            </label>
            <input
              type="checkbox"
              name="full"
              className="form--content__input__checkbox"
              id="full"
              onChange={handleInputChange}
            />
          </div>
          <div className="form--content__input">
            <label htmlFor="part" className="form--content__input__label">
              Part Sun
            </label>
            <input
              type="checkbox"
              name="part"
              id="part"
              className="form--content__input__checkbox"
              onChange={handleInputChange}
            />
          </div>
          <div className="form--content__input">
            <label htmlFor="shade" className="form--content__input__label">
              Shade
            </label>
            <input
              type="checkbox"
              name="shade"
              id="shade"
              className="form--content__input__checkbox"
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="form--content">
          <h2 className="form--content__title">Moisture</h2>
          <div className="form--content__input">
            <label htmlFor="dry" className="form--content__input__label">
              Dry
            </label>
            <input
              type="checkbox"
              name="dry"
              id="dry"
              className="form--content__input__checkbox"
              onChange={handleInputChange}
            />
          </div>
          <div className="form--content__input">
            <label htmlFor="average" className="form--content__input__label">
              Average
            </label>
            <input
              type="checkbox"
              name="average"
              id="average"
              className="form--content__input__checkbox"
              onChange={handleInputChange}
            />
          </div>
          <div className="form--content__input">
            <label htmlFor="wet" className="form--content__input__label">
              Wet
            </label>
            <input
              type="checkbox"
              name="wet"
              id="wet"
              className="form--content__input__checkbox"
              onChange={handleInputChange}
            />
          </div>
        </div>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Search;

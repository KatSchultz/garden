import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useState,
} from "react";
import "./Search.css";
import { PlantFilter } from "../../models/fitler";
// import { useSearchParams } from "react-router-dom";
import { getPlants, getPlantsByCriteria } from "../../services/plants";
import { PlantModel } from "../../models/plant";

interface SearchProps {
  setSearchPlants: Dispatch<SetStateAction<PlantModel[]>>;
}

const Search = ({ setSearchPlants }: SearchProps) => {
  // const [searchParams, setSearchParams] = useSearchParams();

  const [input, setInput] = useState<Partial<PlantFilter>>({});

  // useEffect(() => {
  //   if (Object.keys(input).length > 0) {
  //   }
  // }, [searchParams]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const thisTarget = e.target.name;
    if (e.target.checked) {
      setInput({ ...input, ...{ [e.target.name]: e.target.checked } });
    } else {
      const inputDup = { ...input };
      delete inputDup[thisTarget as keyof PlantFilter];
      setInput(inputDup);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (Object.keys(input).length > 0) {
      getPlantsByCriteria(input).then((data) => {
        setSearchPlants(data);
      });
    } else {
      getPlants().then((data) => {
        setSearchPlants(data);
      });
    }
    // const newKeys = Object.keys(input);
    // const newParams: PlantParams = {};
    // newKeys.forEach((elem) => {
    //   const name = elem;
    //   newParams[name as keyof PlantParams] = "true";
    // });
    // console.log("newParams: ", newParams);

    // setSearchParams(newParams as URLSearchParams);
  };

  return (
    <>
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
        <button type="submit" className="form--button">
          Search
        </button>
      </form>
    </>
  );
};

export default Search;

import { ChangeEvent, FormEvent, useState } from "react";
import { UserPlant } from "../../models/userPlant";
import { addUserPlant } from "../../services/userPlant";

interface UserPlantFormProps {
  plant_id: string;
  user_id: string;
}

const UserPlantForm = ({ plant_id, user_id }: UserPlantFormProps) => {
  const [formData, setFormData] = useState<UserPlant>({
    user_id,
    plant_id,
    have: false,
    want: false,
    location: "",
    comment: "",
  });

  const handleFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    // const thisTarget = e.target.name;
    if (e.target.checked) {
      setFormData({ ...formData, ...{ [e.target.name]: e.target.checked } });
    } else {
      //   const inputDup = { ...formData };
      //   //   delete inputDup[thisTarget as keyof UserPlant];
      setFormData({ ...formData, ...{ [e.target.name]: e.target.value } });
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(formData);
    addUserPlant(formData);
    console.log("User Plant Saved");
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <h3>Save This Plant</h3>
      <label htmlFor="">Do you have this plant in your garden?</label>
      <input
        type="checkbox"
        name="have"
        id="have"
        onChange={handleFormChange}
      />
      <label htmlFor="">Do you want this plant for your garden?</label>
      <input type="checkbox" name="want" id="want" />
      <label htmlFor="">
        Where does this plant live in your garden? Or where do you think this
        would fit in your garden?
      </label>
      <input
        type="text"
        name="location"
        id="location"
        value={formData.location}
        onChange={handleFormChange}
        max={120}
        className="border-2 border-black"
      />
      <label htmlFor="">Notes for this plant: </label>
      <input
        type="text"
        name="comment"
        id="comment"
        value={formData.comment}
        onChange={handleFormChange}
        max={240}
      ></input>
      <button type="submit">Save This Plant</button>
    </form>
  );
};

export default UserPlantForm;

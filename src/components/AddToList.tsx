import { useState } from "react";

const AddToList = () => {
  const [input, setInput] = useState({
    name: "",
    age: "",
    note: "",
    img: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="AddToList">
      <input
        type="text"
        placeholder="Name"
        className="AddToList-input"
        name="name"
        value={input.name}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Age"
        className="AddToList-input"
        name="age"
        value={input.age}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Image"
        className="AddToList-input"
        name="img"
        value={input.img}
        onChange={handleChange}
      />
      <textarea
        placeholder="Notes"
        className="AddToList-input"
        name="note"
        value={input.note}
        onChange={handleChange}
      />
    </div>
  );
};

export default AddToList;

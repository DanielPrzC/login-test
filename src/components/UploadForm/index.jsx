import React, { useState } from "react";
import Button from "../Button";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    e.preventDefault();

    setFile(e.target.files[0]);
    setValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = "http://localhost:4000/file/upload";
    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch(url, {
      method: "POST",
      body: formData,
    });

    console.log(res);
    console.log(value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" name="file" value={value} onChange={handleChange} />
        <Button type="submit">Send file</Button>
      </form>
    </div>
  );
};

export default UploadForm;

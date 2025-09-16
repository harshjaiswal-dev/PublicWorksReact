import React, { useState } from "react";
import TextArea from "../../components/TextArea";
import SelectField from "../../components/SelectField";
import FileUpload from "../../components/FileUpload";
import LocationPicker from "../../components/LocationPicker";
import "./IssueForm.css";

const categories = ["Potholes", "Drainage Blockage", "Fallen Electricity Poles"];

const IssueForm: React.FC = () => {
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ description, category });
    alert("Issue submitted!");
  };

  return (
    <div className="issue-form-container">
      <h2>Report Issue</h2>
      <form onSubmit={handleSubmit} className="issue-form">
        <div className="form-group">
          <label>Category:</label>
          <SelectField options={categories} value={category} onChange={(e) => setCategory(e.target.value)} />
        </div>

        <div className="form-group">
          <label>Location:</label>
          <LocationPicker />
        </div>

        <div className="form-group">
          <label>Upload Images (Max 3):</label>
          <FileUpload maxFiles={3} />
        </div>

        <div className="form-group">
          <label>Description:</label>
          <TextArea placeholder="Enter a detailed issue ..." value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>

        <div className="form-buttons">
          <button type="button" className="cancel-btn">Cancel</button>
          <button type="submit" className="submit-btn">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default IssueForm;

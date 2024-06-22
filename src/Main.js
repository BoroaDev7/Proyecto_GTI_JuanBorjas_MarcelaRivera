import React, { useState } from "react";
import "./Main.css";

const Main = () => {
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const issue = {
      issue: {
        project_id: "boroa_merv",
        subject: subject,
        description: description,
        tracker_id: 1,
        status_id: 1,
        priority_id: 4,
      },
    };

    try {
      const response = await fetch("/api/redmine/issues.json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Redmine-API-Key": "991a4175e614a1c191e6f3d1e2f88163f091e8ad",
        },
        body: JSON.stringify(issue),
      });

      if (response.ok) {
        const data = await response.json();
        alert("Issue created successfully!");
        console.log(data);
      } else {
        alert("Failed to create issue.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form className="issue-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Asunto:</label>
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label> Descripcion:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <button className="submit-button" type="submit">
        Enviar Ticket
      </button>
    </form>
  );
};

export default Main;

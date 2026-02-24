import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FormPage: React.FC = () => {
  const [userName, setUserName] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");

  const handleSubmit = async (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (
      userName.length !== 0 &&
      userName.trim() !== "" &&
      userEmail.length !== 0 &&
      userEmail.trim() !== ""
    ) {
      try {
        const response = await fetch("http://localhost:3000/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Cache-Control": "no-cache",
          },
          body: JSON.stringify({ userName, userEmail, id: uuidv4() }),
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        setUserName("");
        setUserEmail("");

        console.log("Post created");
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    } else {
      alert("Enter valid name and email");
    }
  };
  return (
    <form>
      <div>
        <input
          type="text"
          name="userName"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="email"
          name="email"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default FormPage;

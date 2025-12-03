import { useState } from "react";

function BugForm() {
  const [title, setTitle] = useState("");

  const submit = async () => {
    await fetch("http://localhost:5000/api/bugs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title }),
    });
    setTitle("");
  };

  return (
    <div>
      <input
        placeholder="Bug title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={submit}>Add</button>
    </div>
  );
}

export default BugForm;

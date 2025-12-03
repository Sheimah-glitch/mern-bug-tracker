import { useEffect, useState } from "react";

function BugList() {
  const [bugs, setBugs] = useState([]);

  const load = async () => {
    const res = await fetch("http://localhost:5000/api/bugs");
    const data = await res.json();
    setBugs(data);
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <ul>
      {bugs.map((b) => (
        <li key={b._id}>{b.title} — {b.status}</li>
      ))}
    </ul>
  );
}

export default BugList;

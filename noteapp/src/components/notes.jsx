import { useState } from "react";
export function Notes() {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setQuery(value);
  };
  const handleClick = () => {};
  return (
    <div>
      <div>
        <h1>Notes App </h1>
        <input
          onChange={handleChange}
          value={query}
          type="text"
          placeholder="Enter Some notes"
        />
        <button onClick={handleClick}>Add Notes</button>
      </div>
      <div></div>
    </div>
  );
}

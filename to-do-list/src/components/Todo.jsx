import React, { useState } from "react";
import "../../src/index.css";
function Todo() {
  const [text, setText] = useState("");

  function onTextChange(e) {
    setText(e.target.value);
    console.log(e.target.value);
  }

  function onAdd(e) {
    e.preventDefault();
  }
  return (
    <>
      <div className="main">
        <h1>To-do-list App</h1>
          <form className="input-area" onSubmit={onAdd}>
            <textarea
              rows={5}
              onChange={onTextChange}
              placeholder="Type here.."
              value={text}
            />
            <button>Add</button>
          </form>

          <div className="display-text">
          </div>
      </div>

    </>
  );
}

export default Todo;

import React, { useState } from "react";
import "../../src/index.css";
function Todo() {
  // input value
  const [text, setText] = useState("");
  // to-do lists
  const [items, setItems] = useState([]);

  function onTextChange(e) {
    setText(e.target.value);
  }

  function onAdd(e) {
    e.preventDefault();

    // if there is nothing to inside the testbox;ignore the empty string
    if (text.trim() === "") return;

    setItems([...items, text]);

    // clear the text-box
    setText("");
  }
  return (
    <>
      
      <div className="main">
      <h1>To-do-list</h1>
      <div className="main-wrapper">
        
        <div>
          <form className="input-area" onSubmit={onAdd}>
            <textarea
                rows={5}
                onChange={onTextChange}
                placeholder="Type here.."
                value={text}
              />
              <button>Add</button>
          </form>
        </div>
        <div className="display-area">
          <ul className="lists">
              {items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
        </div>
      </div>
      </div>
    </>
  );
}

export default Todo;

{
  /* 1. user types some text
  2. user click on the add button
  3. the test is displayed below in <ul><li></li><ul> form  
  4. clear the textarea box*/
}
// handle edge case
//  what if the user does not type anything i.e text = ""
//  what if the text contains uncessary space around

{/* <div className="main">
        <h1>To-do-list App</h1>
        <form className="text-area" onSubmit={onAdd}>
          <div className="text-wrapper">
              <textarea

                rows={5}
                onChange={onTextChange}
                placeholder="Type here.."
                value={text}
              />
              <button>Add</button>

            <ul className="lists">
              {items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </form>
      </div> */}
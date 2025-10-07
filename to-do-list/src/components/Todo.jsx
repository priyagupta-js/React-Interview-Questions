import React, { useState } from "react";
import "../../src/index.css";
import { RxCross1} from "react-icons/rx";

function Todo() {
  // input value
  const [text, setText] = useState("");
  // to-do lists
  const [items, setItems] = useState([]);
  const [isChecked,setIsChecked] = useState(false);

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
                <li key={index} className="list-item">
                {/* {isChecked ? "checked" : ""} */}
                <input type="checkbox" />
                {item}
                {/* <RxCross1 /> */}
                </li>
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

{
  /* <div className="main">
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
      </div> */
}

// create an array - to store all the taks given by the user.
// and in that array check for checked Item (boolean - true/false)
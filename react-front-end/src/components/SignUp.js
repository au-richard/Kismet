
   
import React from "react";

export default function SignUp() {
  return (
    <>
      <h2>
        <font color="azure">Sign Up:</font>
      </h2>
      <div className="other_pages">
        <div className="category_plus">
          <form className="new_category" method="get" action="/">
            <input type="text" id="form" placeholder="Username"></input>
          </form>
        </div>
        <div className="category_plus">
          <form className="new_category" method="get" action="/">
            <input type="text" id="form" placeholder="Password"></input>
          </form>
        </div>
        <button className="save_button">GO</button>
      </div>
    </>
  );
}
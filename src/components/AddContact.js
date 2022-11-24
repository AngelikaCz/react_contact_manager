import React from "react";

class AddContact extends React.Component {
  render() {
    return (
      <div>
        <h2>Add Contact</h2>
        <form>
          <div>
            <label>Name</label>
            <input type="text" name="name" placeholder="Name"></input>
          </div>
          <div>
            <label>Email</label>
            <input type="text" name="name" placeholder="Name"></input>
          </div>
          <button className="AddButton">Add</button>
        </form>
      </div>
    );
  }
}

export default AddContact;

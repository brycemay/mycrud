import React, { Component } from "react";

export default class MernCrud extends Component {
  render() {
    return (
      <div>
        <h2 className="hdr3wlcm">Welcome!</h2>
        <p className="homeWelcome">
          This is a simple CRUD (create, read, update, and delete) application
          made with MongoDB, Express, React, and Node.js! <br /> <br /> Click on
          the "<span Style="color: yellow">CreateTodo</span>" link in the navbar!
          Then you can view the ToDo's created in the "
          <span Style="color: blue">MyToDo's</span>" link in the navbar!
        </p>
      </div>
    );
  }
}

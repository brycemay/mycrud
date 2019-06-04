import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class EditCrud extends Component {
  state = {
    projects: []
  };

  componentDidMount() {
    fetch("http://localhost:4000")
      .then(results => results.json())
      .then(data => this.setState({ projects: data }));
  }

  onDelete = async id => {
    await fetch(`http://localhost:4000/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    });
    window.location.reload();
  };

  render() {
    return (
      <div className="editforms">
        {this.state.projects.map((user, i) => (
          <ul key={i} className="formtext">
            {console.log("blah", user)}
            <li> ToDo: {user.description}</li> <br />
            <li>What For: {user.what_for}</li>
            <br />
            <li>Priority: {user.priority}</li> <br />
            <button
              className="dltBtn"
              onClick={() => {
                this.onDelete(user._id);
              }}
            >
              Delete
            </button>
            <Link to={{ pathname: "/editupdate/" + user._id, user: user }}>
              {" "}
              Edit
            </Link>
          </ul>
        ))}
      </div>
    );
  }
}

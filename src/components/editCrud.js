import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class EditCrud extends Component {
  state = {
    projects: []
  };

  componentDidMount() {
    fetch('https://thawing-reaches-34753.herokuapp.com/edit/:id')
      .then(results => results.json())
      .then(data => this.setState({ projects: data }));
  }

  onDelete = async id => {
    await fetch(`https://thawing-reaches-34753.herokuapp.com/edit/${id}`, {
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

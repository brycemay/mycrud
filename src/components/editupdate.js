import React, { Component } from "react";


export default class EditUpdate extends Component {
  state = {
    description: this.props.location.user.description,
    what_for: this.props.location.user.what_for,
    priority: this.props.location.user.priority
  };

  onSubmit = async e => {
    e.preventDefault();
    const data = JSON.stringify(this.state);
    console.log(data);
    await fetch(`https://secret-forest-15631.herokuapp.com/${this.props.match.params.id}`, {
      method: "PUT",
      body: data,
      headers: {
        "Content-Type": "application/json"
      }
    });

    this.props.history.push("/edit");
  };

  render() {
    console.log(this.props.match.params.id);
    return (
      <div className="updateform">
        <form onSubmit={this.onSubmit} className="createForm">
          <div className="form-group">
            <label>Description:</label>
            <input
              type="text"
              className="form-control"
              value={this.state.description}
              onChange={e => this.setState({ description: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label>What For:</label>
            <input
              type="text"
              className="form-control"
              value={this.state.what_for}
              onChange={e => this.setState({ what_for: e.target.value })}
            />
          </div>
          <label>Priority:</label>
          <div className="form-group">
            <div className="from-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="priorityOptions"
                id="priorityLow"
                value="Low"
                checked={this.state.priority === "Low"}
                onChange={e => this.setState({ priority: e.target.value })}
              />
              <label className="form-check-label">Low</label>
            </div>
            <div className="from-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="priorityOptions"
                id="priorityMedium"
                value="Medium"
                checked={this.state.priority === "Medium"}
                onChange={e => this.setState({ priority: e.target.value })}
              />
              <label className="form-check-label">Medium</label>
            </div>
            <div className="from-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="priorityOptions"
                id="priorityHigh"
                value="High"
                checked={this.state.priority === "High"}
                onChange={e => this.setState({ priority: e.target.value })}
              />
              <label className="form-check-label">High</label>
            </div>
          </div>
          <div className="form-group">
            <input type="submit" value="Update" className="btn btn-dark" />
          </div>
        </form>
      </div>
    );
  }
}

import React, { Component } from "react";


export default class CreateCrud extends Component {
  constructor(props) {
    super(props);

    this.onChangeDescription = this.onChangeDescription = this.onChangeDescription.bind(
      this
    );
    this.onChangeResponsible = this.onChangeResponsible = this.onChangeResponsible.bind(
      this
    );
    this.onChangePriority = this.onChangePriority = this.onChangePriority.bind(
      this
    );


    this.state = {
      description: "",
      what_for: "",
      priority: "",
      completed: false
    };
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  onChangeResponsible(e) {
    this.setState({
      what_for: e.target.value
    });
  }

  onChangePriority(e) {
    this.setState({
      priority: e.target.value
    });
  }

  onSubmit = async e => {
    e.preventDefault();
    const data = JSON.stringify(this.state);
    await fetch("http://localhost:4000", {
      method: "POST",
      body: data,
      headers: {
        "Content-Type": "application/json"
      }
      
    });
    console.log(`Form submitted`);
    console.log(`description ${this.state.description}`);
    console.log(`responsible ${this.state.what_for}`);
    console.log(`priority ${this.state.priority}`);
    console.log(`completed ${this.state.completed}`);

    this.setState({
      description: "",
      what_for: "",
      priority: "",
      completed: false
    });
    this.props.history.push('/edit');
  };
  
  render() {
    console.log(this.state);
    return (
      <div style={{ marginTop: 70 }} className="forms">
        <h3 className="hdr3">Create New To Do:</h3>
        <form onSubmit={this.onSubmit} className="createForm">
          <div className="form-group">
            <label>Description: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
            />
          </div>
          <div className="form-group">
            <label>What For: </label>
            <input
              
              type="text"
              className="form-control"
              value={this.state.what_for}
              onChange={this.onChangeResponsible}
            />
          </div>
          <label>Priority: </label>
          <div className="form-group">
            <div className="from-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="priorityOptions"
                id="priorityLow"
                value="Low"
                checked={this.state.priority === "Low"}
                onChange={this.onChangePriority}
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
                onChange={this.onChangePriority}
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
                onChange={this.onChangePriority}
              />
              <label className="form-check-label">High</label>
            </div>
          </div>
          <div className="form-group">
         <input type="submit" value="Create" className="btn btn-dark" />
          </div>
        </form>
      </div>
    );
  }
}

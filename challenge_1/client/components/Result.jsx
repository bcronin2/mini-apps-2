import React from "react";

export default class Result extends React.Component {
  constructor(props) {
    super(props);
    const { result } = props;
    this.state = {
      editing: false,
      date: result.date,
      description: result.description
    };
    this.startEdit = this.startEdit.bind(this);
    this.updateDate = this.updateDate.bind(this);
    this.updateDescription = this.updateDescription.bind(this);
    this.saveEdit = this.saveEdit.bind(this);
    this.cancelEdit = this.cancelEdit.bind(this);
  }

  startEdit() {
    this.setState({ editing: true });
  }

  updateDate(e) {
    const { value } = e.target;
    this.setState({ date: value });
  }

  updateDescription(e) {
    const { value } = e.target;
    this.setState({ description: value });
  }

  saveEdit() {
    const { result, edit } = this.props;
    const { id } = result;
    const { date, description } = this.state;
    edit(id, { date, description });
    this.setState({ editing: false });
  }

  cancelEdit() {
    const { result } = this.props;
    this.setState({
      editing: false,
      date: result.date,
      description: result.description
    });
  }

  render() {
    const { editing, date, description } = this.state;
    return (
      <div className="result">
        <div className="result-content">
          <div>
            <span className="category">Date:</span>{" "}
            {!editing ? (
              date
            ) : (
              <input value={date} onChange={this.updateDate} />
            )}
          </div>
          <div className="description">
            {!editing ? (
              description
            ) : (
              <textarea
                className="description-edit"
                value={description}
                onChange={this.updateDescription}
              />
            )}
          </div>
        </div>
        {!editing && (
          <div
            className="result-edit-container result-edit"
            onClick={this.startEdit}
          >
            Edit
          </div>
        )}
        {editing && (
          <div className="result-edit-container">
            <span className="result-edit" onClick={this.saveEdit}>
              Save
            </span>
            {"  "}
            <span className="result-edit" onClick={this.cancelEdit}>
              Cancel
            </span>
          </div>
        )}
      </div>
    );
  }
}

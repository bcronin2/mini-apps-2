import React from 'react';

export default class DateSelection extends React.Component {
  constructor(props) {
    super(props);
    const { startDate, endDate } = props;
    this.state = {
      startDate,
      endDate,
      isValid: true
    };
    this.updateStartDate = this.updateStartDate.bind(this);
    this.updateEndDate = this.updateEndDate.bind(this);
  }

  validateDates(startDate, endDate, callback) {
    const startTime = new Date(startDate).getTime();
    const endTime = new Date(endDate).getTime();
    const now = new Date().getTime();
    const isValid = startTime < endTime && endTime <= now;
    this.setState({ isValid }, callback);
  }

  updateStartDate(e) {
    const { value } = e.target;
    const { endDate } = this.state;
    this.validateDates(value, endDate, () => {
      this.setState({ startDate: value });
    });
  }

  updateEndDate(e) {
    const { value } = e.target;
    const { startDate } = this.state;
    this.validateDates(startDate, value, () => {
      this.setState({ endDate: value });
    });
  }

  render() {
    const { handleUpdate } = this.props;
    const { startDate, endDate, isValid } = this.state;
    return (
      <div className="user-input">
        <span>
          Start date:{' '}
          <input
            type="date"
            value={startDate}
            onChange={this.updateStartDate}
          />
        </span>
        <span>
          End date:{' '}
          <input type="date" value={endDate} onChange={this.updateEndDate} />
        </span>
        {isValid ? (
          <input
            type="button"
            value="Go!"
            onClick={() => handleUpdate(startDate, endDate)}
          />
        ) : (
          <span>Oops! Those dates aren't valid</span>
        )}
      </div>
    );
  }
}

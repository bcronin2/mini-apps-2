import React from 'react';

export default class DateSelection extends React.Component {
  constructor(props) {
    super(props);
    const { startDate, endDate } = props;
    this.state = {
      startDate,
      endDate
    };
  }

  render() {
    const { handleUpdate } = this.props;
    const { startDate, endDate } = this.state;
    return (
      <div>
        Start date:{' '}
        <input
          type="date"
          value={startDate}
          onChange={e => this.setState({ startDate: e.target.value })}
        />
        End date:{' '}
        <input
          type="date"
          value={endDate}
          onChange={e => this.setState({ endDate: e.target.value })}
        />
        <input
          type="button"
          label="Go!"
          onClick={() => handleUpdate(startDate, endDate)}
        />
      </div>
    );
  }
}

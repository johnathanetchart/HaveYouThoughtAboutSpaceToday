import React from 'react';

class DateForm extends React.Component {
  constructor (props) {
    super (props);

    this.state = {
      selectedYear: '',
      selectedMonth: '',
      selectedDay: '',
      selectedDate: '',
    }
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.getCurrentDate();
  }

  getCurrentDate() {
    let today = new Date();
    let yyyy = String(today.getFullYear());
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let dd = String(today.getDate()).padStart(2, '0');
    let newDate = yyyy + '-' + mm + '-' + dd;
    this.setState({
      selectedYear: yyyy,
      selectedMonth: mm,
      selectedDay: dd,
      selectedDate: newDate,
    });
  }

  onChange (e) {
    // console.log(e.target.value)
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit (e) {
    const { selectedYear, selectedMonth, selectedDay, selectedDate } = this.state;
    const { handleDateSubmit } = this.props;
    // let yyyy = String(today.getFullYear());
    // let mm = String(selectedMonth).padStart(2, '0');
    // let dd = String(selectedDay).padStart(2, '0');
    // let newDate = selectedYear + '-' + mm + '-' + dd;
    handleDateSubmit(selectedDate);
    e.preventDefault();
  }

  render () {
    //From: 1995-06-16 to today
    return (
      <div
      id="dateFormContainer">
        <form onSubmit={this.handleSubmit}>
          <label>
            Date:
            <input
            name="selectedDate"
            type="date"
            value={this.state.selectedDate}
            onChange={this.onChange}
            />
          </label>
          <label>
            (from 1995-06-16 until today)
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default DateForm;

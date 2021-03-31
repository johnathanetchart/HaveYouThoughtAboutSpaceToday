import React from 'react';

class DateForm extends React.Component {
  constructor (props) {
    super (props);

    this.state = {
      selectedYear: '',
      selectedMonth: '',
      selectedDay: '',
      // possibleYears: ['1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021'],
      // possibleMonths: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
      // possibleDays: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
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
    this.setState({
      selectedYear: yyyy,
      selectedMonth: mm,
      selectedDay: dd,
    });
  }

  onChange (e) {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit () {

  }

  render () {
    //From: 1995-06-16 to today
    return (
      <div
      id="dateFormContainer">
        <label>
          Choose a date:
        </label>
        <form onSubmit={this.handleSubmit}>
          <label>
            Year
            <input
              name="selectedYear"
              type="number"
              value={this.state.selectedYear}
              onChange={this.onChange}
            />
          </label>
          <br />
          <label>
            Month
            <input
              name="selectedMonth"
              type="number"
              value={this.state.selectedMonth}
              onChange={this.onChange}
            />
          </label>
          <br />
          <label>
            Day
            <input
              name="selectedDay"
              type="number"
              value={this.state.selectedDay}
              onChange={this.onChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default DateForm;

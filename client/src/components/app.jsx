import React from 'react';
import axios from 'axios';
import Header from './Header';
import Photo from './Photo';
import TopDescription from './TopDescription';
import Description from './Description';
import DateForm from './DateForm';
import NeoList from './NeoList';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pictureOfDay: {},
      numberOfNeos: 0,
      numberOfHazards: 0,
      nearEarthObjects: [],
    }
    this.handleDateSubmit = this.handleDateSubmit.bind(this);
  }

  componentDidMount () {
    //fetch picture of the day and set it to state
    this.getPictureOfDay();
    this.getNearEarthObjects();
  }

  handleDateSubmit (newDate) {
    this.getPictureOfDay(newDate);
    this.getNearEarthObjects(newDate);
  }

  getPictureOfDay (date) {
    let options = {
      params: {}
    };
    if (date) {
      options.params.date = date;
    }
    axios.get('http://localhost:3000/APOD', options)
      .then((data) => {
        this.setState({
          pictureOfDay: data.data.apod,
        });
      })
  }

  getNearEarthObjects (date) {
    let options = {
      params: {}
    };
    if (date) {
      options.params.date = date;
    }
    axios.get('http://localhost:3000/NEO', options)
      .then((data) => {
        this.setState({
          numberOfNeos: data.data.numberOfNeos,
          nearEarthObjects: data.data.nearEarthObjects,
        }, () => {
          this.countPotentiallyHazardous();
        });
      })
  }

  countPotentiallyHazardous () {
    const { nearEarthObjects } = this.state;
    // console.log(nearEarthObjects.length)
    if (nearEarthObjects.length > 0) {
      let count = 0;
      nearEarthObjects.map((object) => {
        if(object.is_potentially_hazardous_asteroid === true) {
          count++;
        }
      });
      this.setState({
        numberOfHazards: count,
      });
    }
  }

  render () {
    const { pictureOfDay, numberOfNeos, numberOfHazards, nearEarthObjects } = this.state;
    return(
      <div
      id="mainContent">
        <Header />
        <TopDescription
          title={pictureOfDay.title}
          date={pictureOfDay.date}
        />
        <DateForm
          handleDateSubmit={this.handleDateSubmit}
        />
        <NeoList
          numberOfNeos={numberOfNeos}
          numberOfHazards={numberOfHazards}
          nearEarthObjects={nearEarthObjects}
        />
        <Photo
          photoUrl={pictureOfDay.url}
        />
        <Description
          explanation={pictureOfDay.explanation}
        />
      </div>
    )
  }
}

export default App;

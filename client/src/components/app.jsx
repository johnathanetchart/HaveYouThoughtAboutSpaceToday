import React from 'react';
import axios from 'axios';
import Header from './Header';
import Photo from './Photo';
import TopDescription from './TopDescription';
import Description from './Description';
import DateForm from './DateForm';
import NeoList from './NeoList';
import WatchList from './WatchList';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pictureOfDay: {},
      numberOfNeos: 0,
      numberOfHazards: 0,
      nearEarthObjects: [],
      neoWatch: [],
    }
    this.handleDateSubmit = this.handleDateSubmit.bind(this);
    this.handleAddWatch = this.handleAddWatch.bind(this);
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

  handleAddWatch (neo) {
    console.log(neo)
    const { neoWatch } = this.state;
    let newNeoWatch = neoWatch.slice(0);
    newNeoWatch.push(neo);
    this.setState({
      neoWatch: newNeoWatch
    }, () => {
      console.log(this.state.neoWatch)
    });
  }

  render () {
    const { pictureOfDay, numberOfNeos, numberOfHazards, nearEarthObjects, neoWatch } = this.state;
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
          handleAddWatch={this.handleAddWatch}
        />
        <Photo
          photoUrl={pictureOfDay.url}
        />
        <Description
          explanation={pictureOfDay.explanation}
        />
        <WatchList
          neoWatch={neoWatch}
        />
      </div>
    )
  }
}

export default App;

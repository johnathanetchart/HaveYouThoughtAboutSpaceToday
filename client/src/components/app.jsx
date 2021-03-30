import React from 'react';
import axios from 'axios';
import Header from './Header';
import Photo from './Photo';
import TopDescription from './TopDescription';
import Description from './Description';
import DateForm from './DateForm';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pictureOfDay: {
        copyright: 'NA',
        date: '2021-03-30',
        explanation: 'What are those red filaments in the sky? They are a rarely seen form of lightning confirmed only about 30 years ago: red sprites. Recent research has shown that following a powerful positive cloud-to-ground lightning strike, red sprites may start as 100-meter balls of ionized air that shoot down from about 80-km high at 10 percent the speed of light. They are quickly followed by a group of upward streaking ionized balls. The featured image was taken earlier this year from Las Campanas observatory in Chile over the Andes Mountains in Argentina. Red sprites take only a fraction of a second to occur and are best seen when powerful thunderstorms are visible from the side.    APOD via Instagram in: English, Indonesian, Persian, and Portuguese',
        hdurl: 'https://apod.nasa.gov/apod/image/2103/sprites_beletsky_960.jpg',
        media_type: 'image',
        service_version: 'v1',
        title: 'Red Sprite Lightning over the Andes',
        url: 'https://apod.nasa.gov/apod/image/2103/sprites_beletsky_960.jpg',
      }
    }
  }

  componentDidMount () {
    //fetch picture of the day and set it to state
    // this.getPictureOfDay();
  }

  getPictureOfDay () {
    axios.get('http://localhost:3000/APOD')
      .then((data) => {
        this.setState({
          pictureOfDay: data.data
        }, () => {
          console.log(this.state)
        })
      })
  }

  render () {
    return(
      <div
      id="mainContent">
        <Header />
        <TopDescription
          title={this.state.pictureOfDay.title}
          date={this.state.pictureOfDay.date}
        />
        <DateForm />
        <Photo
          photoUrl={this.state.pictureOfDay.url}
        />
        <Description
          explanation={this.state.pictureOfDay.explanation}
        />
      </div>
    )
  }
}

export default App;

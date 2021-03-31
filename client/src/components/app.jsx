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
      pictureOfDay: {
        copyright: 'NA',
        date: '2021-03-31',
        explanation: 'To play on Carl Sagan’s famous words "If you wish to make black hole jets, you must first create magnetic fields." The featured image represents the detected intrinsic spin direction (polarization) of radio waves.  The polarizationi is produced by the powerful magnetic field surrounding the supermassive black hole at the center of elliptical galaxy M87. The radio waves were detected by the Event Horizon Telescope (EHT), which combines data from radio telescopes distributed worldwide.  The polarization structure, mapped using computer generated flow lines, is overlaid on EHT’s famous black hole image, first published in 2019. The full 3-D magnetic field is complex.  Preliminary analyses indicate that parts of the field circle around the black hole along with the accreting matter, as expected.  However, another component seemingly veers vertically away from the black hole.  This component could explain how matter resists falling in and is instead launched into M87’s jet.',
        hdurl: 'https://apod.nasa.gov/apod/image/2103/M87bhPolarized_Eht_3414.jpg',
        media_type: 'image',
        service_version: 'v1',
        title: "M87's Central Black Hole in Polarized Light",
        url: 'https://apod.nasa.gov/apod/image/2103/M87bhPolarized_Eht_960.jpg',
      },
      numberOfNeos: 12,
      numberOfHazards: 0,
      nearEarthObjects: [
        {
            "links": {
                "self": "http://www.neowsapp.com/rest/v1/neo/3617339?api_key=DEMO_KEY"
            },
            "id": "3617339",
            "neo_reference_id": "3617339",
            "name": "(2012 VJ38)",
            "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3617339",
            "absolute_magnitude_h": 28.5,
            "estimated_diameter": {
                "kilometers": {
                    "estimated_diameter_min": 0.0053034072,
                    "estimated_diameter_max": 0.0118587791
                },
                "meters": {
                    "estimated_diameter_min": 5.3034072332,
                    "estimated_diameter_max": 11.8587790858
                },
                "miles": {
                    "estimated_diameter_min": 0.0032953835,
                    "estimated_diameter_max": 0.0073687014
                },
                "feet": {
                    "estimated_diameter_min": 17.3996305869,
                    "estimated_diameter_max": 38.9067567758
                }
            },
            "is_potentially_hazardous_asteroid": false,
            "close_approach_data": [
                {
                    "close_approach_date": "2021-03-31",
                    "close_approach_date_full": "2021-Mar-31 00:49",
                    "epoch_date_close_approach": 1617151740000,
                    "relative_velocity": {
                        "kilometers_per_second": "7.009264035",
                        "kilometers_per_hour": "25233.3505259155",
                        "miles_per_hour": "15679.022719839"
                    },
                    "miss_distance": {
                        "astronomical": "0.4942616398",
                        "lunar": "192.2677778822",
                        "kilometers": "73940488.536787226",
                        "miles": "45944489.1024906788"
                    },
                    "orbiting_body": "Earth"
                }
            ],
            "is_sentry_object": false
        },
        {
            "links": {
                "self": "http://www.neowsapp.com/rest/v1/neo/3743127?api_key=DEMO_KEY"
            },
            "id": "3743127",
            "neo_reference_id": "3743127",
            "name": "(2016 CZ192)",
            "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3743127",
            "absolute_magnitude_h": 24.6,
            "estimated_diameter": {
                "kilometers": {
                    "estimated_diameter_min": 0.0319561887,
                    "estimated_diameter_max": 0.0714562102
                },
                "meters": {
                    "estimated_diameter_min": 31.9561886721,
                    "estimated_diameter_max": 71.4562101727
                },
                "miles": {
                    "estimated_diameter_min": 0.0198566489,
                    "estimated_diameter_max": 0.0444008168
                },
                "feet": {
                    "estimated_diameter_min": 104.8431420431,
                    "estimated_diameter_max": 234.436392583
                }
            },
            "is_potentially_hazardous_asteroid": false,
            "close_approach_data": [
                {
                    "close_approach_date": "2021-03-31",
                    "close_approach_date_full": "2021-Mar-31 11:28",
                    "epoch_date_close_approach": 1617190080000,
                    "relative_velocity": {
                        "kilometers_per_second": "10.2659283787",
                        "kilometers_per_hour": "36957.3421632588",
                        "miles_per_hour": "22963.855190276"
                    },
                    "miss_distance": {
                        "astronomical": "0.2696947555",
                        "lunar": "104.9112598895",
                        "kilometers": "40345760.972970785",
                        "miles": "25069693.371475433"
                    },
                    "orbiting_body": "Earth"
                }
            ],
            "is_sentry_object": false
        },
        {
            "links": {
                "self": "http://www.neowsapp.com/rest/v1/neo/3748280?api_key=DEMO_KEY"
            },
            "id": "3748280",
            "neo_reference_id": "3748280",
            "name": "(2016 FB4)",
            "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3748280",
            "absolute_magnitude_h": 22.0,
            "estimated_diameter": {
                "kilometers": {
                    "estimated_diameter_min": 0.1058168859,
                    "estimated_diameter_max": 0.2366137501
                },
                "meters": {
                    "estimated_diameter_min": 105.8168859331,
                    "estimated_diameter_max": 236.6137501138
                },
                "miles": {
                    "estimated_diameter_min": 0.0657515442,
                    "estimated_diameter_max": 0.1470249225
                },
                "feet": {
                    "estimated_diameter_min": 347.1682720448,
                    "estimated_diameter_max": 776.2918559233
                }
            },
            "is_potentially_hazardous_asteroid": false,
            "close_approach_data": [
                {
                    "close_approach_date": "2021-03-31",
                    "close_approach_date_full": "2021-Mar-31 16:15",
                    "epoch_date_close_approach": 1617207300000,
                    "relative_velocity": {
                        "kilometers_per_second": "20.1783821412",
                        "kilometers_per_hour": "72642.1757081594",
                        "miles_per_hour": "45137.0230115505"
                    },
                    "miss_distance": {
                        "astronomical": "0.297539423",
                        "lunar": "115.742835547",
                        "kilometers": "44511263.92182901",
                        "miles": "27658016.881739938"
                    },
                    "orbiting_body": "Earth"
                }
            ],
            "is_sentry_object": false
        },
        {
            "links": {
                "self": "http://www.neowsapp.com/rest/v1/neo/3772842?api_key=DEMO_KEY"
            },
            "id": "3772842",
            "neo_reference_id": "3772842",
            "name": "(2017 FO91)",
            "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3772842",
            "absolute_magnitude_h": 25.1,
            "estimated_diameter": {
                "kilometers": {
                    "estimated_diameter_min": 0.0253837029,
                    "estimated_diameter_max": 0.0567596853
                },
                "meters": {
                    "estimated_diameter_min": 25.3837029364,
                    "estimated_diameter_max": 56.7596852866
                },
                "miles": {
                    "estimated_diameter_min": 0.0157726969,
                    "estimated_diameter_max": 0.0352688224
                },
                "feet": {
                    "estimated_diameter_min": 83.279867942,
                    "estimated_diameter_max": 186.2194458756
                }
            },
            "is_potentially_hazardous_asteroid": false,
            "close_approach_data": [
                {
                    "close_approach_date": "2021-03-31",
                    "close_approach_date_full": "2021-Mar-31 14:48",
                    "epoch_date_close_approach": 1617202080000,
                    "relative_velocity": {
                        "kilometers_per_second": "7.0808696567",
                        "kilometers_per_hour": "25491.1307641405",
                        "miles_per_hour": "15839.197335085"
                    },
                    "miss_distance": {
                        "astronomical": "0.0830300006",
                        "lunar": "32.2986702334",
                        "kilometers": "12421111.235858722",
                        "miles": "7718120.6279534836"
                    },
                    "orbiting_body": "Earth"
                }
            ],
            "is_sentry_object": false
        },
        {
            "links": {
                "self": "http://www.neowsapp.com/rest/v1/neo/3782061?api_key=DEMO_KEY"
            },
            "id": "3782061",
            "neo_reference_id": "3782061",
            "name": "(2017 TF1)",
            "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3782061",
            "absolute_magnitude_h": 26.7,
            "estimated_diameter": {
                "kilometers": {
                    "estimated_diameter_min": 0.0121494041,
                    "estimated_diameter_max": 0.0271668934
                },
                "meters": {
                    "estimated_diameter_min": 12.14940408,
                    "estimated_diameter_max": 27.1668934089
                },
                "miles": {
                    "estimated_diameter_min": 0.0075492874,
                    "estimated_diameter_max": 0.0168807197
                },
                "feet": {
                    "estimated_diameter_min": 39.8602508817,
                    "estimated_diameter_max": 89.1302305717
                }
            },
            "is_potentially_hazardous_asteroid": false,
            "close_approach_data": [
                {
                    "close_approach_date": "2021-03-31",
                    "close_approach_date_full": "2021-Mar-31 20:04",
                    "epoch_date_close_approach": 1617221040000,
                    "relative_velocity": {
                        "kilometers_per_second": "7.7210965651",
                        "kilometers_per_hour": "27795.9476342758",
                        "miles_per_hour": "17271.3209064199"
                    },
                    "miss_distance": {
                        "astronomical": "0.4869682618",
                        "lunar": "189.4306538402",
                        "kilometers": "72849414.722882366",
                        "miles": "45266527.2720380108"
                    },
                    "orbiting_body": "Earth"
                }
            ],
            "is_sentry_object": false
        },
        {
            "links": {
                "self": "http://www.neowsapp.com/rest/v1/neo/3840791?api_key=DEMO_KEY"
            },
            "id": "3840791",
            "neo_reference_id": "3840791",
            "name": "(2019 GM1)",
            "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3840791",
            "absolute_magnitude_h": 27.1,
            "estimated_diameter": {
                "kilometers": {
                    "estimated_diameter_min": 0.0101054342,
                    "estimated_diameter_max": 0.0225964377
                },
                "meters": {
                    "estimated_diameter_min": 10.1054341542,
                    "estimated_diameter_max": 22.5964377109
                },
                "miles": {
                    "estimated_diameter_min": 0.0062792237,
                    "estimated_diameter_max": 0.0140407711
                },
                "feet": {
                    "estimated_diameter_min": 33.1543125905,
                    "estimated_diameter_max": 74.1352966996
                }
            },
            "is_potentially_hazardous_asteroid": false,
            "close_approach_data": [
                {
                    "close_approach_date": "2021-03-31",
                    "close_approach_date_full": "2021-Mar-31 16:39",
                    "epoch_date_close_approach": 1617208740000,
                    "relative_velocity": {
                        "kilometers_per_second": "3.8769846693",
                        "kilometers_per_hour": "13957.1448093018",
                        "miles_per_hour": "8672.4270066464"
                    },
                    "miss_distance": {
                        "astronomical": "0.0385975743",
                        "lunar": "15.0144564027",
                        "kilometers": "5774114.902446741",
                        "miles": "3587868.6287013858"
                    },
                    "orbiting_body": "Earth"
                }
            ],
            "is_sentry_object": false
        },
        {
            "links": {
                "self": "http://www.neowsapp.com/rest/v1/neo/54051583?api_key=DEMO_KEY"
            },
            "id": "54051583",
            "neo_reference_id": "54051583",
            "name": "(2020 QP6)",
            "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=54051583",
            "absolute_magnitude_h": 20.77,
            "estimated_diameter": {
                "kilometers": {
                    "estimated_diameter_min": 0.1864468183,
                    "estimated_diameter_max": 0.41690776
                },
                "meters": {
                    "estimated_diameter_min": 186.44681832,
                    "estimated_diameter_max": 416.9077599521
                },
                "miles": {
                    "estimated_diameter_min": 0.1158526459,
                    "estimated_diameter_max": 0.2590543917
                },
                "feet": {
                    "estimated_diameter_min": 611.7021794171,
                    "estimated_diameter_max": 1367.8076551614
                }
            },
            "is_potentially_hazardous_asteroid": false,
            "close_approach_data": [
                {
                    "close_approach_date": "2021-03-31",
                    "close_approach_date_full": "2021-Mar-31 11:10",
                    "epoch_date_close_approach": 1617189000000,
                    "relative_velocity": {
                        "kilometers_per_second": "14.6119342499",
                        "kilometers_per_hour": "52602.9632998045",
                        "miles_per_hour": "32685.4357237035"
                    },
                    "miss_distance": {
                        "astronomical": "0.23791548",
                        "lunar": "92.54912172",
                        "kilometers": "35591649.0480276",
                        "miles": "22115625.20327688"
                    },
                    "orbiting_body": "Earth"
                }
            ],
            "is_sentry_object": false
        },
        {
            "links": {
                "self": "http://www.neowsapp.com/rest/v1/neo/54054322?api_key=DEMO_KEY"
            },
            "id": "54054322",
            "neo_reference_id": "54054322",
            "name": "(2020 RQ6)",
            "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=54054322",
            "absolute_magnitude_h": 27.5,
            "estimated_diameter": {
                "kilometers": {
                    "estimated_diameter_min": 0.008405334,
                    "estimated_diameter_max": 0.0187948982
                },
                "meters": {
                    "estimated_diameter_min": 8.4053340207,
                    "estimated_diameter_max": 18.7948982439
                },
                "miles": {
                    "estimated_diameter_min": 0.0052228308,
                    "estimated_diameter_max": 0.0116786047
                },
                "feet": {
                    "estimated_diameter_min": 27.5765560686,
                    "estimated_diameter_max": 61.6630539546
                }
            },
            "is_potentially_hazardous_asteroid": false,
            "close_approach_data": [
                {
                    "close_approach_date": "2021-03-31",
                    "close_approach_date_full": "2021-Mar-31 03:22",
                    "epoch_date_close_approach": 1617160920000,
                    "relative_velocity": {
                        "kilometers_per_second": "5.9326486807",
                        "kilometers_per_hour": "21357.5352504648",
                        "miles_per_hour": "13270.7418338235"
                    },
                    "miss_distance": {
                        "astronomical": "0.2834834216",
                        "lunar": "110.2750510024",
                        "kilometers": "42408516.051671992",
                        "miles": "26351429.9424658096"
                    },
                    "orbiting_body": "Earth"
                }
            ],
            "is_sentry_object": false
        },
        {
            "links": {
                "self": "http://www.neowsapp.com/rest/v1/neo/54106740?api_key=DEMO_KEY"
            },
            "id": "54106740",
            "neo_reference_id": "54106740",
            "name": "(2021 AG8)",
            "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=54106740",
            "absolute_magnitude_h": 21.25,
            "estimated_diameter": {
                "kilometers": {
                    "estimated_diameter_min": 0.1494703242,
                    "estimated_diameter_max": 0.3342258056
                },
                "meters": {
                    "estimated_diameter_min": 149.4703242356,
                    "estimated_diameter_max": 334.2258056097
                },
                "miles": {
                    "estimated_diameter_min": 0.0928765248,
                    "estimated_diameter_max": 0.2076782231
                },
                "feet": {
                    "estimated_diameter_min": 490.3882185651,
                    "estimated_diameter_max": 1096.5413920766
                }
            },
            "is_potentially_hazardous_asteroid": false,
            "close_approach_data": [
                {
                    "close_approach_date": "2021-03-31",
                    "close_approach_date_full": "2021-Mar-31 15:32",
                    "epoch_date_close_approach": 1617204720000,
                    "relative_velocity": {
                        "kilometers_per_second": "6.4619263392",
                        "kilometers_per_hour": "23262.9348210366",
                        "miles_per_hour": "14454.6830281047"
                    },
                    "miss_distance": {
                        "astronomical": "0.3785165154",
                        "lunar": "147.2429244906",
                        "kilometers": "56625264.463662198",
                        "miles": "35185307.7733184124"
                    },
                    "orbiting_body": "Earth"
                }
            ],
            "is_sentry_object": false
        },
        {
            "links": {
                "self": "http://www.neowsapp.com/rest/v1/neo/54111252?api_key=DEMO_KEY"
            },
            "id": "54111252",
            "neo_reference_id": "54111252",
            "name": "(2021 CP3)",
            "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=54111252",
            "absolute_magnitude_h": 21.32,
            "estimated_diameter": {
                "kilometers": {
                    "estimated_diameter_min": 0.1447288051,
                    "estimated_diameter_max": 0.3236234466
                },
                "meters": {
                    "estimated_diameter_min": 144.7288051255,
                    "estimated_diameter_max": 323.623446563
                },
                "miles": {
                    "estimated_diameter_min": 0.0899302824,
                    "estimated_diameter_max": 0.2010902246
                },
                "feet": {
                    "estimated_diameter_min": 474.832053008,
                    "estimated_diameter_max": 1061.7567484217
                }
            },
            "is_potentially_hazardous_asteroid": false,
            "close_approach_data": [
                {
                    "close_approach_date": "2021-03-31",
                    "close_approach_date_full": "2021-Mar-31 15:14",
                    "epoch_date_close_approach": 1617203640000,
                    "relative_velocity": {
                        "kilometers_per_second": "7.4489005286",
                        "kilometers_per_hour": "26816.0419028123",
                        "miles_per_hour": "16662.4455923336"
                    },
                    "miss_distance": {
                        "astronomical": "0.2369911737",
                        "lunar": "92.1895665693",
                        "kilometers": "35453374.794320019",
                        "miles": "22029705.5661695022"
                    },
                    "orbiting_body": "Earth"
                }
            ],
            "is_sentry_object": false
        },
        {
            "links": {
                "self": "http://www.neowsapp.com/rest/v1/neo/54132112?api_key=DEMO_KEY"
            },
            "id": "54132112",
            "neo_reference_id": "54132112",
            "name": "(2021 FD1)",
            "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=54132112",
            "absolute_magnitude_h": 26.664,
            "estimated_diameter": {
                "kilometers": {
                    "estimated_diameter_min": 0.0123525032,
                    "estimated_diameter_max": 0.0276210369
                },
                "meters": {
                    "estimated_diameter_min": 12.3525032438,
                    "estimated_diameter_max": 27.6210369453
                },
                "miles": {
                    "estimated_diameter_min": 0.0076754873,
                    "estimated_diameter_max": 0.0171629113
                },
                "feet": {
                    "estimated_diameter_min": 40.5265867422,
                    "estimated_diameter_max": 90.6202028517
                }
            },
            "is_potentially_hazardous_asteroid": false,
            "close_approach_data": [
                {
                    "close_approach_date": "2021-03-31",
                    "close_approach_date_full": "2021-Mar-31 16:06",
                    "epoch_date_close_approach": 1617206760000,
                    "relative_velocity": {
                        "kilometers_per_second": "9.2692621839",
                        "kilometers_per_hour": "33369.3438618786",
                        "miles_per_hour": "20734.4125790656"
                    },
                    "miss_distance": {
                        "astronomical": "0.0255002956",
                        "lunar": "9.9196149884",
                        "kilometers": "3814789.906130372",
                        "miles": "2370400.5307362536"
                    },
                    "orbiting_body": "Earth"
                }
            ],
            "is_sentry_object": false
        },
        {
            "links": {
                "self": "http://www.neowsapp.com/rest/v1/neo/54132514?api_key=DEMO_KEY"
            },
            "id": "54132514",
            "neo_reference_id": "54132514",
            "name": "(2021 FW2)",
            "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=54132514",
            "absolute_magnitude_h": 25.337,
            "estimated_diameter": {
                "kilometers": {
                    "estimated_diameter_min": 0.0227590944,
                    "estimated_diameter_max": 0.0508908821
                },
                "meters": {
                    "estimated_diameter_min": 22.7590943694,
                    "estimated_diameter_max": 50.8908821163
                },
                "miles": {
                    "estimated_diameter_min": 0.0141418412,
                    "estimated_diameter_max": 0.0316221183
                },
                "feet": {
                    "estimated_diameter_min": 74.6689471708,
                    "estimated_diameter_max": 166.9648416823
                }
            },
            "is_potentially_hazardous_asteroid": false,
            "close_approach_data": [
                {
                    "close_approach_date": "2021-03-31",
                    "close_approach_date_full": "2021-Mar-31 14:00",
                    "epoch_date_close_approach": 1617199200000,
                    "relative_velocity": {
                        "kilometers_per_second": "8.1343895792",
                        "kilometers_per_hour": "29283.8024852598",
                        "miles_per_hour": "18195.8160497994"
                    },
                    "miss_distance": {
                        "astronomical": "0.0151827555",
                        "lunar": "5.9060918895",
                        "kilometers": "2271307.883530785",
                        "miles": "1411325.274803433"
                    },
                    "orbiting_body": "Earth"
                }
            ],
            "is_sentry_object": false
        }
    ],
    }
    this.handleDateSubmit = this.handleDateSubmit.bind(this);
  }

  componentDidMount () {
    //fetch picture of the day and set it to state
    // this.getPictureOfDay();
  }

  handleDateSubmit (newDate) {
    this.getPictureOfDay(newDate);
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
          photoUrl={pictureOfDay.hdurl}
        />
        <Description
          explanation={pictureOfDay.explanation}
        />
      </div>
    )
  }
}

export default App;

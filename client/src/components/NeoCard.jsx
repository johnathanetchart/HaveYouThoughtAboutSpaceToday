import React from 'react';

class NeoCard extends React.Component {
  constructor(props) {
    super(props);


  }

  render() {
    const { neo, handleAddWatch } = this.props;

    let danger = 'safe';
    if (neo.is_potentially_hazardous_asteroid) {
      danger = <p style={{color:'red'}}>
        danger
        <br />
        Missing Earth by: {String(neo.close_approach_data[0].miss_distance.kilometers).split('.')[0]} km
        <br />
        Diameter in meters:
        <br />
        min:
        {String(neo.estimated_diameter.meters.estimated_diameter_min).split('.')[0]}
        <br />
        max:
        {String(neo.estimated_diameter.meters.estimated_diameter_max).split('.')[0]}
      </p>
    }
    let addButton = null;
    if (handleAddWatch) {
      <button onClick={handleAddWatch}>AddToWatchList</button>
    }
    return (
      <div
        className="neoCard"
      >
        NEO:<a href={neo.nasa_jpl_url}>{neo.name}</a>
        <br />
        {danger}
      </div>
    )
  }
}

export default NeoCard;

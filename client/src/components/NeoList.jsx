import React from 'react';
import NeoCard from './NeoCard';

class NeoList extends React.Component {
  constructor(props) {
    super (props);


  }

  render () {
    const { numberOfNeos, numberOfHazards, nearEarthObjects, handleAddWatch } = this.props;
    if (nearEarthObjects.length > 0) {
      return (
        <div
          id="neoList"
        >
          <b>The Bad |</b> On this day, there are / will be / were { numberOfNeos } Near Earth Objects, {numberOfHazards} of which NASA classifies as potentially hazardous.
          {
            nearEarthObjects.map((neo) => {
              return (
                <NeoCard
                  neo={neo}
                  handleAddWatch={handleAddWatch}
                />
              )
            })
          }
        </div>
      )
    } else {
      return null;
    }
  }

}

export default NeoList;

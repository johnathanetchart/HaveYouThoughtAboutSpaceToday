import React from 'react';
import NeoCard from './NeoCard';

class WatchList extends React.Component {
  constructor(props) {
    super (props);


  }

  render () {
    const { neoWatch } = this.props;

    return (
      <div
        id="watchList"
      >
        NEO Watch List
        {
            neoWatch.map((neo) => {
              return (
                <NeoCard
                  neo={neo}
                />
              )
            })
          }
      </div>
    )
  }

}

export default WatchList;

import React from 'react';
import CompInGrid from './CompInGrid'

const Competitions = React.createClass({
  render() {
    return (
      <div className="competitions">
      <h2>Your competitions</h2>
      {this.props.competitions.map((comp,i) =>
        <CompInGrid {...this.props} key={i} i={i} comp={comp}/>
      )}
      </div>
    )
  }
})

export default Competitions;

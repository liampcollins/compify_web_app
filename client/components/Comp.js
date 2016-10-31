import React from 'react';

const Comp = React.createClass({
  render() {
    const compId = this.props.params.compId;
    const i = this.props.competitions.findIndex((comp) => comp.id === parseInt(compId));
    console.log('i', i)
    const comp = this.props.competitions[i];

    return (
      <div className="comp">
        <div className="comp-name">This is the individual competition:{comp.name}</div>
        <div>
          <img src={comp.image} alt={comp.name} className=""/>
        </div>
      </div>
    )
  }
})

export default Comp;

import React from 'react';
import { Link } from 'react-router';

const CompInGrid = React.createClass({
  handleDelete(e) {
    e.preventDefault()
    this.props.deleteCompetition(this.props.i);
  },
  render() {
    const comp = this.props.comp
    return (
      <Link to={`/competition/${comp.id}`}>
        <div className="photo-container">
          <span onClick={this.handleDelete} className="glyphicon glyphicon-envelope">X</span>
          <img src={comp.image} alt={comp.name} className="grid-photo"/>
        </div>
      </Link>
    )
  }
})

export default CompInGrid;

import React from 'react';
import { Link } from 'react-router';

const CompInGrid = React.createClass({
  handleDelete(e) {
    e.preventDefault()
    this.props.deleteCompetition(this.props.i);
  },
  render() {
    const comp = this.props.comp
    console.log('COMP', comp)
    return (
      <div className="competition-in-grid">
        <Link to={`/competition/${comp.id}`}>
          <span onClick={this.handleDelete} className="glyphicon glyphicon-envelope">X</span>
          <div>{comp.name}</div>
          <div>{comp.user_id}</div>
          <div>Submit by {comp.submission_end_date}</div>
          <div>Vote by: {comp.vote_end_date}</div>
        </Link>
      </div>
    )
  }
})

export default CompInGrid;

import React from 'react';
import { Link } from 'react-router';
import moment from 'moment'

const CompInGrid = React.createClass({
  handleDelete(e) {
    e.preventDefault()
    this.props.deleteCompetition(this.props.i);
  },
  render() {
    const comp = this.props.comp
    return (
      <div className="competition-in-grid">
        <Link to={`/competition/${comp.id}`}>
          <span onClick={this.handleDelete} className="glyphicon glyphicon-envelope">X</span>
          <div>{comp.name}</div>
          <div>{comp.user_id}</div>
          <div>Submit by {moment(comp.submission_end_date).format('DD/MM/YYYY')}</div>
          <div>Vote by: {moment(comp.vote_end_date).format('DD/MM/YYYY')}</div>
        </Link>
      </div>
    )
  }
})

export default CompInGrid;

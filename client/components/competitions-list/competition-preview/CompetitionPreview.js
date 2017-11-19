import React from 'react';
import { Link } from 'react-router';
import moment from 'moment';

const CompInGrid = React.createClass({
  handleDelete(e) {
    e.preventDefault();
    this.props.deleteCompetition(this.props.i);
  },
  render() {
    const comp = this.props.comp;
    return (
      <div className="grid-element container btn">
        <Link
          to={`/user/${this.props.user.data.username}/competition/${comp.id}`}
        >
          <div>{comp.name}</div>
          <div className="comp-owner alt-color">{comp.user_id}</div>
          <hr />
          <div className="vl" />
          <div className="row">
            <div className="col-md-6">
              <div>Submit by:</div>
              <div>{moment(comp.submission_end_date).format('DD/MM/YYYY')}</div>
            </div>
            <div className="col-md-6">
              <div>Vote by:</div>
              <div>{moment(comp.vote_end_date).format('DD/MM/YYYY')}</div>
            </div>
          </div>
        </Link>
      </div>
    );
  }
});

export default CompInGrid;

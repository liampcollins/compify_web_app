import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { addCompetition } from '../../actions/actionCreators';

const NewComp = React.createClass({
  handleSubmit(e) {
    e.preventDefault();
    try {
      const comp = {};
      let compId;
      comp.name = this.refs.name.value;
      comp.theme = this.refs.theme.value;
      comp.song_count = parseInt(this.refs.count.value);
      comp.submission_end_date = this.state.entryEndDate.format();
      comp.vote_end_date = this.state.voteEndDate.format();
      comp.user_id = parseInt(userId);
      //  ADD FORM VALIDATION, NOTIFICATIONS, LOADING SCREEN
      addCompetition(comp)
        .then((resp) => {
          compId = resp;
          this.props.loadComps(userId);
        })
        .then(() => {
          this.refs.competitionForm.reset();
          this.setState({
            entryEndDate: null,
            voteEndDate: null
          });
          this.props.history.push('/competition/' + compId);
        });
    } catch (e) {
      console.log('Error with Company form', e);
    }
  },
  getInitialState() {
    return {
      entryEndDate: null,
      voteEndDate: null
    };
  },
  setEntryEndDate(date) {
    this.setState({
      entryEndDate: date
    });
  },
  setVoteEndDate(date) {
    this.setState({
      voteEndDate: date
    });
  },
  render() {
    return (
      <div className="new-competition">
        <form
          className="competition-form"
          ref="competitionForm"
          onSubmit={this.handleSubmit}
        >
          <h2 className="page-title">Create a new competition</h2>
          <div>
            <input type="text" ref="name" placeholder="Competition Name" />
          </div>
          <div>
            <input type="number" ref="count" placeholder="Song Count" />
          </div>
          <div>
            <input type="text" ref="theme" placeholder="Theme" />
          </div>
          <div>
            <DatePicker
              selected={this.state.entryEndDate}
              dateFormat="DD/MM/YYYY"
              placeholderText="Entry closes"
              minDate={moment()}
              onChange={this.setEntryEndDate}
            />
          </div>
          <div>
            <DatePicker
              selected={this.state.voteEndDate}
              dateFormat="DD/MM/YYYY"
              placeholderText="Voting closes"
              minDate={moment()}
              onChange={this.setVoteEndDate}
            />
          </div>
          <input type="submit" hidden />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
});

export default NewComp;

import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

const NewComp = React.createClass({
  handleSubmit(e) {
    e.preventDefault();
    try {
      const comp = {};
      let compId;
      const userId = this.props.user.data.id;
      comp.name = this.refs.name.value;
      comp.theme = this.refs.theme.value;
      comp.song_count = parseInt(this.refs.count.value);
      comp.submission_end_date = this.state.entryEndDate.format();
      comp.vote_end_date = this.state.voteEndDate.format();
      comp.user_id = parseInt(userId);
      comp.image = '';
      //  ADD FORM VALIDATION, NOTIFICATIONS, LOADING SCREEN
      this.props.addCompetition(comp).then((resp) => {
        compId = resp.id;
        this.props.loadComps(userId)
      }).then(() => {
        this.refs.competitionForm.reset();
        this.setState({
          entryEndDate: null,
          voteEndDate: null
        });
        this.props.history.push('/competition/' + compId);
      });
    } catch (e) {
      console.log('Error with Company form', e)
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
        <h2 className="grid-title">Create a new competition</h2>
        <form className="competition-form" ref="competitionForm" onSubmit={this.handleSubmit}>
          <div><input type="text" ref="name" placeholder="Competition Name"/></div>
          <div><input type="text" ref="count" placeholder="Song Count"/></div>
          <div><input type="text" ref="theme" placeholder="Theme"/></div>
            <div><DatePicker
              selected={this.state.entryEndDate}
              dateFormat="DD/MM/YYYY"
              placeholderText="Entry closes"
              minDate={moment()}
              onChange={this.setEntryEndDate} /></div>
          <div><DatePicker
            selected={this.state.voteEndDate}
            dateFormat="DD/MM/YYYY"
            placeholderText="Voting closes"
            minDate={moment()}
            onChange={this.setVoteEndDate} /></div>
          <input type="submit" hidden/>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
})

export default NewComp;

import React from 'react';

const NewComp = React.createClass({
  handleSubmit(e) {
    e.preventDefault();
    const comp = {};
    comp.name = this.refs.name.value;
    comp.image = this.refs.image.value
    this.props.addCompetition(comp);
    this.refs.competitionForm.reset();
  },
  render() {
    return (
      <div className="new-competition">
        <form className="competition-form" ref="competitionForm" onSubmit={this.handleSubmit}>
          <div><input type="text" ref="name" placeholder="Competition Name"/></div>
          <div><input type="text" ref="image" placeholder="image Url"/></div>
          <input type="submit" hidden/>
        </form>
      </div>
    )
  }
})

export default NewComp;

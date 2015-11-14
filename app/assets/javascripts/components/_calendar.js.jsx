var Calendar = React.createClass({
  getInitialState: function() {
    return {
      day: (() => {
        switch (this.props.currentDay) {
          case 0: return 'weekend';
          case 1: return 'monday';
          case 2: return 'tuesday';
          case 3: return 'wednesday';
          case 4: return 'thursday';
          case 5: return 'friday';
          case 6: return 'weekend';
        }
      })(),
      people: this.props.people
    };
  },

  setDay: function(n) {
    this.setState({day: n});
  },

  switchPeople: function(nameA, nameB) {
    var idPersonA = this.props.people[nameA];
    var idPersonB = this.props.people[nameB];
    $.ajax({
      url: this.props.switchPeopleUrl,
      dataType: 'json',
      data: {people_ids: [idPersonA, idPersonB]}
    }).done(function(people, status, xhr) {
      console.log(people);
      this.setState({people: people})
    }).fail(function(xhr, status, error) {
      console.error('failed to switch people', error);
    });
  },

  render: function () {
    var name = this.props.week[this.state.day];
    var className = 'calendar ' + this.state.day + '-color';
    var peopleNames = Object.keys(this.state.people);
    return (
      <div className={ className }>
        <div className="calendar-inner">
          <Week className="week" days={ this.props.week } currentDay={ this.state.day } onSetDay={this.setDay}/>
          {
            this.state.day === 'weekend' ? '' : (
              <ChoreList className="chore-list" day={ this.state.day }/>
            )
          }
          <CurrentDay day={ this.state.day } name={ name }/>
        </div>
        <div className="managing">
          <DaySwitcher className="day-switcher" day={ this.state.day } people={ this.state.people }/>
        </div>
        <Menu signOutUrl={ this.props.signOutUrl } person={ name } peopleNames={ peopleNames } onSwitchPeople={ this.switchPeople } />
      </div>
    );
  }
});

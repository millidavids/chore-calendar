var Calendar = React.createClass({
  getDayName: function(day) {
    if (typeof day === 'string') {
      day = parseInt(day, 10);
    }
    switch (day) {
      case 0: return 'weekend';
      case 1: return 'monday';
      case 2: return 'tuesday';
      case 3: return 'wednesday';
      case 4: return 'thursday';
      case 5: return 'friday';
      case 6: return 'weekend';
    }
  },

  getInitialState: function() {
    return {
      day: this.getDayName(this.props.currentDay),
      week: this.props.week,
      people: this.props.people,
      showManagement: false,
      exemptions: this.props.exemptions
    };
  },

  setDay: function(n) {
    this.setState({day: n});
  },

  switchPeople: function(nameB) {
    var currentPerson = this.state.week[this.state.day];
    var idPersonA = this.state.people[currentPerson];
    var idPersonB = this.state.people[nameB];
    $.ajax({
      url: this.props.switchPeopleUrl,
      type: 'POST',
      dataType: 'json',
      data: {people_ids: [idPersonA, idPersonB]}
    }).done(function(data, status, xhr) {
      console.log(data);
      this.setState({week: data.week, people: data.people})
    }.bind(this)).fail(function(xhr, status, error) {
      console.error('failed to switch people', error);
    });
  },

  showManagement: function() {
    this.setState({showManagement: true});
  },

  hideManagement: function() {
    this.setState({showManagement: false});
  },

  render: function () {
    var name = this.state.week[this.state.day];
    var className = 'calendar ' + this.state.day + '-color';
    var peopleNames = Object.keys(this.state.people);
    return (
      <div className={ className }>
        <div className="calendar-inner">
          <Week className="week"
                days={ this.state.week }
                currentDay={ this.state.day }
                onSetDay={this.setDay}/>
          {
            this.state.day === 'weekend' ? '' : (
              <ChoreList className="chore-list" day={ this.state.day }/>
            )
          }
          <CurrentDay day={ this.state.day } name={ name }/>
        </div>
        <Management isVisible={ this.state.showManagement }
                    hideManagement={ this.hideManagement }
                    exemptions={ this.state.exemptions }
                    getDayName={ this.getDayName } />
        <Menu signOutUrl={ this.props.signOutUrl }
              person={ name }
              peopleNames={ peopleNames }
              switchPeople={ this.switchPeople }
              showManagement={ this.showManagement } />
      </div>
    );
  }
});

var Calendar = React.createClass({
  getInitialState: function() {
    return {day: (() => {
      switch (this.props.current_day) {
        case 0: return 'weekend';
        case 1: return 'monday';
        case 2: return 'tuesday';
        case 3: return 'wednesday';
        case 4: return 'thursday';
        case 5: return 'friday';
        case 6: return 'weekend';
      }
    })()};
  },

  setDay: function(n) {
    this.setState({day: n});
  },

  setPerson: function() {
    return 'David';
  },

  render: function () {
    var name = this.props.week[this.state.day];
    var className = 'calendar ' + this.state.day + '-color';
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
          <DaySwitcher className="day-switcher" day={ this.state.day } people={ this.props.people} onPeopleSwitch={ this.setPerson }/>
        </div>
      </div>
    );
  }
});

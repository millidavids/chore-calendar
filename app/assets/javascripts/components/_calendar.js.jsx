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
    return (
      <div className="calendar">
        <div className="calendar-inner">
          <Week className="week" days={ this.props.week } onSetDay={this.setDay}/>
          <CurrentDay day={ this.state.day } name={ name }/>
        </div>
        <div className="managing">
          <DaySwitcher className="day-switcher" days={ this.props.week } onPeopleSwitch={this.setPerson}/>
        </div>
      </div>
    );
  }
});

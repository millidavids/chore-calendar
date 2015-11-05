var Calendar = React.createClass({
  getInitialState: function() {
    return {day: (() => {
      switch (this.props.current_day) {
        case 0: return "weekend";
        case 1: return "monday";
        case 2: return "tuesday";
        case 3: return "wednesday";
        case 4: return "thursday";
        case 5: return "friday";
        case 6: return "weekend";
      }
    })()};
  },
  setDay: function(n) {
    this.setState({day: n});
  },
  render: function () {
    var name = this.props.week[this.state.day]
    return (
      <div className="calendar-inner">
        <Week className="week" days={ this.props.week } onSetDay={this.setDay}/>
        <div className={["present-day", [this.state.day, "color"].join("-")].join(" ")}>
          <div className="full-width-vertical-center">
            { name }
          </div>
        </div>
      </div>
      <div className="managing">
        // managing window
      </div>
    )
  }
});
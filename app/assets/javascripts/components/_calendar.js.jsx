var Calendar = React.createClass({
  getInitialState: function() {
    return {initial_day: (() => {
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
  render: function () {
    return (
      <div className="calendar-inner">
        <Week className="week" days={ this.props.week } />
        <div className="present-day">
          <div className="absolute-center">
            { this.state.initial_day }
          </div>
        </div>
      </div>
    )
  }
});
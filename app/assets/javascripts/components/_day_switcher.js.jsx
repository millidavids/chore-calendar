var DaySwitcher = React.createClass({
  getInitialState: function() {
    return {
      people: this.props.people
    };
  },

  switchTwoPeople: function() {
    // switch two people
  },

  render: function() {
    return (
      <div className="day-switcher-inner full-width-vertical-center">
        <div className="switcher-form-label">{this.props.day.toUpperCase()}</div>
      </div>
    )
  }
});

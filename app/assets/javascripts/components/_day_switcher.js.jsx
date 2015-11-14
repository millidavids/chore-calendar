var DaySwitcher = React.createClass({
  render: function() {
    return (
      <div className="day-switcher-inner full-width-vertical-center">
        <div className="switcher-form-label">
          {this.props.day.toUpperCase()}
        </div>
      </div>
    );
  }
});

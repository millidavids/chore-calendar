var Day = React.createClass({
  onClick: function() {
    this.props.onClick(this.props.day);
  },

  render: function() {
    var className = 'weekday ' + this.props.day + '-color';
    var dayName = this.props.day.slice(0, 1).toUpperCase() +
                  this.props.day.slice(1);
    return (
      <div className={ className } onClick={this.onClick}>
        <div className="full-width-vertical-center">
          { dayName }
        </div>
      </div>
    );
  }
});

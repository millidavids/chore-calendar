var Day = React.createClass({
  onClick: function() {
    this.props.onClick(this.props.day);
  },

  getTextState: function() {
    var dayClass = this.props.currentDay === this.props.day ? ' active-text' : ''
    return 'full-width-vertical-center' + dayClass;
  },

  render: function() {
    var className = 'weekday ' + this.props.day + '-color';
    var dayName = this.props.day.slice(0, 1).toUpperCase() +
                  this.props.day.slice(1);
    return (
      <div className={ className } onClick={this.onClick}>
        <div className={ this.getTextState() }>
          { dayName }
        </div>
      </div>
    );
  }
});

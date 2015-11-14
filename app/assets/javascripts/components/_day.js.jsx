var Day = React.createClass({
  onClick: function() {
    this.props.onClick(this.props.day);
  },

  render: function() {
    var isCurrent = this.props.currentDay === this.props.day;
    var weekdayClass = 'weekday ' + this.props.day + '-color ' +
        (isCurrent ? 'active' : 'inactive');
    if (!isCurrent && this.props.index === this.props.currentDayIndex - 1) {
      weekdayClass += ' before-active';
    }
    var dayName = this.props.day.slice(0, 1).toUpperCase() +
                  this.props.day.slice(1);
    var dayClass = 'full-width-vertical-center' +
        (isCurrent ? ' active-text' : '');
    return (
      <div className={ weekdayClass } onClick={this.onClick}>
        <div className={ dayClass }>
          { dayName }
        </div>
      </div>
    );
  }
});

var Week = React.createClass({
  render: function () {
    var days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
    var index = 0;
    var currentDayIndex = days.indexOf(this.props.currentDay);
    return (
      <div className="week">
        {
          days.map(function(day) {
            var result = (
              <Day key={ day } day={ day } currentDay={ this.props.currentDay } onClick={ this.props.onSetDay } index={ index } currentDayIndex={ currentDayIndex }/>
            );
            index++;
            return result;
          }.bind(this))
        }
      </div>
    )
  }
});

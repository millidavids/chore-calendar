var Calendar = React.createClass({
  render: function () {
    return (
      <div className="calendar-inner">
        <Week className="week" days={ this.props.week } />
        <div className="present-day">
          <div className="absolute-center">
            { this.props.current_day }
          </div>
        </div>
      </div>
    )
  }
});
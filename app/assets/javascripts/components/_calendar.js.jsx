var Calendar = React.createClass({
  render: function () {
    return (
      <div className="calendar-inner">
        <Week className="week" days={ this.props.days } />
        <div className="present-day">
          <div className="absolute-center">
            David
          </div>
        </div>
      </div>
    )
  }
});
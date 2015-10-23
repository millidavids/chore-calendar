var Calendar = React.createClass({
  render: function () {
    return (
      <div className="calendar-inner">
        <Week className="week" days={ this.props.days } />
        <div className="presentDay">
          // Takes up the rest of the page
        </div>
      </div>
    )
  }
});
/** @jsx React.DOM */
var Calendar = React.createClass({
  render: function () {
    return (
      <div className="calendar">
        <div classNam="week-preview">
          <Week days={ this.props.days }>
        </div>
        <div className="presentDay">
          // Takes up the rest of the page
        </div>
      </div>
    )
  }
});
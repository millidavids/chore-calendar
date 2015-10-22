/** @jsx React.DOM */
var Day = React.createClass({
  render: function () {
    return (
      <div className="day">
        <h4>{ this.props.author } said:</h4>
        <p>{ this.props.text }</p>
      </div>
    )
  }
});
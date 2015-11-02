var Week = React.createClass({
  handleClick: function(e) {
    this.props.onSetDay(e.currentTarget.getAttribute("value"));
  },
  render: function () {
    return (
      <div className="week">
        <div className="weekday monday-color" value="monday" onClick={this.handleClick}>
          <div className="full-width-vertical-center">
            Monday
          </div>
        </div>
        <div className="weekday tuesday-color" value="tuesday" onClick={this.handleClick}>
          <div className="full-width-vertical-center">
            Tuesday
          </div>
        </div>
        <div className="weekday wednesday-color" value="wednesday" onClick={this.handleClick}>
          <div className="full-width-vertical-center">
            Wednesday
          </div>
        </div>
        <div className="weekday thursday-color" value="thursday" onClick={this.handleClick}>
          <div className="full-width-vertical-center">
            Thursday
          </div>
        </div>
        <div className="weekday friday-color" value="friday" onClick={this.handleClick}>
          <div className="full-width-vertical-center">
            Friday
          </div>
        </div>
      </div>
    )
  }
});
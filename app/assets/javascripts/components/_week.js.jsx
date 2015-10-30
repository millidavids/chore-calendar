var Week = React.createClass({
  render: function () {
    return (
      <div className="week">
        <a className="weekday monday-color">
          <div className="full-width-vertical-center">
            Monday
          </div>
        </a>
        <a className="weekday tuesday-color">
          <div className="full-width-vertical-center">
            Tuesday
          </div>
        </a>
        <a className="weekday wednesday-color">
          <div className="full-width-vertical-center">
            Wednesday
          </div>
        </a>
        <a className="weekday thursday-color">
          <div className="full-width-vertical-center">
            Thursday
          </div>
        </a>
        <a className="weekday friday-color">
          <div className="full-width-vertical-center">
            Friday
          </div>
        </a>
      </div>
    )
  }
});
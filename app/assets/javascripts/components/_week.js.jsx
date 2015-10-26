var Week = React.createClass({
  render: function () {
    return (
      <div className="week">
        <a className="weekday monday-color">
          <div className="absolute-center">
            Monday
          </div>
        </a>
        <a className="weekday tuesday-color">
          <div className="absolute-center">
            Tuesday
          </div>
        </a>
        <a className="weekday wednesday-color">
          <div className="absolute-center">
            Wednesday
          </div>
        </a>
        <a className="weekday thursday-color">
          <div className="absolute-center">
            Thursday
          </div>
        </a>
        <a className="weekday friday-color">
          <div className="absolute-center">
            Friday
          </div>
        </a>
      </div>
    )
  }
});
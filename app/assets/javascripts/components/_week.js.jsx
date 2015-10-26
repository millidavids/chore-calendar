var Week = React.createClass({
  render: function () {
    return (
      <div className="week">
        <div className="weekday monday-color">
          <div className="absolute-center">
            Monday
          </div>
        </div>
        <div className="weekday tuesday-color">
          <div className="absolute-center">
            Tuesday
          </div>
        </div>
        <div className="weekday wednesday-color">
          <div className="absolute-center">
            Wednesday
          </div>
        </div>
        <div className="weekday thursday-color">
          <div className="absolute-center">
            Thursday
          </div>
        </div>
        <div className="weekday friday-color">
          <div className="absolute-center">
            Friday
          </div>
        </div>
      </div>
    )
  }
});
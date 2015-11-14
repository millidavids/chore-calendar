var CurrentDay = React.createClass({
  render: function () {
    var className = 'present-day ' + this.props.day + '-color';
    return (
      <div className={ className }>
        <div className="full-width-vertical-center">
          { this.props.name }
        </div>
      </div>
    );
  }
});

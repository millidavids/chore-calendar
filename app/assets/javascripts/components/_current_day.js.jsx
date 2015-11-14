var CurrentDay = React.createClass({
  render: function () {
    var day = (this.props.day == 'weekend' ? 'weekend ' : 'present-day ');
    var className = day + this.props.day + '-color';
    return (
      <div className={ className }>
        <div className="full-width-vertical-center">
          { this.props.name || "Go play!" }
        </div>
      </div>
    );
  }
});

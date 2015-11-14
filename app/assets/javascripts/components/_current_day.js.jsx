var CurrentDay = React.createClass({
  render: function () {
    var className = (this.props.day == 'weekend' ? 'weekend' : 'present-day') +
                    ' ' + this.props.day + '-color';
    return (
      <div className={ className }>
        <div className="full-width-vertical-center">
          { this.props.name || 'Go play!' }
        </div>
      </div>
    );
  }
});

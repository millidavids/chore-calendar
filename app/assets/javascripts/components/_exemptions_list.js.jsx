var ExemptionsList = React.createClass({
  render: function() {
    var days = Object.keys(this.props.exemptions);
    return (
      <div className="exemptions-wrapper">
        <h3>Exemptions</h3>
        <div className="exemption-days-wrapper">
          {
            days.map(function(day) {
              return (
                <Exemption exemptions={ this.props.exemptions[day] } day={ day } key={ day } getDayName={ this.props.getDayName } />
              );
            }.bind(this))
          }
        </div>
      </div>
    );
  }
});

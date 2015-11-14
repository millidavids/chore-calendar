var Exemption = React.createClass({
  render: function() {
    return (
      <div className="exemption-day">
        <h3 className="exemption-day-name">
          { this.props.getDayName(this.props.day) }
        </h3>
        <ul className="exemptions-list">
          {
            this.props.exemptions.map(function(exemption) {
              return (
                <li key={ exemption.id } className="exemption">
                  { exemption.name }
                  {
                    exemption.recurring ? (
                      <span className="recurring">(recurring)</span>
                    ) : ''
                  }
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
});

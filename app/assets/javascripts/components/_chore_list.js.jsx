var ChoreList = React.createClass({

  render: function() {
    return (
      <div className="chore-list">
        <ul>
          {
            this.props.day === 'monday' ? (
              <li className="special-task">Take trash cans to the curb</li>
            ) : ''
          }
          {
            this.props.day === 'tuesday' ? (
              <li className="special-task">Roll in trash cans</li>
            ) : ''
          }
          <li>Gather dishes and trash from desks and downstairs table</li>
          <li>Empty dishwasher</li>
          <li>Fill dishwasher</li>
          <li>Start dishwasher</li>
          <li>Wipe countertops</li>
          <li>Slay ants</li>
          <li>Empty trash</li>
          <li>Empty recycling</li>
          <li>Check soap and toilet paper in bathrooms</li>
        </ul>
      </div>
    );
  }
});

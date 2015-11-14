var PersonList = React.createClass({
	render: function() {
		return (
      <ul>
			  {
          this.props.people.map(function() {
            return (
              <Person key={}
            );
          })
        }
      </ul>
		);
	}
});

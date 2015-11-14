var PersonList = React.createClass({
	render: function() {
    var index = this.props.peopleNames.indexOf(this.props.currentPerson);
    if (index > -1) {
      this.props.peopleNames.splice(index, 1);
    }
		return (
      <ul className="swap-person-list">
			  {
          this.props.peopleNames.map(function(name) {
            return (
              <Person name={name}
                      key={name}
                      switchPeople={ this.props.switchPeople }
                      hideSwitchModal={ this.props.hideSwitchModal }/>
            );
          }.bind(this))
        }
      </ul>
		);
	}
});

var PersonList = React.createClass({
	render: function() {
    var currentPersonIndex = this.props.peopleNames.indexOf(this.props.currentPerson);
    if (currentPersonIndex > -1) {
      var people = this.props.peopleNames.splice(currentPersonIndex, 1);
    }
		return (
      <ul className="swap-person-list">
			  {
          this.props.peopleNames.map(function(name) {
            return (
              <Person name={name}
                      key={name}
                      switchPeople={ this.props.switchPeople }
                      toggleModal={ this.props.toggleModal }/>
            );
          }.bind(this))
        }
      </ul>
		);
	}
});

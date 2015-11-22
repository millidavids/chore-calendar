var PersonList = React.createClass({
	render: function() {
    var index = this.props.peopleNames.indexOf(this.props.currentPerson);
    if (this.props.exemptions[this.props.day] !== undefined){
      var exemptNames = this.props.exemptions[this.props.day].map(function(obj){
        return obj.name;  
      });
    } else {
      var exemptNames = [];
    }
    if (index > -1) {
      this.props.peopleNames.splice(index, 1);
    }
		return (
      <ul className="swap-person-list">
			  {
          this.props.peopleNames.map(function(name) {
            console.log(exemptNames.indexOf(name));
            if(exemptNames.indexOf(name) === -1){
              return (
                <Person name={name}
                        key={name}
                        switchPeople={ this.props.switchPeople }
                        hideSwitchModal={ this.props.hideSwitchModal }/>
              );
            }
          }.bind(this))
        }
      </ul>
		);
	}
});

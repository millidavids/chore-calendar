var SwapModal = React.createClass({
	render: function() {
    var className = 'modal ' + (this.props.isVisible ? 'shown' : '');
		return (
      <div className={ className }>
  	    <div className="modal-content">
  	      <h4 className="modal-header">Who can swap days with { this.props.currentPerson } ?</h4>
            <PersonList peopleNames={ this.props.peopleNames }
                        currentPerson={ this.props.currentPerson }
                        switchPeople={ this.props.switchPeople }
                        toggleModal={ this.props.toggleModal }/>
  	    </div>
  		</div>
    );
	}
});

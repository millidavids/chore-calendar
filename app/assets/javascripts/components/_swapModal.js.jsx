var SwapModal = React.createClass({
	render: function() {
    var className = 'modal ' + (this.props.isVisible ? 'shown' : '');
		return (
      <div className={ className }>
        <a href="#" onClick={ this.props.hideSwitchModal } className="close-modal-link">
          <i className="material-icons">close</i>
        </a>
  	    <div className="modal-content">
  	      <h4 className="modal-header">
            Who can swap days with { this.props.currentPerson }?
          </h4>
            <PersonList peopleNames={ this.props.peopleNames }
                        currentPerson={ this.props.currentPerson }
                        switchPeople={ this.props.switchPeople }
                        hideSwitchModal={ this.props.hideSwitchModal }
                        exemptions={ this.props.exemptions }
                        day={ this.props.day }/>
  	    </div>
  		</div>
    );
	}
});

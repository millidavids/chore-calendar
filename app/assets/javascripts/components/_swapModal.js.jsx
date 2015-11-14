var SwapModal = React.createClass({
  onSelect: function() {
    this.props.switchPeople;
    this.props.toggleModal();
  },

	render: function() {
    var className = 'modal ' + (this.props.isVisible ? 'shown' : '');
		return (
      <div id="modal1" className={ className }>
  	    <div className="modal-content">
  	      <h4 className="modal-header">Who can swap days with { this.props.currentPerson } ?</h4>
            <PersonList peopleNames={ this.props.peopleNames } currentPerson={ this.props.currentPerson}/>
  	    </div>
  	    <div className="modal-footer">
  	      <a href="#!" onClick={ this.onSelect } className="btn-flat">
            Agree to Terms of Service
          </a>
  	    </div>
  		</div>
    );
	}
});

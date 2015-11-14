var SwapModal = React.createClass({
	render: function() {
    var className = 'modal ' + (this.props.isVisible ? 'shown' : '');
		return (
      <div id="modal1" className={ className }>
  	    <div className="modal-content">
  	      <h4>Who can swap days with { this.props.currentPerson } ?</h4>
            <PersonList people={ this.props.people }/>
  	    </div>
  	    <div className="modal-footer">
  	      <a href="#!" className=" modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
  	    </div>
  		</div>
    );
	}
});

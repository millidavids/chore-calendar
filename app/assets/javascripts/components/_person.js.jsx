var Person = React.createClass({
  onSelect: function() {
    this.props.switchPeople(this.props.name);
    this.props.toggleModal();
  },

	render: function() {
		return (
      <li className="swap-person">
        <a href="#" onClick={ this.onSelect }>
          { this.props.name }
        </a>
      </li>
    );
	}
});

var Person = React.createClass({
  getInitialState: function() {
    return {
      isSelected: false
    };
  },

  selectPerson: function() {
    this.setState({isSelected: true});
  },

	render: function() {
    var className = 'swap-person ';
    if (this.state.isSelected) {
      className += 'selected-person';
    }
		return (
      <li className="swap-person">
        <a href="#" onClick={ this.selectPerson }>
          { this.props.name }
        </a>
      </li>
    );
	}
});

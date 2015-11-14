var Menu = React.createClass({
  getInitialState: function() {
    return {
      showMenu: false,
      showModal: false
    };
  },

  toggleMenu: function() {
    this.setState({showMenu: !this.state.showMenu});
  },

  toggleModal: function() {
    this.setState({showModal: !this.state.showModal});
  },

  render: function() {
    var menuClass = 'options-menu ';
    if (this.state.showMenu) {
      menuClass += 'shown';
    }
    return (
      <div className="menu-container">
        <a href="#" onClick={ this.toggleMenu } className="menu-link">
          <i className="material-icons">menu</i>
        </a>
        <nav className={ menuClass }>
          <ul>
            <li>
              <a href={ this.props.signOutUrl }>
                Log Out
              </a>
            </li>
            <li>
              <a href="#" onClick={ this.toggleModal }>
                Swap People
              </a>
            </li>
          </ul>
        </nav>
        <SwapModal isVisible={ this.state.showModal } currentPerson={ this.props.person } peopleNames={ this.props.peopleNames } switchPeople={ this.props.switchPeople } toggleModal={ this.toggleModal }/>
      </div>
    );
  }
});

var Menu = React.createClass({
  getInitialState: function() {
    return {
      showMenu: false
    };
  },

  toggleMenu: function() {
    this.setState({showMenu: !this.state.showMenu});
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
          </ul>
        </nav>
      </div>
    );
  }
});

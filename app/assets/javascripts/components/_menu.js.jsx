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
        <div className={ menuClass }>
          <ul>
            <li>
              <a href="#" onClick={ this.props.showManagement }>
                Management
              </a>
            </li>
            <li>
              <a href={ this.props.signOutUrl }>
                Log Out
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
});

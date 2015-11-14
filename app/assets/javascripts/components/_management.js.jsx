var Management = React.createClass({
  render: function() {
    var className = 'management';
    if (this.props.isVisible) {
      className += ' shown';
    }
    return (
      <div className={ className }>
        <a href="#" onClick={ this.props.hideManagement } className="close-management-link">
          <i className="material-icons">close</i>
        </a>
      </div>
    );
  }
});

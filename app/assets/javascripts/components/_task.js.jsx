var Task = React.createClass({
  render: function() {
    var className = this.props.day === 'everyday' ? '' : 'special-task';
    return (
      <li className={ className }>
        { this.props.task }
      </li>
    );
  }
});

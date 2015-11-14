var Task = React.createClass({
  render: function() {
    var className = this.props.day === 'everyday' ? '' : 'special-task';
    return (
      <li className={ className }>
      	{
      	  this.props.day === 'everyday' ? '' : (
            <i className="material-icons">warning</i>
          )
      	}
        <span className="task-body">{ this.props.task }</span>
      </li>
    );
  }
});

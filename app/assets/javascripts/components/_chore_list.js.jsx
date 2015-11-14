var ChoreList = React.createClass({
  getInitialState: function() {
    return {
      tasks: {
        everyday: [
          'Gather dishes + trash from desks, downstairs table',
          'Empty, load, and start dishwasher',
          'Wipe countertops',
          'Slay ants',
          'Empty trash and recycling',
          'Check soap, toilet paper in bathrooms'
        ],
        monday: [
          'Take trash cans to the curb'
        ],
        tuesday: [
          'Roll in trash cans'
        ],
        wednesday: [],
        thursday: [],
        friday: [],
        weekend: []
      }
    };
  },

  render: function() {
    var taskCount = this.state.tasks[this.props.day].length +
                    this.state.tasks.everyday.length;
    var className = 'chore-list tasks-' + taskCount;
    return (
      <ul className={ className }>
        {this.state.tasks[this.props.day].map(function(task) {
          return (
            <Task task={ task } day={ this.props.day } key={'task-' + task}/>
          );
        }.bind(this))}
        {this.state.tasks.everyday.map(function(task) {
          return (
            <Task task={ task } day="everyday" key={'task-' + task}/>
          );
        })}
      </ul>
    );
  }
});

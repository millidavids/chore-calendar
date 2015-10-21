this.Calendar = React.createClass({
  render: function() {
    return React.DOM.div({
      className: 'calendar'
    }, React.DOM.h2({
      className: 'title'
    }, 'Chore Calendar'));
  }
});
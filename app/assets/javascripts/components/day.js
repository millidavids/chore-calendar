this.Day = React.createClass({
  render: function() {
    return React.DOM.div({
      className: 'day'
    }, React.DOM.h2({
      className: 'title'
    }, 'Day'));
  }
});
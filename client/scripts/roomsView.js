var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    
  },

  render: function(rooms) {
    this.$select.append(this.template({'rooms': rooms}));
  },

  template: _.template (
    `
    <option value=<%- rooms %>><%- rooms %>
    </option>
    `
  )
};

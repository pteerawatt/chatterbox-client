var MessagesView = {

  $chats: $('#chats'),

  initialize: function () {
// create a room
  },

  render: function(username, text) {
    //this.$chats.append(data);
    this.$chats.prepend(MessageView.render({'username': username, 'text': text}));
  },

  renderMessage: function(message) {
    var message = message;
  }

};
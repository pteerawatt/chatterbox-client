var MessagesView = {

  $chats: $('#chats'),

  initialize: function () {

  },

  render: function(username, text) {
    //this.$chats.append(data);
    this.$chats.append(MessageView.render({'username': username, 'text': text}));
  }

};
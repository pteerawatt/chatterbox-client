var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);
    $('.submit').on('click', App.post());
  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log(data);
      for (var i = 0; i < data.results.length; i++) {
        var username = data.results[i].username;
        var text = data.results[i].text;
        MessagesView.render(username, text);
      }
      callback();
    });
  },

  post: function(message) {
    var message = {
      username: 'Pete',
      text: 'stoasijgfos',
      roomname: 'HR'
    };
    Parse.create((message));

  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};

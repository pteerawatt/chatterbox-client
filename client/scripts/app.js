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
  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log(data);

      for (var i = 0; i < data.results.length; i++) {
        var objectID = data.results[i].objectId;
        var username = data.results[i].username;
        var text = data.results[i].text;

        if (Messages.messageCollection.indexOf(objectID) === -1) {
          Messages.messageCollection.push(objectID);
          MessagesView.render(username, text);
        }
      }

      callback();
    });
  },

  post: function(message) {

    Parse.create(message);

  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('slow');
    FormView.setStatus(false);
  }
};

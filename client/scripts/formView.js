var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
     // var message = {
    //   username: 'Youser',
    //   text: 'testunknown',
    //   roomname: 'HR'
    // };
    var input = document.getElementById("message").value;
    var message = {
      username: App.username,
      text: input,
      roomname: 'HR'
    };
    //console.log(message.text)
    App.post(message);
    console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};
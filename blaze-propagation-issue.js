if (Meteor.isClient) {
  
  Template.hello.greeting = function () {
    return "Welcome to blaze-propagation-issue.";
  };

  Template.hello.events({
    'click input': function (evt) {
      evt.stopPropagation(); // This has no effect because the parent gets the click event first
      console.log("child element gets click event second");
    }
  });
  
  Template.hello.rendered = function() {
    $('#accordion').accordion({collapsible:true,active:false});
    $('h3').click(function(){
      console.log('parent element gets click event first');
    });
  }
  
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

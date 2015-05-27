

if (Meteor.isClient) {

  Template.test.helpers({
    posts: function () {
      return Posts.find();
    }
  });

  Template.onePicture.helpers({
    getImage: function (pictureId) {
      return Images.findOne({_id: pictureId}).url();
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

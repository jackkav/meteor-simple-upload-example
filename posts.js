this.Posts = new Meteor.Collection('posts');
this.Images = new FS.Collection("images", {
  stores: [new FS.Store.FileSystem("images", {path: "C:/uploads"})]
});
PostsSchema = new SimpleSchema({
  title: {
    type: String,
    max: 60
    },
    picture: {
        type: String,
        autoform: {
          afFieldInput: {
            type: 'fileUpload',
            collection: 'Images'
            }
        },
        label: 'Choose file'
    }
    });

Posts.attachSchema(PostsSchema);

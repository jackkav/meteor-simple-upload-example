
var Images = new FS.Collection("images", {
  stores: [new FS.Store.FileSystem("images", {path: "C:/uploads"})]
});

if (Meteor.isClient) {
  Template.myForm.events({
    'change .myFileInput': function(event, template) {
      FS.Utility.eachFile(event, function(file) {
        Images.insert(file, function (err, fileObj) {
        // Inserted new doc with ID fileObj._id, and kicked off the data upload using HTTP
      });
      });
    }
  });
  Template.body.helpers({
    tasks: function () {
      return Images.find();
    },
    output: function () {
      // // var url = "/cfs/files/images/rcEdFXuhsEDatLPbH/test4.xml";
      // // console.log(Images.findOne())
      // var data =Images.findOne();
      // var text = reader.readAsText('http://localhost:3000/cfs/files/images/vY2TSaAxKSnSHoMSM/test4.xml','utf-8');
      //  console.log(text);
       var file = 'http://localhost:3000/cfs/files/images/vY2TSaAxKSnSHoMSM/test4.xml';
      alert(file);
var reader = new FileReader();

Http.getElementsByTagName('')
reader.readAsText(Images.findOne().url);
alert(reader.String);
  //console.log(Images.findOne().this.url);
//var text = 'test';//= reader.readAsText(Images.findOne().url,'utf-8');

      return text;
    }
  });

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

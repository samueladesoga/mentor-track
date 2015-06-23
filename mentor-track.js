if (Meteor.isClient) {
	Template.tasks.helpers({
		'task': function(){
			return Tasks.find({})
		}
	});

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

Tasks = new Meteor.Collection('tasks');
Submissions = new Meteor.Collection('submissions');
if (Meteor.isClient) {
	Template.tasks.helpers({
		'task': function(){
			return Tasks.find({})
		}
	});

	Template.addTask.events({
      'submit form': function(event){
        event.preventDefault();
        var todoValue = event.target.taskTitle.value;
        Tasks.insert({
        	title: todoValue,
        	createdAt: new Date()
        });
        event.target.taskTitle.value = "" ; 
        }
	});

	Template.taskItem.events({
		'click .delete-task': function(event) {
			event.preventDefault();
			var confirm = window.confirm("Delete this task?");
		    if(confirm){
		        Tasks.remove({ _id: this._id });
		    }
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
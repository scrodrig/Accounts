/**
 * Created by SchubertDavidRodriguez on 10/25/16.
 */
Meteor.publish('allUsers', function () {
    if(Roles.userIsInRole(this.userId,'admin')){
        return Meteor.users.find({});
    }
});
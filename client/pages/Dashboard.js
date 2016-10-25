/**
 * Created by SchubertDavidRodriguez on 10/24/16.
 */
Template.Dashboard.helpers({
   admin: function () {
       return Roles.userIsInRole(Meteor.userId(), 'admin');
   }
});
/**
 * Created by SchubertDavidRodriguez on 10/24/16.
 */
Template.Users.onCreated(function () {
    this.autorun(() => {
       this.subscribe('allUsers');
    });
});

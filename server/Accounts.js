/**
 * Created by SchubertDavidRodriguez on 10/24/16.
 */

var postSignUp = function (userId, info) {
    console.log(userId);
    console.log(info.profile.profession);
    Roles.addUsersToRoles(userId, ['normal-user', info.profile.profession]);
};

AccountsTemplates.configure({
    postSignUpHook: postSignUp
});
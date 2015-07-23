'use strict';

angular.module('workingRoom')
    .config(function ($translateProvider) {
        $translateProvider.translations('en', {
            SIDENAV_MODULES: 'Modules',
            SIDENAV_PROFILE: 'Profile',
            SIDENAV_ADMIN: 'Admin',
            SIDENAV_LOGOUT: 'Logout'
        });
    });
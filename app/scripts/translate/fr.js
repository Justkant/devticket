'use strict';

angular.module('workingRoom')
    .config(function ($translateProvider) {
        $translateProvider.translations('fr', {
            SIDENAV_MODULES: 'Modules',
            SIDENAV_PROFILE: 'Profil',
            SIDENAV_ADMIN: 'Administration',
            SIDENAV_LOGOUT: 'Déconnexion'
        });

        $translateProvider.preferredLanguage('fr');
    });
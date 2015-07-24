'use strict';

angular.module('workingRoom')
    .config(function ($translateProvider) {
        $translateProvider.translations('fr', {
            // LANGUAGE_CHOICE_FR: 'Français',
            // LANGUAGE_CHOICE_EN: 'Anglais',
            // LANGUAGE_CHOICE_ES: 'Espagnol',
            SIDENAV_MODULES: 'Modules',
            SIDENAV_PROFILE: 'Profil',
            SIDENAV_ADMIN: 'Administration',
            SIDENAV_LOGOUT: 'Déconnexion',
            TICKET_TABLE_NAME: 'Nom',
            TICKET_TABLE_SUBJECT: 'Sujet',
            TICKET_TABLE_CREATED: 'Date de Création',
            TICKET_TABLE_LAST_REPLY: 'Dernière Réponse Par',
            TICKET_CREATE: 'Créer un ticket',
            TICKET_TABLE_SEARCH: 'Rechercher un ticket',
            TICKET_BUTTON_EDIT: "Edition du module"
        }).useSanitizeValueStrategy('escape').preferredLanguage('fr');
    });

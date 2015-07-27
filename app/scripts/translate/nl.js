'use strict';

angular.module('workingRoom')
    .config(function ($translateProvider) {
        $translateProvider.translations('nl', {
            // LANGUAGE_CHOICE_FR: 'Français',
            // LANGUAGE_CHOICE_EN: 'Anglais',
            // LANGUAGE_CHOICE_ES: 'Espagnol',
                HOME_PAGE_TITLE: 'Modules',
                HOME_PAGE_MODULES_STAT_CPM: 'STATISTIEK',
                HOME_PAGE_MODULES_TICKETS_CPM: 'TICKETS',
                HOME_PAGE_MODULES_STAT_ESC: 'STATISTIEK',
                HOME_PAGE_MODULES_TICKETS_ESC: 'TICKETS',
                HOME_PAGE_MODULES_STAT_VOY: 'STATISTIEK',
                HOME_PAGE_MODULES_TICKETS_VOY: 'TICKETS',
                SIDENAV_MODULES: 'Modulen',
                SIDENAV_PROFILE: 'Profiel',
                SIDENAV_ADMIN: 'Administration',
                SIDENAV_LOGOUT: 'Uitloggen',
                PROFILE_TITLE: 'Profiel',
                PROFILE_CONNECT: 'Verbonden',
                PROFILE_CONNECTED: 'Laatste verbinding : ',
                PROFILE_BUTTON_MODIFY: 'Wijzigen van het profiel',
                PROFILE_BUTTON_DEL: 'Profiel verwijderen',
                EDIT_PROFIL_NAME: 'Naam',
                EDIT_PROFIL_GROUPS: 'Voeg een groep',
                EDIT_PROFIL_USER: 'Gebruiker',
                EDIT_PROFIL_ADMIN: 'Beheerder',
                EDIT_PROFIL_MAIL: 'VERANDER E-MAIL',
                EDIT_PROFIL_PWD: 'VERANDER WACHTWOORD',
                EDIT_PROFIL_SAVE: 'Registreren',
                EDIT_PROFIL_CANCEL: 'Annuleren',
                ADMIN_TITLE: 'Administratie',
                ADMIN_MODULE_TAB: 'MODULEN',
                ADMIN_MODULE_CPM_DEL: 'VERWIJDEREN',
                ADMIN_MODULE_CPM_MODIFY: 'BEWERKEN',
                ADMIN_MODULE_ESCALADE_DEL_: 'VERWIJDEREN',
                ADMIN_MODULE_ESCALADE_MODIFY: 'BEWERKEN',
                ADMIN_MODULE_VOYAGE_DEL: 'VERWIJDEREN',
                ADMIN_MODULE_VOYAGE_MODIFY: 'BEWERKEN',
                ADMIN_MODULES_BUTTON_CREATE: 'Maak een module',
                BUTTON_CREATE_MODULE: 'CREËREN',
                BUTTON_CLOSE_CREATION_MODULE: 'DICHT',
                CREATE_NAME_MODULE: 'Module naam',
                MODIFY_MODULE_NAME: 'Module naam',
                MODIFY_MODULE_FIELDS: 'Naam van het nieuwe veld voor de tickets',
                MODIFY_MODULE_BUTTON_CLOSE: 'DICHT',
                MODIFY_MODULE_BUTTON_SAVE: 'WIJZIGINGEN OPSLAAN',
                MODIFY_FIELDS_NAME: 'Naam',
                MODIFY_FIELDS_BUTTON_DEL: 'VERWIJDEREN',
                MODIFY_FIELDS_BUTTON_CLOSE: 'DICHT',
                MODIFY_FIELDS_BUTTON_SAVE: 'WIJZIGINGEN OPSLAAN',
                DELETE_MODULE_CARE: 'Waarschuwing',
                DELETE_MODULE_QUESTION: 'Wil je echt deze module verwijderen ?',
                DELETE_MODULE_YES: 'JA',
                DELETE_MODULE_NO: 'NEE',
                ADMIN_GROUPS_TAB: 'GROEPEN',
                ADMIN_GROUPS_BUTTON_CREATE: 'Een groep creëren',
                ADMIN_GROUPS_BUTTON_DEL: 'VERWIJDEREN',
                ADMIN_GROUPS_BUTTON_MODIFY: 'BEWERK',
                ADMIN_USERS_TAB: 'GEBRUIKER',
                ADMIN_USERS_BUTTON_CREATE: 'Een gebruiker creëren',
                TICKET_TABLE_NAME: 'Naam',
                TICKET_TABLE_SUBJECT: 'Onderwerp',
                TICKET_TABLE_CREATED: 'Aanmaakdatum',
                TICKET_TABLE_LAST_REPLY: 'Laatste antwoord door',
                TICKET_CREATE: 'Een ticket creëren',
                TICKET_BUTTON_SEARCH: 'Een ticket opzoeken',
                TICKET_BUTTON_EDIT: "De module bewerken"
        })
    });

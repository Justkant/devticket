'use strict';

angular.module('workingRoom')
    .config(function ($translateProvider) {
        $translateProvider.translations('en', {
          // LANGUAGE_CHOICE_FR: 'French',
          // LANGUAGE_CHOICE_EN: 'English',
          // LANGUAGE_CHOICE_ES: 'Spanish',
          SIDENAV_MODULES: 'Modules',
          SIDENAV_PROFILE: 'Profile',
          SIDENAV_ADMIN: 'Management',
          SIDENAV_LOGOUT: 'Logout',
          TICKET_TABLE_NAME: 'Name',
          TICKET_TABLE_SUBJECT: 'Subject',
          TICKET_TABLE_CREATED: 'Created',
          TICKET_TABLE_LAST_REPLY: 'Last Reply By',
          TICKET_CREATE: 'Create a ticket',
          TICKET_BUTTON_SEARCH: "Search for a ticket",
          TICKET_BUTTON_EDIT: "Edition of the module"
        });
    });

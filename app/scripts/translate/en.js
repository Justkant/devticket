'use strict';

angular.module('workingRoom')
    .config(function ($translateProvider) {
        $translateProvider.translations('en', {
          // LANGUAGE_CHOICE_FR: 'French',
          // LANGUAGE_CHOICE_EN: 'English',
          // LANGUAGE_CHOICE_ES: 'Spanish',
          HOME_PAGE_TITLE: 'Modules',
          HOME_PAGE_MODULES_STAT_CPM: 'STATISTICS',
          HOME_PAGE_MODULES_TICKETS_CPM: 'TICKETS',
          HOME_PAGE_MODULES_STAT_ESC: 'STATISTICS',
          HOME_PAGE_MODULES_TICKETS_ESC: 'TICKETS',
          HOME_PAGE_MODULES_STAT_VOY: 'STATISTICS',
          HOME_PAGE_MODULES_TICKETS_VOY: 'TICKETS',
          SIDENAV_MODULES: 'Modules',
          SIDENAV_PROFILE: 'Profile',
          SIDENAV_ADMIN: 'Management',
          SIDENAV_LOGOUT: 'Logout',
          PROFILE_TITLE: 'Profile',
          PROFILE_CONNECT: 'Connect',
          PROFILE_CONNECTED: 'Last connexion : ',
          PROFILE_BUTTON_MODIFY: 'Modify profile',
          PROFILE_BUTTON_DEL: 'Delete profile',
          EDIT_PROFIL_NAME: 'Name',
          EDIT_PROFIL_GROUPS: 'Add a group',
          EDIT_PROFIL_USER: 'User',
          EDIT_PROFIL_ADMIN: 'Administrator',
          EDIT_PROFIL_MAIL: 'CHANGE EMAIL',
          EDIT_PROFIL_PWD: 'CHANGE PASSWORD',
          EDIT_PROFIL_SAVE: 'Save',
          EDIT_PROFIL_CANCEL: 'Cancel',
          ADMIN_TITLE: 'Administration',
          ADMIN_MODULE_TAB: 'MODULES',
          ADMIN_MODULE_CPM_DEL: 'DELETE',
          ADMIN_MODULE_CPM_MODIFY: 'MODIFY',
          ADMIN_MODULE_ESCALADE_DEL_: 'DELETE',
          ADMIN_MODULE_ESCALADE_MODIFY: 'MODIFY',
          ADMIN_MODULE_VOYAGE_DEL: 'DELETE',
          ADMIN_MODULE_VOYAGE_MODIFY: 'MODIFY',
          ADMIN_MODULES_BUTTON_CREATE: 'Create a module',
          BUTTON_CREATE_MODULE: 'CREATE',
          BUTTON_CLOSE_CREATION_MODULE: 'CLOSE',
          CREATE_NAME_MODULE: 'Name for the module',
          MODIFY_MODULE_NAME: 'Name for the module',
          MODIFY_MODULE_FIELDS: 'Name for the new ticket\'s fields',
          MODIFY_MODULE_BUTTON_CLOSE: 'CLOSE',
          MODIFY_MODULE_BUTTON_SAVE: 'SAVE',
          MODIFY_FIELDS_NAME: 'Name',
          MODIFY_FIELDS_BUTTON_DEL: 'DELETE',
          MODIFY_FIELDS_BUTTON_CLOSE: 'CLOSE',
          MODIFY_FIELDS_BUTTON_SAVE: 'SAVE',
          DELETE_MODULE_CARE: 'Attention',
          DELETE_MODULE_QUESTION: 'Do you really want to delete this module ?',
          DELETE_MODULE_YES: 'YES',
          DELETE_MODULE_NO: 'NO',
          ADMIN_GROUPS_TAB: 'GROUPS',
          ADMIN_GROUPS_BUTTON_CREATE: 'Create a groupe',
          ADMIN_GROUPS_BUTTON_DEL: 'DELETE',
          ADMIN_GROUPS_BUTTON_MODIFY: 'MODIFY',
          ADMIN_USERS_TAB: 'USERS',
          ADMIN_USERS_BUTTON_CREATE: 'Create a user',
          TICKET_TABLE_NAME: 'Name',
          TICKET_TABLE_SUBJECT: 'Subject',
          TICKET_TABLE_CREATED: 'Created',
          TICKET_TABLE_LAST_REPLY: 'Last Reply By',
          TICKET_CREATE: 'Create a ticket',
          TICKET_BUTTON_SEARCH: "Search for a ticket",
          TICKET_BUTTON_EDIT: "Edition of the module"
        });
    });

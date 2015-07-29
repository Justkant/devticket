'use strict';

angular.module('workingRoom')
.config(function ($translateProvider) {
  $translateProvider.translations('de', {
    HOME_PAGE_TITLE: 'Module',
    HOME_PAGE_MODULES_STAT_CPM: 'STATISTIK',
    HOME_PAGE_MODULES_TICKETS_CPM: 'KARTEN',
    SIDENAV_MODULES: 'Module',
    SIDENAV_PROFILE: 'Profil',
    SIDENAV_ADMIN: 'Administrator',
    SIDENAV_LOGOUT: 'Ausloggen',
    PROFILE_TITLE: 'Profil',
    PROFILE_CONNECT: 'Verbunden',
    PROFILE_CONNECTED: 'Zuletzt gesehen : ',
    PROFILE_BUTTON_MODIFY: 'Das Profil ändern',
    PROFILE_BUTTON_DEL: 'Das Profil löschen',
    EDIT_PROFIL_NAME: 'Name',
    EDIT_PROFIL_GROUPS: 'Hinzufügen einer Gruppe',
    EDIT_PROFIL_USER: 'Benutzer',
    EDIT_PROFIL_ADMIN: 'Administrator',
    EDIT_PROFIL_MAIL: 'E-MAIL ÄNDERN',
    EDIT_PROFIL_PWD: 'KENNWORT ÄNDERN',
    EDIT_PROFIL_SAVE: 'SPEICHERN',
    EDIT_PROFIL_CANCEL: 'Stornieren',
    ADMIN_TITLE: 'Administrator',
    ADMIN_MODULE_TAB: 'MODULE',
    ADMIN_MODULE_CPM_DEL: 'ENTFERNEN',
    ADMIN_MODULE_CPM_MODIFY: 'BEARBEITEN',
    ADMIN_MODULE_ESCALADE_DEL_: 'ENTFERNEN',
    ADMIN_MODULE_ESCALADE_MODIFY: 'BEARBEITEN',
    ADMIN_MODULE_VOYAGE_DEL: 'ENTFERNEN',
    ADMIN_MODULE_VOYAGE_MODIFY: 'BEARBEITEN',
    ADMIN_MODULES_BUTTON_CREATE: 'Erstellen Sie ein Modul',
    BUTTON_CREATE_MODULE: 'ERSTELLEN',
    BUTTON_CLOSE_CREATION_MODULE: 'SCHLIESSEN',
    CREATE_NAME_MODULE: 'Modulnamen',
    MODIFY_MODULE_NAME: 'Modulnamen',
    MODIFY_MODULE_FIELDS: 'Name des neuen Feldes für Tickets',
    MODIFY_MODULE_BUTTON_CLOSE: 'SCHLIESSEN',
    MODIFY_MODULE_BUTTON_SAVE: 'SPEICHERN',
    MODIFY_FIELDS_NAME: 'Name',
    MODIFY_FIELDS_BUTTON_DEL: 'ENTFERNEN',
    MODIFY_FIELDS_BUTTON_CLOSE: 'SCHLIESSEN',
    MODIFY_FIELDS_BUTTON_SAVE: 'SPEICHERN',
    DELETE_MODULE_CARE: 'Achtung',
    DELETE_MODULE_QUESTION: 'Wollen Sie wirklich dieses Modul löschen ?',
    DELETE_MODULE_YES: 'JA',
    DELETE_MODULE_NO: 'NEIN',
    ADMIN_GROUPS_TAB: 'GRUPPEN',
    ADMIN_GROUPS_BUTTON_CREATE: 'Erstellen sie ein Gruppe',
    BUTTON_CREATE_GROUPE: 'ERSTELLEN',
    BUTTON_CLOSE_CREATION_GROUPE: 'SCHLIESSEN',
    CREATE_NAME_GROUPE: 'Gruppe name',
    ADMIN_GROUPS_BUTTON_DEL: 'ENTFERNEN',
    ADMIN_GROUPS_BUTTON_MODIFY: 'BEARBEITEN',
    ADMIN_USERS_TAB: 'BENUTZER',
    ADMIN_USERS_BUTTON_CREATE: 'Erstellen sie ein Benutzer',
    TICKET_TABLE_NAME: 'Name',
    TICKET_TABLE_SUBJECT: 'Thema',
    TICKET_TABLE_CREATED: 'Erstellungsdatum',
    TICKET_TABLE_LAST_REPLY: 'Letzte Antwort von',
    TICKET_CREATE: 'Ein Ticket erstellen',
    TICKET_BUTTON_SEARCH: 'Ein Ticket suchen',
    TICKET_BUTTON_EDIT: "Das Modul bearbeiten",
    MODAL_EDIT_PROFILE_INFOS: 'Informationen',
    CHANGE_MAIL_MODAL_NEW: 'Neue email',
    CHANGE_MAIL_MODAL_CONFIRM_MDP: 'Kennwort',
    CHANGE_MAIL_MODAL_CLOSE: 'SCHLIESSEN',
    CHANGE_MAIL_MODAL_SAVE: 'SPEICHERN',
    CHANGE_PWD_MODAL_OLD: 'Altes kennwort',
    CHANGE_PWD_MODAL_NEW: 'Neue kennwort',
    CHANGE_PWD_MODAL_CLOSE: 'SCHLIESSEN',
    CHANGE_PWD_MODAL_SAVE: 'SPEICHERN',
    MODAL_EDIT_GROUP_CLOSE: 'SCHLIESSEN',
    MODAL_EDIT_GROUP_SAVE: 'SPEICHERN',
    MODAL_EDIT_GROUP_NAME: 'Name',
    REQUIRED_FIELD: 'Dieses Feld ist erforderlich',
    INVALID_MAIL: 'Ungültige email',
    TICKETS_PER_PAGE: 'Tickets pro Seite',
    SUR: 'von',
    USERS_PER_PAGE: 'Benutzer pro Seite',
    SEARCH_TICKETS_CLOSE: 'SCHLIESSEN',
    SEARCH_TICKETS: 'SUCHE',
    VIEW_TICKET_MODAL_ANSWER: 'Schreiben Sie eine Antwort',
    VIEW_TICKET_MODAL_SEND: 'SENDEN',
    VIEW_TICKET_MODAL_CLOSE: 'SCHLIESSEN',
    DELETE_USER_MODAL_DELETE_ACCOUNT: 'Benutzerkonto löschen',
    DELETE_USER_MODAL_PWD: 'Kennwort',
    DELETE_USER_MODAL_CANCEL: 'STORNIEREN',
    DELETE_USER_MODAL_BUTTON_DEL: 'ENTFERNEN'
  })
});

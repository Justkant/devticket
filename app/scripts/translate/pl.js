'use strict';

angular.module('workingRoom')
.config(function ($translateProvider) {
  $translateProvider.translations('pl', {
    HOME_PAGE_TITLE: 'Moduły',
    HOME_PAGE_MODULES_STAT_CPM: 'STATYSTYKA',
    HOME_PAGE_MODULES_TICKETS_CPM: 'TICKETS',
    SIDENAV_MODULES: 'Moduły',
    SIDENAV_PROFILE: 'Profil',
    SIDENAV_ADMIN: 'Administracja',
    SIDENAV_LOGOUT: 'Wyloguj',
    PROFILE_TITLE: 'Profil',
    PROFILE_CONNECT: 'Połączony',
    PROFILE_CONNECTED: 'Ostatnie połączonie : ',
    PROFILE_BUTTON_MODIFY: 'Zmodyfikować profil',
    PROFILE_BUTTON_DEL: 'Usuń profil',
    EDIT_PROFIL_NAME: 'Nazwa',
    EDIT_PROFIL_GROUPS: 'Dodaj grupę',
    EDIT_PROFIL_USER: 'Użytkownik',
    EDIT_PROFIL_ADMIN: 'Administrator',
    EDIT_PROFIL_MAIL: 'ZMIEŃ ADRES E-MAIL',
    EDIT_PROFIL_PWD: 'ZMIEŃ HASŁO',
    EDIT_PROFIL_SAVE: 'Zgraj',
    EDIT_PROFIL_CANCEL: 'Anuluj',
    ADMIN_TITLE: 'Administracja',
    ADMIN_MODULE_TAB: 'MODUŁY',
    ADMIN_MODULE_CPM_DEL: 'USUNĄĆ',
    ADMIN_MODULE_CPM_MODIFY: 'ZMODYFIKOWAĆ',
    ADMIN_MODULE_ESCALADE_DEL_: 'USUNĄĆ',
    ADMIN_MODULE_ESCALADE_MODIFY: 'ZMODYFIKOWAĆ',
    ADMIN_MODULE_VOYAGE_DEL: 'USUNĄĆ',
    ADMIN_MODULE_VOYAGE_MODIFY: 'ZMODYFIKOWAĆ',
    ADMIN_MODULES_BUTTON_CREATE: 'Utworzyć moduł',
    BUTTON_CREATE_MODULE: 'TWORZYĆ',
    BUTTON_CLOSE_CREATION_MODULE: 'WYSŁAĆ',
    CREATE_NAME_MODULE: 'Nazwa modułu',
    MODIFY_MODULE_NAME: 'Nazwa modułu',
    MODIFY_MODULE_FIELDS: 'Dodaj nazwę pola',
    MODIFY_MODULE_BUTTON_CLOSE: 'WYSŁAĆ',
    MODIFY_MODULE_BUTTON_SAVE: 'ZGRAJ',
    MODIFY_FIELDS_NAME: 'Nazwa',
    MODIFY_FIELDS_BUTTON_DEL: 'USUNĄĆ',
    MODIFY_FIELDS_BUTTON_CLOSE: 'WYSŁAĆ',
    MODIFY_FIELDS_BUTTON_SAVE: 'ZGRAJ',
    DELETE_MODULE_CARE: 'Ostrzeżenie',
    DELETE_MODULE_QUESTION: 'Czy na pewno chcesz usunąć ten moduł ?',
    DELETE_MODULE_YES: 'TAK',
    DELETE_MODULE_NO: 'NIE',
    ADMIN_GROUPS_TAB: 'GRUPY',
    ADMIN_GROUPS_BUTTON_CREATE: 'Tworzyć grupę',
    BUTTON_CREATE_GROUPE: 'TWORZYĆ',
    BUTTON_CLOSE_CREATION_GROUPE: 'WYSŁAĆ',
    CREATE_NAME_GROUPE: 'Nazwa grupę',
    ADMIN_GROUPS_BUTTON_DEL: 'USUNĄĆ',
    ADMIN_GROUPS_BUTTON_MODIFY: 'ZMODYFIKOWAĆ',
    ADMIN_USERS_TAB: 'UŻYTKOWNIK',
    ADMIN_USERS_BUTTON_CREATE: 'Utworzyć użytkownika',
    TICKET_TABLE_NAME: 'Nazwa',
    TICKET_TABLE_SUBJECT: 'Temat',
    TICKET_TABLE_CREATED: 'Data utworzenia',
    TICKET_TABLE_LAST_REPLY: 'Ostatnia odpowiedź',
    TICKET_CREATE: 'Stworzyć  ticket',
    TICKET_BUTTON_SEARCH: 'Wyszukiwarka ticket',
    TICKET_BUTTON_EDIT: "Moduł edycji",
    MODAL_EDIT_PROFILE_INFOS: 'Informations',
    MODAL_EDIT_PROFILE_MAIL: 'Nouvel email',
    MODAL_EDIT_PROFILE_CONFIRM_MDP: 'Mot de passe',
    MODAL_EDIT_PROFILE_LAST_MDP: 'Ancien mot de passe',
    MODAL_EDIT_PROFILE_NEW_MDP: 'Nouveau mot de passe',
    MODAL_EDIT_GROUP_CLOSE: 'FERMER',
    MODAL_EDIT_GROUP_SAVE: 'SAUVEGARDER',
    MODAL_EDIT_GROUP_NAME: 'Nom',
    REQUIRED_FIELD: 'Ce champ est requis',
    INVALID_MAIL: 'L\'email est invalide.',
    TICKETS_PER_PAGE: 'Tickets par pages',
    SUR: 'sur',
    USERS_PER_PAGE: 'Utilisateurs par page',
    SEARCH_TICKETS_CLOSE: 'FERMER',
    SEARCH_TICKETS: 'RECHERCHER'
  })
});

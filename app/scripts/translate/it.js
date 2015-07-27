'use strict';

angular.module('workingRoom')
    .config(function ($translateProvider) {
        $translateProvider.translations('it', {
          // LANGUAGE_CHOICE_FR: 'Francés',
          // LANGUAGE_CHOICE_EN: 'Inglés',
          // LANGUAGE_CHOICE_ES: 'Español',
          HOME_PAGE_TITLE: 'Modulos',
          HOME_PAGE_MODULES_STAT_CPM: 'STATISTICHE',
          HOME_PAGE_MODULES_TICKETS_CPM: 'TICKETS',
          HOME_PAGE_MODULES_STAT_ESC: 'STATISTICHE',
          HOME_PAGE_MODULES_TICKETS_ESC: 'TICKETS',
          HOME_PAGE_MODULES_STAT_VOY: 'STATISTICHE',
          HOME_PAGE_MODULES_TICKETS_VOY: 'TICKETS',
          SIDENAV_MODULES: 'Modulo',
          SIDENAV_PROFILE: 'Profilo',
          SIDENAV_ADMIN: 'Parametri',
          SIDENAV_LOGOUT: 'Chiudi sessione',
          PROFILE_TITLE: 'Profilo',
          PROFILE_CONNECT: 'Connesso',
          PROFILE_CONNECTED: 'Ultima connessione : ',
          PROFILE_BUTTON_MODIFY: 'Modificare il profilo',
          PROFILE_BUTTON_DEL: 'Eliminare il profilo',
          EDIT_PROFIL_NAME: 'Nome',
          EDIT_PROFIL_GROUPS: 'Aggiungere un gruppo',
          EDIT_PROFIL_USER: 'Utente',
          EDIT_PROFIL_ADMIN: 'Amministratore',
          EDIT_PROFIL_MAIL: 'CAMBIARE E-MAIL',
          EDIT_PROFIL_PWD: 'CAMBIARE LA PASSWORD',
          EDIT_PROFIL_SAVE: 'Registrare',
          EDIT_PROFIL_CANCEL: 'Cancellare',
          ADMIN_TITLE: 'Parametri',
          ADMIN_MODULE_TAB: 'MODULI',
          ADMIN_MODULE_CPM_DEL: 'ELIMINARE',
          ADMIN_MODULE_CPM_MODIFY: 'MODIFICARE',
          ADMIN_MODULE_ESCALADE_DEL_: 'ELIMINARE',
          ADMIN_MODULE_ESCALADE_MODIFY: 'MODIFICARE',
          ADMIN_MODULE_VOYAGE_DEL: 'ELIMINARE',
          ADMIN_MODULE_VOYAGE_MODIFY: 'MODIFICARE',
          ADMIN_MODULES_BUTTON_CREATE: 'Creare un modulo',
          BUTTON_CREATE_MODULE: 'CREARE',
          BUTTON_CLOSE_CREATION_MODULE: 'CHIUDERE',
          CREATE_NAME_MODULE: 'Nome del modulo',
          MODIFY_MODULE_NAME: 'Nome del modulo',
          MODIFY_MODULE_FIELDS: 'Nome della nuova casella per i ticket',
          MODIFY_MODULE_BUTTON_CLOSE: 'CHIUDERE',
          MODIFY_MODULE_BUTTON_SAVE: 'REGISTRARE',
          MODIFY_FIELDS_NAME: 'Nome',
          MODIFY_FIELDS_BUTTON_DEL: 'ELIMINARE',
          MODIFY_FIELDS_BUTTON_CLOSE: 'CHIUDERE',
          MODIFY_FIELDS_BUTTON_SAVE: 'SALVARE',
          DELETE_MODULE_CARE: 'Attenzione',
          DELETE_MODULE_QUESTION: 'Vuoi davvero eliminare questo modulo?',
          DELETE_MODULE_YES: 'SÌ',
          DELETE_MODULE_NO: 'NO',
          ADMIN_GROUPS_TAB: 'GRUPPI',
          ADMIN_GROUPS_BUTTON_CREATE: 'Creare un gruppo',
          ADMIN_GROUPS_BUTTON_DEL: 'ELIMINARE',
          ADMIN_GROUPS_BUTTON_MODIFY: 'MODIFICARE',
          ADMIN_USERS_TAB: 'UTENTI',
          ADMIN_USERS_BUTTON_CREATE: 'Creare un utente',
          TICKET_TABLE_NAME: 'Nome',
          TICKET_TABLE_SUBJECT: 'Oggetto',
          TICKET_TABLE_CREATED: 'Data di creazione',
          TICKET_TABLE_LAST_REPLY: 'Ultima risposta',
          TICKET_CREATE: 'Creare un ticket',
          TICKET_BUTTON_SEARCH: "Ricercare un ticket",
          TICKET_BUTTON_EDIT: "Modificare un modulo"
        });
    });

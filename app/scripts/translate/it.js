'use strict';

angular.module('workingRoom')
    .config(function ($translateProvider) {
        $translateProvider.translations('it', {
          // LANGUAGE_CHOICE_FR: 'Francés',
          // LANGUAGE_CHOICE_EN: 'Inglés',
          // LANGUAGE_CHOICE_ES: 'Español',
          SIDENAV_MODULES: 'Modulo',
          SIDENAV_PROFILE: 'Profilo',
          SIDENAV_ADMIN: 'Gestione',
          SIDENAV_LOGOUT: 'Chiudi sessione',
          TICKET_TABLE_NAME: 'Nome',
          TICKET_TABLE_SUBJECT: 'Soggetto',
          TICKET_TABLE_CREATED: 'data di creazione',
          TICKET_TABLE_LAST_REPLY: 'Ultima risposta',
          TICKET_CREATE: 'Creare un biglietti',
          TICKET_BUTTON_SEARCH: "ricerca di biglietti",
          TICKET_BUTTON_EDIT: "Modificare un modulo"
        });
    });

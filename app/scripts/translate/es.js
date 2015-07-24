'use strict';

angular.module('workingRoom')
    .config(function ($translateProvider) {
        $translateProvider.translations('es', {
          // LANGUAGE_CHOICE_FR: 'Francés',
          // LANGUAGE_CHOICE_EN: 'Inglés',
          // LANGUAGE_CHOICE_ES: 'Español',
          SIDENAV_MODULES: 'Módulo',
          SIDENAV_PROFILE: 'Perfil',
          SIDENAV_ADMIN: 'Administración',
          SIDENAV_LOGOUT: 'Cerrar Sesión',
          TICKET_TABLE_NAME: 'Nombre',
          TICKET_TABLE_SUBJECT: 'Sujeto',
          TICKET_TABLE_CREATED: 'Fecha de creación',
          TICKET_TABLE_LAST_REPLY: 'Última respuesta por',
          TICKET_CREATE: 'Crear un billete',
          TICKET_BUTTON_SEARCH: "Buscar un billete",
          TICKET_BUTTON_EDIT: "Edición del módulo"
        });
    });

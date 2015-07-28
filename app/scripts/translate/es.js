'use strict';

angular.module('workingRoom')
.config(function ($translateProvider) {
  $translateProvider.translations('es', {
    HOME_PAGE_TITLE: 'Módulos',
    HOME_PAGE_MODULES_STAT_CPM: 'ESTADÍSTICAS',
    HOME_PAGE_MODULES_TICKETS_CPM: 'TICKETS',
    SIDENAV_MODULES: 'Módulo',
    SIDENAV_PROFILE: 'Perfil',
    SIDENAV_ADMIN: 'Administración',
    SIDENAV_LOGOUT: 'Cerrar Sesión',
    PROFILE_TITLE: 'Perfil',
    PROFILE_CONNECT: 'Conectado',
    PROFILE_CONNECTED: 'Última conexión : ',
    PROFILE_BUTTON_MODIFY: 'Editar el perfil',
    PROFILE_BUTTON_DEL: 'Supresión del perfil',
    EDIT_PROFIL_NAME: 'Nombre',
    EDIT_PROFIL_GROUPS: 'Añadir un grupo',
    EDIT_PROFIL_USER: 'Usuario',
    EDIT_PROFIL_ADMIN: 'Administrador',
    EDIT_PROFIL_MAIL: 'CAMBIAR EL CORREO ELECTRÓNICO',
    EDIT_PROFIL_PWD: 'CAMBIAR LA CONTRASEÑA',
    EDIT_PROFIL_SAVE: 'Guardar',
    EDIT_PROFIL_CANCEL: 'Cancelar',
    ADMIN_TITLE: 'Administración',
    ADMIN_MODULE_TAB: 'MÓDULOS',
    ADMIN_MODULE_CPM_DEL: 'ELIMINAR',
    ADMIN_MODULE_CPM_MODIFY: 'CAMBIAR',
    ADMIN_MODULE_ESCALADE_DEL_: 'ELIMINAR',
    ADMIN_MODULE_ESCALADE_MODIFY: 'CAMBIAR',
    ADMIN_MODULE_VOYAGE_DEL: 'ELIMINAR',
    ADMIN_MODULE_VOYAGE_MODIFY: 'CAMBIAR',
    ADMIN_MODULES_BUTTON_CREATE: 'Crear un módulo',
    BUTTON_CREATE_MODULE: 'CREAR',
    BUTTON_CLOSE_CREATION_MODULE: 'CERRAR',
    CREATE_NAME_MODULE: 'Nombre del módulo',
    MODIFY_MODULE_NAME: 'Nombre del módulo',
    MODIFY_MODULE_FIELDS: 'Nombre del campo de texto',
    MODIFY_MODULE_BUTTON_CLOSE: 'CERRAR',
    MODIFY_MODULE_BUTTON_SAVE: 'GUARDAR',
    MODIFY_FIELDS_NAME: 'Nombre',
    MODIFY_FIELDS_BUTTON_DEL: 'ELIMINAR',
    MODIFY_FIELDS_BUTTON_CLOSE: 'CERRAR',
    MODIFY_FIELDS_BUTTON_SAVE: 'Guardar',
    DELETE_MODULE_CARE: 'Atención',
    DELETE_MODULE_QUESTION: '¿ Desea realmente eliminar este módulo ?',
    DELETE_MODULE_YES: 'SÍ',
    DELETE_MODULE_NO: 'NO',
    ADMIN_GROUPS_TAB: 'GRUPOS',
    ADMIN_GROUPS_BUTTON_CREATE: 'Crear un grupo',
    BUTTON_CREATE_GROUPE: 'CREAR',
    BUTTON_CLOSE_CREATION_GROUPE: 'CERRAR',
    CREATE_NAME_GROUPE: 'Nombre del grupo',
    ADMIN_GROUPS_BUTTON_DEL: 'ELIMINAR',
    ADMIN_GROUPS_BUTTON_MODIFY: 'modificar',
    ADMIN_USERS_TAB: 'USUARIOS',
    ADMIN_USERS_BUTTON_CREATE: 'Crear un usuario',
    TICKET_TABLE_NAME: 'Nombre',
    TICKET_TABLE_SUBJECT: 'Sujeto',
    TICKET_TABLE_CREATED: 'Fecha de creación',
    TICKET_TABLE_LAST_REPLY: 'Última respuesta dada por',
    TICKET_CREATE: 'Crear un ticket',
    TICKET_BUTTON_SEARCH: "Buscar un ticket",
    TICKET_BUTTON_EDIT: "Edición del módulo",
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
  });
});

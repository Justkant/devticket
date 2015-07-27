'use strict';

angular.module('workingRoom')
    .config(function ($translateProvider) {
        $translateProvider.translations('pt', {
            // LANGUAGE_CHOICE_FR: 'Français',
            // LANGUAGE_CHOICE_EN: 'Anglais',
            // LANGUAGE_CHOICE_ES: 'Espagnol',
                HOME_PAGE_TITLE: 'Módulos',
                HOME_PAGE_MODULES_STAT_CPM: 'ESTATÍSTICA',
                HOME_PAGE_MODULES_TICKETS_CPM: 'PEDIDOS',
                HOME_PAGE_MODULES_STAT_ESC: 'ESTATÍSTICA',
                HOME_PAGE_MODULES_TICKETS_ESC: 'PEDIDOS',
                HOME_PAGE_MODULES_STAT_VOY: 'ESTATÍSTICA',
                HOME_PAGE_MODULES_TICKETS_VOY: 'PEDIDOS',
                SIDENAV_MODULES: 'Módulos',
                SIDENAV_PROFILE: 'Perfil',
                SIDENAV_ADMIN: 'Administração',
                SIDENAV_LOGOUT: 'Deslogar',
                PROFILE_TITLE: 'Perfil',
                PROFILE_CONNECT: 'Conectado',
                PROFILE_CONNECTED: 'Última conexão : ',
                PROFILE_BUTTON_MODIFY: 'Modificar o perfil',
                PROFILE_BUTTON_DEL: 'Eliminar o perfil',
                EDIT_PROFIL_NAME: 'Nome',
                EDIT_PROFIL_GROUPS: 'Adicionar um grupo',
                EDIT_PROFIL_USER: 'Usuário',
                EDIT_PROFIL_ADMIN: 'Administrador',
                EDIT_PROFIL_MAIL: 'ALTERAR EMAIL',
                EDIT_PROFIL_PWD: 'ALTERAR A PASSWORD',
                EDIT_PROFIL_SAVE: 'Registar',
                EDIT_PROFIL_CANCEL: 'Cancelar',
                ADMIN_TITLE: 'Administração',
                ADMIN_MODULE_TAB: 'MÓDULOS',
                ADMIN_MODULE_CPM_DEL: 'ELIMINAR',
                ADMIN_MODULE_CPM_MODIFY: 'EDITAR',
                ADMIN_MODULE_ESCALADE_DEL_: 'ELIMINAR',
                ADMIN_MODULE_ESCALADE_MODIFY: 'EDITAR',
                ADMIN_MODULE_VOYAGE_DEL: 'ELIMINAR',
                ADMIN_MODULE_VOYAGE_MODIFY: 'EDITAR',
                ADMIN_MODULES_BUTTON_CREATE: 'Criar um módulo',
                BUTTON_CREATE_MODULE: 'CRIAR',
                BUTTON_CLOSE_CREATION_MODULE: 'FECHAR',
                CREATE_NAME_MODULE: 'Nome do módulo',
                MODIFY_MODULE_NAME: 'Nome do módulo',
                MODIFY_MODULE_FIELDS: 'Nome do novo campo de pedidos',
                MODIFY_MODULE_BUTTON_CLOSE: 'FECHAR',
                MODIFY_MODULE_BUTTON_SAVE: 'SALVAR',
                MODIFY_FIELDS_NAME: 'Nome',
                MODIFY_FIELDS_BUTTON_DEL: 'ELIMINAR',
                MODIFY_FIELDS_BUTTON_CLOSE: 'FECHAR',
                MODIFY_FIELDS_BUTTON_SAVE: 'SALVAR',
                DELETE_MODULE_CARE: 'Atenção',
                DELETE_MODULE_QUESTION: 'Você realmente quer apagar este módulo ?',
                DELETE_MODULE_YES: 'SIM',
                DELETE_MODULE_NO: 'NÃO',
                ADMIN_GROUPS_TAB: 'GRUPOS',
                ADMIN_GROUPS_BUTTON_CREATE: 'Criar um grupo',
                ADMIN_GROUPS_BUTTON_DEL: 'ELIMINAR',
                ADMIN_GROUPS_BUTTON_MODIFY: 'EDITAR',
                ADMIN_USERS_TAB: 'USUÁRIOS',
                ADMIN_USERS_BUTTON_CREATE: 'Criar um usuário',
                TICKET_TABLE_NAME: 'Nome',
                TICKET_TABLE_SUBJECT: 'Tópico',
                TICKET_TABLE_CREATED: 'Data de criação',
                TICKET_TABLE_LAST_REPLY: 'Última resposta por',
                TICKET_CREATE: 'Criar um pedi',
                TICKET_BUTTON_SEARCH: 'Procurar um pedido',
                TICKET_BUTTON_EDIT: "Edite o módulo"
        })
    });
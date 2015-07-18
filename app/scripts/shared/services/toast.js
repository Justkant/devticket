'use strict';

angular.module('workingRoom')
    .factory('Toasts', function ($mdToast) {
        return {
            simple: function (message) {
                $mdToast.show($mdToast.simple().content(message));
            },
            error: function(error) {
                var message = '';

                switch (error.code) {
                    case 'EMAIL_TAKEN':
                        message = 'L\'e-mail spécifié est déjà utilisé';
                        break;
                    case 'INVALID_EMAIL':
                        message = 'L\'e-mail de l\'utilisateur spécifié est invalide';
                        break;
                    case 'INVALID_PASSWORD':
                        message = 'Le mot de passe de l\'utilisateur spécifié est invalide';
                        break;
                    case 'INVALID_USER':
                        message = 'Ce compte n\'existe pas';
                        break;
                    case 'NETWORK_ERROR':
                        message = 'Une erreur est survenue avec le serveur. Vérifiez votre connexion wifi.';
                        break;
                    default:
                        message = 'Une erreur est survenue : ' + error.message;
                }
                $mdToast.show($mdToast.simple().content(message));
            }
        };
    });
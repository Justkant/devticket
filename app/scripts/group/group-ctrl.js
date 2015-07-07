'use strict';

angular.module('workingRoom')
  .controller('GroupCtrl', function ($scope) {
    var vm = this;
    //var ref = new Firebase('https://devticket.firebaseio.com/');

    vm.filter = 'Tickets à traiter';
    vm.filters = [
      'Tickets à traiter',
      'Tickets Non Lus',
      'Tickets par statut',
      'Tickets "A relancer"'
    ];

    vm.label = {
      text: 'Tickets par page',
      of: 'sur'
    };

    vm.query = {
      order: 'id',
      limit: 10,
      page: 1,
      rowSelect: [10, 20, 50, 100, 200, 500]
    };

    var ticket = {
      user: {
        name: 'Raphael'
      },
      subject: 'test',
      priority: 'high',
      vente: 'Avant vente',
      categorie: 'Vétement',
      subcategorie: 'T-shirt',
      created: '04/06/15',
      status: 'A traiter',
      ventePrice: 'non',
      lastReponse: 'Raphael 10/06/15'
    };

    function Ticket(obj, i) {
      this.id = i; //Math.round(Math.random() * 1000) + 1;
      this.user = obj.user;
      this.subject = obj.subject;
      this.priority = obj.priority;
      this.vente = obj.vente;
      this.categorie = obj.categorie;
      this.subcategorie = obj.subcategorie;
      this.commandNb = Math.round(Math.random() * 1000) + 1;
      this.venteNb = Math.round(Math.random() * 1000) + 1;
      this.refSRP = Math.round(Math.random() * 1000) + 1;
      this.created = obj.created;
      this.status = obj.status;
      this.ventePrice = obj.ventePrice;
      this.lastReponse = obj.lastReponse;
    }

    vm.tickets = [];
    for (var i = 0; i < 1000; i++) {
      vm.tickets.push(new Ticket(ticket, i + 1));
    }
  });

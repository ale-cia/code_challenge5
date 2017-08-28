app.controller('MessagesController', ['MessagesService', function(MessagesService){
      console.log('Messages Controller loaded');

      var self = this;
      self.messages = MessagesService.newMesasge;
  }]);
  
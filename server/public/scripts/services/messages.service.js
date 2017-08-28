app.service('MessagesService', ['$http', function($http){
   console.log('Messages Service loaded');
   
   var self = this;
   self.getMessage = { list: [] };

   self.addMessage = function(){
       $http.get('/messages').then(function(response){
           self.getMessage.list = response.data;
           console.log('get response: ', self.getMessage);
       });
   };
 self.addMessage();
}]);
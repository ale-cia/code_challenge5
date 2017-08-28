var app = angular.module('MessageBoardApp', []);

app.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/', {
        templateUrl: 'views/home.html',
        controller: 'MessagesController as vm'
        //displays in a div on 'Home Page'
        //#! refers to these routes
       }).otherwise({
           redirectTo: '/'
       });
}]);//config
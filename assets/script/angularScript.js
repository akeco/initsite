angular.module('myApp', ['ngRoute'])
    .factory('myService', function(){
})
    .controller('controller', ['$scope', '$sce', function($scope, $sce){
    $scope.phone = "+387 62 996 996";
    $scope.emailAddress = "contact@init.ba";
    $scope.placeAddress = $sce.trustAsHtml("Rajlovačka bb.<br>71160 Sarajevo<br>Bosnia and Herzegovina");
        
    $scope.sendMessage = function(myForm){
        alert("radi");
    }
    
    //TREBA URADIT FINO OVU FUNKCIJU
    $scope.navClass = function (page){
        var currentRoute = $location.path().substring(1) || 'home';
        return page === currentRoute ? 'activeLink' : '';
    }
        
    $scope.navigacija = [
    {
        'name' : 'About Us',
        'url' : 'about'
    },
    {
        'name' : 'Services',
        'url' : 'services'
    },
    {
        'name' : 'News',
        'url' : 'news'
    },
    {
        'name' : 'Career',
        'url' : 'career'
    },
    {
        'name' : 'Contact Us',
        'url' : 'contact'
    }    
    ]; 
}]).config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/about', {
        templateUrl: 'partials/phone-list.html',
        controller: 'controller'
      }).
      when('/contact', {
        templateUrl: 'partials/phone-detail.html',
        controller: 'controller'
      }).
      otherwise({
        redirectTo: '/about'
      });
  }]);
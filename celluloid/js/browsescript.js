var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "movie.htm",
    })
    .when("/movie", {
        templateUrl : "movie.htm",
        
    })
    .when("/tv", {
        templateUrl : "tv.htm",
        
    });
});

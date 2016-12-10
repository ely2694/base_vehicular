var configBaseVehicular = function ($routeProvider) {
    $routeProvider.when("/home", {
        controller: "indexController",
        templateUrl: "views/home.html"
    })
    .otherwise({
                redirectTo: '/home'
            });

}

//creamos el modulo y le aplicamos la configuración
var BaseVehicular = angular.module("BaseVehicular", ["ngRoute"]).config(configBaseVehicular);

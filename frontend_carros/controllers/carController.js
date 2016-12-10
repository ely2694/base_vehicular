BaseVehicular.controller('indexController', function ($scope, $http) {

      $http.get('http://localhost:8000/personas/').then(function (response) {
        $scope.personas = response.data;
      });

      $scope.persona = {};
      $scope.guardar = function () {
        /*Metodo para guardar personas*/
        req = $http({
            method: "POST",
            url:"http://localhost:8000/personas/",
            data:$scope.persona,
            headers: {
                'Content-Type': 'application/json'
            },
      });
      req.success(function(data,status) {
        alert('Se ha guardado correctamente');
        $scope.persona.nombre = null;
        $scope.persona.paterno = null;
        $scope.persona.materno = null;
        $scope.persona.fecha = null;
      });
      };

      $scope.limpiar = function () {
        $scope.persona.nombre = null;
        $scope.persona.paterno = null;
        $scope.persona.materno = null;
        $scope.persona.fecha = null;
      };

      $scope.auto = {};
      $scope.guardarAuto = function (persona) {
        $scope.auto.owner_id = persona;
        req = $http({
          method: "POST",
          url: "http://localhost:8000/automoviles/",
          data: $scope.auto,
          headers: {
            'Content-Type': 'application/json'
          },
        });
        req.success(function (data, status) {
          alert('Se ha guardado correctamente');
          $scope.auto.marca = null;
          $scope.auto.tipo = null;
          $scope.auto.anio = null;
          $scope.auto.color = null;
        });
      };

      $scope.addCar = function (persona) {
        $('#add_' + persona).show();
      };

      $scope.ocultar = function (persona) {
        $('#add_' + persona).hide();
      };
    });

BaseVehicular.controller('carController', function ($scope, $http) {

      $http.get('http://localhost:8000/automoviles/').then(function (response) {
        $scope.autos = response.data;
      });

      $scope.borrar = function (id) {
        $scope.$watch(function ($scope) { return id; },

              function (newValue, oldValue) {
                  if (newValue !== oldValue) {
                    $http.delete('http://localhost:8000/automoviles/' + id);
                  }
                }
             );
      };
    });

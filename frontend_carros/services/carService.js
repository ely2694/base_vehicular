
/*BaseVehicular.factory('autoServices', ['$resource',
function ($resource) {
    return $resource(
      'http://127.0.0.1:8000/books/:id', {}, {
        get: { method: 'GET', cache: false, isArray: false },
        save: { method: 'POST', cache: false, isArray: false },
        update: { method: 'PUT', cache: false, isArray: false },
        delete: { method: 'DELETE', cache: false, isArray: false },
      });
  },
]);*/

BaseVehicular.service("notasService", function (){

    this.getPersonas = function(){
        return [
            {
                id : 0,
                nombre : "Israel Parra",
                edad : "32 años"
            },
            {
                id : 1,
                nombre : "Andrés Cuenca",
                edad : "24 años"
            },
            {
                id : 2,
                nombre : "Juan",
                edad : "28 años"
            },
            {
                id : 3,
                nombre : "Pepito",
                edad : "18 años"
            },
            {
                id : 4,
                nombre : "Manuel",
                edad : "45 años"
            }
        ]
    }

});

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var aplicacion = angular.module('aplicacion', []);
aplicacion.controller('Clientes', function($scope) {
   $scope._id = null;
   $scope.identificacion = '';
   $scope.nombre = '';
   $scope.direccion = '';
   $scope.telefono = '';
   $scope.email = '';
   $scope.ciudad = '';
   $scope.fax = '';
   $scope.registroempresarial = '';
   $scope.clasecontribuyente = '';
   
   $scope.clientes = [];
   $scope.guardarCliente = function() {
      if ($scope._id === null) {
         $scope.clientes.push({
            identificacion: $scope.identificacion, 
            nombre: $scope.nombre,
            apellido: $scope.direccion,
            ciudad: $scope.ciudad,
            telefono: $scope.telefono,
            email: $scope.email,
            fax : $scope.fax,
            registroempresarial : $scope.registroempresarial,
            clasecontribuyente : $scope.clasecontribuyente
         }); 
      } else {
         $scope.clientes[$scope._id] = {
            nombre: $scope.nombre,
            apellido: $scope.apellido,
            domicilio: $scope.domicilio,
            telefono: $scope.telefono,
            email: $scope.email
         };
      };
      $scope.limpiarDatos();
   };
   $scope.recuperarCliente = function(index) {
      $scope._id = index;
      $scope.nombre = $scope.clientes[index].nombre;
      $scope.apellido = $scope.clientes[index].apellido;
      $scope.domicilio = $scope.clientes[index].domicilio;
      $scope.telefono = $scope.clientes[index].telefono;
      $scope.email = $scope.clientes[index].email;
   };
   $scope.eliminarCliente = function(indice) {
      var clientes_actualizado = [];
      for (var i = 0; i < $scope.clientes.length; i++) {
         if (i != indice) {
            clientes_actualizado.push($scope.clientes[i]);
         }
      }
      $scope.clientes = clientes_actualizado;
   };
   $scope.limpiarDatos = function() {
      $scope._id = null;
      $scope.nombre = '';
      $scope.apellido = '';
      $scope.domicilio = '';
      $scope.telefono = '';
      $scope.email = '';
   };
});


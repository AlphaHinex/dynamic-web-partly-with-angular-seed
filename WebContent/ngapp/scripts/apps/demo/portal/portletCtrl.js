'use strict';

define(['apps/demo/portal/portletModule'], function(portlet) {
    
    portlet

        .controller('MyController', function($scope) {
            $scope.mythings = [{
                name: 'Thing 1'
            }, {
                name: 'Thing 2'
            }];

            $scope.add = function() {
                $scope.mythings.push({
                    name: $scope.newThing.name
                });
            };

            $scope.remove = function(index) {
                $scope.mythings.splice(index, 1);
            };
        })

        .controller('MyCounter', function($scope) {
            $scope.counter = 1;

            $scope.decrease = function() {
                if ($scope.counter > 0) {
                    $scope.counter--;
                }
            };

            $scope.increase = function() {
                if ($scope.counter < 100) {
                    $scope.counter++;
                }
            };
        });

});
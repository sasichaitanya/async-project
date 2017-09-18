app.controller('abtCntrl', function ($scope, $window) {

            $scope.aboutAlert = function(){
                alert("This is about page");
            }
        });

app.controller('abtCntrl', ['$scope','$http', function ($scope,$http) {

            $scope.aboutAlert = function(){
                alert("This is home page");

                $http({
                  method:'GET',
                  url:'/async/series'
                }).then(function success(response){
                  console.log(response);
                },
                function error(response){
                  console.log(response);
                });
            }
        }]);
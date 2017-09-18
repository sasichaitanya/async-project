app.controller('homeCntr', ['$scope','$http', function ($scope,$http) {

            $scope.homeAlert = function(){
                alert("This is home page");

                $http({
                  method:'GET',
                  url:'/async/parallel'
                }).then(function success(response){
                  console.log(response);
                },
                function error(response){
                  console.log(response);
                });
            }
        }]);
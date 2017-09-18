
    app.controller("myController",function($scope){
        $scope.tech=[
            {name:"C#",likes:0,dislikes:0},
            {name:".NET",likes:0,dislikes:0},
            {name:"JAVA",likes:0,dislikes:0}, 
            {name:"ANGULARJS",likes:0,dislikes:0}
        ];
        
        $scope.inclikes=function(technology){
            technology.likes++;
        }
        $scope.incdeclikes=function(technology){
            technology.dislikes++;
        }
        $scope.rowLimit=4;
        $scope.sortColumn="-name";
    });

    app.controller('myCtrl', ['$scope', function($scope) {
        $scope.count = 0;
        $scope.myFunc = function() {
            $scope.count++;
        };
    }]);  

    app.config(function($stateProvider) {
      var helloState = {
        name: 'home',
        url: '../views/home.html',
        template: '<h3>hello world!</h3>'
      }

      var aboutState = {
        name: 'about',
        url: '../views/about.html',
        template: '<h3>Its the UI-Router hello world app!</h3>'
      }

      $stateProvider.state(helloState);
      $stateProvider.state(aboutState);
    });      
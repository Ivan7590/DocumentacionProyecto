var db = firebase.database();
var loginController = angular.module("loginApp",[]);
 loginController.controller("loginController", function($scope){
    $scope.loginUser = function(){
    var email = $scope.loginEmailInput;
    var password = $scope.loginPasswordInput;

    firebase.auth().signInWithEmailAndPassword(email, password).then(function(res){
        //acceso corresto del usuario
        window.location =" index.html";
    }) .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...

         console.log(error);
      });
    };  
});
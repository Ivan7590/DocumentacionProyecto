var db = firebase.database();

var registerController = angular.module("registerApp",[]);
registerController.controller("registerController",function($scope){
    $scope.registerUser = function(){
         var email = $scope.emailRegisterInput;
         var password = $scope.passwordRegisterInput;
         console.log(email);
         console.log(password);

         firebase.auth().createUserWithEmailAndPassword(email, password).then(function(res){
           window.location = "index.html"
         }).catch(function(error){
            // Handle Errors here
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...

             console.log(error);
             if(errorCode === "auth/email-already-in-use"){
              $scope.errorMsg = " El email ya se encuentar utilizado por otracuenta";
              $scope.$apply();
             }else if(errorCode === "auth/weak-password"){
              $scope.errorMsg = "La contraseña debe ser minimo 6 caracteres ";
              $scope.$apply();

             }

             $scope.errorMsg = errorMessage;
             $scope.$apply();
          }); 
    };
});
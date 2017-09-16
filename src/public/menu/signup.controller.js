(function() {
'use strict'

angular.module('public')
.controller('SignUpController', SignUpController);
SignUpController.$inject=['categories','MyInfoService'];

function SignUpController(categories,MyInfoService) {
  console.log("signupcontroller invoked");
  var ctrl=this;
  ctrl.categories=categories;
  ctrl.user = {
    fName:'',
    lName:'',
    email:'',
    phone:'',
    favoritename:'',
    favoritesname:'',
    };

  ctrl.submit = function () {
    
      MyInfoService.getItem(ctrl.user.favoritesname||"") 
      .then(function(response) {

          ctrl.completed = true;
          ctrl.user.favoritename =response.data.name;
          ctrl.user.description=response.data.description;
          MyInfoService.saveMyInfo(ctrl.user);
          ctrl.favoriteNoExists=false;
          return response.data;
      }).catch(function(error) {
          console.log("error access short name "+ctrl.user.favoritesname);
          ctrl.completed= false;
          ctrl.favoriteNoExists=true;
          return error;
      });
  }
}


})();
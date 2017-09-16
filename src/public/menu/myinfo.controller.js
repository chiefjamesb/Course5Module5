(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['info', 'MyInfoService'];

function MyInfoController(info, MyInfoService) {
  var ctrl = this;
  ctrl.basepath = MyInfoService.BasePath; 
  ctrl.fName = info.fName;
  ctrl.lName = info.lName;
  ctrl.phone = info.phone;
  ctrl.email = info.email;
  ctrl.favoritesname= info.favoritesname;
  ctrl.favoritename = info.favoritename;
  ctrl.description=info.description;
}

})();
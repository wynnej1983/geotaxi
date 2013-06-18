define(["knockout"], function(ko) {
   return function AppViewModel(){
     var self = this;

     self.taxiSearchViewModel = null;
     self.settingsViewModel = null;
     self.statsViewModel = null;
     self.accountViewModel = null;

     self.currentPage = null;

     self.navigateTo = function (viewModel) {
       if (self[_camelCase(viewModel)] == null) {
         self[_camelCase(viewModel)] = _create(viewModel);
       }
       self.currentPage = _camelCase(viewModel);
     }

     function _create(viewModel) {
       var Ctor = require('viewmodels/' + viewModel);
       return ko.observable(new Ctor));
     }
     
     function _camelCase(s) {
       return s.charAt(0).toUpperCase() + this.slice(1);
     }
   }
 });


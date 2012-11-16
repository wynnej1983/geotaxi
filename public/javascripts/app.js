require.config({
  baseUrl: "javascripts/",
  waitseconds: 15, //wait long enough for gmaps scripts
  paths: {
    "jquery": "lib/jquery-1.8.2.min",
    "jqm": "lib/jquery.mobile-1.2.0.min",
    "underscore": "lib/lodash",
    "knockout": "lib/knockout-2.2.0",
    "sammy": "lib/sammy-latest.min",
    "async": "lib/async",
    "gmaps": "lib/gmaps"
  },
  shim: {
    "underscore": {
      exports: "_"
    },
    "sammy": {
      deps: ["jquery"]
    }
  }
});

require(["Router", "viewmodels/AppViewModel", "knockout", 
        "jqm", "jqm-config"], function(Router, AppViewModel, ko) {

          //App class
          function App() {
            var self = this;
            self.appViewModel = null;

            self.init = function() {
              console.log("App#init");
              self.appViewModel = new AppViewModel();
              //ko.applyBindings(self.appViewModel);
            }
          }

          //bind events
          document.ontouchmove = function(e) { e.preventDefault(); }
          document.addEventListener("deviceready", init, false);
          //call init() explicitly if we are not on a device
          $(function() {
            if (!/iPad|iPhone|Android/.test(navigator.useragent)) {
              console.log("app running on desktop");
              init();
            }
          });


          var app = null;
          function init() {
            console.log("device ready..");

            //create app
            var app = new App();
            app.init();
            var router = new Router(app);
          }
        });

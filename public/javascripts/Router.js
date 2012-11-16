define(["sammy"], function (Sammy){
  return function Router(app) {
    Sammy('#app', function() {
      this.get('/#', function() {
        app.appViewModel.navigateTo("TaxiSearchViewModel");
        jqmChangePage("#home");
      });

      this.get('/#home', function() {
        app.appViewModel.navigateTo("TaxiSearchViewModel");
        jqmChangePage("#home");
      });

      this.get('/#settings', function() {
        app.appViewModel.navigateTo("SettingsViewModel");
        jqmChangePage("#settings");
      });

      this.get('/#stats', function() {
        app.appViewModel.navigateTo("StatsViewModel");
        jqmChangePage("#stats");
      });

      this.get('/#account', function() {
        app.appViewModel.navigateTo("AccountViewModel");
        jqmChangePage("#account");
      });
    }).run("/#home");

    function jqmChangePage(page) {
        $.mobile.changePage(page, { reverse:false, changeHash:false });
    }
  }
});

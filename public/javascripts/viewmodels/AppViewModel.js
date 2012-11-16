define(["viewmodels/TaxiSearchViewModel", 
       "viewmodels/SettingsViewModel", 
       "viewmodels/StatsViewModel",
       "viewmodels/AccountViewModel",
       "knockout"], function(TaxiSearchViewModel, 
                             SettingsViewModel, 
                             StatsViewModel, 
                             AccountViewModel,
                             ko) {
                               return function AppViewModel(){
                                 var self = this;

                                 self.TaxiSearchViewModel = null;
                                 self.SettingsViewModel = null;
                                 self.StatsViewModel = null;
                                 self.AccountViewModel = null;

                                 self.CurrentPage = null;

                                 self.navigateTo = function (viewModel) {
                                   if (self[viewModel] == null) {
                                     self[viewModel] = Create(viewModel);
                                   }
                                   self.CurrentPage = viewModel;
                                 }

                                 function Create(viewModel) {
                                   if (viewModel == "TaxiSearchViewModel")
                                     return ko.observable( new TaxiSearchViewModel() );

                                   if (viewModel == "SettingsViewModel")
                                     return ko.observable( new SettingsViewModel() );

                                   if (viewModel == "StatsViewModel")
                                     return ko.observable( new StatsViewModel() );

                                   if (viewModel == "AccountViewModel")
                                     return ko.observable( new AccountViewModel() );
                                 }
                               }
                             });


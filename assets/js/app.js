
const singlePageApplication = angular.module("agent-transparency-tool", [
    //'app.belief_browser',               // belief base: temporary deprecation
    'app.preferences',                  // visualisation preference controller
    'app.server',                       // the server (express js server)
    'app.settings',                     // settings controller
    'app.trace',                         // agent trace singleton
    'app.transparency_dashboard',       // the main page controller
    'app.util',                         // util functions
]);


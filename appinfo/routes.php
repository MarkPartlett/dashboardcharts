<?php
/**
 * Create your routes in here. The name is the lowercase name of the controller
 * without the controller part, the stuff after the hash is the method.
 * e.g. page#index -> OCA\DashboardCharts\Controller\PageController->index()
 *
 * The controller class has to be registered in the application.php file since
 * it's instantiated in there
 */
return [
    'routes' => [
	   ['name' => 'Settings#personal', 'url' => '/settings', 'verb' => 'POST'],
	   ['name' => 'Settings#personal2', 'url' => '/api', 'verb' =>'POST']
    ]
];

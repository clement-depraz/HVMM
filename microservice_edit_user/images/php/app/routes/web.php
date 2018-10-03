<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->get('/ping', function () use ($router) {
    return $router->app->version();
});

$router->group(['prefix' => 'app_user'], function () use ($router) {
  $router->get('pending',  ['uses' => 'AppUserController@getPendingUsers']);
  $router->put('{id}/certify', ['uses' => 'AppUserController@certify']);
  $router->delete('{id}', ['uses' => 'AppUserController@delete']);
  $router->post('/', ['uses' => 'AppUserController@create']);
});
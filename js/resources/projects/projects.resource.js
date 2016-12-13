(function() {
  'use strict';
  angular.module('TPMS')
    .factory('ProjectResource', ProjectResource)
    .config(ProjectRouter);

  ProjectResource.$inject = ['$resource'];
  ProjectRouter.$inject = ['$stateProvider', '$urlRouterProvider'];

  function ProjectResource($resource) {
    return $resource('http://localhost:3000/projects/api/projects/:id', {id: '@_id'}, { 'update': { method: 'PATCH'}})
  }

  function ProjectRouter($stateProvider, $urlRouterProvider) {

    $stateProvider
    .state('allProjects', {
      url: '/projects',
      templateUrl: 'js/resources/projects/project-list.html',
      controller: 'ProjectListController',
      controllerAs: 'projectListVm'
    })
    .state('newProject', {
      url: '/projects/new',
      templateUrl: 'js/resources/projects/project-new.html',
      controller: 'ProjectNewController',
      controllerAs: 'projectNewVm'
    })
    .state('editProject', {
      url: '/projects/edit/:id',
      templateUrl: 'js/resources/projects/project-edit.html',
      controller: 'ProjectEditController',
      controllerAs: 'projectEditVm'
    })
  }
}());
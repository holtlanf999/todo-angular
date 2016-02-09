/**
 * List directive definition
 */

console.log('doToDo directive attached');

angular
	.module('app')
	.directive('doToDo', doToDo)
	.controller('writeDo');

	function doToDo() {
		return {
			restrict: 'E',
			templateUrl: 'app/shared/do/do.view.tpl.html'
		};
	}
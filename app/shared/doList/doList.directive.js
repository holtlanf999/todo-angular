/**
 * List directive definition
 */

console.log('doList directive attached');

angular
	.module('app')
	.directive('doList', doList);

	function doList() {
		return {
			restrict: 'E',
			templateUrl: 'app/shared/doList/doList.view.tpl.html'
		};
	}
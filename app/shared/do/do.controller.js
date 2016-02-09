/**
 * do directive controller
 */

angular
	.module('app')
	.controller('doCtrl', doCtrl)

	function doCtrl() {
		var writeDo = this;
		console.log(writeDo);
	}
var app = angular.module('friendsList');

app.controller('mainCtrl', function($scope){

$scope.name = 'Jeff';




$scope.friends = [
	'Shadrack',
	'Meshack',
	'Abednego'
]




$scope.addFriend = function(){
	$scope.friends.push($scope.newFriend);
	$scope.newFriend = '';
};

});
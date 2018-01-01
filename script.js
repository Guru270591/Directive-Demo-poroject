var app = angular.module('myApp',[]);
app.controller('directiveCtrl',function($scope){
	alert('inside controller');
	$scope.student = {
		name:'Gurudayal Singh',
		age: '26',
		organisation:'Accenture',
        subject:['Maths','English','AngularJs']
	};
	$scope.setGrade = function(student){
		alert('set grade of controller is getting called');
		student.grade='A+';

	}
});
app.controller('productCtrl',function($scope)	
{
	alert('inside product controller');
$scope.product1={
	name:'Tv',
	price:'1000',
	brand:'LG'
}
$scope.product2={
	name:'Ac',
	price:'10000',
	brand:'Samsung'
}
$scope.product3={
	name:'Freeze',
	price:'14000',
	brand:'Videocon'
}
alert($scope.product1.name);
})
app.directive('myFirstDirective',function(){
	alert('inside directive');
	return {
		
		templateUrl : 'newDirective.html',
		restrict: 'EA',
		controller:function($scope){

			$scope.setGrade=function(student){
				alert('setGrade function is called');
				student.grade="B+"
			}
		}
		//scope:{}
	}
})
app.directive('productDirective', function(){
alert('inside product directive');
	return{

		scope: {
			data: "=",
		},
		template:'<div><h2>Name:{{data.name}} Price:{{data.price}} Brand:{{data.brand}}</h2></div><div><Button class=" btn btn-lg btn-danger" ng-click="data.name=\'Bat\'">Change Name</Button></div>'

	};

})










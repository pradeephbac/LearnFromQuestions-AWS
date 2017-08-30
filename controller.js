var app = angular.module('app', []);

function mainController($scope, $http) {  
	$scope.flip=function(index){
		var id="#"+index+"_comment";
		 $(id).toggleClass('flipped');
	}
	$scope.showPanel=false;
	$scope.showInput =function(){
		$scope.showPanel =!	$scope.showPanel;
	}
	$scope.questions=[];
	var baseUrl="https://aws-question-help.herokuapp.com/";
	$http.get(baseUrl+"getQuestions")
   .then(
       function(response){ 
		$scope.questions=response.data;
       }, 
       function(response){
         $scope.questions=[
	{
		question : "Currently we system is under maintanance... soon you will be able to see questions...!",
		answer_type:'radio',
		tags:["tech","error","service"],
		answer:["Currently we system is under maintanance... soon you will be able to see questions...!"],
		comments:[
		{"user":"Chamal Pradeep","content" : "Currently we system is under maintanance... soon you will be able to see questions...!","date":"2017-08-29"}
		]
	}]
       }
    );

}
var app = angular.module('app', []);

function mainController($scope, $http) {  
	$scope.flip=function(index){
		var id="#"+index+"_comment";
		 $(id).toggleClass('flipped');
	}
	$scope.questions=[
	{
		question : " www.dropbag.com is a website where you have file sharing and storing services like Google Drive and Google Dropbox. During the sync up from desktop you accidently deleted an important file. Which of the simple storage service will help you retrieve the deleted file?",
		answer_type:'check',
		tags:["S3","s3-bucket","Versioning"],
		answer:[" Versioning in S3","Secured signed URLs for S3 data access"," Don't allow delete objects from S3 (only soft delete is permitted)"," S3 Reduced Redundancy Storage."],
		comments:[
		{"user":"Chamal Pradeep","content" : "Answer: (A) Amazon S3 provides further protection with versioning capability. You can use versioning to preserve, retrieve, and restore every version of every object stored in your Amazon S3 bucket. This allows you to easily recover from both unintended user actions and application failures. By default, requests will retrieve the most recently written version.","date":"2017-08-29"}
		]
	},
	{
		question : "www.picnic.com is a photo and video hosting website and they have millions of users. Which of the following is a good solution for storing big data object, by reducing costs, scaling to meet demand, and increasing the speed of innovation?",
		answer_type:'radio',
		tags:["S3","s3-bucket"],
		answer:["AWS S3","AWS RDS"," AWS Glaciers","AWS Redshift"],
		comments:[
		{"user":"Chamal Pradeep","content" : "Answer: (A) Whether you're storing multimedia files such as photos and videos or pharmaceutical files, or financial data Amazon S3 can be used as your big data object store. Amazon Web services offers a comprehensive portfolio of services to help you manage big data by reducing costs, scaling to meet demand, and increasing the speed of innovation.","date":"2017-08-29"}
		]
	}
	,
	{
		question : " You want your Hadoop job to be triggered based on the event notification of a file upload action. Which of the following components can help you implement this in AWS?",
		answer_type:'check',
		tags:["S3","SQS","SNS"],
		answer:["S3","SQS","SNS","EC2","IAM"],
		comments:[
		{"user":"Rumesh Hapuarachchi","content" : "com is a photo and video hosting website and they have millions of users. Which of the following is a good solution for storing big data object, by reducing costs, scaling to meet demand, and inc","date":"2017-08-29"}
	
		]
	}
	]
}
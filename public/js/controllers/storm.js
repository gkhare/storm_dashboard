'use strict';

angular.module('storm').controller('StormController', ['$scope','StormFactory', function ($scope, StormFactory) {
    // $scope.global = Global;
    
    $scope.init = function(node, type) {
    	console.log("Hello "+node);
    	node.ipaddress = $scope.extractIPaddress(node.host);
    	StormFactory.getCPUDataFromGraphite("10.0.16.59",node.host, type ,node);
    };
    
    $scope.extractIPaddress = function(host) {
    	return host.substring(3).split('-').join('.');
    };
    
    $scope.initStormData = function() {
    	for (var i=0; i < $scope.storms.length; i++) {
    		var nimbusIP = $scope.storms[i].nimbusIP;
	    	console.log("Fetching data for "+nimbusIP);
	    	// node.nimbusIP = $scope.extractIPaddress(storm.nimbusIP);
	    	var stormCluster = $scope.stormClusters[i] = {};
			stormCluster.nimbusIP = nimbusIP;
	    	StormFactory.retrieveClusterInfo(nimbusIP,stormCluster);
		};
    };
    
    $scope.storms = [
    	{clusterid: "ewe", stormid:"ewe-storm", active: "true", nimbusIP: "10.0.17.147"},
    	{clusterid: "ewe", stormid:"200", active: "true", nimbusIP: "10.0.17.30"}
    ];
    
    $scope.stormClusters = [];
    
    // $scope.stormClusters = [
    	// {stormid:"ewe-storm", type: "Nimbus", ipaddress: "10.0.17.147", cpu: "0"},
    	// {stormid:"ewe-storm", type: "Supervisor", ipaddress: "10.0.17.220", cpu: "0"},
    	// {stormid:"200", type: "Nimbus", ipaddress: "10.0.17.31", cpu: "0"},
		// {stormid:"200", type: "Supervisor", ipaddress: "10.0.17.32", cpu: "0"},
		// {stormid:"200", type: "Supervisor", ipaddress: "10.0.17.33", cpu: "0"},
		// {stormid:"301", type: "Nimbus", ipaddress: "10.0.17.45", cpu: "0"},
		// {stormid:"301", type: "Supervisor", ipaddress: "10.0.17.122", cpu: "0"},
		// {stormid:"301", type: "Supervisor", ipaddress: "10.0.17.124", cpu: "0"},
		// {stormid:"301", type: "Supervisor", ipaddress: "10.0.17.131", cpu: "0"},
		// {stormid:"301", type: "Supervisor", ipaddress: "10.0.17.130", cpu: "0"}
    // ];

    // $scope.topologies = [
    	// {topologyName:"urgency-test-topology", nimbus:"10.0.17.147", state:"active"},
    	// {topologyName:"abacus-topology", nimbus:"10.0.17.147", state:"active"},
    	// {topologyName:"abacus-topology", nimbus:"10.0.17.31", state:"active"},
    	// {topologyName:"hotel-view-topology", nimbus:"10.0.17.45", state:"active"}
    // ];
//     
    $scope.kestrels = [
    	{env:"test", name: "kestrel-ewetest-9", ipaddress: "10.0.17.232"},
    	{env:"test", name: "kestrel-ewetest-8", ipaddress: "10.0.17.184"},
    	{env:"integration", name: "kestrel-100", ipaddress: "10.0.17.100"},
    	{env:"integration", name: "kestrel-121", ipaddress: "10.0.17.121"}
   ];
   
   $scope.component = [
   		{stormid: "ewe-storm", type: "nimbus", ipaddress: "10.0.17.147"},
   		{stormid: "ewe-storm", type: "supervisor", ipaddress: "10.0.17.220"},
   		{stormid: "ewe-storm", type: "topology", ipaddress: "10.0.17.220"},
   		{stormid: "ewe-storm", type: "nimbus", ipaddress: "10.0.17.147"},
   		{stormid: "ewe-storm", type: "nimbus", ipaddress: "10.0.17.147"},
   		{stormid: "ewe-storm", type: "Nimbus", ipaddress: "10.0.17.147"},
   		{stormid: "ewe-storm", type: "Nimbus", ipaddress: "10.0.17.147"},
   		{stormid: "ewe-storm", type: "Nimbus", ipaddress: "10.0.17.147"},
   ];
   
    
}]);
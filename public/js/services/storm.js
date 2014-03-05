'use strict';

// TopologyStats = function {
	// var 
// }

//Global service for global variables
angular.module('storm').factory('StormFactory', ['$http',
    function($http) {
    	
    	var factory = {};
    	
    	var thriftClientMap = {};
    	
    	factory.getTopology = function(ipaddress) {
    		return [];
    	};
    	
    	factory.getCPUDataFromGraphite = function(graphiteIP,host,type,node) {
    		var graphiteURL = "http://"+graphiteIP+"/render?from=-10s&until=now&target=collectd_metrics.storm-"
    									+ type
    									+ '.'
    									// +".ip-"+
    									// nodeIP.split('.').join('-')
    									+ host
    									+".aggregation-cpu-average.cpu-idle&format=json&jsonp=JSON_CALLBACK";
			console.log(graphiteURL);
			$http({
			    method: 'JSONP',
			    url: graphiteURL//"http://10.0.16.59/render?from=-10s&until=now&target=collectd_metrics.storm-nimbus.ip-10-0-17-147.aggregation-cpu-average.cpu-idle&format=json&jsonp=JSON_CALLBACK"
			}).success(function(data) {
				if (data.length == 1)
				{
					var currentCpu = data[0].datapoints[0][0];
					node.cpu = currentCpu != null ? currentCPU : 'NA';
					console.log("Gaurav");
				}
				else
				{
					node.cpu = 'NA';
				}
			}).error(function(data,status) {
				console.log("Hello "+status+data);
			});
    	};
    	
        factory.retrieveClusterInfo = function(nimbusIP, node)
        {
        	
		    // $http({
			    // method: 'GET',
			    // url: "/storm/thrift?nimbusIP="+nimbusIP
			// })
			
			$http.get("/storm/thrift?nimbusIP="+nimbusIP).success(function(data) {
				console.log(data);
				node.info = data;
			});
        };
        

        return factory;
    }
]);

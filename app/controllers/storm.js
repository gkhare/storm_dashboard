'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Storm = mongoose.model('Storm'),
    StormCluster = mongoose.model('StormCluster'),
    Kestrel = mongoose.model('Kestrel');
    
    
var thrift = require('thrift');
// var ThriftTransports = require('thrift/transport');
// var ThriftProtocols = require('protocol');
var nimbus = require('../storm/Nimbus');
var nimbusClient_ttypes = require('../storm/storm_types');
    
exports.render = function(req, res) {
	// res.send('Gaurav');
    res.render('storm');
};

exports.getKestrel = function(req, res) {
	Kestrel
		.find({});
};

exports.getStorm = function(req, res) {
	Storm
		.find({}, function (err, docs){
			console.log(docs);
		});
};

exports.getStormClusterData = function(req, res) {
	var nimbusIP = req.query.nimbusIP;
	console.log(nimbusIP);
	var options = {};
	options.transport = thrift.TFramedTransport;
	options.protocol = thrift.TBinaryProtocol;
	var connection = thrift.createConnection(nimbusIP, 6627, options);
    var client = thrift.createClient(nimbus, connection);
    client.getClusterInfo(function(err, result){
    	var resp = new Object();
    	resp.supervisors = result.supervisors;
    	resp.topologies = result.topologies;
    	result.topologies.forEach(function(topology){
    		console.log("Topology " + topology.name + " (" + topology.id + ")" + nimbusIP);
    		client.getTopologyInfo(topology.id, function(err, result) {
  				result.executors.forEach(function(executor) {
    			console.log(executor.component_id + " @ " + executor.host + ":" + executor.port);
    			console.log("Emitted: ");
			    for (var key in executor.stats.emitted) {
			      if (executor.stats.emitted[key].__ack_ack) {
			        console.log("  -> " + getLabel( key ) + ": " + executor.stats.emitted[key].__ack_ack);
			      }
			    }
			    console.log("Transferred: ");
			    for (var key in executor.stats.transferred) {
			      if (executor.stats.transferred[key].__ack_ack) {
			        console.log("  -> "+ getLabel( key ) + ": " + executor.stats.transferred[key].__ack_ack);
			      }
			    }
			    console.log();
			  });
			});
    	});
    	// resp = JSON.stringify(result);
    	res.send(resp);
    });
    
};

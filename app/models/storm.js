'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
/**
 * Article Schema
 */
var StormSchema = new Schema({
    clusterid: {
        type: String,
        default: '',
        trim: true
    },
    stormid: {
        type: String,
        default: '',
        trim: true
    },
    active: {
    	type: Boolean,
    	default: true
    }
});

mongoose.model('Storm', StormSchema);

var StormClusterSchema = new Schema({
	stormid: {
		type: String
	},
	type: {
		type: String
	},
	ipaddress: {
		type: String
	}
});

mongoose.model('StormCluster', StormClusterSchema);

var KestrelSchema = new Schema({
	env: {
		type: String
	},
	name: {
		type: String
	},
	ipaddress: {
		type: String
	}
});

mongoose.model('Kestrel', KestrelSchema);
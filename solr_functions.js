'use strict';
var global = require('./global.js');

/**
 * Save/update event to Solr search index
 * @params object eventDetails
 * @params function callback
 *
 * eventDetails = {
 *     id: '',
 *     name: '',
 *     description: '',
 *     tags: '',
 *     venue: '',
 *     venueCoordinates: ['lat', lng]
 * }
 *
 * callback = function (boolean status, string message) {}
 *
 */
function solrSaveEventToSearchIndex(eventDetails, callback) {
    __postToSolr([eventDetails], callback);
}

/**
 * Search for events in Solr index
 */
function dummySolrSearchEvents(searchParams) {
    // This is a dummy function placed to add this documentation on how to query the Solr index.
    // There is no custom end point for Solr search. We are just using the Solr instance end point
    // for querying the Solr index. The Solr search end point is located at:
    // domain:8983/solr/collection1/select/
    //
    // A sample query to search for events with the keyword "summer" is like the following:
    // domain:8983/solr/collection1/select/?indent=on&q=summer&wt=json
    //
    // A sample query to search for the keyword "summer" only in event names is like the following:
    // domain:8983/solr/collection1/select/?indent=on&q=name:summer&wt=json
    //
    // A sample query to search for events geospatially occurring within 5km radios of latitude 10.00000 and
    // longitude: 80.00000 is like the following:
    // domain:8983/solr/collection1/select/?q=summer&wt=json&fq={!geofilt pt=10.00000,80.00000 sfield=latlng d=5}
    // where parameter pt specifies latitude and longitude respectively and d specifies distance in kilometers
}

/**
 * Delete an event from Solr index
 * @param string eventId
 * @param function callback
 */
function solrDeleteEventFromIndex(eventId, callback) {
    if (!eventId) {
        callback(false, 'Please provide event ID.');
        return;
    }

    var deleteRequest = {
        "delete": {
            "_id": eventId
        }
    };

    __postToSolr(deleteRequest, callback);
}

/**
 * Internal function to post data to Solr end point
 * @param object postData
 * @param function callback(boolean status, string message)
 * @private
 */
function __postToSolr(postData, callback) {
    var request = require('request');    
    request.post({
        uri: global.settings.solrBaseUrl + 'solr/update/json?commit=true',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify(postData)
    }, function (error, response, body) {
        if (!error) {            
            callback(true, null);
            return;
        } else {
            console.log("error")
            callback(false, error);
            return;
        }
    });
}

exports.solrSaveEventToSearchIndex = solrSaveEventToSearchIndex;
exports.solrDeleteEventFromIndex = solrDeleteEventFromIndex;
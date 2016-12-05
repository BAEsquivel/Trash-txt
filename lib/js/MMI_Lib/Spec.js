/** ======================================================================================================
==========================================================================================================
W3C SOFTWARE NOTICE AND LICENSE
http://www.w3.org/Consortium/Legal/2002/copyright-software-20021231

W3C Software Notice and License

This work (and included software, documentation such as READMEs, or other related items) is being provided by the copyright holders under the following license.

License

By obtaining, using and/or copying this work, you (the licensee) agree that you have read, understood, and will comply with the following terms and conditions.

Permission to copy, modify, and distribute this software and its documentation, with or without modification, for any purpose and without fee or royalty is hereby granted, provided that you include the following on ALL copies of the software and documentation or portions thereof, including modifications: 
* The full text of this NOTICE in a location viewable to users of the redistributed or derivative work.
* Any pre-existing intellectual property disclaimers, notices, or terms and conditions. If none exist, the W3C Software Short Notice should be included (hypertext is preferred, text is permitted) within the body of any redistributed or derivative code.
* Notice of any changes or modifications to the files, including the date changes were made. (We recommend you provide URIs to the location from which the code is derived.)

Disclaimers

THIS SOFTWARE AND DOCUMENTATION IS PROVIDED "AS IS," AND COPYRIGHT HOLDERS MAKE NO REPRESENTATIONS OR WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO, WARRANTIES OF MERCHANTABILITY OR FITNESS FOR ANY PARTICULAR PURPOSE OR THAT THE USE OF THE SOFTWARE OR DOCUMENTATION WILL NOT INFRINGE ANY THIRD PARTY PATENTS, COPYRIGHTS, TRADEMARKS OR OTHER RIGHTS.

COPYRIGHT HOLDERS WILL NOT BE LIABLE FOR ANY DIRECT, INDIRECT, SPECIAL OR CONSEQUENTIAL DAMAGES ARISING OUT OF ANY USE OF THE SOFTWARE OR DOCUMENTATION. 
The name and trademarks of copyright holders may NOT be used in advertising or publicity pertaining to the software without specific, written prior permission. Title to copyright in this software and any associated documentation will at all times remain with copyright holders.
==========================================================================================================
========================================================================================================== */


var spec = function () {
	var that = {};
	
	var api;  
	var type;
	var metadata = metadata();
	var deliveryMode;
	var delivered;
	var method;
	
	// normalized-attributes
	var requestId;
	var source;
	var target;
	var data;
	var context;
	var confidential;
	var status;
	var statusInfo;
	var name;
	
	
	var content;
	var contentUrl;
	var immediate;
	var automaticUpdate = 0; // default
	// getter and setter functions
	that.setApi= function(aApi) { 
		api = aApi;
	};  

	that.getApi = function() {
		return api;
	};
	
	that.setType = function(aType) { 
		type = aType;
	};  
	
	that.getType = function() {
		return type;
	};

	that.setMetadata = function(aMetadata) {  	 
	   	metadata = aMetadata;

	};  
	that.getMetadata = function() {
		return metadata;
	};
	
	that.setDeliveryMode = function(aDeliveryMode) { 
		deliveryMode = aDeliveryMode;
	};  
	
	that.getDeliveryMode = function() {
		return deliveryMode;
	};
	
	that.setDelivered = function(aDelivered) {
		delivered = aDelivered;
	};
	that.getDelivered = function() {
		return delivered;
	};
	
	that.setMethod = function(aMethod) {
		method = aMethod;
	};
	that.getMethod = function() {
		return method;
	};
	

	
	that.getRequestId = function() {
		return requestId;
	};
	that.setRequestId = function (aRequestId) {
		requestId = aRequestId;
	};
	
	that.setSource = function(aSource) {
		source = aSource;
	};
	
	that.getSource = function() {
		return source;
	};

	that.setTarget = function(aTarget) {
		target = aTarget;
	};
	that.getTarget = function() {
		return target;
	};

	that.setData = function(aData) {
		data = aData;
	};
	that.getData = function() {
		return data;
	};
	
	that.setContext = function (aContext) {
		context = aContext;
	};
	that.getContext = function () {
		return context;
	};

	that.setConfidential = function (aConfidential) {
		confidential = aConfidential;
	};
	that.getConfidential = function () {
		return confidential;
	};
	that.setStatus = function(aStatus) {
		state = aStatus;
	};
 
	that.getStatus  = function() { 
		return status;
	}; 
	
	that.setStatusInfo = function(aStatusInfo) {
		statusInfo = aStatusInfo;
	};
	that.getStatusInfo = function() {
		return statusInfo;
	};
	
	that.setName = function(aName) {
		name = aName;
	};
	that.getName = function() {
		return name;
	};
	that.setContentUrl = function(aContentUrl) {
		contentUrl = aContentUrl;
	};
	that.getContentUrl = function() {
		return contentUrl;
	};
	
	that.setContent = function(aContent) {
		content = aContent;
	};
	that.getContent = function() {
		return content;
	};
	
	that.setImmediate = function(aImmediate) {
		immediate = aImmediate;
	};
	
	that.getImmediate = function() {
		return immediate;
	};
	
	that.setAutomaticUpdate = function(aAutomaticUpdate) {
		automaticUpdate = aAutomaticUpdate;
	};
	
	that.getAutomaticUpdate = function() {
		return automaticUpdate;
	};
	
	return that;
};

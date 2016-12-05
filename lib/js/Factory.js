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


var factory = {};
/**
 * Create request
 * 
 * @param spec
 * @returns {___that2}
 */
factory.createRequest = function (spec) {
	console.log("[Factory]{createRequest} creates request according to MMI Event Type ");
	
 	var request;
 	// For svg
	if (typeof Object.create == "undefined") {
		request = interaction.messageRequest(spec);
	} else { // For browser, in which, Object is supported
		var interactionRequest  = Object.create(interaction);  
		request = interactionRequest.messageRequest(spec);
	}
	
	switch (spec.type) {
	case messageType.NEW_CONTEXT:
		// Place-holder for future use.
		// We've already had all fields needed, do nothing
		break;

	case messageType.CLEAR_CONTEXT:
		// Place-holder for future use.
		// We've already had all fields needed, do nothing
		break;

	case messageType.PREPARE:
		var contentUrl = spec.contentUrl;
		var content = spec.content;

		request.setContentUrl = function(aContentUrl) {
			contentUrl = aContentUrl;
		};
		request.getContentUrl = function() {
			return contentUrl;
		};
		
		request.setContent = function(aContent) {
			content = aContent;
		};
		request.getContentUrl = function() {
			return content;
		};
		break;

	case messageType.START:
		
		var contentUrl = spec.contentUrl;
		var content = spec.content;
		request.setContentUrl = function(aContentUrl) {
			contentUrl = aContentUrl;
		};
		request.getContentUrl = function() {
			return contentUrl;
		};
		
		request.setContent = function(aContent) {
			content = aContent;
		};
		request.getContent = function() {
			return content;
		};
		break;

	case messageType.CANCEL:
		
		// non-normalized attributes
		var immediate = spec.immediate;
		// normalized attributes
		var contentUrl = spec.contentUrl;
		var content = spec.content;

		
		// Getter and Setter
		request.setImmediate = function(anImmediate) {
			immediate = anImmediate;
		};
		request.getImmediate = function() {
			return immediate;
		};
		
		request.setContentUrl = function(aContentUrl) {
			contentUrl = aContentUrl;
		};
		request.getContentUrl = function() {
			return contentUrl;
		};
		
		request.setContent = function(aContent) {
			content = aContent;
		};
		request.getContent = function () {
			return content;
		};
		
		if (typeof immediate == "undefined") {
			immediate = true; // default
		};
 
		break;

	case messageType.PAUSE:
		// non-nomalized attributes
		var immediate = spec.immediate;
		// normalized attributes
		var contentUrl = spec.contentUrl;
		var content = spec.content;
		
		// Getter and Setter
		request.setImmediate = function(anImmediate) {
			immediate = anImmediate;
		};
		request.getImmediate = function() {
			return immediate;
		};
		
		request.setContentUrl = function(aContentUrl) {
			contentUrl = aContentUrl;
		};
		request.getContentUrl = function() {
			return contentUrl;
		};
		
		request.setContent = function(aContent) {
			content = aContent;
		};
		request.getContentUrl = function() {
			return content;
		}
		
		if (typeof immediate == "undefined") {
			immediate = true; // default
		};
		break;

	case messageType.RESUME:
		// Place-holder for future use.
		// We've already had all fields needed, do nothing
		break;

	case messageType.STATUS: 
		var requestAutomaticUpdate = spec.requestAutomaticUpdate; 	
		if (typeof automaticUpdate == "undefined") {
			automaticUpdate = 0; // default
		};
		request.setRequestAutomaticUpdate = function(anAutomaticUpdate) {
			requestAutomaticUpdate = anAutomaticUpdate;
		};
		request.getRequestAutomaticUpdate = function() {
			return requestAutomaticUpdate;
		};
		break;

	default:
		alert("[Factory][createRequest] - error: " + spec.type + " is a not supported type ---");
		break;
	}
 
	return request;
}

/**
 * Create response
 * 
 * @param spec
 * @returns {___that3}
 */ 
factory.createResponse = function (spec) {
	console.log("[Factory][createResponse] - Started ");
	var interactionResponse  = Object.create(interaction);  
	var response = interactionResponse.messageResponse(spec);
	switch (spec.type) {
	case messageType.NEW_CONTEXT:
		// Place-holder for future use.
		// We've already had all fields needed, do nothing
		break;

	case messageType.CLEAR_CONTEXT:
		// Place-holder for future use.
		// We've already had all fields needed, do nothing
		break;

	case messageType.PREPARE:
		// Place-holder for future use.
		// We've already had all fields needed, do nothing
		break;

	case messageType.START:
		// Place-holder for future use.
		// We've already had all fields needed, do nothing
		break;

	case messageType.CANCEL:
		var immediate = spec.immediate;
		
		// Getter and Setter
		response.setImmediate = function(anImmediate) {
			immediate = anImmediate;
		};
		response.getImmediate = function() {
			return immediate;
		};
 
		// Exception 
		if (typeof getImmediate == "undefined") {
			immediate = true; // default
		};
		break;

	case messageType.PAUSE:
		var immediate = spec.immediate; 
		
		// Getter and Setter
		response.setImmediate = function(anImmediate) {
			immediate = anImmediate;
		};
		response.getImmediate = function() {
			return immediate;
		}; 
		// Exception 
		if (typeof immediate == "undefined") {
			immediate = true; // default
		};
		break;

	case messageType.RESUME:
		// Place-holder for future use.
		// We've already had all fields needed, do nothing
		break;

	case messageType.STATUS:
		var automaticUpdate = spec.automaticUpdate;
		if (typeof automaticUpdate == "undefined") {
			automaticUpdate = 0; // default
		};
		// Getter and Setter 
		response.setAutomaticUpdate = function (anAutomaticUpdate) {
			automaticUpdate = anAutomaticUpdate;
		}; 
		
		response.getAutomaticUpdate = function () {
			return automaticUpdate;
		};
		break;

	default:
		alert("[Factory][createResponse] - error: " + spec.type + " is a not supported type ---");
		break;
	}
	console.log("[Factory][createResponse] - Ended ");
	return response;
}

/**
* 
* @param spec
* @returns {___notification4}
*/
factory.createNotification = function(spec) {
	console.log("[Factory][createNotification] - Started ");
	var interactionNotification  = Object.create(interaction);  
	var notification = interactionNotification.notification(spec); 
 	
		switch (spec.type) {
		case messageType.EXTENSION_NOTIFICATION:
			// private attributes
			var name = spec.name;
			
			// getter and setter
			notification.setName = function(aName) {
				name = aName;
			};
			notification.getName = function() {
				return name;
			};		
			break;

		case messageType.DONE_NOTIFICATION:
			// private members
			var status = spec.status;
			var statusInfo = spec.statusInfo;
			
			// getter and setter
			notification.setStatus = function(aStatus) {
				status = aStatus;
			};
			notification.getStatus = function() {
				return status;
			};
			notification.setStatusInfo = function(aStatusInfo) {
				statusInfo = aStatusInfo;
			};
			notification.getStatusInfo = function() {
				return statusInfo;
			};
			
			// exception
			if (typeof status == "undefined") {
				alert("[Factory][createNotification] - status field cannot be empty!");
				throw exception.STATUS_EMPTY;
			};
			break;
			
		case messageType.UI_UPDATE:
			// don't have any attributes to augmente.
			break;
			
		default:
			console.log("[Factory][createNotification] - error: " + spec.type + " is a not supported type ---");
			break;
		} 		
	console.log("[Factory][createNotification] - Ended ");
	return notification;
} 

factory.createUpdateEvent = function (spec) {
	console.log("[Factory][createUpdateEvent] - Started ");
	var updateEvent = interaction.messageBase(spec);
	var timeOut = spec.timeOut;
	var state = spec.state;
	var updateType = spec.updateType;
	var automaticUpdate = spec.automaticUpdate;
	var method = spec.method;
	var status = spec.status;
	
	updateEvent.getTimeOut = function () {
		return timeOut;
	}
	
	updateEvent.setTimeOut = function (aTimeOut) {
		timeOut = aTimeOut;
	}
	
	updateEvent.getState = function () {
		return state;
	}
	
	updateEvent.setState = function (aState) {
		state = aState;
	}
	
	updateEvent.getUpdateType = function () {
		return updateType;
	}
	
	updateEvent.setUpdateType = function (aUpdateType) {
		updateType = aUpdateType;
	}
	
	updateEvent.getAutomaticUpdate = function () {
		return automaticUpdate;
	}
	
	updateEvent.setAutomaticUpdate = function (anAutomaticUpdate) {
		automaticUpdate = anAutomaticUpdate;
	}
	
	// getter and setter functions
	updateEvent.setMethod = function(aMethod) {
		method = aMethod;
	};
	updateEvent.getMethod = function() {
		return method;
	};
	
	updateEvent.setStatus = function(aStatus) {
		state = aStatus;
	};
	updateEvent.getStatus  = function() { 
		return status;
	}; 
	
	console.log("[Factory][createUpdateEvent] - Ended ");
	return updateEvent;  
}

factory.createUiUpdateNotification = function (spec) {
	console.log("[Factory][createUiUpdateNotification] - Started ");
	var uiUpdateNotification = interaction.messageBase(spec);
	var state = spec.state;
	var updateType = spec.updateType;
	var automaticUpdate = spec.automaticUpdate;
	
	updateEvent.getState = function () {
		return state;
	}
	
	updateEvent.setState = function (aState) {
		state = aState;
	}
	
	updateEvent.getUpdateType = function () {
		return updateType;
	}
	
	updateEvent.setUpdateType = function (aUpdateType) {
		updateType = aUpdateType;
	}
	
	updateEvent.getAutomaticUpdate = function () {
		return automaticUpdate;
	}
	
	updateEvent.setAutomaticUpdate = function (anAutomaticUpdate) {
		automaticUpdate = anAutomaticUpdate;
	}
	
	// getter and setter functions
	messageBase.setMethod = function(aMethod) {
		method = aMethod;
	};
	messageBase.getMethod = function() {
		return method;
	};
	
	console.log("[Factory][createUiUpdateNotification] - Ended ");
	return uiUpdateNotification;
}

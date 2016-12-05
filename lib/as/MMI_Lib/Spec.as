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


package MMI_Lib
{
	import MMI_Lib.Metadata;

	/**
	 *  This class is used to create 
	 */ 
	public class Spec
	{
		//*******************************************************************************************
		// Data
		//*******************************************************************************************
		// Non-normalized attributes
		private var api : String; 
		private var type : String; 
		private var metadata : String;
		private var deliveryMode : String;
		private var isDelivered : Boolean;
		private var method : String; 
		
		// normalized
		private var requestId : String; 
		private var source : String;
		private var target : String; 
		private var data : String; 
		private var context : String; 
		private var confidential : Boolean; 
		private var status : String; 
		private var statusInfo : String; 
		private var name : String; 
		
		// optional 
		private var content : String = null; 
		private var contentUrl : String = null; 
		private var immediate : Boolean = false;
		private var requestAutomaticUpdate: Boolean = false; // For request
		private var automaticUpdate: Boolean = false; // For response
		private var token : String; 
		private var timeOut : String; 
		private var updateType : String;
		private var state : String;
		private var timeout : String;
		// Constructor
		public function Spec() {} 
		
		
		//*******************************************************************************************
		// Getter And Setter
		//*******************************************************************************************
		// Getter and setter 
		// Non-normalized
		public function getApi () : String {
			return api; 
		}
		public function setApi (api: String) :void{
			this.api = api;
		}
		
		public function getType () : String {
			return type; 
		}
		public function setType (type: String):void {
			this.type = type;
		}
		
		public function getMetadata() : String {
			return metadata;
		}
		
		public function setMetadata(aMetadata: String) : void {
			metadata = aMetadata;
		}
		
		public function getDeliveryMode () : String {
			return deliveryMode; 
		}
		public function setDeliveryMode (deliveryMode: String):void  {
			this.deliveryMode = deliveryMode;
		}
		
		public function getDelivered () : Boolean {
			return isDelivered; 
		}
		public function setDelivered (delivered: Boolean) :void {
			this.isDelivered = delivered;
		}
		
		public function getMethod () : String {
			return method; 
		}
		public function setMethod (method: String):void  {
			this.method = method;
		}
		
		// Normalized
		public function getRequestId () : String {
			return requestId; 
		}
		public function setRequestId (requestId: String) :void {
			this.requestId = requestId;
		}
		
		public function getSource () : String {
			return source; 
		}
		public function setSource (source: String):void  {
			this.source = source;
		}
		
		public function getTarget () : String {  
			return target; 
		}
		
		public function setTarget (target: String):void  { 
			this.target = target;
		}
		
		public function getData () : String {
			return data; 
		}
		public function setData (data: String):void  {
			this.data = data;
		}
		
		public function getContext () : String {
			return context; 
		}
		public function setContext (context: String):void  {
			this.context = context;
		}
		
		public function getConfidential () : Boolean {
			return confidential; 
		}
		public function setConfidential (confidential: Boolean) :void {
			this.confidential = confidential;
		}
		
		public function getStatus () : String {
			return status; 
		}
		public function setStatus (status: String) :void {
			this.status = status;
		}
		
		public function getStatusInfo () : String {
			return statusInfo; 
		}
		public function setStatusInfo (statusInfo: String) :void {
			this.statusInfo = statusInfo;
		}
		
		// Optional 
		public function getContent () : String {
			return content; 
		}
		public function setContent (content: String):void  {
			this.content = content;
		}
		
		public function getContentUrl () : String {
			return contentUrl; 
		}
		public function setContentUrl (contentUrl: String):void  {
			this.contentUrl = contentUrl;
		}
		
		public function getImmediate () : Boolean {
			return immediate;
		}
		public function setImmediate (immediate: Boolean):void  {
			this.immediate = immediate;
		}
		
		
		public function getRequestAutomaticUpdate () : Boolean { // For request
			return requestAutomaticUpdate; 
		}
		public function setRequestAutomaticUpdate (automaticUpdate: Boolean):void  {
			this.requestAutomaticUpdate = automaticUpdate;
		}
		
		public function getAutomaticUpdate () : Boolean { // For response
			return automaticUpdate; 
		}
		public function setAutomaticUpdate (automaticUpdate: Boolean):void  { 
			this.automaticUpdate = automaticUpdate;
		}
		
		public function getName () : String {
			return name; 
		}
		public function setName (name: String) :void {
			this.name = name;
		} 
		
		public function getToken () : String {
			return token; 
		}
		public function setToken (token: String) :void {
			this.token = token;
		}
		
		public function getTimeOut () : String {
			return timeOut; 
		}
		public function setTimeOut (timeOut: String) :void {
			this.timeOut = timeOut;
		} 
		
		public function getUpdateType () : String {
			return updateType; 
		}
		public function setUpdateType (updateType: String) :void {
			this.updateType = updateType;
		} 
		
		public function getState () : String {
			return state; 
		}
		public function setState (state: String) :void {
			this.state = state;
		}
		
		public function getTimeout () : String {
			return timeout; 
		}
		public function setTimeout (timeout: String) :void {
			this.timeout = timeout;
		} 
	} 
}


















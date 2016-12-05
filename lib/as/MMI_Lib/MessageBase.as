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
	public class MessageBase
	{
		
		//*******************************************************************************************
		// Data
		//*******************************************************************************************
		// Non-normalized attributes
		private var api : String; 
		private var type : String; 
		private var metadata : String;
		
		// Normalized attributes
		private var requestId : Number; 
		private var source : String;
		private var target : String; 
		private var data : String; 
		private var context : String; 
		private var confidential : String;
		
		//*******************************************************************************************
		// Constructor
		//*******************************************************************************************
		public function MessageBase(spec: Spec) {
			// Init value
			this.setApi(spec.getApi());
			this.setType(spec.getType());
			this.setMetadata(spec.getMetadata());
			
			this.setRequestId(spec.getRequestId());
			this.setSource(spec.getSource());
			this.setTarget(spec.getTarget());
			this.setData(spec.getData());
			this.setContext(spec.getContext());
			this.setConfidential(spec.getConfidential());
			
			// Throw exception if any
			if (requestId == null)
				throw new Error(Exception.REQUEST_ID_EMPTY);
			
			if (source == null || source == "")
				throw new Error(Exception.SOURCE_EMPTY);
			
			if (target == null || target == "")
				throw new Error(Exception.TARGET_EMPTY);
			
			if (context == null || context == "")
				throw new Error(Exception.CONTEXT_EMPTY);
		}
		
		//*******************************************************************************************
		// Getter and Setter
		//*******************************************************************************************
		// Non-normalized attributes
		public function getApi () : String {
			return api; 
		}
		public function setApi (api: String) {
			this.api = api;
		}
		
		public function getType () : String {
			return type; 
		}
		public function setType (type: String) {
			this.type = type;
		}
		
		public function getMetadata() : String {
			return metadata;
		}
		
		public function setMetadata(aMetadata: String) {
			metadata = aMetadata;
		}
		
		// Normalized attributes
		public function getRequestId () : Number {
			return requestId; 
		}
		public function setRequestId (requestId: Number) {
			this.requestId = requestId;
		}
		
		public function getSource () : String {
			return source; 
		}
		public function setSource (source: String) {
			this.source = source;
		}
		
		public function getTarget () : String {
			return target; 
		}
		public function setTarget (target: String) {
			this.target = target;
		}
		
		public function getData () : String {
			return data; 
		}
		public function setData (data: String) {
			this.data = data;
		}
		
		public function getContext () : String {
			return context; 
		}
		public function setContext (context: String) {
			this.context = context;
		}
		
		public function getConfidential () : String {
			return confidential; 
		}
		public function setConfidential (confidential: String) {
			this.confidential = confidential;
		}
	}
}

//		public function getMetadata (isOutputRawdata : Boolean = false) : Object {
//			var outputString : String = "";
//			if (!isOutputRawdata)
//				return metadata;
//			else {
//				outputString += "{\'type\':"+ metadata.getType()+ ",\'url\':"+ metadata.getUrl()+ "}";
//				return outputString;
//			}
//		};
//		public function setMetadata (aMetadata: String) {
//			aMetadata = aMetadata.replace("{", "");
//			aMetadata = aMetadata.replace("}", "");
//			aMetadata = aMetadata.replace(" ", ""); 
//			
//			var temp = new Array();
//			temp = aMetadata.split(",");
//			var tempType  = temp[0].split(":");
//			var tempUrl  = temp[1].split("':");
//			
//			metadata.setType(tempType[1])
//			metadata.setUrl(tempUrl[1]);
//			
//		}
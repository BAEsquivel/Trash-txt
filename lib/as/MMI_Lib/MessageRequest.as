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
	public class MessageRequest extends MessageBase
	{
		//*******************************************************************************************
		// Data
		//*******************************************************************************************
		private var method : String;
		private var status : String;
		
		// Optional, they're null by default
		private var content : String = null; 
		private var contentUrl : String == null;
		private var immediate : Boolean == false;
		private var automaticUpdate: Boolean = false;
		
		
		//*******************************************************************************************
		// Constructor
		//*******************************************************************************************
		public function MessageRequest (spec: Spec) {
			super(spec);
			
			this.setMethod(spec.getMethod());
			this.setStatus(spec.getStatus());
		}
		
		
		//*******************************************************************************************
		// Getter and Setter
		//*******************************************************************************************
		public function getMethod () : String {
			return method; 
		}
		public function setMethod (method: String) {
			this.method = method;
		}
		public function getStatus () : String {
			return status; 
		}
		public function setStatus (status: String) {
			this.status = status;
		}
		
		// Optional 
		public function getContent () : String {
			return content; 
		}
		public function setContent (content: String) {
			this.content = content;
		}
		
		public function getContentUrl () : String {
			return contentUrl; 
		}
		public function setContentUrl (contentUrl: String) {
			this.contentUrl = contentUrl;
		}
		
		public function getImmediate () : Boolean {
			return this.immediate;
		}
		public function setImmediate (immediate : Boolean) {
			this.immediate = immediate;
		}
		
		public function isAutomaticUpdate () : Boolean {
			return this.automaticUpdate; 
		}
		public function setAutomaticUpdate (automaticUpdate: Boolean) {
			this.automaticUpdate = automaticUpdate;
		}
		 
	}
}
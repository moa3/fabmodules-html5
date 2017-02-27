//
// domparser.js
//   fab module file routines
//
// Luc-Pascal Ceccaldi
//
// This work may be reproduced, modified, distributed, performed, and
// displayed for any purpose, but must acknowledge the fab modules
// project. Copyright is retained and must be preserved. The work is
// provided as is; no warranty is provided, and users accept all
// liability.
//

define(['require'], function(require) {


   //
   // check for DOMParser support
   //
   if (!window.DOMParser) {
      alert("error: DOMParser not supported");
   }

   return window.DOMParser;

});

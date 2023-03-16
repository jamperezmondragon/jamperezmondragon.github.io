var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

// JavaScript Document
function testform()
{var score=0;
var answers=0;
if ((document.tajik.duusti.value=="friend")||(document.tajik.duusti.value=="Friend")) 
	{score = score + 1}

if (document.tajik.duusti.value!="") 
	{answers = answers + 1}

if ((document.tajik.hubi.value=="good")||(document.tajik.hubi.value=="Good"))
	{score = score + 1} 

if (document.tajik.hubi.value!="")
	{answers = answers + 1} 

if ((document.tajik.hamsoaj.value=="neighbor")||(document.tajik.hamsoaj.value=="Neighbor"))
	{score = score + 1} 

if (document.tajik.hamsoaj.value!="")
	{answers = answers + 1} 

if ((document.tajik.sumo.value=="your")||(document.tajik.sumo.value=="Your"))
	{score = score + 1} 

if (document.tajik.sumo.value!="")
	{answers = answers + 1} 

if (answers==4) 
	{document.tajik.scoreoutput.value = score + " out of 4."}
	else 
	{document.tajik.scoreoutput.value = ""}
	
if (answers==0) {document.tajik.evaluation.value = "Oops!"}
if (answers==1) {document.tajik.evaluation.value = "Good start!"}
if (answers==2) {document.tajik.evaluation.value = "Keep going!"}
if (answers==3) {document.tajik.evaluation.value = "One more!"}
if (answers==4) {document.tajik.evaluation.value = "Check your spelling."}
if (score==4) {document.tajik.evaluation.value = "Congratulations!";
				document.tajik.scoreoutput.value = score + " out of 4!";
				window.location="certificate.htm"}
}

}
/*
     FILE ARCHIVED ON 12:37:39 Oct 02, 2020 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 03:12:51 Feb 16, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 73.288
  exclusion.robots: 0.076
  exclusion.robots.policy: 0.068
  cdx.remote: 0.064
  esindex: 0.009
  LoadShardBlock: 35.587 (3)
  PetaboxLoader3.datanode: 44.593 (4)
  CDXLines.iter: 15.781 (3)
  load_resource: 65.3
  PetaboxLoader3.resolve: 29.733
*/
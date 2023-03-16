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
if ((document.yaqui.a1.value=="h")||(document.yaqui.a1.value=="H")) 
	{score = score + 1}

if (document.yaqui.a1.value!="") 
	{answers = answers + 1}

if ((document.yaqui.a2.value=="a")||(document.yaqui.a2.value=="A"))
	{score = score + 1} 

if (document.yaqui.a2.value!="")
	{answers = answers + 1} 

if ((document.yaqui.a3.value=="f")||(document.yaqui.a3.value=="F"))
	{score = score + 1} 

if (document.yaqui.a3.value!="")
	{answers = answers + 1} 

if ((document.yaqui.a4.value=="d")||(document.yaqui.a4.value=="D"))
	{score = score + 1} 

if (document.yaqui.a4.value!="")
	{answers = answers + 1} 

if ((document.yaqui.a5.value=="c")||(document.yaqui.a5.value=="C"))
	{score = score + 1} 

if (document.yaqui.a5.value!="")
	{answers = answers + 1} 

if ((document.yaqui.a6.value=="e")||(document.yaqui.a6.value=="E"))
	{score = score + 1} 

if (document.yaqui.a6.value!="")
	{answers = answers + 1} 

if ((document.yaqui.a7.value=="b")||(document.yaqui.a7.value=="B"))
	{score = score + 1} 

if (document.yaqui.a7.value!="")
	{answers = answers + 1} 

if ((document.yaqui.a8.value=="g")||(document.yaqui.a8.value=="G"))
	{score = score + 1} 

if (document.yaqui.a8.value!="")
	{answers = answers + 1} 

if (answers==8) 
	{document.yaqui.scoreoutput.value = score + " out of 8."}
	else 
	{document.yaqui.scoreoutput.value = ""}
	
if (answers==0) {document.yaqui.evaluation.value = "Oops!"}
if (answers==1) {document.yaqui.evaluation.value = "Good start!"}
if (answers==2) {document.yaqui.evaluation.value = "Keep going!"}
if (answers==3) {document.yaqui.evaluation.value = "Way to go!"}
if (answers==4) {document.yaqui.evaluation.value = "Try again!"}
if (answers==5) {document.yaqui.evaluation.value = "Don't give up!"}
if (answers==6) {document.yaqui.evaluation.value = "Almost there!"} 
if (answers==7) {document.yaqui.evaluation.value = "One more!"} 
if (score==8) {document.yaqui.evaluation.value = "Congratulations!";
				document.yaqui.scoreoutput.value = score + " out of 8!";
				window.location="certificate.htm"}
}

}
/*
     FILE ARCHIVED ON 12:54:58 Oct 02, 2020 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 03:30:03 Feb 16, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 147.459
  exclusion.robots: 0.102
  exclusion.robots.policy: 0.092
  cdx.remote: 0.083
  esindex: 0.011
  LoadShardBlock: 115.305 (3)
  PetaboxLoader3.datanode: 124.96 (4)
  CDXLines.iter: 22.879 (3)
  PetaboxLoader3.resolve: 49.715 (2)
  load_resource: 82.063
*/
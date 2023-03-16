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
if (document.turkish.ocean.value=="denizde") 
	{
	score = score + 1
	}

if (document.turkish.carrot.value=="havuca")
	{
	score = score + 1
	} 

if (document.turkish.table.value=="masalar")
	{
	score = score + 1
	} 

if (document.turkish.notebook.value=="defterde")
	{
	score = score + 1
	} 

if (document.turkish.house.value=="evlere")
	{
	score = score + 1
	} 

if (score==0) {document.turkish.evaluation.value = "Oops!"}
if (score==1) {document.turkish.evaluation.value = "Good start!"}
if (score==2) {document.turkish.evaluation.value = "Keep going!"}
if (score==3) {document.turkish.evaluation.value = "Way to go!"}
if (score==4) {document.turkish.evaluation.value = "Almost there!"}
if (score==5) {document.turkish.evaluation.value = "Congratulations!"; 
				document.turkish.scoreoutput.value = score + " out of 5!";
				document.certificate.solved.value = "solved";
				document.turkish.instructions.value = "Now that you have solved this puzzle, you may request a certificate by pressing the button below."}
	else document.turkish.scoreoutput.value = score + " out of 5"
}


}
/*
     FILE ARCHIVED ON 06:51:32 Dec 09, 2020 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 03:13:11 Feb 16, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 212.533
  exclusion.robots: 0.087
  exclusion.robots.policy: 0.081
  cdx.remote: 0.058
  esindex: 0.01
  LoadShardBlock: 180.082 (3)
  PetaboxLoader3.resolve: 126.497 (4)
  PetaboxLoader3.datanode: 103.54 (4)
  CDXLines.iter: 17.391 (3)
  load_resource: 104.206
*/
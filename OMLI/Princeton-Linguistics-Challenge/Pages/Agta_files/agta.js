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
if (document.agta.littleleg.value=="talatakki") 
	{
	score = score + 1
	}

if (document.agta.money.value=="pirak")
	{
	score = score + 1
	} 

if (document.agta.littlebeetle.value=="talatalobag")
	{
	score = score + 1
	} 

if (document.agta.littlepatch.value=="lalalabang")
	{
	score = score + 1
	} 

if (document.agta.littlegranny.value=="balabakbakat")
	{
	score = score + 1
	} 

if (score==0) {document.agta.evaluation.value = "Oops!"}
if (score==1) {document.agta.evaluation.value = "Good start!"}
if (score==2) {document.agta.evaluation.value = "Keep going!"}
if (score==3) {document.agta.evaluation.value = "Way to go!"}
if (score==4) {document.agta.evaluation.value = "Almost there!"}
if (score==5) {document.agta.evaluation.value = "Congratulations!"; 
				document.agta.scoreoutput.value = score + " out of 5!";
				document.certificate.solved.value = "solved";
				document.agta.instructions.value = "Now that you have solved this puzzle, you may request a certificate by pressing the button below."
}
	else document.agta.scoreoutput.value = score + " out of 5"
}


}
/*
     FILE ARCHIVED ON 21:45:19 Oct 17, 2015 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 02:06:14 Feb 16, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 284.767
  exclusion.robots: 0.11
  exclusion.robots.policy: 0.101
  cdx.remote: 0.072
  esindex: 0.011
  LoadShardBlock: 255.655 (3)
  PetaboxLoader3.resolve: 223.18 (4)
  PetaboxLoader3.datanode: 77.469 (4)
  CDXLines.iter: 18.108 (3)
  load_resource: 93.582
*/
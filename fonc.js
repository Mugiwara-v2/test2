function toggle_payload(pld){
  if(pld == "cache"){
		document.getElementById("progress").innerHTML="Loading Dump cache host.. Please wait..";
		preloadScripts(['PAYLOADS/cache.js','jsloader.js']);				
	}else if(pld == "Silver755"){
		document.getElementById("progress").innerHTML="Loading Platinum755x82-v1.1b.. Please wait..";
		preloadScripts(['PAYLOADS/Silver755.js','jsloader.js']);
	}else if(pld == "Silver755x82-1.2"){
		document.getElementById("progress").innerHTML="Loading Platinum755x82-v1.1a-Spoofed.. Please wait..";
		preloadScripts(['PAYLOADS/Silver755x82-1.2.js','jsloader.js']);	
	}else if(pld == "Silver755x80"){
		document.getElementById("progress").innerHTML="Loading Silver755x80.. Please wait..";
		preloadScripts(['PAYLOADS/Silver755x80.js','jsloader.js']);		
	}else if(pld == "henSP7"){
		document.getElementById("progress").innerHTML="Loading henSP7.. Please wait..";
		preloadScripts(['PAYLOADS/henSP7.js','jsloader.js']);
	}else if(pld == "henSP8"){
		document.getElementById("progress").innerHTML="Loading henSP8.. Please wait..";
		preloadScripts(['PAYLOADS/henSP8.js','jsloader.js']);
	}else if(pld == "mira2b"){
		document.getElementById("progress").innerHTML="Loading MIRA+SPOOF.. Please wait..";
		preloadScripts(['PAYLOADS/mira2.js','jsloader.js']);
	}else if(pld == "BeefQueefMod133"){
		document.getElementById("progress").innerHTML="Loading Gta 5 BeefQueefMod 1.33.. Please wait..";
		preloadScripts(['PAYLOADS/BeefQueefMod133.js','jsloader.js']);
	}else if(pld == "backup"){
		document.getElementById("progress").innerHTML="Loading Payload.. Please wait..";
		preloadScripts(['PAYLOADS/backup.js','jsloader.js']);		
	}else if(pld == "ftp"){
		setTimeout(function(){document.getElementById("progress").innerHTML="FTP Loaded.. Access at port 1337..";},7000);
		preloadScripts(['PAYLOADS/ftp.js','jsloader.js']);
	}else if(pld == "app2usb"){
		document.getElementById("progress").innerHTML="Loading Payload.. Please wait..";
		preloadScripts(['PAYLOADS/app2usb.js','jsloader.js']);
	}else if(pld == "disableupdates"){
		document.getElementById("progress").innerHTML="Loading Payload.. Please wait..";
		preloadScripts(['PAYLOADS/disableupdates.js','jsloader.js']);
	}else if(pld == "enableupdates"){
		document.getElementById("progress").innerHTML="Loading Payload.. Please wait..";
		preloadScripts(['PAYLOADS/enableupdates.js','jsloader.js']);
	}else if(pld == "DB_SG_Backup"){
		document.getElementById("progress").innerHTML="Loading DB_SG_Backup.. Please wait..";
		preloadScripts(['PAYLOADS/DB_SG_Backup.js','jsloader.js']);
	}else if(pld == "restore"){
		document.getElementById("progress").innerHTML="Loading DB_SG_restore.. Please wait..";
		preloadScripts(['PAYLOADS/DB_SG_restore.js','jsloader.js']);
	}else if(pld == "Orbis-Toolbox-755"){
		document.getElementById("progress").innerHTML="Loading Orbis-Toolbox.. Please wait..";
		preloadScripts(['PAYLOADS/Orbis-Toolbox-755.js','jsloader.js']);
	}else if(pld == "todex"){
		document.getElementById("progress").innerHTML="Loading Payload.. Please wait..";
		preloadScripts(['PAYLOADS/todex.js','jsloader.js']);
	}else if(pld == "kdumper"){
		document.getElementById("progress").innerHTML="Loading Payload.. Please wait..";
		preloadScripts(['PAYLOADS/kdumper.js','jsloader.js']);
	}else if(pld == "disableaslr"){
		document.getElementById("progress").innerHTML="Loading Payload.. Please wait..";
		preloadScripts(['PAYLOADS/disableaslr.js','jsloader.js']);
	}else if(pld == "rdr2mod124"){
		document.getElementById("progress").innerHTML="Loading Rdr2 Mod Please wait..";
		preloadScripts(['PAYLOADS/rdr2mod124.js','jsloader.js']);
	}else if(pld == "kernelclock"){
		document.getElementById("progress").innerHTML="Loading Payload.. Please wait..";
		preloadScripts(['PAYLOADS/kernelclock.js','jsloader.js']);
	}else if(pld == "fancontrol"){
		document.getElementById("progress").innerHTML="Loading Payload.. Please wait..";
		preloadScripts(['PAYLOADS/fancontrol.js','jsloader.js']);
	}else if(pld == "enablebrowser"){
		document.getElementById("progress").innerHTML="Loading Payload.. Please wait..";
		preloadScripts(['PAYLOADS/enablebrowser.js','jsloader.js']);
	}else if(pld == "historyblocker"){
		document.getElementById("progress").innerHTML="Loading Payload.. Please wait..";
		preloadScripts(['PAYLOADS/historyblocker.js','jsloader.js']);
	}else if(pld == "exitidu"){
		document.getElementById("progress").innerHTML="Loading Payload.. Please wait..";
		preloadScripts(['PAYLOADS/exitidu.js','jsloader.js']);
	}else if(pld == "ps4debug"){
		document.getElementById("progress").innerHTML="Loading Payload.. Please wait..";
		preloadScripts(['PAYLOADS/ps4debug.js','jsloader.js']);
	}else if(pld == "webrte"){
		document.getElementById("progress").innerHTML="Loading Payload.. Please wait..";
		preloadScripts(['PAYLOADS/webrte.js','jsloader.js']);
	}else if(pld == "ps4-dumper-vtx755"){
    document.getElementById("progress").innerHTML="Loading ps4-dumper-vtx755.. Please wait..";
		preloadScripts(['PAYLOADS/ps4-dumper-vtx755.js','jsloader.js']);
	}else if(pld == "ps4-dumper-1.8"){
		document.getElementById("progress").innerHTML="Loading ps4-dumper-1.8.. Please wait..";
		preloadScripts(['PAYLOADS/ps4-dumper-1.8.js','jsloader.js']);
	}
	if(window.postPayload)
		window.postPayload();
	payload_finished(pld);
	
}
function payload_finished(payload)
{
   if(payload != "exploit"){
		setTimeout(function(){document.getElementById("progress").innerHTML="PS4 Jailbreak 7.55 Payload Loaded Succesfully !!";},7000);
	}
}
function done(){
			document.getElementById("myProgress").remove();
				if(document.getElementById("progress").innerHTML.includes("Failed")){		
					document.getElementById('load').innerHTML='<tr style="color:white;">'+
					'<td id="aexp" colspan="2" align="right" style="width: 12%;font-family: system-ui;font-size: 20px;">Autoload Exploit &nbsp;</td>'+
					'<td style="width: 10%;"><label class="switch"><input id="tog1" onclick="if(document.getElementById(\'tog1\').checked){document.getElementById(\'toggleExploit\').style.display=\'table-row\';localStorage.autoExploit=true;}else{document.getElementById(\'toggleExploit\').style.display=\'none\';localStorage.autoExploit=false;}" type="checkbox"><span class="slider new round"></span></label></td>'+
					'</tr>'+
					'<tr><td><br/></td></tr>'+
					'<tr id="toggleExploit" style="color:white;">'+
          '<td id="oexp" align="right" style="color:#585858;width: 45%;font-family: system-ui;font-size: 20px;">Preload Old Exploit &nbsp;</td>'+
					'<td style="width: 10%;"><label class="switch"><input checked id="tog" onclick="if(document.getElementById(\'tog\').checked){document.getElementById(\'oexp\').style.color=\'#585858\';document.getElementById(\'nexp\').style.color=\'white\';localStorage.jb=\'jb.js\';}else{document.getElementById(\'nexp\').style.color=\'#585858\';document.getElementById(\'oexp\').style.color=\'white\';localStorage.jb=\'oldjb.js\';}" type="checkbox"><span class="slider round"></span></label></td>'+
					'<td id="nexp" align="left" style="width: 45%;font-family: system-ui;font-size: 20px;">&nbsp;Preload New Exploit</td>'+
					'</tr>';
				  if(localStorage.autoExploit=="true"){document.getElementById('tog1').checked=true;document.getElementById('toggleExploit').style.display='table-row';}else{document.getElementById('tog1').checked=false;document.getElementById('toggleExploit').style.display='none';}
			    }else{
				  document.getElementById('load').innerHTML='<tr style="color:white;">'+	
					'<td align="center" colspan="5" >'+
					'<a href="#" id="goldhen20b" class="button" onclick="toggle_payload(\'Silver755x80\');return false" style="width:29%">goldhen2.0b</a>&nbsp;'+
					'<a href="#" id="Silver755" class="button" onclick="toggle_payload(\'Silver755\');return false" style="width:29%">Platinum755x82 v1.1b</a>&nbsp;'+
					'<a href="#" id="Silver755x82-1.2" class="button" onclick="toggle_payload(\'Silver755x82-1.2\');return false" style="width:29%">Platinum755x82 v1.1a spoofed</a>&nbsp;'+
          '<a href="#" id="henSP8" class="button" onclick="toggle_payload(\'henSP8\');return false" style="width:29%">SilverMiraSP8</a>&nbsp;'+
					'<a href="#" id="henSP7" class="button" onclick="toggle_payload(\'henSP7\');return false" style="width:29%">SilverMiraSP7</a>&nbsp;</td>'+
          '</tr>'+
					'<tr><td><br/></td></tr>'+
					'<tr>'+
					'<td colspan="3" align="center"><hr><br></td>'+
					'</tr>'+
					'<tr>'+
					'<td align="center" colspan="3">'+
					'<a href="#" id="BeefQueefMod133" class="button" onclick="toggle_payload(\'BeefQueefMod133\');return false" style="width:29%">Gta5 BeefQfMod 1.33</a>&nbsp;'+
					'<a href="#" id="rdr2mod124" class="button" onclick="toggle_payload(\'rdr2mod124\');return false" style="width:29%">rdr2-(mod1.3.1) 1.24</a>&nbsp;'+			
					'</tr><tr><td><br/></td></tr>'+
					'<tr>'+
					'<td align="center" colspan="3">'+
					'<a href="#" id="ps4-dumper-1.8" class="button" onclick="toggle_payload(\'ps4-dumper-1.8\');return false" style="width:29%">Game dumper-1.8</a>&nbsp;'+																						
					'<a href="#" id="kdumper" class="button" onclick="toggle_payload(\'kdumper\');return false" style="width:29%">k dumper</a>&nbsp;'+
					'</tr><tr><td><br/></td></tr>'+
					'<tr>'+
					'<td align="center" colspan="3">'+
					'<a href="#" id="disableupdates" class="button" onclick="toggle_payload(\'disableupdates\');return false" style="width:29%">Disable Updates</a>&nbsp;'+
					'<a href="#" id="enableupdates" class="button" onclick="toggle_payload(\'enableupdates\');return false" style="width:29%">Enable Updates</a>&nbsp;'+
					'<a href="#" id="ftp" class="button" onclick="toggle_payload(\'ftp\');return false" style="width:29%">FTP</a>&nbsp;</td>'+
					'</tr><tr><td><br/></td></tr>'+
					'<tr>'+
					'<td align="center" colspan="3">'+
					'<a href="#" id="disableaslr" class="button" onclick="toggle_payload(\'disableaslr\');return false" style="width:29%">Disable ASLR</a>&nbsp;'+
					'<a href="#" id="exitidu" class="button" onclick="toggle_payload(\'exitidu\');return false" style="width:29%">Exit IDU</a>&nbsp;'+
					'<a href="#" id="binloader" class="button" onclick="toggle_payload(\'binloader\');return false" style="width:29%">Bin Loader</a>&nbsp;</td>'+
					'</tr><tr><td><br/></td></tr>'+
					'<tr>'+
					'<td align="center" colspan="3">'+
					'<a href="#" id="DB_SG_backup" class="button" onclick="toggle_payload(\'DB_SG_Backup\');return false" style="width:29%">DB_SG_Backup</a>&nbsp;'+
					'<a href="#" id="restore" class="button" onclick="toggle_payload(\'restore\');return false" style="width:29%">DB_Restore</a>&nbsp;'+
          '<a href="#" id="ps4debug" class="button" onclick="toggle_payload(\'ps4debug\');return false" style="width:29%">PS4Debug</a>&nbsp;</td>'+
					'</tr><tr><td><br/></td></tr>'+
					'<tr>'+
					'<td align="center" colspan="3">'+
					'<a href="#" id="Orbis-Toolbox-755" class="button" onclick="toggle_payload(\'Orbis-Toolbox-755\');return false" style="width:29%">Orbis-Toolbox-755</a>&nbsp;'+			
					'<a href="#" id="webrte" class="button" onclick="toggle_payload(\'webrte\');return false" style="width:29%">WebRTE</a>&nbsp;'+
					'<a href="#" id="app2usb" class="button" onclick="toggle_payload(\'app2usb\');return false" style="width:29%">App2USB</a>&nbsp;</td>'+
					'</tr>';
				  if(localStorage.autoExploit=="true"){document.getElementById('tog1').checked=true;document.getElementById('toggleExploit').style.display='table-row';document.getElementById('mexp').style.display='none';}else{document.getElementById('tog1').checked=false;document.getElementById('toggleExploit').style.display='none';document.getElementById('mexp').style.display='table-row';}
			}
			if(localStorage.jb=='jb.js'){document.getElementById('tog').checked=true;document.getElementById('oexp').style.color='#585858';document.getElementById('nexp').style.color='white';}else{document.getElementById('tog').checked=false;document.getElementById('oexp').style.color='white';document.getElementById('nexp').style.color='#585858';}
		}
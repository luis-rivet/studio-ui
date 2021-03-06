tinyMCEPopup.requireLangPack();
function init(){var a,b;
tinyMCEPopup.resizeToInnerSize();
a=tinyMCEPopup.editor;
window.setTimeout(insertHelpIFrame,10);
b=document.getElementById("plugintablecontainer");
document.getElementById("plugins_tab").style.display="none";
var c="";
c+='<table id="plugintable">';
c+="<thead>";
c+="<tr>";
c+="<td>"+a.getLang("advanced_dlg.about_plugin")+"</td>";
c+="<td>"+a.getLang("advanced_dlg.about_author")+"</td>";
c+="<td>"+a.getLang("advanced_dlg.about_version")+"</td>";
c+="</tr>";
c+="</thead>";
c+="<tbody>";
tinymce.each(a.plugins,function(e,f){var d;
if(!e.getInfo){return
}c+="<tr>";
d=e.getInfo();
if(d.infourl!=null&&d.infourl!=""){c+='<td width="50%" title="'+f+'"><a href="'+d.infourl+'" target="_blank">'+d.longname+"</a></td>"
}else{c+='<td width="50%" title="'+f+'">'+d.longname+"</td>"
}if(d.authorurl!=null&&d.authorurl!=""){c+='<td width="35%"><a href="'+d.authorurl+'" target="_blank">'+d.author+"</a></td>"
}else{c+='<td width="35%">'+d.author+"</td>"
}c+='<td width="15%">'+d.version+"</td>";
c+="</tr>";
document.getElementById("plugins_tab").style.display=""
});
c+="</tbody>";
c+="</table>";
b.innerHTML=c;
tinyMCEPopup.dom.get("version").innerHTML=tinymce.majorVersion+"."+tinymce.minorVersion;
tinyMCEPopup.dom.get("date").innerHTML=tinymce.releaseDate
}function insertHelpIFrame(){var a;
if(tinyMCEPopup.getParam("docs_url")){a='<iframe width="100%" height="300" src="'+tinyMCEPopup.editor.baseURI.toAbsolute(tinyMCEPopup.getParam("docs_url"))+'"></iframe>';
document.getElementById("iframecontainer").innerHTML=a;
document.getElementById("help_tab").style.display="block";
document.getElementById("help_tab").setAttribute("aria-hidden","false")
}}tinyMCEPopup.onInit.add(init);
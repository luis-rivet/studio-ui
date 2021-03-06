(function(){tinymce.create("tinymce.plugins.PageBreakPlugin",{init:function(g,k){var i='<img src="'+g.theme.url+'/img/trans.gif" class="mcePageBreak mceItemNoResize" />',h="mcePageBreak",l=g.getParam("pagebreak_separator","<!-- pagebreak -->"),j;
j=new RegExp(l.replace(/[\?\.\*\[\]\(\)\{\}\+\^\$\:]/g,function(a){return"\\"+a
}),"g");
g.addCommand("mcePageBreak",function(){g.execCommand("mceInsertContent",0,i)
});
g.addButton("pagebreak",{title:"pagebreak.desc",cmd:h});
g.onInit.add(function(){if(g.theme.onResolveName){g.theme.onResolveName.add(function(b,a){if(a.node.nodeName=="IMG"&&g.dom.hasClass(a.node,h)){a.name="pagebreak"
}})
}});
g.onClick.add(function(b,a){a=a.target;
if(a.nodeName==="IMG"&&b.dom.hasClass(a,h)){b.selection.select(a)
}});
g.onNodeChange.add(function(b,c,a){c.setActive("pagebreak",a.nodeName==="IMG"&&b.dom.hasClass(a,h))
});
g.onBeforeSetContent.add(function(b,a){a.content=a.content.replace(j,i)
});
g.onPostProcess.add(function(b,a){if(a.get){a.content=a.content.replace(/<img[^>]+>/g,function(c){if(c.indexOf('class="mcePageBreak')!==-1){c=l
}return c
})
}})
},getInfo:function(){return{longname:"PageBreak",author:"Moxiecode Systems AB",authorurl:"http://tinymce.moxiecode.com",infourl:"http://wiki.moxiecode.com/index.php/TinyMCE:Plugins/pagebreak",version:tinymce.majorVersion+"."+tinymce.minorVersion}
}});
tinymce.PluginManager.add("pagebreak",tinymce.plugins.PageBreakPlugin)
})();
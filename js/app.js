var links=document.querySelectorAll(".nexmoe-list-item"),rootRealPath=getRealPath(window.location.pathname,!0);for(var key in links){var link=links[key];if("object"==typeof link){var linkPath=link.getAttribute("href");linkPath&&getRealPath(linkPath,!0)===rootRealPath&&(link.className="active nexmoe-list-item mdui-list-item mdui-ripple")}}var hitokoto=$("#hitokoto");function get_hitokoto_text(){$.ajax({url:"https://v1.hitokoto.cn/?c=a&c=b&c=c&c=d",type:"GET",success:function(t){var o=t.hitokoto;null==o||30<o.length?get_hitokoto_text():(hitokoto.html(o),hitokoto.on("click",function(){hitokoto.off("click"),get_hitokoto_text()}))},error:function(t){hitokoto.html("少女崩坏中……（求求你慢一点，不要太快啦！）")}})}get_hitokoto_text(),$("table:has(img)").addClass("nexmoe-album"),$("article:not(.nexmoe-links) img").each(function(){var t=document.createElement("a");$(t).attr("data-fancybox","gallery"),$(t).attr("href",$(this).attr("src")),$(t).attr("title",$(this).attr("alt")),$(this).wrap(t)}),$("#nexmoe-sidebar a").addClass("mdui-ripple"),mdui.mutation();
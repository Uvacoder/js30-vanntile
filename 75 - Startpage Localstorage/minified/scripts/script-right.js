(function(t){})(jQuery),$(document).ready(function(){var t=$("#fav-right"),e=$("#title-r"),l=$("#url-r");localStorage.getItem("fav-right")&&t.html(localStorage.getItem("fav-right")),$("#add-right").click(function(){$("#fav-right").append('<li><a href="'+l.val()+'">'+e.val()+'</a><button class="removebtn">x</button></li>'),localStorage.setItem("fav-right",t.html()),e.val(""),l.val("http://"),$("#add-link-form-r").slideToggle("100")}),$("#fav-right").on("click",".removebtn",function(){$(this).parent().remove(),localStorage.setItem("fav-right",t.html())}),$("#new-link-button-r").click(function(){$("#add-link-form-r").slideToggle("100")})});
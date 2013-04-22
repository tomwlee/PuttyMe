/* This javascript file is for PuttyTemplate
 * Handle all the basic javascript functions required on PuttyTemplate
 * PuttyMobile Team @Claydata
 * Created on 18 April, 2013
 * 
 * 
*/


	

/*Example of a single page*/
	/*$("#puttytemplate-home").bind("pageinit",function(event){
		
		$("#" + event.target.id).find("[data-role=footer][footer-nav=enabled]").load("footer.html", function(){
                $("#" + event.target.id).find("[data-role=navbar]").navbar();
            });
			
	});*/


/*INIT FOOTER*/
/*$(document).bind("pageshow",function(event){
		$("#" + event.target.id).find("[data-role=footer][footer-nav=enabled]").load("footer.html", function(){
               
			    // activate jquery mobile function (navbar())
				$("#" + event.target.id).find("[data-role=navbar]").navbar();
            });
});*/
/*END INIT FOOTER*/

   
$(document).ready(function(e) {
	
	 
	
	$('div[data-role=footer][footer-nav=enabled]').load('footer.html', function(){
			$(this).trigger("create").find("[data-role=navbar]").navbar();
	})
	
	/*$('#puttytemplate-home').live('pageinit',function(e,ui){
		var footer = $(this).find('div[data-role=footer]');
		footer.load('footer.html');
		alert(footer.text());
		footer.find("[data-role=navbar]").navbar();
	});*/
	/*
	$('[data-role=page]').live('pageshow', function (event, ui) {
				$("#" + event.target.id).find("[data-role=footer][footer-nav=enabled]").load("footer.html", function(){
					$("#" + event.target.id).find("[data-role=navbar]").navbar();
				});
	 });
	*/
	
	
	
/*Log in*/
$("#login").bind("pageinit",function(){
	
	$("#login-submit").bind("click",function(){
		
		var username = $("#login").find("#login-username").val();
		var password = $("#login").find("#login-password").val();
		
		$.cookie('username', "Warut");
		$.cookie('password', "Clay2899");
		
		alert("Check cookies ! \n"+$.cookie('username')+" \n"+$.cookie('password'));
		
		
		if(username=="leew" && password == "leew"){
			
			$.mobile.changePage($("#test"));
		}else{
			alert("username and pass is wrong !!");
			}
		
	});
	
});


/*QR SCANNER*/
/*
$("#puttytemplate-qr").bind("pageinit",function(){

	
	$("#puttytemplate-scanqr").bind('click',function(e){
		alert("start scanning");
		window.plugins.barcodeScanner.scan(
			
			function(result) { 
					alert("We got a barcode\n"+"Result: " + result.text + "\n" + "Format: " + result.format); 
				}, 
			function(error) { 
				alert("Scanning failed: " + error); 
			});

	});
	
});*/
});
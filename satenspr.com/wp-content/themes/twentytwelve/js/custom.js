$(function(){	

	$(".gform_wrapper .readonly input").attr('readonly', 'readonly').css("background","#CCC");
	$(".entry-details #input_1").attr('readonly', 'readonly').css("background","#CCC");

	var form1 = $("#gform_wrapper_1 .gform_body");

	function populaLink(){
		$(".gform_page", form1).each(function(index){		
			//$(this).show();

			console.log(this);

			//var aTl = "<li class='tabs'><a href=#"+this.id+">"+this.id+"</a></li>";		

			//form1.find("#tabLinks").append(aTl);
		});
	}	
//populaLink();
//form1.css("border","1px solid green");
	$( "#tabs" ).tabs();
	$(".gform_previous_button").hide();
});
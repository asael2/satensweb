$(function(){

$.urlParam = function(name){
	var results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(window.location.href);
	if (results==null){
		return null;
	}else{
		return results[1] || 0;
	}	

}

var leadId =  $.urlParam('leadid');

function doAjaxRequest(leadId){
     // here is where the request will happen
     jQuery.ajax({
          url: 'http://www.satenspr.com/wp-admin/admin-ajax.php',
          data:{
               'action':'do_ajax',
               //'fn':'get_latest_posts',
			   'fn':'get_a_leads',
               'leadid':leadId
               },
          dataType: 'JSON',
          success:function(data){
                 console.log(data);
                             },
          error: function(errorThrown){
               alert('error');
               console.log(errorThrown);
          }
     });
}


	console.log("Available::"+leadId );
	//SERAiD
	$(".gform_wrapper .readonly input").attr('readonly', 'readonly').css("background","#CCC");
	$(".entry-details #input_1").attr('readonly', 'readonly').css("background","#CCC");
	//TABS
	$( "#tabs" ).tabs();
	$(".gform_previous_button").hide();


	$('#json_click_handler').click(function(){
          doAjaxRequest(leadId);
     });


});


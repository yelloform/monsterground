$(function(){
    
    $('.partnership').click(function(){
        $('.form_partnership').show()
        $('.form_making').hide()
		});
    
    $('.makingad').click(function(){
        $('.form_partnership').hide()
        $('.form_making').show()
		});
    
});
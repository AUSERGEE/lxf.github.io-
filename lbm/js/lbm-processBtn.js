  /*ifc-progressBtn插件**start*/
 ;(function($){
	 $.fn.progressBtn=function(options){
	 	var defaults={
	 		innerName:'.ui-btn-inner', 
	 		eventType:'click',       
	 		outerSpan:'.ui-btn-outer',  
	 		innerSpan:'.ui-btn-inner>span',  //进度条内部span
	 		SucessfulCallBack: function() {},
	 		btnTime:3   //倒计时长
	 	}
	 	
	 	var options=$.extend(defaults,options);
	 	this.each(function(){
	 		var _this=$(this); 
	 		_this.bind(options.eventType,function(){
	 			_this.attr("disabled", true);
	 			_this.find(options.outerSpan).append($('<i class="btnTime">'+options.btnTime+'s</i>'));
	 			_this.find(options.innerSpan).append($('<i class="btnTime">'+options.btnTime+'</i>'));
	 			_this.find(options.innerName).animate({'width':'100%'},options.btnTime*1000,function(){
	 				$(this).css({'width':0+'px'});;
	 			});
	 		
	 			var count=options.btnTime;
	 			var addWidth=(count/options.btnTime)*_this.width();
	 			var countdown=setInterval(countdownFun, 1000);
	 			 function countdownFun(){
	 				if (count == 1) {
	 					clearInterval(countdown);
	 					_this.find('.btnTime').text('');
	 					_this.removeAttr("disabled");
	 					_this.find('.btnTime').remove();
	 					options.SucessfulCallBack();
	 				}else{
	 				   count--; 
	 				   _this.find('.btnTime').text(count+'s');
	 				}
	 			}
	 		
	 		});
	 		
	 	});
	 }
	
})(jQuery);
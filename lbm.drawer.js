
   /*lbm-drawer.js
    
    * 2017/3/31
    * */
 ;(function($,window){
 	  $.fn.drawer=function(options){
 	  	 var defaults={
 	  	 	drawerActiveCls:'lbm-active',
 	  	 	direction:'top',
 	  	 	width:'100%',
 	  	 	height:'50%',
 	  	 	openBtn:'openDrawer',
 	  	 	closeBtn:'closeDrawer',
 	  	 	eventType:'click',
 	  	 	mask:'<div class="drawerMask"></div>',
 	  	 	cb:function(){}
 	  	 }
 	  	var options=$.extend(defaults,options);
 	  	var showFlag=false;
 	  	var mask=$(options.mask).css({position: 'fixed',
                                                        zIndex: '1000',
														top: '0',
														right: '0',
														bottom: '0',
														left: '0',
														backgroundColor: 'rgba(0,0,0,.6)',
														webkitTransition:'all .3s cubic-bezier(0.385, 0.065, 0.290, 1.015)',
						   	                            transition:'all .3s cubic-bezier(0.385, 0.065, 0.290, 1.015)',
						   	                            display:'none'
													 });
 	  	var _show=function($this){
 	  		$this.css({WebkitTransform:'translate3d(0,0,0)',transform:'translate3d(0,0,0)'});
 	  		$('body').append(mask.fadeIn(60));
 	  		showFlag=true;
 	  	}
 	  	var _close=function($this){
 	  		 if(showFlag){
 	  		 	$this.css({WebkitTransform:directionCls.WebkitTransform,transform:directionCls.transform});
 	  		    mask.remove();
 	  		 }
 	  	}
 	  	var drawerBaseCls={ 
 	  		                     position:'fixed',
						   	     zIndex: '1001',
						   	     background: '#FFFFFF',
						   	     webkitTransition:'-webkit-transform .3s cubic-bezier(0.385, 0.065, 0.290, 1.015)',
						   	     transition:'transform .3s cubic-bezier(0.385, 0.065, 0.290, 1.015)'
						   	     
						   	   };
	    var directionCls={ };
	    
	    switch(options.direction){
	    	case 'top':directionCls={ top:'0px',width:options.width,height:options.height,WebkitTransform:'translate3d(0,100%,0)',
						   	     transform:'translate3d(0,-100%,0)'};
	    	break;
	    	case 'bottom':directionCls={ bottom:'0px',width:options.width,height:options.height,WebkitTransform:'translate3d(0,100%,0)',
						   	     transform:'translate3d(0,100%,0)'};
	    	break;
	    	case 'left':directionCls={ left:'0px',top:'0px',width:options.width,height:options.height,WebkitTransform:'translate3d(100%,0,0)',
						   	     transform:'translate3d(-100%,0,0)'};
	    	break;
	    	case 'right':directionCls={ right:'0px',top:'0px',width:options.width,height:options.height,WebkitTransform:'translate3d(100%,0,0)',
						   	     transform:'translate3d(100%,0,0)'};
	    	break;
	    	default: ;
	    }
	    var drawerCls=$.extend({},drawerBaseCls,directionCls);
	    this.close=function(){
	    	_close($(this));
	    }
	    this.open=function(){
	    	_show($(this));
	    }
 	  	this.each(function(){
 	  		 var _this=$(this);
 	  		 _this.aa=0;
 	  		 _this.css(drawerCls);
 	  		 _this.on(options.eventType,function(e){
 	  		 	 e.stopPropagation();
 	  		 });
 	  		 $('.'+options.openBtn).on(options.eventType,function(e){
 	  		 	 _show(_this);
 	  		 	 options.cb();
 	  		 	 e.stopPropagation();
 	  		 });
 	  		 $('.'+options.closeBtn).on(options.eventType,function(e){
 	  		 	 _close(_this);
 	  		 	 e.stopPropagation();
 	  		 })
 	  		 $(document).on(options.eventType,function(){
 	  		 	 _close(_this);
 	  		 });
 	  		 
 	  		 
 	    });
 	    return this; 
 	  }
 	
 	
 })(jQuery,window)

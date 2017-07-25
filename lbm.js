
  /*ifc-countdown插件**start*/
 ;(function($){
	 $.fn.countdownBtn=function(options){
	 	var defaults={
	 		eventType:'click',       
	 		SucessfulCallBack: function() {},
	 		verifyFun:function(){},
	 		btnTime:3   //倒计时长
	 	}
	 	
	 	var options=$.extend(defaults,options);
	 	this.each(function(){
	 		var _this=$(this); 
	 		_this.bind(options.eventType,function(){
	 			if(options.verifyFun()==false){
	 			   return false;	
	 			}
	 			_this.attr("disabled", true);
	 			var count=options.btnTime;
	 			var countdown=setInterval(countdownFun, 1000);
	 			 function countdownFun(){
	 				if (count == 1) {
	 					clearInterval(countdown);
	 					_this.find('span').attr('data-time','');
	 					_this.removeAttr("disabled");
	 				}else{
	 				   count--; 
	 				   _this.find('span').attr('data-time',count+'s');
	 				}
	 			}
	 		
	 		});
	 		
	 	});
	 }
	
})(jQuery);
 /*ifc-countdown插件**end*/
/*全局-lbm--**start*/
  function lbm(){	
  	  this.addToast=function(pos,arg3){
  	  	 var arg3=arg3;
  	  	  $('body').append(toast);
            if(pos=="middle"){
	         	$('.weui-toast').css({'margin-left':-($('.weui-toast').outerWidth()/2),'top':180,'bottom':''});
	         }else if(pos=="bottom"){
	         	$('.weui-toast').css({'margin-left':-($('.weui-toast').outerWidth()/2),'top':'','bottom':42});
	         }
	         if(arg3){
	         	  if(arg3=='lbm-icon-success'){
	         	  	    var successLineSvgStr='<div class="svg-animate5">	'+
																																	'<svg version="1.1" id="图层_2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 55.4 37.8" style="enable-background:new 0 0 55.4 37.8;" xml:space="preserve">'+
																																      '<style type="text/css">.st0{fill:none;stroke:#000000;stroke-width:5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}</style>'+
																																      '<polyline class="st0" points="7.1,15.8 21,30.9 48.7,6.4 "/>'+
																																   '</svg>'+
																												'</div>'
	         	  	    $('.toast-icon').css({'display':'block','margin-bottom':'1px'}).append(successLineSvgStr)
	         	  }
	         	  else{
	         	  	$('.toast-icon').css('display','block').addClass(arg3)
	         	  }
	         	
	         }
  	  }
   }
 lbm.prototype={
 	 loading:function(loadingTxt){
 	 	this.loadingTxt=loadingTxt||'';
 		 $('body').append($('<div class="ifc-mask"><div class="ifc-loading"><div class="spinner"><i></i></div><p class="ifc-loadingTxt">'+this.loadingTxt+'</p></div></div></div>'));

 	 },
 	 removeLoading:function(){
 		 $('.ifc-mask').remove('');
   	},
   	toast:function(){
   		
   		 var msg,
   		     position,
   		     time;
         arguments[0] ? msg = arguments[0] : msg = '已完成';
         arguments[1] ? position = arguments[1] : position ='bottom';
         arguments[2] ? time = arguments[2] : time =2000;
         
          toast = '\
                 <div class="lbm-toast" id="lbm-toast">\
			    	<div class="weui-mask_transparent"></div>\
			    	<div class="weui-toast">\
			            <i class="toast-icon"></i>\
			            <p class="weui-toast__content">'+msg+'</p>\
			        </div>\
			    </div>\
        ';
        if(!$('#lbm-toast').length){
        	this.addToast(position,arguments[3]);
            
        }else{
           $('#lbm-toast').remove();
           this.addToast(position,arguments[3]);
        }
         $('#lbm-toast').fadeIn('fast',function(){
            setTimeout(function(){
                $('#lbm-toast').fadeOut('fast');
            },time);
        });
   	}
 }
lbm.extend = function(obj, fun) {   //定义extend方法  
    for (var key in fun) {
        if (fun[key] !== undefined) {
            obj[key] = fun[key]
        }
    }
};
lbm.extend(lbm,{
		al:function(){ alert('ddf');}
		
});
  var lbm=new lbm();  //实例化全局lbm

/**全局-lbm--*end*/

   /*lbm-verify插件**start*/
 ;(function($){
	 $.fn.lbmVerify=function(options){
	 	var defaults={ 
	 		subBtn:'#submit',       
	 		tipIc:'',
	 		verifyCallBack:function(){}
	 	}
	 	var mailReg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
	 	var phoneReg =/^1[34578]\d{9}$/;
	 	var options=$.extend(defaults,options);
	 	this.each(function(){
	 		var _this=$(this); 
	 		var count=0;
            //alert(_this.find('.lbmVerifyInput').attr('lbmVerifyInfo'));
            $(options.subBtn).bind('tap',function(){
            	count=0;
            	_this.find('.lbmVerifyInput').each(function(index,inputItem){ 
            		
            		var itemLen=_this.find('.lbmVerifyInput').length;
	            	if($(this).val()==""){
	            		var lbmVerifyInfo=$(this).attr('lbmVerifyInfo');
	            		lbm.toast(lbmVerifyInfo,'middle',1200);
	            		$(this).next().show();
	            		return false;
	            		
	            	}else if($(this).attr('lbmVerifyMail')){
            			if(!mailReg.test($(this).val())){
            				lbm.toast('请输入正确的邮箱地址','middle',1200);
            				return false;
            			}else{
	            			$(this).next().hide();
	            			count++;
	            		}
            		}else if($(this).attr('lbmVerifyPhone')){
            			if(!phoneReg.test($(this).val())){
            				lbm.toast('请输入正确的手机号码','middle',1200);
            				return false;
            			}else{
	            			$(this).next().hide();
	            			count++;
	            		}
            		}else{
            			$(this).next().hide();
            			count++;
            		}
            		
            		if (count==itemLen) {
				      options.verifyCallBack();
				      count=0;
				    }

	            });
            });
            _this.find('.lbmVerifyInput').bind('blur',function(){
            	 if($(this).val()==""){
	            		var lbmVerifyInfo=$(this).attr('lbmVerifyInfo');
	            		lbm.toast(lbmVerifyInfo,'middle',1200);
	            		$(this).next().show();
	            		return false;
	            		
	            	}else if($(this).attr('lbmVerifyMail')){
            			if(!mailReg.test($(this).val())){
            				lbm.toast('请输入正确的邮箱地址','middle',1200);
            				return false;
            			}else{
	            			$(this).next().hide();
	            		}
            		}else{
            			$(this).next().hide();
            		}
            });
	 	});
	 }
	
})(jQuery);
 /*lbm-verify插件**end*/

/*lbm工具箱-lbmTool**start*/

    function lbmTool() {
        this.sliding=function(obj, a) {           //设置过度效果及位移
            lbmTool.setStyle(obj, { WebkitTransition: "500ms cubic-bezier(0.385, 0.065, 0.290, 1.015)", transition: "500ms cubic-bezier(0.385, 0.065, 0.290, 1.015)" });
            lbmTool.setStyle(obj, { WebkitTransform: "translate3d(" + a[0] + "px," + a[1] + "px," + a[2] + "px)", transform: "translate3d(" + a[0] + "px," + a[1] + "px," + a[2] + "px)" })
        }
        this.setStyle=function(obj, style) {   //设置样式方法
            for (var obji = 0; obji < obj.length;obji++) {
                for (var a in style) {
                    obj[obji].style[a] = style[a]
                }
            }
        }
        
    } 
    lbmTool.prototype = {
    	lbmToolTest:function(aa){
    		lbmTool.tool.aa('sss');
    	},
        spriteMove: function (objStr, a) {
            var obj=document.querySelectorAll(objStr);
            lbmTool.sliding(obj, a)
        },
        alert:function(msg){   //msgBox-alert
        	lbmTool.tool.GenerateHtml("alert", msg);
		    lbmTool.tool.btnOk(); //alert只是弹出消息，因此没必要用到回调函数callback
		    lbmTool.tool.btnNo();
        },       
	    confirm: function (msg, callback,okTxt,cancelTxt) {    //msgBox-confirm
	        lbmTool.tool.GenerateHtml("confirm",msg,okTxt,cancelTxt);
	        lbmTool.tool.btnOk(callback);
	        lbmTool.tool.btnNo();
	    },
	    inputDialog: function (initVal,inputType,title,callback) {    //msgBox-confirm
	        lbmTool.tool.creatinputDl(initVal,inputType,title);
	        lbmTool.tool.btnSub(inputType,callback);
	        lbmTool.tool.btnNo();
	        
	    }
    }
    lbmTool.prototype.tool={  //lbmTool内部公用的方法
    	aa:function(aaa){  //调试用
    		alert(aaa);
    	},
    	GenerateHtml:function(type, msg,okTxt,cancelTxt){  //msgBox-创建html
    		    var _html = "";
          var okTxt=okTxt||'确定';
          var cancelTxt=cancelTxt||'取消';
			    _html += '<div id="mb_box"></div><div id="mb_con">';
			    _html += '<div id="mb_msg" class="lbm-borbt">' + msg + '</div><div id="mb_btnbox">';
			 
			    if (type == "alert") {
			      _html += '<input id="mb_btn_ok" type="button" value="确定" />';
			    }
			    if (type == "confirm") {
			      _html += '<input id="mb_btn_no" type="button" value="'+cancelTxt+'"  />';
			      _html += '<input id="mb_btn_ok" type="button" value="'+okTxt+'" />';
			    }
			    _html += '</div></div>';
			 
			    //必须先将_html添加到body，再设置Css样式
			    $("body").append(_html); 
			    lbmTool.tool.GenerateCss();
    	},
    	GenerateCss:function(){          //msgBox-创建css
    		$("#mb_box").css({ width: '100%', height: '100%', zIndex: '99999', position: 'fixed',
		      filter: 'Alpha(opacity=60)', backgroundColor: '#121313', top: '0', left: '0', opacity: '0.7'
		    });
		 
		    $("#mb_con").css({ zIndex: '999999', width: '270px', position: 'fixed',
		      backgroundColor: 'White', borderRadius: '5px'
		    });
		 
		    $("#mb_msg").css({ padding: '30px 20px', lineHeight: '20px',fontSize: '1.3rem',color:'#606466'
		    });
		 
		    $("#mb_ico").css({ display: 'block', position: 'absolute', right: '10px', top: '9px',
		      border: '1px solid #DBE3E7', width: '18px', height: '18px', textAlign: 'center',
		      lineHeight: '16px', cursor: 'pointer', borderRadius: '12px', fontFamily: '微软雅黑'
		    });
		 
		    $("#mb_btnbox").css({ margin: '8px 0 8px 0', textAlign: 'center' });
		    $("#mb_btn_ok,#mb_btn_no").css({ width: '98px', height: '30px', lineHeight: '30px', padding:'0', border: 'none',fontSize:'16px'});
		    $("#mb_btn_ok").css({ color: '#0097E5'  });
		    $("#mb_btn_no").css({ color: '#B3B8BA', marginRight: '20px'});
		 
		 
		    var _widht = document.documentElement.clientWidth; //屏幕宽
		    var _height = document.documentElement.clientHeight; //屏幕高
		 
		    var boxWidth = $("#mb_con").width();
		    var boxHeight = $("#mb_con").height();
		 
		    //让提示框居中
		    $("#mb_con").css({ top: (_height - boxHeight) / 2 + "px", left: (_widht - boxWidth) / 2 + "px" });
    	},
    	btnOk:function(callback){    //msgBox-确定按钮操作及回调函数
    		$("#mb_btn_ok").click(function () {
		      $("#mb_box,#mb_con").remove();
		      if (typeof (callback) == 'function') {
		      	
		        callback();
		      }
		    });
    	},
    	btnNo:function(){               //msgBox-取消按钮
    		$("#mb_btn_no,#mb_ico").click(function () {
		      $("#mb_box,#mb_con").remove();
		    });
    	},
    	btnSub:function(inputType,callback){    //msgBox-确定按钮操作及回调函数
    		var errorTip=function(errorTxt){
    			$("#mb_msg>p").text(errorTxt).show();
    		}
    		var inputVal;
    		$("#mb_msg input").focus(function(){
    			$("#mb_msg>p").text('').hide();
    		});
    		$("#mb_btn_ok").click(function () {
    		  inputType=="textarea"?inputVal=$("#mb_msg textarea").val():inputVal=$("#mb_msg input").val();
		      if (typeof (callback) == 'function') {
		        callback(inputVal,errorTip)?$("#mb_box,#mb_con").remove():null;
		      }
		      
		    });
    	},
    	creatinputDl:function(initVal,inputType,title){
    		var _html='';
    		_html += '<div id="mb_box"></div><div id="mb_con">';
    		_html +='<div class="msgTit">'+title+'</div>'
    		if(inputType=='textarea'){
    			_html += '<div id="mb_msg"><textarea>'+initVal+'</textarea><p>dd</p></div><div id="mb_btnbox">';
    		}else{
    			_html += '<div id="mb_msg"><input type="'+inputType+'" value="'+initVal+'"/><p>dd</p></div><div id="mb_btnbox">';
    		}
			

			_html += '<input id="mb_btn_no" type="button" value="取消" />';
			_html += '<input id="mb_btn_ok" type="button" value="确定" />';
    	    _html += '</div></div>';
			 
		    //必须先将_html添加到body，再设置Css样式
		    $("body").append(_html); 
		    inputType=='textarea'?$("#mb_msg textarea").focus():$("#mb_msg input").focus();
		    lbmTool.tool.GenerateCss();
		    lbmTool.tool.inputDlCss();
    	},
    	inputDlCss:function(){
    		$("#mb_con").css({top:'4rem'});
    		$(".msgTit").css({fontSize:'1.4rem',lineHeight:'4rem',textAlign:'center',color:'#4d4d4d'});
    		$("#mb_msg input").css({ height:'3.6rem',padding:'6px 6px',fontSize:'1.4rem',marginBottom:'0'});
    	    $("#mb_msg textarea").css({marginBottom:'0px'});
    	    $("#mb_msg").css({ padding: '0px 20px 0px 20px',borderBottom:'none'});
    	    $("#mb_msg>p").css({ fontSize: '1.4rem',height:'1.8rem',display:'none'});
    	}
    }
//  
//.lbm-goTop{width:36px;height:36px; border-radius:50%;background: #FFF;display: none;	 position:fixed; border:1px solid #999; bottom:56px;right:15px;z-index: 222;}
//.lbm-goTop>.goTopTcBox{ display: inline-block;width: 100%;height:100%;text-align: center;line-height:36px; color: #909695; overflow: hidden;}
//.goTopTcBox>i{width: 100%;	display: inline-block;	height: 100%;	vertical-align: baseline;	text-align: center; -webkit-transform: translateY(16px); opacity: .4;	transition: all 1s cubic-bezier(0.385, 0.065, 0.290, 1.015);}
//.goTopTcBox>i.active{-webkit-transform: translateY(0px); opacity:1;}
/*lbm工具箱-lbmTool**end*/
var lbmTool= new lbmTool();
/*lbm回到顶部-**start*/

function goTop(options){
	 var defaults={
 	  	 	bottom:'56',
 	  	 	right:'15',
 	  	 	scrollWrapDiv:'#offCanvasContentScroll'
 	  }
 	  var options=$.extend(defaults,options);
	  this.el=$('<div class="lbm-goTop"><span class="goTopTcBox"><i class="lbm-icon-goTop"></i></span></div>')
	              .css({bottom:options.bottom+'px',right:options.right+'px'});
	  this.scrollWrapDiv=options.scrollWrapDiv
 	  this.creat();
}
goTop.prototype={
	  creat:function(){
	  	   $('body').append(this.el);
	  	   this.goTopListener();
	  },
	  goTopListener:function(){
	  	  var goTopEl=this.el;
	  	  var scrollWrapDiv=this.scrollWrapDiv;
	  	  document.querySelector('#offCanvasContentScroll' ).addEventListener('scrollstart', function (e) {
			        if(e.detail.y <= -50){
			             goTopEl.fadeIn(300).find('i').addClass('active'); 
			        }else{    
			             goTopEl.fadeOut(300).find('i').removeClass('active');     
			        }  
			});
			goTopEl.on('tap',function(){
       			mui(scrollWrapDiv).scroll().scrollTo(0,0,100);
				$('.lbm-goTop').fadeOut(200);  
			});
	  }
}
 /*lbm回到顶部-**end*/
 /*lbm-waterTouch-**start*/
;(function($){
		  $.fn.waterTouch=function(options){
		  	  var defaults={
		  	  	 color:'#eee',
		  	  	 sizeClassName:'water-wave-',
		  	  	 stopPropagation:true
		  	  }
		  	  var options=$.extend(defaults,options);
		  	  this.each(function(){
		  	   	 var _this=$(this);
		  	   	 _this.on('click',function(e){
		  	   	 	if(options.stopPropagation){
		  	   	 		   e.stopPropagation();
		  	   	 	}
		  	   	 	var _this = $(this);
		  	   	 	var waveClassName=options.sizeClassName+_this.attr('wave');
			        var px = e.offsetX;
			        var py = e.offsetY;
			
			        var id=parseInt(Math.random()*1000);
			        _this.css({'position':'relative','overflow':'hidden'});
			        _this.addClass('water-btn').append('<div class="'+waveClassName+'" style="top:'+py+'px;left:'+px+'px;background:'+options.color+'" id="wb_'+id+'"></div>');
			        setTimeout(function(){
			            _this.find('#wb_'+id).remove()
			        },3000)
		  	   	 })
		  	  });
		  }
	})(jQuery);
/*lbm-waterTouch-**end*/
$('.waterTouch').waterTouch()
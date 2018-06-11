setTimeout(function(){  //获取默认的input值
          inputInit={
            XDropDownList8: $("#XDropDownList8").val(),
            BankNameDetail:$("input[xdatabind='Fin_Payee.BankNameDetail']").val(),
            Account:$("input[xdatabind='Fin_Payee.Account']").val(),
            IntercourseNo:$("input[xdatabind='Fin_Payee.IntercourseNo']").val(),
            XDropDownList10:$("#XDropDownList10").val(),
            XDropDownList6:$("#XDropDownList6").val(),
            XDropDownList7:$("#XDropDownList7").val()
          }

        },2000)

beforeSearch:function(){  //当用户修改input值时，重置其余的input值

			    $("#XDropDownList8").val(inputInit.XDropDownList8);//开户行
                $("input[xdatabind='Fin_Payee.BankNameDetail']").val(inputInit.BankNameDetail);
                $("input[xdatabind='Fin_Payee.Account']").val(inputInit.Account);
                $("input[xdatabind='Fin_Payee.IntercourseNo']").val(inputInit.IntercourseNo);

                $("#XDropDownList10").val(inputInit.XDropDownList10);//是否大陆

                $("#XDropDownList6").val(inputInit.XDropDownList6);//省


                $("#XDropDownList7").val(inputInit.XDropDownList7);//市


                $("#XRadioButtonList5_0").prop("checked",false);


                $("#XRadioButtonList5_1").prop("checked",false);


			}



//*****************input中的用户名添加聊天弹框**start***********************************
if(typeof userToken!="undefined"&&userToken.Account=="SDT13841"){
      var addChatIconObj={
         'IT_HDApplicant.HRID':{userId:'',userInputName:"IT_HDApplicant.Name"},
         'IT_HDApplicant.Sub_HRID':{userId:'',userInputName:"IT_HDApplicant.Sub_Name"},
         'IT_SoftApplicant.AppHRID':{userId:'',userInputName:"IT_SoftApplicant.AppHRName"},
         'IT_SAP_Applicant.HRID':{userId:'',userInputName:"IT_SAP_Applicant.Name"},
         'IT_SAP_Applicant.Sub_HRID':{userId:'',userInputName:"IT_SAP_Applicant.Sub_Name"},
         'IT_BPM_Applicant.HRID':{userId:'',userInputName:"IT_BPM_Applicant.Name"},
         'IT_BPM_Applicant.Sub_HRID':{userId:'',userInputName:"IT_BPM_Applicant.Sub_Name"},
         'IT_BPM_Flow.HrID':{userId:'',userInputName:"IT_BPM_Flow.HrName"},
         'IT_BPM_Flow.Sub_HrID':{userId:'',userInputName:"IT_BPM_Flow.Sub_HrName"},
         'IT_WorkReport.HrID':{userId:'',userInputName:"IT_WorkReport.HrName"},
         'ServiceOrder.AppHRID':{userId:'',userInputName:"ServiceOrder.AppName"},
         'ItPasswdChange.AppAccount':{userId:'',userInputName:"ItPasswdChange.AppName"},
         'IT_WifiOrder.AppAccount':{userId:'',userInputName:"IT_WifiOrder.AppName"},
         'GNHT_Applicant_All.AppHRID':{userId:'',userInputName:"GNHT_Applicant_All.AppHRName"},
         'GNHKHT_Applicant_All.AppHRID':{userId:'',userInputName:"GNHKHT_Applicant_All.AppHRName"},
         'QTHT_Applicant_All.AppHRID':{userId:'',userInputName:"QTHT_Applicant_All.AppHRName"},
         'QTHT_Applicant_All.htzrrHRID':{userId:'',userInputName:"QTHT_Applicant_All.htzrr"},
         'TTC_Applicant.AppHRID':{userId:'',userInputName:"TTC_Applicant.AppHRName"},
         'KDHT_Applicant_All.AppHRID':{userId:'',userInputName:"KDHT_Applicant_All.AppHRName"},
         'KDHT_Applicant_All.SalesHRID':{userId:'',userInputName:"KDHT_Applicant_All.SalesHRName"},
         'QCHT_Applicant_All.AppHRID':{userId:'',userInputName:"QCHT_Applicant_All.AppHRName"},
         'QCHT_Applicant_All.SalesHRID':{userId:'',userInputName:"QCHT_Applicant_All.SalesHRName"},
         'HWHT_Applicant_Main.AppHRID':{userId:'',userInputName:"HWHT_Applicant_Main.AppHRName"},
         'HWHT_Applicant_Main.SalesHRID':{userId:'',userInputName:"HWHT_Applicant_Main.SalesHRName"},
         'HWHT_Applicant_Main.MarketHRID':{userId:'',userInputName:"HWHT_Applicant_Main.MarketHRName"},
         'LSHT_Applicant_All.SalesHRID':{userId:'',userInputName:"LSHT_Applicant_All.SalesHRName"},
         'LSHT_Applicant_All.MarketHRID':{userId:'',userInputName:"LSHT_Applicant_All.MarketHRName"},
         'GGHT_Applicant_All.AppHRID':{userId:'',userInputName:"GGHT_Applicant_All.AppHRName"},
         'RetailSoftPublish.AppID':{userId:'',userInputName:"RetailSoftPublish.AppName"},

         'OFR_SH_Applicant.HRID':{userId:'',userInputName:"OFR_SH_Applicant.Name"},
         'OFR_GN_Applicant.HRID':{userId:'',userInputName:"OFR_GN_Applicant.Name"},
         'OFR_GN_Applicant.HRID_TechnologySupport':{userId:'',userInputName:"OFR_GN_Applicant.Name_TechnologySupport"},
         'OFR_Cancel_Applicant.HRID':{userId:'',userInputName:"OFR_Cancel_Applicant.Name"},
         'OFR_BS_Applicant.HRID':{userId:'',userInputName:"OFR_BS_Applicant.Name"},
         'OFR_KD_Applicant.HRID':{userId:'',userInputName:"OFR_KD_Applicant.Name"},
         'OFR_Wuxian_Applicant.HRID':{userId:'',userInputName:"OFR_Wuxian_Applicant.Name"},
         'OFR_Wuxian_SC_Applicant.HRID':{userId:'',userInputName:"OFR_Wuxian_SC_Applicant.Name"},
         'OFR_QCZN_Applicant.HRID':{userId:'',userInputName:"OFR_QCZN_Applicant.Name"},
         'OFR_KDJR_Applicant.HRID':{userId:'',userInputName:"OFR_KDJR_Applicant.Name"},
         'OFR_WY_Applicant.HRID':{userId:'',userInputName:"OFR_WY_Applicant.Name"},
         'OFR_SC_Applicant.HRID':{userId:'',userInputName:"OFR_SC_Applicant.HRID"},
         'OFR_SC_Applicant.HRID':{userId:'',userInputName:"OFR_SC_Applicant.Name"},
		 'OFR_LYQ_Applicant.Name':{userId:'',userInputName:"OFR_LYQ_Applicant.Name"},
		 'OFR_HWLS_Applicant.HRID':{userId:'',userInputName:"OFR_HWLS_Applicant.Name"},
		 'OFR_LSCP_Applicant.HRID':{userId:'',userInputName:"OFR_LSCP_Applicant.Name"},
		 'Fin_Applicant.HRID':{userId:'',userInputName:"Fin_Applicant.Applicant"},
		 'Fin_KouKuan.AppHRID':{userId:'',userInputName:"Fin_KouKuan.AppName"},
		 'Fin_Applicant.HRID':{userId:'',userInputName:"Fin_Applicant.Applicant"},
		 'Fin_Applicant.Sub_HRID':{userId:'',userInputName:"Fin_Applicant.Sub_Name"},
		 'AppID':{userId:'',userInputName:"AppName"},
		 'AppID':{userId:'',userInputName:"AppName"}
      };

      //it页面和合同相关页面
      // var needChatTidArr=['609775','609636','609281','606471','608081','609805','511463',
      //                      '609654','609178','609824','602244','609833','595796','606328','552809',
      //                      '609769','275211','608256','608245','597368','274557','317056',
      // 订单评审相关页面：                     
      //                      '621578',‘521198’,‘621063’,'619746','456101','619601','615549',
      //                      '618694','609548','603746','616393','460335','603438','555116',
      //                      '403142','403142','592251','621164','609778','607809','607089'
      //                      ,'615584','615131','615131','603780','622107','614864','619363'
	  //                      ,'465533','467580','610413','605423','604992','603156','525845'
	  //                      ,'539518','568190','606674'
	  //财务相关页面：
	  //                      ,'626840','623026','606674','626894','595194','511385','622826'
	  //                      ,'623446','626886','627249','625669'
      //                    ];
      //测试环境的tid
      // var needChatTidArr=['317056','316512','310417','317131','316160','316061'
      //                    ];
      
      var pageTid=getTid();  //获取页面tid
      var pageUrl=decodeURIComponent(location.href);  //jQuery方法对url进行解码

      //仅对于it类，合同类表单进行处理
      setTimeout(function(){
          if (typeof jQuery!= 'undefined'
              &&(pageUrl.indexOf('YZSoft/Forms/XForm/国内合同审批/')!=-1
                ||pageUrl.indexOf('YZSoft/Forms/XForm/IT/')!=-1
                ||pageUrl.indexOf('工作报告/工作报告')!=-1
                ||pageUrl.indexOf('YZSoft/Forms/XForm/其它合同审批/')!=-1
                ||pageUrl.indexOf('Forms/XForm/第三方授权合同/')!=-1
                ||pageUrl.indexOf('Forms/XForm/宽带合同审批/')!=-1
                ||pageUrl.indexOf('Forms/XForm/广告运营合同审批/')!=-1
                ||pageUrl.indexOf('Forms/XForm/汽车智能合同审批/')!=-1
                ||pageUrl.indexOf('YZSoft/Forms/XForm/海外合同审批/')!=-1
                ||pageUrl.indexOf('Forms/XForm/零售合同审批/')!=-1
				
				|| pageUrl.indexOf('Forms/XForm/Finance/付款申请') != -1

                ||pageUrl.indexOf('Forms/XForm/售后订单评审')!=-1
                ||pageUrl.indexOf('/XForm/售后订单评审/售后订单更改评审')!=-1
                ||pageUrl.indexOf('/XForm/国内订单评审/国内订单评审V2.')!=-1
                ||pageUrl.indexOf('/XForm/国内订单评审/国内运营订单更改评审V1')!=-1 
                ||pageUrl.indexOf('/国内运营订单取消评审/OrderCancel')!=-1
                ||pageUrl.indexOf('/国内宽带返工订单评审/国内和宽带返工订单评审')!=-1
                ||pageUrl.indexOf('/国内宽带返工订单评审/国内和宽带返工订单更改评审')!=-1              
                ||pageUrl.indexOf('/2012订单评审系列/')!=-1 
                ||pageUrl.indexOf('/序列号审核/NewFile')!=-1
                ||pageUrl.indexOf('XForm/接入产品订单评审/接入产品订单评审')!=-1
                ||pageUrl.indexOf('/海外零售订单评审/海外零售订单评审')!=-1
                ||pageUrl.indexOf('/零售产品部订单评审/零售产品部订单评审')!=-1
                ||pageUrl.indexOf('零售电商部订单评审/零售电商部订单更改评审')!=-1      
				||pageUrl.indexOf('零售电商部订单评审/零售电商部订单评审')!=-1      
				||pageUrl.indexOf('海外零售订单评审/海外零售订单更改评审')!=-1      
				||pageUrl.indexOf('零售产品部订单评审/零售产品部订单更改评审')!=-1      
				||pageUrl.indexOf('国内零售返工订单/零售国内返工订单评审')!=-1      
				||pageUrl.indexOf('国内零售返工订单/零售国内返工订单更改评审')!=-1      
				||pageUrl.indexOf('海外返工订单/海外返工订单更改')!=-1      
				||pageUrl.indexOf('Forms/XForm/Finance/')!=-1
				||pageUrl.indexOf('aaaaa')!=-1
				||pageUrl.indexOf('aaaaa')!=-1
              )) { 
                  nameAddChatIcon();
            }
      },580);    
      function nameAddChatIcon(){
        for(var key in addChatIconObj){
          var curUsrNameInput=addChatIconObj[key].userInputName;
            var curUsrNameValue=$('[xdatabind="'+curUsrNameInput+'"]').val();
            var userId=$('[xdatabind="'+key+'"]').val();
          
          if($('[xdatabind="'+key+'"]').length&&curUsrNameValue&&curUsrNameValue!=''){
               
               
                 (function(userId,curUsrNameValue,curUsrNameInput){
                    var appendHtmlStr=$('<span userId="'+userId+'" style="cursor:pointer;">'
                       +curUsrNameValue
                       +'<img src="/BPM/Styles/ui/icons/smsg.png" width="16" height="16" style="vertical-align:top;margin-left: 3px;">'
                       +'</span>')
                       .on('click',function(){
                          if($(this).attr('userId')==userToken.Account) {
                              alert('不能和自己进行对话');
                              return
                          }else{
                             userMessageDialog(userId,pageTid,"")
                          }
                        });
                    $('[xdatabind="'+curUsrNameInput+'"]').hide().parent().append(appendHtmlStr)
               })(userId,curUsrNameValue,curUsrNameInput)
            }

        }

      }
       
      function getTid(){
        var url = location.search;
          var theRequest={}
        if (url.indexOf("?") != -1) {   
              var str = url.substr(1);   
              strs = str.split("&");   
              for(var i = 0; i < strs.length; i ++) {   
                 theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);   
              }   
         }   
         return theRequest.tid
      }


}


//*****************input中的用户名添加聊天弹框**end***********************************


//*****************表单样式相关脚本**start***********************************
var bpmDocument=(function(){
    var ready=function(callback){
    if(document.addEventListener){
     document.addEventListener("DOMContentLoaded",function(){
      document.removeEventListener("DOMContentLoaded",arguments.callee,false);
      callback();
    },false);
    }else if(document.attachEvent){
     document.attachEvent("onreadystatechange",function(){
      if ( document.readyState === "complete" ) {
       document.detachEvent( "onreadystatechange", arguments.callee );
       callback();
      }
     })
    }
    }
    return {
    ready:ready
    }
})()


 try {
    bpmDocument.ready(function(){
      if (typeof jQuery!= 'undefined'
              &&(pageUrl.indexOf('YZSoft/Forms/XForm/国内合同审批/')!=-1
                ||pageUrl.indexOf('YZSoft/Forms/XForm/IT/')!=-1
                ||pageUrl.indexOf('工作报告/工作报告')!=-1
                ||pageUrl.indexOf('YZSoft/Forms/XForm/其它合同审批/')!=-1
                ||pageUrl.indexOf('Forms/XForm/第三方授权合同/')!=-1
                ||pageUrl.indexOf('Forms/XForm/广告运营合同审批/')!=-1
                ||pageUrl.indexOf('Forms/XForm/汽车智能合同审批/')!=-1
                ||pageUrl.indexOf('YZSoft/Forms/XForm/海外合同审批/')!=-1
                ||pageUrl.indexOf('Forms/XForm/零售合同审批/')!=-1
              )) 
      { 
          $('<link href="http://bpm.sdt.com/style/bpmstyle.css" type="text/css" rel="stylesheet"/>').appendTo("head");
          $('.labelTd').parents('td').css({'background':'#f4f8ff'});
          $('table[class!="mytable"][class!="AA"]').find('td').each(function(index,item){
             $(item).css({'border-color':'#dedede'});
          })
          setTimeout(function(){
              $(".TitTd:visible").each(function(index,item){
                $(item).append('<i class="indexLabek">'+(index+1)+'</i>')
              });
          },420);
              
      }
       
     })
  }
  catch(err){

  }



//*****************表单样式相关脚本**end***********************************

function isIE() { //ie?
 if (!!window.ActiveXObject || "ActiveXObject" in window)
  return true;
  else
  return false;
 }

bpmDocument.ready(function(){
    if (typeof jQuery!= 'undefined'&&!isIE()
                  &&(pageUrl.indexOf('YZSoft/Forms/XForm/国内合同审批/')!=-1
                    ||pageUrl.indexOf('YZSoft/Forms/XForm/IT/')!=-1
                    ||pageUrl.indexOf('工作报告/工作报告')!=-1
                    ||pageUrl.indexOf('YZSoft/Forms/XForm/其它合同审批/')!=-1
                    ||pageUrl.indexOf('Forms/XForm/第三方授权合同/')!=-1
                    ||pageUrl.indexOf('Forms/XForm/宽带合同审批/')!=-1
                    ||pageUrl.indexOf('Forms/XForm/广告运营合同审批/')!=-1
                    ||pageUrl.indexOf('Forms/XForm/汽车智能合同审批/')!=-1
                    ||pageUrl.indexOf('YZSoft/Forms/XForm/海外合同审批/')!=-1
                    ||pageUrl.indexOf('Forms/XForm/零售合同审批/')!=-1
                  )) { 

    //*****************textarea 初始化撑开**start***********************************

       for(var i=0,lenn=$('textarea').length;i<lenn;i++){
           var curTextarea=$('textarea')[i];
           curTextarea.style.height =parseInt(curTextarea.style.height)+curTextarea.scrollHeight + "px";
          

        }

    //*****************textarea 初始化撑开**end***********************************

    }
}

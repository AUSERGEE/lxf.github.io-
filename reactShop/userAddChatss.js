
//*****************input中的用户名添加聊天弹框**start***********************************
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
   'QTHT_Applicant_All.htzrr':{userId:'',userInputName:"QTHT_Applicant_All.htzrr"},
   'TTC_Applicant.AppHRID':{userId:'',userInputName:"TTC_Applicant.AppHRName"},
   'KDHT_Applicant_All.AppHRID':{userId:'',userInputName:"KDHT_Applicant_All.AppHRName"},
   'KDHT_Applicant_All.SalesHRID':{userId:'',userInputName:"KDHT_Applicant_All.SalesHRName"},
   'QCHT_Applicant_All.AppHRID':{userId:'',userInputName:"QCHT_Applicant_All.AppHRName"},
   'QCHT_Applicant_All.SalesHRID':{userId:'',userInputName:"QCHT_Applicant_All.SalesHRName"},
   'HWHT_Applicant_Main.AppHRID':{userId:'',userInputName:"HWHT_Applicant_Main.AppHRName"},
   'HWHT_Applicant_Main.SalesHRID':{userId:'',userInputName:"HWHT_Applicant_Main.SalesHRName"},
   'HWHT_Applicant_Main.MarketHRID':{userId:'',userInputName:"HWHT_Applicant_Main.MarketHRName"},
   'LSHT_Applicant_All.SalesHRID':{userId:'',userInputName:"LSHT_Applicant_All.SalesHRName"},
   'LSHT_Applicant_All.MarketHRID':{userId:'',userInputName:"LSHT_Applicant_All.MarketHRName"}
};

//目前包括it页面和合同相关页面
// var needChatTidArr=['609775','609636','609281','606471','608081','609805','511463',
//                      '609654','609178','609824','602244','609833','595796','606328','552809',
//                      '609769','275211','608256','608245','597368','274557','317056'
//                    ];
//测试环境的tid
var needChatTidArr=['317056','316512','310417','317131','316160','316061'
                   ];

var pageTid=getTid();
if(needChatTidArr.indexOf(pageTid)!=-1){
	setTimeout(function(){
		if (typeof jQuery!= 'undefined') { 
           nameAddChatIcon();
        }
	},180)
   
}

function nameAddChatIcon(){
	for(var key in addChatIconObj){
		var curUsrNameInput=addChatIconObj[key].userInputName;
	    var curUsrNameValue=$('[xdatabind="'+curUsrNameInput+'"]').val();
	    var userId=$('[xdatabind="'+key+'"]').val();
		if($('[xdatabind="'+key+'"]').length&&curUsrNameValue&&curUsrNameValue!=''){
	       
	       
		       (function(userId,curUsrNameValue,curUsrNameInput){
			        var appendHtmlStr=$('<span userId="'+userId+'">'
			           +curUsrNameValue
			           +'<img src="/BPM/Styles/ui/icons/smsg.png" width="16" height="16" style="vertical-align:top;margin-left: 3px;">'
			           +'</span>').on('click',function(){userMessageDialog(userId,pageTid,"") });
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

//*****************input中的用户名添加聊天弹框**end***********************************
 $(function() {
	 $('#btn').bind('click',function(e){
		 e.preventDefault();
		 var name=$('.gc').val();
		 var tel=$('.tel').val();
		 var email=$('.email').val();
		 var content=$('.msg').val();
		 if(email!=''){
			 if(!checkEmail(email)){
				 layer.open({
					 content:'您的邮箱格式错误，如果您没有邮箱，可以空着不填'
					 ,skin:'msg'
					 ,time:3
					 ,style:'bottom:0;'
				 });
				 return;
			 }
		 }
		 if(name==''){
			 layer.open({
				 content:'请填写您的姓名'
				 ,skin:'msg'
				 ,time:3
				 ,style:'bottom:0;'
			 });
			 return;
		 }
		 if(tel!==''){
			 if(checkMobile(tel)){
				 layer.open({
					 content:'请填写正确的联系方式'
					 ,skin:'msg'
					 ,time:3
					 ,style:'bottom:0;'
				 });
				 return;
			 }

		 }else{
			 layer.open({
				 content:'请填写您的联系方式'
				 ,skin:'msg'
				 ,time:3
				 ,style:'bottom:0;'
			 });
			 return;
		 }

		 var data={
			 name:name,
			 tel:tel,
			 email:email,
			 content:content
		 };
		 var url="/Home/Contact/message";
		 $.post(url,data,function(msg){
			 layer.open({
				 content:msg
				 ,skin:'msg'
				 ,time:3
				 ,style:'bottom:0;'
			 });

		 })
	 });


});


 function checkMobile(tel) {

	 if (!(/^1[3|4|5|7|8][0-9]{9}$/.test(tel))) {
		 return true;
	 }
 }
 function checkEmail(emailAddress) {
	 var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
	 return pattern.test(emailAddress);
 }
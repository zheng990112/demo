$(function() {

	$(window).scroll(function() {
		var scrollTop = $(window).scrollTop();
		var w_h = $(window).height();
		$('.part').height(w_h);
		
		if(scrollTop > w_h * 0.1) {
			$(".box").addClass("op2");
			$(".box .transparent").addClass("op4");
			$(".box .lineL").addClass("l-6");
			$(".box .lineR").addClass("r-6");
		} else {
			$(".box").removeClass("op2");
			$(".box .lineL").removeClass("l-6");
			$(".box .lineR").removeClass("r-6");
			$(".box .transparent").removeClass("op4");
		}
		
		
		
		if(scrollTop > w_h * 0.2) {
			$(".box").addClass("op4");
			$(".box .transparent").addClass("op4");
			$(".box .lineL").addClass("l-4");
			$(".box .lineR").addClass("r-4");
		} else {
			$(".box").removeClass("op4");
			$(".box .lineL").removeClass("l-4");
			$(".box .lineR").removeClass("r-4");
			$(".box .transparent").removeClass("op4");
		}
		
		
		if(scrollTop >= w_h * 0.3) {
			$(".box").addClass("op6");
			$(".part1 .logo .img1").addClass("scale08");
			$(".box .transparent").addClass("op6");
			$(".box .lineL").addClass("l-2");
			$(".box .lineR").addClass("r-2");
		} else {
			$(".box").removeClass("op6");
			$(".part1 .logo .img1").removeClass("scale08");
			$(".part1 .logo .img1").addClass("scale1");
			$(".box .transparent").removeClass("op6");
			$(".box .lineL").removeClass("l-2");
			$(".box .lineR").removeClass("r-2");
		}
		
		if(scrollTop >= w_h * 0.4) {
			$(".box").addClass("op8");
			$(".box .transparent").removeClass("op8");
			$(".part1 .logo .img1").addClass("scale06");
			$(".box .lineL").addClass("l-0");
			$(".box .lineR").addClass("r-0");
			
		} else {
			$(".box").removeClass("op8");
			$(".part1 .logo .img1").removeClass("scale06");
			$(".box .lineL").removeClass("l-0");
			$(".box .lineR").removeClass("r-0");
			$(".box .transparent").removeClass("op8");
		}
		
		if(scrollTop > w_h * 0.5) {
			$(".box").addClass("op10");
			$(".box .transparent").addClass("op10");
//			$(".part2").addClass("mt-")
		} else {
			$(".box").removeClass("op10");
			$(".box .transparent").removeClass("op6");
		}
		
		
		
//		part1左右两边线条回缩进去

		if(scrollTop > w_h * 0.6) {
			$(".box .lineL").removeClass("l-0");
			$(".box .lineR").removeClass("r-0");
			$(".box .logo_line").addClass("op0");
			$(".box .logo_line").removeClass("op2 op4 op6 op8 op10");
			$(".box .des").addClass("mt-2");
			$(".box .des").removeClass("mt0");
			$(".header-main .logo_l").addClass("ml-8");
			$(".header-main .service").addClass("mr-8");
			$(".footer").addClass("b-20px");
		} else {
			$(".box .des").removeClass("mt-2");
			$(".box .des").addClass("mt0");
			$(".header-main .logo_l").removeClass("ml-8");
			$(".header-main .service").removeClass("mr-8");
			$(".header-main .logo_l").addClass("ml-10");
			$(".header-main .service").addClass("mr-10");
			$(".footer").addClass("b-40px");
			$(".footer").removeClass("b-20px");
		}
		
		if(scrollTop > w_h * 0.7) {
			$(".box .lineL").removeClass("l-0 l-2");
			$(".box .lineR").removeClass("r-0 r-2");
			$(".box .logo").addClass("t0");
			$(".box .logo").removeClass("t2-4");
			$(".box .des").addClass("t8");
			$(".header-main .logo_l").addClass("ml-4");
			$(".header-main .service").addClass("mr-4");
			$(".footer").addClass("b-10px");
		} else {
			$(".box .logo").removeClass("t0");
			$(".box .logo").addClass("t2-4");
			$(".box .des").removeClass("t8");
			$(".header-main .logo_l").removeClass("ml-4");
			$(".header-main .service").removeClass("mr-4");
			$(".footer").removeClass("b-10px");
//			$(".header-main .logo_l").addClass("ml-8");
//			$(".header-main .service").addClass("mr-8");
			
		}
		
		if(scrollTop > w_h * 0.8) {
			$(".box .lineL").removeClass("l-0 l-2 l-4");
			$(".box .lineR").removeClass("r-0 r-2 r-4");
			$(".header-main .logo_l").addClass("ml-2");
			$(".header-main .service").addClass("mr-2");
			$(".footer").addClass("b10px");
		} else {
			$(".header-main .logo_l").removeClass("ml-2");
			$(".header-main .service").removeClass("mr-2");
			$(".footer").removeClass("b10px");
			
		}
		
		if(scrollTop > w_h * 0.9) {
			$(".box .lineL").removeClass("l-0 l-2 l-4 l-6");
			$(".box .lineR").removeClass("r-0 r-2 r-4 r-6");
			$(".box .logo .img1").addClass("disappear");
			$(".box .logo .logo_icon").addClass("disappear");
			$(".box .logo .img2").addClass("block");
			$(".box .des").addClass("t10");
			$(".header-main .logo_l").addClass("ml0");
			$(".header-main .service").addClass("mr0");
			$(".footer").addClass("b35px");
			
		} else {
			$(".box .lineL").addClass("l-8");
			$(".box .lineR").addClass("r-8");
			$(".box .logo .img1").removeClass("disappear");
			$(".box .logo .logo_icon").removeClass("disappear");
			$(".box .logo .img2").removeClass("block");
			$(".box .des").removeClass("t10");
			$(".header-main .logo_l").removeClass("ml0");
			$(".header-main .service").removeClass("mr0");
			$(".footer").removeClass("b35px");
			
			
			
		}
		
		
		
//		part2

		if(scrollTop > w_h*1.1) {
			$(".box .des").addClass("tmax");
			$(".part1").addClass("relative");
			$(".part2").css({"padding-top":'0'});
			$(".part2").css({"z-index":'1'});
			$(".part2 .part2-bg").addClass("op4");
			
			$(".part2").css({"position":'fixed',"top":"0"});
			$(".part2 .b-icon1").addClass("b-3_1");
			
//			part2左右两侧往中间靠拢
			$(".part2 .b-l").addClass("l-2_2 op2");
			$(".part2 .b-r").addClass("r-3_6 op2");
			
		} else {
			$(".box .des").removeClass("tmax");
			$(".part1").removeClass("relative");
			$(".part1").addClass("fixed");
			$(".part2").css({"padding-top":'10rem'});
			$(".part2").css({"z-index":'-1'});
			
			$(".part2").css({"position":'relative'});
			$(".part2 .b-icon1").removeClass("b-3_1 op4");
			
			$(".part2 .b-l").removeClass("l-2_2 op4");
			$(".part2 .b-r").removeClass("r-3_6 op4");
		}
		
		if(scrollTop > w_h*1.3) {
			$(".part2 .part2-bg").addClass("op6");
			$(".part2 .b-icon1").addClass("b-1_6 op6");
			
			$(".part2 .b-l").addClass("l-0_2 op6");
			$(".part2 .b-r").addClass("r-1_6 op6");
		} else {
			$(".part2 .part2-bg").removeClass("op6");
			$(".part2 .b-icon1").removeClass("b-1_6 op6");
			$(".part2 .b-l").removeClass("l-0_2 op6");
			$(".part2 .b-r").removeClass("r-1_6 op6 ");
		}
		
		if(scrollTop > w_h*1.6) {
			$(".part2 .part2-bg").addClass("op8");
			$(".part2 .b-icon1").addClass("b-0_1 op8");
			$(".part2 .b-l").addClass("l1_8 op8");
			$(".part2 .b-r").addClass("r1_6 op8");
		} else {
			$(".part2 .part2-bg").removeClass("op8");
			$(".part2 .b-icon1").removeClass("b-0_1 op8");
			$(".part2 .b-l").removeClass("l1_8 op8");
			$(".part2 .b-r").removeClass("r1_6 op8");
		}
		
		if(scrollTop > w_h*1.8) {
			$(".part2 .part2-bg").addClass("op10");
			$(".part2 .b-icon1").addClass("b1_5 op10");
			$(".part2 .b-l").addClass("l3_8 op10");
			$(".part2 .b-r").addClass("r3_6 op10");
		} else {
			$(".part2 .part2-bg").removeClass("op10");
			$(".part2 .b-icon1").removeClass("b1_5 op10");
			$(".part2 .b-l").removeClass("l3_8 op10");
			$(".part2 .b-r").removeClass("r3_6 op10" );
		}
		
		
//		part3
		if(scrollTop > w_h*2) {
			$(".part2").css({"position":'relative'});
			$(".part3").css({"padding-top":'0'});
			$(".part3").css({"z-index":'1'});
			$(".part3 .part3-bg").addClass("op2");
			
			$(".part3").css({"position":'fixed',"top":"0"});
		} else {
			$(".part2").css({"position":'fixed'});
//			$(".part3").addClass("fixed");
			$(".part3").css({"padding-top":'10rem'});
			$(".part3").css({"z-index":'-1'});
			$(".part3 .part3-bg").removeClass("op2");
			
			$(".part3").css({"position":'relative'});
		}
		
		if(scrollTop > w_h*2.2) {
			$(".part3 .part3-bg").addClass("op4");
			$(".part3 .part3-l").addClass("l-6_45 op4");
			$(".part3 .part3-r").addClass("r-5_95 op4");
			
		}else{
			$(".part3 .part3-bg").removeClass("op4");
			$(".part3 .part3-l").removeClass("l-6_45 op4");
			$(".part3 .part3-r").removeClass("r-5_95 op4");
			
		}
		
		if(scrollTop > w_h*2.4) {
			$(".part3 .part3-bg").addClass("op6");
			$(".part3 .part3-l").addClass("l-4_3 op6");
			$(".part3 .part3-r").addClass("r-3_7 op6");
			
		}else{
			$(".part3 .part3-bg").removeClass("op6");
			$(".part3 .part3-l").removeClass("l-4_3 op6");
			$(".part3 .part3-r").removeClass("r-3_7 op6");
			
		}
		
		if(scrollTop > w_h*2.6) {
			$(".part3 .part3-bg").addClass("op8");
			$(".part3 .part3-l").addClass("l-2_15 op8");
			$(".part3 .part3-r").addClass("r-1_45 op8");
			
		}else{
			$(".part3 .part3-bg").removeClass("op8");
			$(".part3 .part3-l").removeClass("l-2_15 op8");
			$(".part3 .part3-r").removeClass("r-1_45 op8");
			
		}
		
		if(scrollTop > w_h*2.8) {
			$(".part3 .part3-bg").addClass("op10");
			$(".part3 .part3-l").addClass("l0 op10");
			$(".part3 .part3-r").addClass("r09 op10");
			
		}else{
			$(".part3 .part3-bg").removeClass("op10");
			$(".part3 .part3-l").removeClass("l0 op10");
			$(".part3 .part3-r").removeClass("r09 op10");
		}
		
		
//		part4
		if(scrollTop > w_h*3.1) {
			$(".part3").css({"position":'relative'});
			$(".part4").css({"padding-top":'0'});
			$(".part4").css({"z-index":'1'});
			$(".part4 .part4-bg").addClass("op2");
			
			$(".part4").css({"position":'fixed',"top":"0"});
		} else {
			$(".part3").css({"position":'fixed'});
			$(".part4").css({"padding-top":'10rem'});
			$(".part4").css({"z-index":'-1'});
			$(".part4 .part4-bg").removeClass("op2");
			
			$(".part4").css({"position":'relative'});
		}
		
		if(scrollTop > w_h*3.2) {
			$(".part4 .part4-bg").addClass("op4");
			$(".part4 .part4-r .p-box").addClass("scale0_4 op2");
			$(".part4 .part4-r img").addClass("rotatey135 op2");
			
		}else{
			$(".part4 .part4-bg").removeClass("op4");
			$(".part4 .part4-r .p-box").removeClass("scale0_4 op2");
			$(".part4 .part4-r .p-box").addClass("scale0_2 op2");
			$(".part4 .part4-r img").removeClass("rotatey135");
			$(".part4 .part4-r img").addClass("rotatey180");
			
		}
		
		if(scrollTop > w_h*3.4) {
			$(".part4 .part4-bg").addClass("op6");
			$(".part4 .part4-r .p-box").addClass("scale0_6 op6");
			$(".part4 .part4-r img").addClass("rotatey90 op6");
			
		}else{
			$(".part4 .part4-bg").removeClass("op6");
			$(".part4 .part4-r .p-box").removeClass("scale0_6 op6");
			$(".part4 .part4-r img").removeClass("rotatey90 op6");
			
		}
		
		if(scrollTop > w_h*3.6) {
			$(".part4 .part4-bg").addClass("op8");
			$(".part4 .part4-r .p-box").addClass("scale0_8 op8");
			$(".part4 .part4-r img").addClass("rotatey45 op8");
			
		}else{
			$(".part4 .part4-bg").removeClass("op8");
			$(".part4 .part4-r .p-box").removeClass("scale0_8 op8");
			$(".part4 .part4-r img").removeClass("rotatey45 op8");
			
		}
		
		if(scrollTop > w_h*3.8) {
			$(".part4 .part4-bg").addClass("op10");
			$(".part4 .part4-r .p-box").addClass("scale1 op10");
			$(".part4 .part4-r img").addClass("rotatey0 op10");
			
		}else{
			$(".part4 .part4-bg").removeClass("op10");
			$(".part4 .part4-r .p-box").removeClass("scale1 op10");
			$(".part4 .part4-r img").removeClass("rotatey0 op10");
			
		}
		
		
//		part5
		if(scrollTop > w_h*4.1) {
			$(".part4").css({"position":'relative'});
			$(".part5").css({"padding-top":'0'});
			$(".part5").css({"z-index":'1'});
			$(".part5 .part5-bg").addClass("op2");
			
			$(".part5").css({"position":'fixed',"top":"0"});
		} else {
			$(".part4").css({"position":'fixed'});
			$(".part5").css({"padding-top":'10rem'});
			$(".part5").css({"z-index":'-1'});
			$(".part5 .part5-bg").removeClass("op2");
			
			$(".part5").css({"position":'relative'});
		}
		
		if(scrollTop > w_h*4.2) {
			$(".part5 .part5-bg").addClass("op4");
			$(".part5 .part5-l").addClass("mt-5");
			
		}else{
			$(".part5 .part5-bg").removeClass("op4");
			$(".part5 .part5-l").removeClass("mt-5");
		}
		
		if(scrollTop > w_h*4.3) {
			$(".part5 .part5-l").addClass("mt-4");
			$(".part5 .part5-r").addClass("b-4");
			
		}else{
			$(".part5 .part5-l").removeClass("mt-4");
			$(".part5 .part5-r").removeClass("b-4");
		}
		
		if(scrollTop > w_h*4.4) {
			$(".part5 .part5-bg").addClass("op6");
			$(".part5 .part5-l").addClass("mt-3");
			$(".part5 .part5-r").addClass("b-3");
			
		}else{
			$(".part5 .part5-bg").removeClass("op6");
			$(".part5 .part5-l").removeClass("mt-3");
			$(".part5 .part5-r").removeClass("b-3");
		}
		
		if(scrollTop > w_h*4.5) {
			$(".part5 .part5-l").addClass("mt-2");
			$(".part5 .part5-r").addClass("b-2");
			
		}else{
			$(".part5 .part5-l").removeClass("mt-2");
			$(".part5 .part5-r").removeClass("b-2");
		}
		
		if(scrollTop > w_h*4.6) {
			$(".part5 .part5-bg").addClass("op8");
			$(".part5 .part5-l").addClass("mt-1");
			$(".part5 .part5-r").addClass("b-1");
			
		}else{
			$(".part5 .part5-bg").removeClass("op8");
			$(".part5 .part5-l").removeClass("mt-1");
			$(".part5 .part5-r").removeClass("b-1");
		}
		
		if(scrollTop > w_h*4.8) {
			$(".part5 .part5-bg").addClass("op10");
			$(".part5 .part5-l").addClass("mt0");
			$(".part5 .part5-r").addClass("b0");
			
		}else{
			$(".part5 .part5-bg").removeClass("op10");
			$(".part5 .part5-l").removeClass("mt0");
			$(".part5 .part5-r").removeClass("b0");
		}
		
		
//		part6
		if(scrollTop > w_h*5.1) {
			$(".part5").css({"position":'relative'});
			$(".part6").css({"padding-top":'0'});
			$(".part6").css({"z-index":'1'});
			$(".part6 .part6-bg").addClass("op2");
			
			$(".part6").css({"position":'fixed',"top":"0"});
		} else {
			$(".part5").css({"position":'fixed'});
			$(".part6").css({"padding-top":'10rem'});
			$(".part6").css({"z-index":'-1'});
			$(".part6 .part6-bg").removeClass("op2");
			
			$(".part6").css({"position":'relative'});
		}
		
		if(scrollTop > w_h*5.2) {
			$(".part6 .part6-bg").addClass("op4");
			$(".part6 .line1").addClass("l-7");
			$(".part6 .line2").addClass("r-8");
			$(".part6 .box1").addClass("scale1_8");
			$(".part6 .box2 ul .li1").addClass("op2");
			
		} else {
			$(".part6 .part6-bg").removeClass("op4");
			$(".part6 .line1").removeClass("l-7");
			$(".part6 .line2").removeClass("r-8");
			$(".part6 .box1").removeClass("scale1_8");
			$(".part6 .box2 ul .li1").removeClass("mt2");
			
		}
		if(scrollTop > w_h*5.3) {
			$(".part6 .line1").addClass("l-5");
			$(".part6 .line2").addClass("r-5");
			$(".part6 .box1").addClass("scale1_6");
			$(".part6 .box2 ul .li1").addClass("mt3 op4");
			$(".part6 .box2 ul .li2").addClass("mt4 op2");
			$(".part6 .box2 ul .li3").addClass("mt5");
			
		} else {
			$(".part6 .line1").removeClass("l-5");
			$(".part6 .line2").removeClass("r-5");
			$(".part6 .box1").removeClass("scale1_6");
			$(".part6 .box2 ul .li1").removeClass("mt3 op4");
			$(".part6 .box2 ul .li2").removeClass("mt4 op2");
			$(".part6 .box2 ul .li3").removeClass("mt5");
			
		}
		
		if(scrollTop > w_h*5.4) {
			$(".part6 .part6-bg").addClass("op6");
			$(".part6 .line1").addClass("l-3");
			$(".part6 .line2").addClass("r-2");
			$(".part6 .box1").addClass("scale1_4");
			$(".part6 .box2 ul .li1").addClass("mt2 op6");
			$(".part6 .box2 ul .li2").addClass("mt3 op4");
			$(".part6 .box2 ul .li3").addClass("mt4 op2");
			
		} else {
			$(".part6 .part6-bg").removeClass("op6");
			$(".part6 .line1").removeClass("l-3");
			$(".part6 .line2").removeClass("r-2");
			$(".part6 .box1").removeClass("scale1_4");
			$(".part6 .box2 ul .li1").removeClass("mt2 op6");
			$(".part6 .box2 ul .li2").removeClass("mt3 op4");
			$(".part6 .box2 ul .li3").removeClass("mt4 op2");
			
		}
		
		if(scrollTop > w_h*5.5) {
			$(".part6 .line1").addClass("l-2");
			$(".part6 .line2").addClass("r0");
			$(".part6 .box1").addClass("scale1_3");
			$(".part6 .box2 ul .li1").addClass("mt1 op8");
			$(".part6 .box2 ul .li2").addClass("mt2 op6");
			$(".part6 .box2 ul .li3").addClass("mt3 op4");
			
		} else {
			$(".part6 .line1").removeClass("l-2");
			$(".part6 .line2").removeClass("r0");
			$(".part6 .box1").removeClass("scale1_3");
			$(".part6 .box2 ul .li1").removeClass("mt1 op8");
			$(".part6 .box2 ul .li2").removeClass("mt2 op6");
			$(".part6 .box2 ul .li3").removeClass("mt3 op4");
			
		}
		
		if(scrollTop > w_h*5.6) {
			$(".part6 .part6-bg").addClass("op8");
			$(".part6 .line1").addClass("l-1");
			$(".part6 .line2").addClass("r2");
			$(".part6 .box1").addClass("scale1_2");
			$(".part6 .box2 ul .li1").addClass("mt0 op10");
			$(".part6 .box2 ul .li2").addClass("mt1 op8 ");
			$(".part6 .box2 ul .li3").addClass("mt2 op6");
			
		} else {
			$(".part6 .part6-bg").removeClass("op8");
			$(".part6 .line1").removeClass("l-1");
			$(".part6 .line2").removeClass("r2");
			$(".part6 .box1").removeClass("scale1_2");
			$(".part6 .box2 ul .li1").removeClass("mt0 op10");
			$(".part6 .box2 ul .li2").removeClass("mt1 op8");
			$(".part6 .box2 ul .li3").removeClass("mt2 op6");
			
		}
		if(scrollTop > w_h*5.7) {
			$(".part6 .line2").addClass("r4");
			$(".part6 .box1").addClass("scale1_1");
			$(".part6 .box2 ul .li1").addClass("op10");
			$(".part6 .box2 ul .li2").addClass("mt0 op10");
			$(".part6 .box2 ul .li3").addClass("mt0_5 op8");
		}else{
			$(".part6 .line2").removeClass("r4");
			$(".part6 .box1").removeClass("scale1_1");
			$(".part6 .box2 ul .li1").removeClass("op10");
			$(".part6 .box2 ul .li2").removeClass("mt0 op10");
			$(".part6 .box2 ul .li3").removeClass("mt0_5 op8");
			
		}
		
		if(scrollTop > w_h*5.8) {
			$(".part6 .part6-bg").addClass("op10");
			$(".part6 .line1").addClass("l0");
			$(".part6 .line2").addClass("r6_2");
			$(".part6 .box1").addClass("scale1");
			$(".part6 .box2 ul .li3").addClass("mt0 op10");
			
		} else {
			$(".part6 .part6-bg").removeClass("op10");
			$(".part6 .line1").removeClass("l0");
			$(".part6 .line2").removeClass("r6_2");
			$(".part6 .box1").removeClass("scale1");
			$(".part6 .box2 ul .li3").removeClass("mt0 op10");
			
		}
		
		
		//		part7
		if(scrollTop > w_h*6.1) {
			$(".part6").css({"position":'relative'});
			$(".part7").css({"padding-top":'0'});
			$(".part7").css({"z-index":'1'});
			$(".part7 .part7-bg").addClass("op2");
			
			$(".part7").css({"position":'fixed',"top":"0"});
		} else {
			$(".part6").css({"position":'fixed'});
			$(".part7").css({"padding-top":'10rem'});
			$(".part7").css({"z-index":'-1'});
			$(".part7 .part7-bg").removeClass("op2");
			
			$(".part7").css({"position":'relative'});
		}
		
		if(scrollTop > w_h*6.2) {
			$(".part7 .part7-bg").addClass("op4");
			$(".part7 .part7-main .top").addClass("scale04");
			$(".part7 .part7-main .box .div1").addClass("ml-8");
			$(".part7 .part7-main .box .div2").addClass("mr-8");
			
		} else {
			$(".part7 .part7-bg").removeClass("op4");
			$(".part7 .part7-main .top").removeClass("scale04");
			$(".part7 .part7-main .box .div1").removeClass("ml-8");
			$(".part7 .part7-main .box .div2").removeClass("mr-8");
			
		}
		
		if(scrollTop > w_h*6.3) {
			$(".part7 .part7-main .box .div1").addClass("ml-6");
			$(".part7 .part7-main .box .div2").addClass("mr-6");
			
		} else {
			$(".part7 .part7-main .box .div1").removeClass("ml-6");
			$(".part7 .part7-main .box .div2").removeClass("mr-6");
			
		}
		
		if(scrollTop > w_h*6.4) {
			$(".part7 .part7-bg").addClass("op6");
			$(".part7 .part7-main .top").addClass("scale06");
			$(".part7 .part7-main .box .div1").addClass("ml-4");
			$(".part7 .part7-main .box .div2").addClass("mr-4");
			
		} else {
			$(".part7 .part7-bg").removeClass("op6");
			$(".part7 .part7-main .top").removeClass("scale06");
			$(".part7 .part7-main .box .div1").removeClass("ml-4");
			$(".part7 .part7-main .box .div2").removeClass("mr-4");
			
		}
		
		if(scrollTop > w_h*6.5) {
			$(".part7 .part7-main .box .div1").addClass("ml-3");
			$(".part7 .part7-main .box .div2").addClass("mr-3");
			
		} else {
			$(".part7 .part7-main .box .div1").removeClass("ml-3");
			$(".part7 .part7-main .box .div2").removeClass("mr-3");
			
		}
		
		if(scrollTop > w_h*6.6) {
			$(".part7 .part7-bg").addClass("op8");
			$(".part7 .part7-main .top").addClass("scale08");
			$(".part7 .part7-main .box .div1").addClass("ml-2");
			$(".part7 .part7-main .box .div2").addClass("mr-2");
			
		} else {
			$(".part7 .part7-bg").removeClass("op8");
			$(".part7 .part7-main .top").removeClass("scale08");
			$(".part7 .part7-main .box .div1").removeClass("ml-2");
			$(".part7 .part7-main .box .div2").removeClass("mr-2");
			
		}
		
		if(scrollTop > w_h*6.7) {
			$(".part7 .part7-main .box .div1").addClass("ml-1");
			$(".part7 .part7-main .box .div2").addClass("mr-1");
			
		} else {
			$(".part7 .part7-main .box .div1").removeClass("ml-1");
			$(".part7 .part7-main .box .div2").removeClass("mr-1");
			
		}
		
		if(scrollTop > w_h*6.8) {
			$(".part7 .part7-bg").addClass("op10");
			$(".part7 .part7-main .top").addClass("scale1");
			$(".part7 .part7-main .box .div1").addClass("ml0");
			$(".part7 .part7-main .box .div2").addClass("mr0");
			
		} else {
			$(".part7 .part7-bg").removeClass("op10");
			$(".part7 .part7-main .top").removeClass("scale1");
			$(".part7 .part7-main .box .div1").removeClass("ml0");
			$(".part7 .part7-main .box .div2").removeClass("mr0");
			
		}
		
		
//		part8
		if(scrollTop > w_h*7.1) {
			$(".part7").css({"position":'relative'});
			$(".part8").css({"padding-top":'0'});
			$(".part8").css({"z-index":'1'});
			$(".part8 .part8-bg").addClass("op2");
			
			$(".part8").css({"position":'fixed',"top":"0"});
		} else {
			$(".part7").css({"position":'fixed'});
			$(".part8").css({"padding-top":'10rem'});
			$(".part8").css({"z-index":'-1'});
			$(".part8 .part8-bg").removeClass("op2");
			
			$(".part8").css({"position":'relative'});
		}
		
		if(scrollTop > w_h*7.2) {
			$(".part8 .part8-bg").addClass("op4");
			$(".part8 .part8-main .img2").addClass("mt-3 op4");
			
		} else {
			$(".part8 .part8-bg").removeClass("op4");
			$(".part8 .part8-main .img2").removeClass("mt-3 op4");
			
		}
		
		if(scrollTop > w_h*7.3) {
			$(".part8 .part8-main .img2").addClass("mt-2 op6");
			
		} else {
			$(".part8 .part8-main .img2").removeClass("mt-2 op6");
			
		}
		
		if(scrollTop > w_h*7.4) {
			$(".part8 .part8-bg").addClass("op6");
			$(".part8 .part8-main .img2").addClass("mt0 op8");
			
		} else {
			$(".part8 .part8-bg").removeClass("op6");
			$(".part8 .part8-main .img2").removeClass("mt0 op8");
			
		}
		
		if(scrollTop > w_h*7.5) {
			$(".part8 .part8-bg").addClass("op6");
			$(".part8 .part8-main .img2").addClass("op10");
			$(".part8 .part8-main .img1").addClass("mt-3 op2");
			$(".part8 .part8-main p").addClass("mt-3 op2");
			
		} else {
			$(".part8 .part8-bg").removeClass("op6");
			$(".part8 .part8-main .img2").removeClass("op10");
			$(".part8 .part8-main .img1").removeClass("mt-3 op2");
			$(".part8 .part8-main p").removeClass("mt-3 op2");
			
		}
		
		if(scrollTop > w_h*7.6) {
			$(".part8 .part8-bg").addClass("op8");
			$(".part8 .part8-main .img1").addClass("mt-2 op6");
			$(".part8 .part8-main p").addClass("mt-2 op6");
			
		} else {
			$(".part8 .part8-bg").removeClass("op8");
			$(".part8 .part8-main .img1").removeClass("mt-2 op6");
			$(".part8 .part8-main p").removeClass("mt-2 op6");
			
		}
		
		if(scrollTop > w_h*7.7) {
			$(".part8 .part8-main .img1").addClass("mt-1 op8");
			$(".part8 .part8-main p").addClass("mt-1 op8");
			
		} else {
			$(".part8 .part8-main .img1").removeClass("mt-1 op8");
			$(".part8 .part8-main p").removeClass("mt-1 op8");
			
		}
		
		if(scrollTop > w_h*7.8) {
			$(".part8 .part8-bg").addClass("op10");
			$(".part8 .part8-main .img1").addClass("mt0 op10");
			$(".part8 .part8-main p").addClass("mt0 op10");
			
		} else {
			$(".part8 .part8-bg").removeClass("op10");
			$(".part8 .part8-main .img1").removeClass("mt0 op10");
			$(".part8 .part8-main p").removeClass("mt0 op10");
			
		}
		
		
		//		part8
		if(scrollTop > w_h*7.9) {
			$(".part8 .part8-bg").css({"bottom":"2.3rem"});
			$(".part8 .bottom_line").addClass("totop");
			$(".part8 .part8_foot").addClass("fixed");
			$(".footer").addClass("b2_55");
		} else {
			$(".part8 .part8-bg").css({"bottom":"0"});
			$(".part8 .bottom_line").removeClass("totop");
			$(".part8 .part8_foot").removeClass("fixed");
			$(".footer").removeClass("b2_55");
		}
		
		
	});

})
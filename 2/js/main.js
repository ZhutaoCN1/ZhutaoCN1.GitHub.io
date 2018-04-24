//需要两个变量保存两个数字
var number1="";
var number2="";
//定义一个变量保存操作符
var operational="";

//获取显示数字的屏幕
//获取的是id为“screen”的那个元素
var label=document.getElementById("screen");

//拿到所有的按键
var btns=document.getElementsByTagName("a");



//访问每一个按钮
for (var i=0;i<btns.length;i++) {
    //获取到第i个按钮
    var btn=btns[i];
    //给按钮设置点击事件
    btn.onclick=function(){
    	var txt=this.innerHTML;
    	switch(txt){
    		case "AC":
    			//所有内容全都清空
    			number1="";
    			number2="";
    			operational="";
    			label.innerHTML="";
    		break;
    		case "+":
    		operational="+";
    		label.innerHTML="+";
    		break;
    		case "-":
    		operational="-";
    		label.innerHTML="-";
    		break;
    		case "*":
    		operational="*";
    		label.innerHTML="*";
    		break;
    		case "/":
    		operational="/";
    		label.innerHTML="/";
    		break;
    		case "=":
    		//计算
    		var num1=parseFloat(number1);
    		var num2=parseFloat(number2);
    		switch(operational){
    			case "+":
    			label.innerHTML=num1+num2;
    			break;
    			case "-":
    			label.innerHTML=num1-num2;
    			break;
    			case "*":
    			label.innerHTML=num1*num2;
    			break;
    			case "/":
    			label.innerHTML=num1/num2;
    			break;
    			
    			
    		}
    		operational="";
    		number1="";
    		number2="";
    		break;
    		default:
    		//数字
    		if(operational==""){
    			number1=number1+txt;
    			label.innerHTML=number1;
    		}else{
    			number2=number2+txt;
    			label.innerHTML=number2;
    		}
    		break;
    	}
    };
}


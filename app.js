// 	 function myFunction1() {
//      for (var i = 0 ; i < 7; i++) {
//      var x = document.getElementsByTagName("span")[0].className;
//      document.getElementById("demo").innerHTML = x;
//      }
// }


// function myFunction() {
// 	for (var i = 0 ; i < 7; i++) {
//     var x = document.getElementsByTagName("span")[0].className;
//     document.getElementById("demo").innerHTML = x;
// }
// }

    
    // $(document).ready(function(){
    // 	$("a").click(function(){
    // 		var x = document.getElementsByTagName("SPAN")[0].className;
    // 		var y = x.replace(/\W/g,'');
    // 		var number = x.replace(/\D/g,'');
    // 		number-=1;
    // 		//document.getElementById('demo').innerHTML=number;
    // 		 // x = y + number;
    // 		 document.getElementById('demo').innerHTML=y;
    // 	});
    // });


function fun(funname)
{
	var old_span,span_class,attribute,comment_string,new_span,new_span_name,l = '';
	var comment_num = 0;


	var old_span ="."+funname;
	var span_class = '.'+$(old_span).parent().attr("class")+' '+'span';
	var attribute =$(span_class).attr('class');
	var comment_string = attribute.replace(/[^-.a-z\s]/g,'');
	var comment_num = attribute.replace(/\D/g,'');
	var comment_num = comment_num-1;
	var new_span = comment_string+"_"+comment_num;
	var new_span_name = '.'+attribute;
	var l = '.'+new_span;
	if(comment_num>=0)
		{
			$(new_span_name).attr('class',new_span);
			$(l).html(comment_num);
}
}



//  var x = k;
//  alert(k);
//  	document.getElementById('demo').innerHTML=x;

//  	var x = document.getElementsByTagName("SPAN")[0].className;
//     		 var y = x.replace(/[^-.a-z\s]/g,'');
//     		 var number = x.replace(/\D/g,'');
//     		 number-=1;
//     		 x=y+'_'+number;
//     		document.getElementById('demo').innerHTML=x;
//     		var spa ='.'+x;
// 			$( spa ).removeclass()
// 			var spa1 = m;
// $("div").add("span").addClass( spa1 );
// $(spa1).addClass();
// var l = document.getElementsByTagName("SPAN")[0].className;
// document.getElementById('demo').innerHTML=l;



//  $(document).ready(function(){
//  	$("span").click(function(k))
 	
//     	$("a").click(function(){
//     		var x = document.getElementsByTagName("SPAN")[0].className;
//     		 var y = x.replace(/[^-.a-z\s]/g,'');
//     		 var number = x.replace(/\D/g,'');
//     		 number-=1;
//     		 x=y+'_'+number;
//     		document.getElementById('demo').innerHTML=x;
// //     		var spa='.'+x
// // $(spa).removeclass()
    		
//     	});
//     });

//     str = '$4,320 text/folowme';
// number = str.replace(/\D/g,'');


//$( "li.item-a" ).parent().css( "background-color", "red" );

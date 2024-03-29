var flag=0, repeat=0, count=0, cnt=0, trial=0;
// calculation
// var volume=1/3*Math.PI*5250/1000;
// var cement=(1/7.9)*volume*1500*1.52*Math.pow(10,-3);
// var fine=(2.7/7.9)*volume*1500*1.52*Math.pow(10,-3);
// var coarse=(4.3/7.9)*volume*1500*1.52*Math.pow(10,-3);

var volume=1/3*Math.PI*5250/1000;
var cement=(1/7.9)*volume*2400*1.52*Math.pow(10,-3);
var fine=(2.7/7.9)*volume*2400*1.52*Math.pow(10,-3);
var coarse=(4.3/7.9)*volume*2400*1.52*Math.pow(10,-3);

// to proceed to next step 'click on next button'.
function navNext()
{
	for (temp = 0; temp <= 10 ; temp++)  
    { 
        document.getElementById ('canvas'+temp).style.visibility="hidden";
    }
	simsubscreennum+=1;
	document.getElementById('canvas'+(simsubscreennum)).style.visibility="visible";
	document.getElementById('nextButton').style.visibility="hidden";
	magic();
}

var ca;
var questions = ["Height of slump cone is?",
				"Difference in radius of the slump cone </br> from bottom to top is?",
				"Mix proportion used in the experiment is?",
				"Quantity of cement used in experiment is?",
				"Quantity of fine and coarse aggregate used in experiment is?",
				"Each layer of the mix is tamped for?",
				"The purpose of tamping is to obtain a </br>uniform compaction in order to avoid voids?"];
				
var options2=[["15cm","30cm","45cm","60cm"],//30cm(b)
			  ["5cm","10cm","15cm","20cm"],//5cm(a)
			  ["1 : 1.9 : 1.8","1 : 2.6 : 4.5","1 : 2.7 : 4.2","1 : 2.8 : 4.2"],//1 : 2.7 : 4.2(c)
			  ["1.0kg","1.6kg","2.0kg","3.0kg"],//1.6kg(b)
			  ["4.3kg and 6.7kg","4.1kg and 6.7kg","4.3kg and 6.5kg","4.5kg and 6.9kg"],//4.3kg and 6.7kg(a)
			  ["15 times","20 times","25 times","30 times"],//25 times(c)
			  ["True","False"]];//True(a)

function validateAnswer(qn,ans,left,top)
{
	$("#answer").empty();
	document.getElementById("a").innerHTML="";
	document.getElementById("questDiv").style="position:absolute; background-color:grey; color:white; padding:7.5px; border-radius:5px; visibility:visible; left:"+left+";top:"+top+";";
	document.getElementById("q").innerHTML=questions[qn];
	el = document.createElement("option");
	el.textContent = " ";
	el.value = " ";
	answer.appendChild(el);
  
	for(j=0;j<options2[qn].length;j++)
	{
		opt = options2[qn][j];
		el = document.createElement("option");
		el.textContent = opt;
		el.value = opt;
		answer.appendChild(el);
		$("#answer").change(function()
		{
			ca=$(this).children("option:selected").val();
			if(options2[qn][ans]==ca)
			{
				document.getElementById("a").innerHTML="Correct Answer!";
			}
			else
			{
				document.getElementById("a").innerHTML="Wrong! Answer is "+options2[qn][ans];
			}
			setTimeout(function()
			{
				document.getElementById("questDiv").style.visibility="hidden";
				document.getElementById("nextButton").style.visibility="visible";
			},1500);
		});
	}
}

function animatearrow()
{
    if (document.getElementById('arrow1').style.visibility=="hidden")
        document.getElementById('arrow1').style.visibility="visible";
    else
        document.getElementById('arrow1').style.visibility="hidden";
}

function myStopFunction() 
{
    clearInterval(myInt);
    document.getElementById('arrow1').style.visibility="hidden";
}

function blinkArrow(l,t,d,h)
{
	myInt = setInterval(function(){ animatearrow(); }, 500);
	document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:"+l+"px; top:"+t+"px; height:"+h+"px; z-index: 10;";
	document.getElementById("arrow1").style.WebkitTransform = "rotate("+d+"deg)"; 
	document.getElementById("arrow1").style.msTransform = "rotate("+d+"deg)";
	document.getElementById("arrow1").style.transform = "rotate("+d+"deg)";
}

$(function()
{
	$('input').on('input', function() {
		this.value = this.value.match(/\d*(\.\d*)?/)[0];
	});
});

function magic()
{	
    if (simsubscreennum==1)
	{ 
		refresh();
		setTimeout(function()
		{
			document.getElementById('can1-2').style.visibility="visible";
			document.getElementById('can1-1').style.visibility="hidden";
			setTimeout(function()
			{
				document.getElementById('can1-3').style.visibility="visible";
				setTimeout(function()
				{
					document.getElementById('can1-4').style.visibility="visible";
					setTimeout(function()
					{
						document.getElementById('can1-5').style.visibility="visible";
						setTimeout(function()
						{
							document.getElementById('can1-6').style.visibility="visible";
							document.getElementById('can1-13').style.visibility="visible";
							setTimeout(function()
							{
								document.getElementById('can1-7').style.visibility="visible";
								setTimeout(function()
								{
									document.getElementById('can1-8').style.visibility="visible";
									setTimeout(function()
									{
										document.getElementById('can1-9').style.visibility="visible";
										setTimeout(function()
										{
											document.getElementById('can1-10').style.visibility="visible";
											setTimeout(function()
											{
												document.getElementById('can1-11').style.visibility="visible";
												setTimeout(function()
												{
													document.getElementById('v1-1').style.visibility="visible";
													document.getElementById('v1-2').style.visibility="visible";
													document.getElementById('v1-3').style.visibility="visible";
													document.getElementById('v1-4').style.visibility="visible";
													setTimeout(function()
													{
														document.getElementById('v1-5').style.visibility="visible";
														document.getElementById('v1-6').style.visibility="visible";
														document.getElementById('v1-7').style.visibility="visible";
														document.getElementById('v1-8').style.visibility="visible";
													},800);
												},800);
											},800);
										},800);
									},800);
								},800);
							},800);
						},800);
					},800);
				},800);
			},200);
		},1000);
		//validating the value entered by the user
		document.getElementById("v1-8").onclick=function()
		{
			if(!document.getElementById("v1-6").value || !document.getElementById("v1-6").value!=" ")
			{
				alert("Enter the value to proceed");
			}
			else
			{
				var v=document.getElementById("v1-6").value;
				if(Math.round(v)==Math.round(volume))
				{
					document.getElementById("r1-1").style.visibility="visible";
					document.getElementById("w1-1").style.visibility="hidden";
					document.getElementById("v1-8").style.visibility="hidden";
					document.getElementById("v1-9").style.visibility="hidden";
					document.getElementById("v1-6").disabled="true";
					document.getElementById("v1-6").style.backgroundColor="white";
					document.getElementById("v1-6").style.color="black";
					validateAnswer(1,0,"200px","225px");
				}
				else
				{
					document.getElementById("w1-1").style.visibility="visible";
					document.getElementById("r1-1").style.visibility="hidden";
					document.getElementById("v1-9").style.visibility="visible";
				}
			}
			document.getElementById("v1-9").onclick=function()
			{
				document.getElementById("r1-1").style.visibility="hidden";
				document.getElementById("w1-1").style.visibility="hidden";
				document.getElementById("v1-5").style.visibility="hidden";
				document.getElementById("v1-6").style.visibility="hidden";
				document.getElementById("v1-7").style.visibility="hidden";
				document.getElementById("v1-8").style.visibility="hidden";
				document.getElementById("v1-9").style.visibility="hidden";
				document.getElementById("v1-10").style.visibility="visible";
				document.getElementById("v1-6").disabled="true";
				document.getElementById("v1-6").style.backgroundColor="white";
				document.getElementById("v1-6").style.color="black";
				document.getElementById("v1-10").innerHTML="Volume of the cone = "+volume.toFixed(3)+"x 10<sup>-3</sup> m<sup>3</sup>";
				console.log("Volume="+volume.toFixed(3),"Cement="+cement.toFixed(3),"fine="+fine.toFixed(3),"Coarse="+coarse.toFixed(3));
				validateAnswer(1,0,"200px","225px");
			}
		}
	}
	else if(simsubscreennum==2)
	{
		document.getElementById('can1-1').style.visibility="hidden";
		document.getElementById('can1-2').style.visibility="hidden";
		document.getElementById('can1-3').style.visibility="hidden";
		document.getElementById('can1-4').style.visibility="hidden";
		document.getElementById('can1-5').style.visibility="hidden";
		document.getElementById('can1-6').style.visibility="hidden";
		document.getElementById('can1-7').style.visibility="hidden";
		document.getElementById('can1-8').style.visibility="hidden";
		document.getElementById('can1-9').style.visibility="hidden";
		document.getElementById('can1-10').style.visibility="hidden";
		document.getElementById('can1-11').style.visibility="hidden";
		document.getElementById('can1-13').style.visibility="hidden";
		document.getElementById('v1-1').style.visibility="hidden";
		document.getElementById('v1-2').style.visibility="hidden";
		document.getElementById('v1-3').style.visibility="hidden";
		document.getElementById('v1-4').style.visibility="hidden";
		document.getElementById('v1-5').style.visibility="hidden";
		document.getElementById('v1-6').style.visibility="hidden";
		document.getElementById('v1-7').style.visibility="hidden";
		document.getElementById('v1-8').style.visibility="hidden";
		document.getElementById('v1-9').style.visibility="hidden";
		document.getElementById('v1-10').style.visibility="hidden";
		document.getElementById('r1-1').style.visibility="hidden";
		document.getElementById('w1-1').style.visibility="hidden";
		setTimeout(function()
		{
			document.getElementById('v2-11').style.visibility="visible";
			document.getElementById('v2-12').style.visibility="visible";
			setTimeout(function()
			{
				document.getElementById('can2-21').style.visibility="visible";
				document.getElementById('v2-13').style.visibility="visible";
				document.getElementById('v2-14').style.visibility="visible";
				document.getElementById('v2-22').style.visibility="visible";
				document.getElementById('kg1').style.visibility="visible";
				document.getElementById('v2-23').style.visibility="visible";
				document.getElementById("v2-23").onclick=function()
				{
					if(!document.getElementById("v2-22").value || !document.getElementById("v2-22").value!=" ")
					{
						alert("Enter the value to proceed");
					}
					else
					{
						var c=document.getElementById("v2-22").value;	     
						if(Math.round(c)==Math.round(cement))
						{
							document.getElementById("r2-2").style.visibility="visible";
							document.getElementById("w2-2").style.visibility="hidden";
							document.getElementById("v2-23").style.visibility="hidden";
							document.getElementById("v2-24").style.visibility="hidden";
							document.getElementById("v2-15").style.visibility="visible";
							document.getElementById("v2-16").style.visibility="visible";
							document.getElementById("v2-32").style.visibility="visible";
							document.getElementById("kg2").style.visibility="visible";
							document.getElementById("v2-33").style.visibility="visible";
							document.getElementById('v2-22').disabled="true";
							document.getElementById('v2-22').style.backgroundColor="white"; 
							document.getElementById('v2-22').style.color="black;";
						}
						else
						{
							document.getElementById("w2-2").style.visibility="visible";
							document.getElementById("r2-2").style.visibility="hidden";
							document.getElementById("v2-24").style.visibility="visible";
						}
					}
					document.getElementById("v2-24").onclick=function()
					{
						document.getElementById("r2-2").style.visibility="hidden";
						document.getElementById("w2-2").style.visibility="hidden";
						document.getElementById("v2-22").style.visibility="hidden";
						document.getElementById("kg1").style.visibility="hidden";
						document.getElementById("v2-23").style.visibility="hidden";
						document.getElementById("v2-24").style.visibility="hidden";
						document.getElementById("v2-14").style.visibility="hidden";
						document.getElementById("v2-141").style.visibility="visible";
						document.getElementById("v2-15").style.visibility="visible";
						document.getElementById("v2-16").style.visibility="visible";
						document.getElementById("v2-32").style.visibility="visible";
						document.getElementById("kg2").style.visibility="visible";
						document.getElementById("v2-33").style.visibility="visible";
					}
				}
				document.getElementById("v2-33").onclick=function()
				{
					if(!document.getElementById("v2-32").value || !document.getElementById("v2-32").value!=" ")
					{
					alert("Enter the value to proceed");
					}
					else
					{
						var f=document.getElementById("v2-32").value;
						if(Math.round(f)==Math.round(fine))
						{
							document.getElementById("r2-3").style.visibility="visible";
							document.getElementById("w2-3").style.visibility="hidden";
							document.getElementById("v2-33").style.visibility="hidden";
							document.getElementById("v2-34").style.visibility="hidden";
							document.getElementById("v2-17").style.visibility="visible";
							document.getElementById("v2-18").style.visibility="visible";
							document.getElementById("v2-42").style.visibility="visible";
							document.getElementById("kg3").style.visibility="visible";
							document.getElementById("v2-43").style.visibility="visible";
							document.getElementById('v2-32').disabled="true";
							document.getElementById('v2-32').style.backgroundColor="white"; 
							document.getElementById('v2-32').style.color="black;";					
						}
						else
						{
							document.getElementById("w2-3").style.visibility="visible";
							document.getElementById("r2-3").style.visibility="hidden";
							document.getElementById("v2-34").style.visibility="visible";
						}
					}
					document.getElementById("v2-34").onclick=function()
					{
						document.getElementById("r2-3").style.visibility="hidden";
						document.getElementById("w2-3").style.visibility="hidden";
						document.getElementById("v2-32").style.visibility="hidden";
						document.getElementById("kg2").style.visibility="hidden";
						document.getElementById("v2-33").style.visibility="hidden";
						document.getElementById("v2-24").style.visibility="hidden";
						document.getElementById("v2-34").style.visibility="hidden";
						document.getElementById("v2-16").style.visibility="hidden";
						document.getElementById("v2-161").style.visibility="visible";
						document.getElementById("v2-17").style.visibility="visible";
						document.getElementById("v2-18").style.visibility="visible";
						document.getElementById("v2-42").style.visibility="visible";
						document.getElementById("kg3").style.visibility="visible";
						document.getElementById("v2-43").style.visibility="visible";
					}
				}
				document.getElementById("v2-43").onclick=function()
				{
					if(!document.getElementById("v2-42").value || !document.getElementById("v2-42").value!=" ")
					{
						alert("Enter the value to proceed");
					}
					else
					{	
						var ca=document.getElementById("v2-42").value;
						if(Math.round(ca)==Math.round(coarse))
						{
							document.getElementById("r2-4").style.visibility="visible";
							document.getElementById("w2-4").style.visibility="hidden";
							document.getElementById("v2-43").style.visibility="hidden";
							document.getElementById("v2-44").style.visibility="hidden";
							document.getElementById("v2-19").style.visibility="visible";
							document.getElementById("v2-20").style.visibility="visible";
							document.getElementById('v2-42').disabled="true";
							document.getElementById('v2-42').style.backgroundColor="white"; 
							document.getElementById('v2-42').style.color="black;";					
							setTimeout(function()
							{
								step2();
							},2000);
						}
						else
						{
							document.getElementById("w2-4").style.visibility="visible";
							document.getElementById("r2-4").style.visibility="hidden";
							document.getElementById("v2-44").style.visibility="visible";
						}
					}
					document.getElementById("v2-44").onclick=function()
					{
						document.getElementById("r2-4").style.visibility="hidden";
						document.getElementById("w2-4").style.visibility="hidden";
						document.getElementById("v2-42").style.visibility="hidden";
						document.getElementById("kg3").style.visibility="hidden";
						document.getElementById("v2-43").style.visibility="hidden";
						document.getElementById("v2-44").style.visibility="hidden";
						document.getElementById("v2-44").style.visibility="hidden";
						document.getElementById("v2-181").style.visibility="visible";
						document.getElementById("v2-19").style.visibility="visible";
						document.getElementById("v2-20").style.visibility="visible";
						setTimeout(function()
						{
							step2();
						},2000);
					}
				}
			},1000);
	    },500);
	}
	else if(simsubscreennum==3)
	{
		myStopFunction();
		document.getElementById('msrdev').style.visibility="hidden";
		document.getElementById('cylwat').style.visibility="hidden";
		document.getElementById('wc2-1').style.visibility="hidden";
		document.getElementById('wc2-2').style.visibility="hidden";
		document.getElementById('wc2-3').style.visibility="hidden";
		document.getElementById('p2-1').style.visibility="hidden";
		document.getElementById('p2-2').style.visibility="hidden";
		document.getElementById('p2-3').style.visibility="hidden";
		document.getElementById('v2-6').style.visibility="hidden";
		document.getElementById('v2-7').style.visibility="hidden";
		document.getElementById('v2-8').style.visibility="hidden";
		document.getElementById('v2-9').style.visibility="hidden";
		setTimeout(function()
		{
			document.getElementById('cem_tub').style.visibility="visible";
			setTimeout(function()
			{
				document.getElementById('p3-1').onclick="";
				document.getElementById('p3-2').onclick="";
				blinkArrow(499,208,180,40);
				document.getElementById('p3-1').onclick=function(){step3();}
			},1000);
		},500);
	}
	else if(simsubscreennum==4)
	{
		myStopFunction();
		document.getElementById('mix4').style.visibility="hidden";
		document.getElementById('cem_tub').style.visibility="hidden";
		document.getElementById('nextButton').style.visibility="hidden";
		setTimeout(function()
		{
			document.getElementById('cyl4-1').style.visibility="visible";
			setTimeout(function()
			{
				blinkArrow(556,340,360,40);
				document.getElementById('cyl4-1').onclick=function(){step4();}
			},600);
		},500);
	}
	else if(simsubscreennum==5)
	{
		myStopFunction();
		document.getElementById('mix6').style.visibility="hidden";
		document.getElementById('nextButton').style.visibility="hidden";
		setTimeout(function()
		{
			blinkArrow(50,270,180,40);
			document.getElementById('can5-2').onclick=function(){step5();}
		},1200);
	}
	else if(simsubscreennum==6)
	{
		myStopFunction();
		document.getElementById('mix6').style.visibility="hidden";
		document.getElementById('cem_tub4').style.visibility="hidden";
		document.getElementById('can5-3').style.visibility="hidden";
		document.getElementById('can5-6').style.visibility="hidden";
		document.getElementById('can5-7').style.visibility="hidden";
		document.getElementById('nextButton').style.visibility="hidden";
		setTimeout(function()
		{
			document.getElementById('can6-4').style.visibility="visible";
			setTimeout(function()
			{
				blinkArrow(135,150,360,40);
				document.getElementById('can6-4').onclick=function(){step6();}
			},700);
		},500);
    }
	else if(simsubscreennum==7)
	{
		myStopFunction();
		document.getElementById('can6-11').style.visibility="hidden";
		document.getElementById('can6-1').style.visibility="hidden";
		document.getElementById('nextButton').style.visibility="hidden";
		setTimeout(function()
		{
			document.getElementById('can7-4').style.visibility="visible";
			setTimeout(function()
			{
				blinkArrow(295,195,180,40);
				document.getElementById('can7-4').onclick=function(){step7();}
			},500);
		},1000);
	}
	else if(simsubscreennum==8)
	{
		myStopFunction();
		document.getElementById('can7-6').style.visibility="hidden";
		document.getElementById('nextButton').style.visibility="hidden";
		setTimeout(function()
		{
			blinkArrow(254,422.5,180,30);
			document.getElementById('can8-3').onclick=function(){step8();}
		},1300);
	}	
	else if(simsubscreennum==9)
	{
		myStopFunction();
		document.getElementById('can8-1').style.visibility="hidden";
		document.getElementById('can8-8').style.visibility="hidden";
		document.getElementById('can8-2').style.visibility="hidden";
		document.getElementById('can8-7').style.visibility="hidden";
		document.getElementById('nextButton').style.visibility="hidden";
		setTimeout(function()
	    {
			document.getElementById('can9-4').style.visibility="visible";
			setTimeout(function()
			{
				blinkArrow(85,130,180,40);
				document.getElementById('can9-4').onclick=function(){step9();}
			},700);
        },500);
    }
	else if(simsubscreennum==10)
	{
		document.getElementById('nextButton').style.visibility="hidden";
		document.getElementById('canvas9').style.visibility="hidden";
		document.getElementById('can9-1').style.visibility="hidden";
		document.getElementById('can9-2').style.visibility="hidden";
		document.getElementById('can9-5').style.visibility="hidden";
		document.getElementById('can9-6').style.visibility="hidden";
		document.getElementById('can9-7').style.visibility="hidden";
		document.getElementById('can9-9').style.visibility="hidden";
		document.getElementById('can9-10').style.visibility="hidden";
		document.getElementById("p9-1").style.visibility="hidden";
	}
}
// measuring and weighing the materials, which is used to begin the experiment.
function step2()
{
	//document.getElementById('can2-2').style.visibility="hidden";
	document.getElementById('v2-11').style.visibility="hidden";
	document.getElementById('v2-12').style.visibility="hidden";
	document.getElementById('v2-13').style.visibility="hidden";
	document.getElementById('v2-14').style.visibility="hidden";
	document.getElementById('v2-15').style.visibility="hidden";
	document.getElementById('v2-16').style.visibility="hidden";
	document.getElementById('v2-17').style.visibility="hidden";
	document.getElementById('v2-18').style.visibility="hidden";
	document.getElementById('v2-19').style.visibility="hidden";
	document.getElementById('v2-20').style.visibility="hidden";
	document.getElementById('can2-21').style.visibility="hidden";
	document.getElementById('v2-22').style.visibility="hidden";
	document.getElementById('v2-23').style.visibility="hidden";
	document.getElementById('v2-24').style.visibility="hidden";
	document.getElementById('v2-32').style.visibility="hidden";
	document.getElementById('v2-33').style.visibility="hidden";
	document.getElementById('v2-34').style.visibility="hidden";
	document.getElementById('v2-42').style.visibility="hidden";
	document.getElementById('v2-43').style.visibility="hidden";
	document.getElementById('v2-44').style.visibility="hidden";
	document.getElementById('r2-3').style.visibility="hidden";
	document.getElementById('w2-3').style.visibility="hidden";
	document.getElementById('r2-2').style.visibility="hidden";
	document.getElementById('w2-2').style.visibility="hidden";
	document.getElementById('kg1').style.visibility="hidden";
	document.getElementById('kg2').style.visibility="hidden";
	document.getElementById('kg3').style.visibility="hidden";
	document.getElementById('r2-4').style.visibility="hidden";
	document.getElementById('w2-4').style.visibility="hidden";
	document.getElementById('v2-141').style.visibility="hidden";
	document.getElementById('v2-161').style.visibility="hidden";
	document.getElementById('v2-181').style.visibility="hidden";
	document.getElementById('ewm').style.visibility="visible";
	document.getElementById('on2-1').style.visibility="visible";
	document.getElementById('off2-1').style.visibility="visible";
	document.getElementById('tare2-1').style.visibility="visible";
	document.getElementById('zero2-1').style.visibility="visible";
	setTimeout(function()
	{
		document.getElementById('off2-1').onclick="";
		document.getElementById('tare2-1').onclick="";
		document.getElementById('hn').onclick="";
		document.getElementById('p2').onclick="";
		blinkArrow(345,446,90,30);
		document.getElementById('on2-1').onclick=function(){step21();}
	},500);
}
function step21()
{
	myStopFunction();
	document.getElementById('mw').style.visibility="visible";
	document.getElementById('hp2-1').style.visibility="visible";
	setTimeout(function()
	{   
		document.getElementById('off2-1').onclick="";
		document.getElementById('tare2-1').onclick="";
		document.getElementById('on2-1').onclick="";
		document.getElementById('hn').onclick="";
		document.getElementById('p2').onclick="";
		blinkArrow(330,210,360,40);
		document.getElementById('hp2-1').onclick=function(){step22();}
	},300);	
}
function step22()
{
	refresh();
	myStopFunction();
	document.getElementById('hp2-1').style.visibility="hidden";
	document.getElementById('p2').style.visibility="visible";
    setTimeout(function()
	{
		document.getElementById('off2-1').onclick="";
		document.getElementById('on2-1').onclick="";
		document.getElementById('hn').onclick="";
		document.getElementById('p2').onclick="";
		blinkArrow(435,446,90,30);
		document.getElementById('tare2-1').onclick=function(){step23();} 
	},500);
}
function step23()
{
	refresh();
	myStopFunction();
	document.getElementById('v2-1').style.visibility="visible";
	setTimeout(function()
	{
		document.getElementById('hand').style.visibility="visible";
		document.getElementById('swc2').style.visibility="visible";
		setTimeout(function()
		{
			document.getElementById('off2-1').onclick="";
			document.getElementById('tare2-1').onclick="";
			document.getElementById('on2-1').onclick="";
			document.getElementById('hn').onclick="";
			document.getElementById('p2').onclick="";
			blinkArrow(650,180,360,40);
			document.getElementById('hand').onclick=function(){step24();} 
		},500);
	},500);	
}
function step24()
{
	refresh();
	myStopFunction();
	document.getElementById('swc2').style.visibility="hidden";
    document.getElementById('hand').style.transformOrigin = "100% 80%";
	document.getElementById('hand').style.animation = "valveturn-4 1.5s forwards ";
	setTimeout(function()
	{
		document.getElementById('pwc').style.visibility="visible";
		setTimeout(function()
		{	
			document.getElementById('v2-1').style.visibility="hidden";
			document.getElementById('wc').style.visibility="visible";
			document.getElementById('pwc').style.visibility="hidden";
			document.getElementById('v2-2').style.visibility="visible";
			document.getElementById('v2-2').innerHTML=+values[lnt]+" g";
			setTimeout(function()
			{
				document.getElementById('hand').style.visibility="hidden";
				document.getElementById('v2-3').style.visibility="visible";
				setTimeout(function()
				{
					document.getElementById('off2-1').onclick="";
					document.getElementById('tare2-1').onclick="";
					document.getElementById('on2-1').onclick="";
					document.getElementById('hn').onclick="";	 
					blinkArrow(526,280.75,360,40);					
					document.getElementById('p2').onclick=function(){step25();}
				},500);
			},300);
		},400);
    },800);	
}

function step25()
{
	refresh();
	myStopFunction();
	document.getElementById('v2-2').style.visibility="hidden";
	document.getElementById('v2-3').style.visibility="hidden";
	document.getElementById('p2').style.visibility="hidden";
	document.getElementById('wc').style.visibility="hidden";
	document.getElementById('p2-1').style.visibility="visible";
	document.getElementById('wc2-1').style.visibility="visible";
	document.getElementById('v2-7').style.visibility="visible";
	step2_2();
}

function step2_2()
{
	setTimeout(function()
	{   
		document.getElementById('hp2-1').style.visibility="visible";
		document.getElementById('off2-1').onclick="";
		document.getElementById('tare2-1').onclick="";
		document.getElementById('on2-1').onclick="";
		document.getElementById('hn').onclick="";
		document.getElementById('p2').onclick="";
		blinkArrow(330,210,360,40);
		document.getElementById('hp2-1').onclick=function(){step22_2();}
	},300);	
}
function step22_2()
{
	refresh();
	myStopFunction();
	document.getElementById('hp2-1').style.visibility="hidden";
	document.getElementById('p2').style.visibility="visible";
    setTimeout(function()
	{
		document.getElementById('off2-1').onclick="";
		document.getElementById('on2-1').onclick="";
		document.getElementById('hn').onclick="";
		document.getElementById('p2').onclick="";
		blinkArrow(435,446,90,30);
		document.getElementById('tare2-1').onclick=function(){step23_2();} 
	},500);
}
function step23_2()
{
	refresh();
	myStopFunction();
	document.getElementById('v2-1').style.visibility="visible";
	setTimeout(function()
	{
		document.getElementById('hand').style.visibility="visible";
		document.getElementById('fa2').style.visibility="visible";
		setTimeout(function()
		{
			document.getElementById('off2-1').onclick="";
			document.getElementById('tare2-1').onclick="";
			document.getElementById('on2-1').onclick="";
			document.getElementById('hn').onclick="";
			document.getElementById('p2').onclick="";
			blinkArrow(650,180,360,40);
			document.getElementById('hand').onclick=function(){step24_2();} 
		},500);
	},500);	
}
function step24_2()
{
	lnt++;
	refresh();
	myStopFunction();
	document.getElementById('fa2').style.visibility="hidden";
    document.getElementById('hand').style.transformOrigin = "100% 80%";
	document.getElementById('hand').style.animation = "valveturn-4 1.5s forwards ";
	setTimeout(function()
	{
        document.getElementById('pfa').style.visibility="visible";
		setTimeout(function()
		{	
			document.getElementById('v2-1').style.visibility="hidden";
			document.getElementById('fa').style.visibility="visible";
			document.getElementById('pfa').style.visibility="hidden";
			document.getElementById('v2-2').style.visibility="visible";
			document.getElementById('v2-2').innerHTML=+values[lnt]+" g";
			 setTimeout(function()
			{
				document.getElementById('hand').style.visibility="hidden";
				document.getElementById('v2-4').style.visibility="visible";
				setTimeout(function()
				{
					document.getElementById('off2-1').onclick="";
					document.getElementById('tare2-1').onclick="";
					document.getElementById('on2-1').onclick="";
					document.getElementById('hn').onclick="";	 
					blinkArrow(526,280.75,360,40);					
					document.getElementById('p2').onclick=function(){step25_2();}
				},500);
			},300);
		},400);
    },800);
}

function step25_2()
{
	refresh();
	myStopFunction();
	document.getElementById('v2-2').style.visibility="hidden";
	document.getElementById('v2-4').style.visibility="hidden";
	document.getElementById('p2').style.visibility="hidden";
	document.getElementById('fa').style.visibility="hidden";
	document.getElementById('p2-2').style.visibility="visible";
	document.getElementById('wc2-2').style.visibility="visible";
	document.getElementById('v2-8').style.visibility="visible";
	step2_3();
}


function step2_3()
{
	setTimeout(function()
	{   
		document.getElementById('hp2-1').style.visibility="visible";
		document.getElementById('off2-1').onclick="";
		document.getElementById('tare2-1').onclick="";
		document.getElementById('on2-1').onclick="";
		document.getElementById('hn').onclick="";
		document.getElementById('p2').onclick="";
		blinkArrow(330,210,360,40);
		document.getElementById('hp2-1').onclick=function(){step22_3();}
	},300);	
}
function step22_3()
{
	refresh();
	myStopFunction();
	document.getElementById('hp2-1').style.visibility="hidden";
	document.getElementById('p2').style.visibility="visible";
    setTimeout(function()
	{
		document.getElementById('off2-1').onclick="";
		document.getElementById('on2-1').onclick="";
		document.getElementById('hn').onclick="";
		document.getElementById('p2').onclick="";
		blinkArrow(435,446,90,30);
		document.getElementById('tare2-1').onclick=function(){step23_3();} 
	},500);
}
function step23_3()
{
	refresh();
	myStopFunction();
	document.getElementById('v2-1').style.visibility="visible";
	setTimeout(function()
	{
		document.getElementById('hand').style.visibility="visible";
		document.getElementById('ca2').style.visibility="visible";
		setTimeout(function()
		{
			blinkArrow(650,180,360,40);
			document.getElementById('hand').onclick=function(){step24_3();} 
		},500);	
	},500);
}
function step24_3()
{
	lnt++;
	refresh();
	myStopFunction();
	document.getElementById('ca2').style.visibility="hidden";
    document.getElementById('hand').style.transformOrigin = "100% 80%";
	document.getElementById('hand').style.animation = "valveturn-4 1.5s forwards ";
	setTimeout(function()
	{
		document.getElementById('pca').style.visibility="visible";
		setTimeout(function()
		{	
			document.getElementById('v2-1').style.visibility="hidden";
			document.getElementById('ca').style.visibility="visible";
			document.getElementById('pca').style.visibility="hidden";
			document.getElementById('v2-2').style.visibility="visible";
			document.getElementById('v2-2').innerHTML=+values[lnt]+" g";
			setTimeout(function()
			{
				document.getElementById('hand').style.visibility="hidden";
				document.getElementById('v2-5').style.visibility="visible";
				setTimeout(function()
				{
					document.getElementById('tare2-1').onclick="";
					document.getElementById('on2-1').onclick="";
					document.getElementById('hn').onclick="";	   
					blinkArrow(526,280.75,360,40);					
					document.getElementById('p2').onclick=function(){step25_3();}
				},500);
			},300);
		},400);
    },800);
}

function step25_3()
{
	refresh();
	myStopFunction();
	document.getElementById('v2-2').style.visibility="hidden";
	document.getElementById('v2-5').style.visibility="hidden";
	document.getElementById('p2').style.visibility="hidden";
	document.getElementById('ca').style.visibility="hidden";
	document.getElementById('p2-3').style.visibility="visible";
	document.getElementById('wc2-3').style.visibility="visible";
	document.getElementById('v2-9').style.visibility="visible";
	step27();
}


function step27()
{   
    myStopFunction();
	refresh();
	document.getElementById('mw').style.visibility="hidden";
	document.getElementById('ewm').style.visibility="hidden";
	document.getElementById('on2-1').style.visibility="hidden";
	document.getElementById('off2-1').style.visibility="hidden";
	document.getElementById('zero2-1').style.visibility="hidden";
	document.getElementById('tare2-1').style.visibility="hidden";
	setTimeout(function()
	{
		document.getElementById('msrdev').style.visibility="visible";
		document.getElementById('hn').style.visibility="visible";
		setTimeout(function()
		{
			document.getElementById('off2-1').onclick="";
			document.getElementById('tare2-1').onclick="";
			document.getElementById('on2-1').onclick="";
			document.getElementById('p2').onclick="";
			blinkArrow(335,138,360,40);
			document.getElementById('hn').onclick=function(){step28();}
		},500);
	},800);
}

function step28()
{        
	refresh();
	myStopFunction();
	document.getElementById('hn').style.transformOrigin="100% 80%";
	document.getElementById('hn').style.animation = "valveturn-2 2.5s forwards ";
	setTimeout(function()
	{
		document.getElementById('hn').style.visibility="hidden";
		document.getElementById('hn2').style.visibility="visible";
		document.getElementById('water').style.visibility="visible";
		document.getElementById('cylwat').style.visibility="visible";
		document.getElementById('cylwat').style.transformOrigin="100% 80%";
		document.getElementById('cylwat').style.animation="water-4  0.8s 1 forwards";
		setTimeout(function()
		{
			document.getElementById('hn2').style.visibility="hidden";
			document.getElementById('water').style.visibility="hidden";
			document.getElementById('v2-6').style.visibility="visible";
			setTimeout(function()
			{
				validateAnswer(2,2,"150px","100px");
			},50);
		},400);
	},1200);
}
// dry mix of different materials.
function step3()
{
	myStopFunction();
	document.getElementById('p3-1').style.visibility="hidden";
	document.getElementById('wc3-1').style.visibility="hidden";
	document.getElementById('p3-11').style.visibility="visible";
	document.getElementById('p3-11').style.transformOrigin="100% 80%";
	document.getElementById('p3-11').style.animation="valveturn-4  0.8s 1 forwards";
	setTimeout(function(){
		document.getElementById('mix1').style.visibility="visible";
		document.getElementById('p3-11').style.visibility="hidden";
		setTimeout(function()
		{
			blinkArrow(499,335,180,40);
			document.getElementById('p3-2').onclick=function(){step31();}
		},150);
	},1250);
}
function step31()
{
	document.getElementById('p3-3').onclick="";
	myStopFunction();
	document.getElementById('p3-2').style.visibility="hidden";
	document.getElementById('wc3-2').style.visibility="hidden";
	document.getElementById('p3-22').style.visibility="visible";
	document.getElementById('p3-22').style.transformOrigin="100% 80%";
	document.getElementById('p3-22').style.animation="valveturn-4 0.8s 1 forwards";
	setTimeout(function()
	{
		document.getElementById('mix2').style.visibility="visible";
		document.getElementById('p3-22').style.visibility="hidden";
		setTimeout(function()
		{
			blinkArrow(499,442,180,40);
			document.getElementById('p3-3').onclick=function(){step32();}
		},150);
	},1250);
}
function step32()
{
	myStopFunction();
	document.getElementById('p3-3').style.visibility="hidden";
	document.getElementById('wc3-3').style.visibility="hidden";
	document.getElementById('p3-33').style.visibility="visible";
	document.getElementById('p3-33').style.transformOrigin="100% 80%";
	document.getElementById('p3-33').style.animation="valveturn-4 0.8s 1 forwards";
	setTimeout(function()
	{
		document.getElementById('mix3').style.visibility="visible";
		document.getElementById('p3-33').style.visibility="hidden";
		setTimeout(function()
		{
			document.getElementById('trowel1').style.visibility="visible";
			blinkArrow(405,200,360,40);
			document.getElementById('trowel1').onclick=function(){step33();}
		},200);
	},1250);
}
function step33()
{
	myStopFunction();
	document.getElementById('trowel1').style.visibility="hidden";
	document.getElementById('trowel2').style.visibility="visible";
    document.getElementById('trowel2').style.transformOrigin="100% 80%";
    document.getElementById('trowel2').style.animation = "mymove 2.5s 2 forwards ";
	setTimeout(function()
	{
		document.getElementById('mix1').style.visibility="hidden";
		document.getElementById('mix2').style.visibility="hidden";
		document.getElementById('mix3').style.visibility="hidden";
		document.getElementById('trowel2').style.visibility="hidden";
		document.getElementById('cem_tub').style.visibility="hidden";
		document.getElementById('mix4').style.visibility="visible";
		validateAnswer(3,1,"400px","150px");
   	},5000);
}

// wet mix of different materials.
function step4()
{   
    myStopFunction();
	document.getElementById('cyl4-1').style.visibility="hidden";
	document.getElementById('cyl4-2').style.visibility="visible";
	document.getElementById('cyl4-2').style.transformOrigin="100% 80%";
	document.getElementById('cyl4-2').style.animation="valveturn-5 1.0s 1 forwards";
    setTimeout(function()
	{
		document.getElementById('water4').style.visibility="visible";
		document.getElementById('water4-2').style.visibility="visible";
		document.getElementById('water4-2').style.transformOrigin="100% 80%";
	    document.getElementById('water4-2').style.animation="water-6 1.5s 1 forwards";
		setTimeout(function()
		{
			document.getElementById('cyl4-2').style.visibility="hidden";
			document.getElementById('water4').style.visibility="hidden";
			document.getElementById('trowel4-1').style.visibility="visible";
			setTimeout(function()
			{
				document.getElementById('trowel4-1').style.visibility="visible";
				blinkArrow(405,200,360,40);
				document.getElementById('trowel4-1').onclick=function(){step41();}
			},100);
		},1000);
    },1500);
}
function step41()
{
	myStopFunction();
	document.getElementById('trowel4-1').style.visibility="hidden";
	document.getElementById('trowel4-2').style.visibility="visible";
    document.getElementById('trowel4-2').style.transformOrigin="100% 80%";
    document.getElementById('trowel4-2').style.animation = "mymove 2.5s 2 forwards ";
	setTimeout(function()
	{
		document.getElementById('water4-2').style.visibility="hidden";
		document.getElementById('trowel4-2').style.visibility="hidden";
		document.getElementById('mix6').style.visibility="visible";
		document.getElementById('cem_tub4').style.visibility="hidden";
		setTimeout(function()
		{
			validateAnswer(4,0,"300px","125px");
		},500);
   	},5500);
}
// placing the slump cone in position with screws.
function step5()
{
	myStopFunction();
	document.getElementById('can5-2').style.visibility="hidden";
	document.getElementById('can5-3').style.visibility="visible";
    setTimeout(function()
	{
		document.getElementById('can5-4').style.visibility="visible";
		document.getElementById('can5-5').style.visibility="visible";
		setTimeout(function()
		{
			document.getElementById('can5-5').onclick="";
			blinkArrow(250,345,180,30);
			document.getElementById('can5-4').onclick=function(){step51();}
		},500);		
	},500);
}
function step51()
{
	myStopFunction();
	document.getElementById('can5-4').style.visibility="hidden";
	document.getElementById('can5-6').style.visibility="visible";
	setTimeout(function()
	{
		blinkArrow(503,345,360,30);
	    document.getElementById('can5-5').onclick=function(){step52();}
	},500);
}
function step52()
{
	myStopFunction();
	document.getElementById('can5-5').style.visibility="hidden";
	document.getElementById('can5-7').style.visibility="visible";
	setTimeout(function()
	{
		document.getElementById('nextButton').style.visibility="visible";
	},1000);
}
// fill the cone in 4 different layers with 25 times tamping for each layer.
function step6()
{
	myStopFunction();
	document.getElementById('can6-4').style.transformOrigin = "100% 80% ";
	document.getElementById('can6-4').style.animation = "mymove2 2.5s forwards";
	setTimeout(function()
	{
		document.getElementById('can6-4').style.visibility="hidden";
		document.getElementById('can6-5').style.visibility="visible";
		document.getElementById('can6-5').style.transformOrigin = "100% 80% ";
	    document.getElementById('can6-5').style.animation = "mymove3 2.5s forwards";
		setTimeout(function()
		{
			document.getElementById('can6-3').style.visibility="hidden";
			document.getElementById('can6-21').style.visibility="visible";
			setTimeout(function()
			{
				document.getElementById('can6-5').style.visibility="hidden";
				document.getElementById('can6-6').style.visibility="visible";
				document.getElementById('can6-6').style.transformOrigin = "100% 80% ";
				document.getElementById('can6-6').style.animation = "valveturn-6 2s forwards";
				setTimeout(function()
				{
					document.getElementById('can6-6').style.visibility="hidden";
					document.getElementById('can6-7').style.visibility="visible";
					//2nd time pouring cement
					setTimeout(function()
					{
						document.getElementById('can6-7').style.visibility="hidden";
						document.getElementById('can6-8').style.visibility="visible";
						document.getElementById('can6-8').style.transformOrigin = "100% 80% ";
						document.getElementById('can6-8').style.animation = "mymove3 2.5s forwards";
						setTimeout(function()
						{
							document.getElementById('can6-21').style.visibility="hidden";
							document.getElementById('can6-22').style.visibility="visible";
							setTimeout(function()
							{
								document.getElementById('can6-8').style.visibility="hidden";
								document.getElementById('can6-6').style.visibility="visible";
								document.getElementById('can6-6').style.transformOrigin = "100% 80% ";
								document.getElementById('can6-6').style.animation = "valveturn-6 2s forwards";
								setTimeout(function()
								{
									document.getElementById('can6-6').style.visibility="hidden";
									document.getElementById('can6-7').style.visibility="visible";
									setTimeout(function()
									{
										document.getElementById('can6-7').style.visibility="hidden";
										setTimeout(function()
										{
											document.getElementById('can6-9').style.visibility="visible";
											setTimeout(function()
											{
												blinkArrow(585,175,360,40);
												document.getElementById('can6-9').onclick=function(){step62();}
											},100);
										},750);
									},250);
								},1000);
							},2800);
						},200);
					},800);
				},900);
			},2800);
		},100);
	},2250);	
}
function step62()
{ 
	refresh();
    myStopFunction();
    document.getElementById('can6-9').onclick="";
    setTimeout(function()
	{
		document.getElementById('can6-9').style.transformOrigin="100% 80%";
		document.getElementById('can6-9').style.animation = "water-7 0.5s 10 forwards ";
		setTimeout(function()
		{
			document.getElementById('can6-9').style.visibility="hidden";
			document.getElementById('can6-10').style.visibility="visible";
			document.getElementById('can6-10').style.transformOrigin="100% 80%";
			document.getElementById('can6-10').style.animation = "water-7 0.5s 10 forwards ";
			setTimeout(function()
			{
				document.getElementById('can6-10').style.visibility="hidden";
				setTimeout(function()
				{
					document.getElementById('can6-4').style.visibility="visible";
					setTimeout(function()
					{
						blinkArrow(135,150,360,40);
						document.getElementById('can6-4').onclick=function(){step60_2();}
					},100);
				},100);
			},5000);
		},4600);
	},500);
}

function step60_2()
{
	myStopFunction();
	refresh();
	document.getElementById('can6-4').style.transformOrigin = "100% 80% ";
	document.getElementById('can6-4').style.animation = "mymove2 2.5s forwards";
	setTimeout(function()
	{
		document.getElementById('can6-4').style.visibility="hidden";
		document.getElementById('can6-5').style.visibility="visible";
		document.getElementById('can6-5').style.transformOrigin = "100% 80% ";
	    document.getElementById('can6-5').style.animation = "mymove3 2.5s forwards";
		setTimeout(function()
		{
			document.getElementById('can6-5').style.visibility="hidden";
			document.getElementById('can6-6').style.visibility="visible";
			document.getElementById('can6-6').style.transformOrigin = "100% 80% ";
			document.getElementById('can6-6').style.animation = "valveturn-6 2s forwards";
			setTimeout(function()
			{
				document.getElementById('can6-6').style.visibility="hidden";
				document.getElementById('can6-7').style.visibility="visible";
				//2nd time pouring cement
				setTimeout(function()
				{
					document.getElementById('can6-7').style.visibility="hidden";
					document.getElementById('can6-8').style.visibility="visible";
					document.getElementById('can6-8').style.transformOrigin = "100% 80% ";
					document.getElementById('can6-8').style.animation = "mymove3 2.5s forwards";
					setTimeout(function()
					{
						document.getElementById('can6-22').style.visibility="hidden";
						document.getElementById('can6-23').style.visibility="visible";
						setTimeout(function()
						{
							document.getElementById('can6-8').style.visibility="hidden";
							document.getElementById('can6-6').style.visibility="visible";
							document.getElementById('can6-6').style.transformOrigin = "100% 80% ";
							document.getElementById('can6-6').style.animation = "valveturn-6 2s forwards";
							setTimeout(function()
							{
								document.getElementById('can6-6').style.visibility="hidden";
								document.getElementById('can6-7').style.visibility="visible";
								setTimeout(function()
								{
									document.getElementById('can6-7').style.visibility="hidden";
									setTimeout(function()
									{
										document.getElementById('can6-9').style.visibility="visible";
										setTimeout(function()
										{
											blinkArrow(585,175,360,40);
											document.getElementById('can6-9').onclick=function(){step62_2();}
										},100);
									},750);
								},250);
							},1000);
						},2800);
					},200);
				},200);
			},1000);
		},3000);
	},2800);	
}
function step62_2()
{ 
	refresh();
    myStopFunction();
    document.getElementById('can6-9').onclick="";
    setTimeout(function()
	{
		document.getElementById('can6-9').style.transformOrigin="100% 80%";
		document.getElementById('can6-9').style.animation = "water-7 0.5s 10 forwards ";
		setTimeout(function()
		{
			document.getElementById('can6-9').style.visibility="hidden";
			document.getElementById('can6-10').style.visibility="visible";
			document.getElementById('can6-10').style.transformOrigin="100% 80%";
			document.getElementById('can6-10').style.animation = "water-7 0.5s 10 forwards ";
			setTimeout(function()
			{
				document.getElementById('can6-10').style.visibility="hidden";
				setTimeout(function()
				{
					document.getElementById('can6-4').style.visibility="visible";
					setTimeout(function()
					{
						blinkArrow(135,150,360,40);
						document.getElementById('can6-4').onclick=function(){step60_3();}
					},100);
				},100);
			},5000);
		},4600);
	},500);
}

function step60_3()
{
	myStopFunction();
	refresh();
	document.getElementById('can6-4').style.transformOrigin = "100% 80% ";
	document.getElementById('can6-4').style.animation = "mymove2 2.5s forwards";
	setTimeout(function()
	{
		document.getElementById('can6-4').style.visibility="hidden";
		document.getElementById('can6-5').style.visibility="visible";
		document.getElementById('can6-5').style.transformOrigin = "100% 80% ";
	    document.getElementById('can6-5').style.animation = "mymove3 2.5s forwards";
		setTimeout(function()
		{
			document.getElementById('can6-5').style.visibility="hidden";
			document.getElementById('can6-6').style.visibility="visible";
			document.getElementById('can6-6').style.transformOrigin = "100% 80% ";
			document.getElementById('can6-6').style.animation = "valveturn-6 2s forwards";
			setTimeout(function()
			{
				document.getElementById('can6-6').style.visibility="hidden";
				document.getElementById('can6-7').style.visibility="visible";
				setTimeout(function()
				{
					document.getElementById('can6-7').style.visibility="hidden";
					document.getElementById('can6-8').style.visibility="visible";
					document.getElementById('can6-8').style.transformOrigin = "100% 80% ";
					document.getElementById('can6-8').style.animation = "mymove3 2.5s forwards";
					setTimeout(function()
					{
						document.getElementById('can6-23').style.visibility="hidden";
						document.getElementById('can6-24').style.visibility="visible";
						setTimeout(function()
						{
							document.getElementById('can6-8').style.visibility="hidden";
							document.getElementById('can6-6').style.visibility="visible";
							document.getElementById('can6-6').style.transformOrigin = "100% 80% ";
							document.getElementById('can6-6').style.animation = "valveturn-6 2s forwards";
							setTimeout(function()
							{
								document.getElementById('can6-6').style.visibility="hidden";
								document.getElementById('can6-7').style.visibility="visible";
								setTimeout(function()
								{
									document.getElementById('can6-7').style.visibility="hidden";
									setTimeout(function()
									{
										document.getElementById('can6-9').style.visibility="visible";
										setTimeout(function()
										{
											blinkArrow(585,175,360,40);
											document.getElementById('can6-9').onclick=function(){step62_3();}
										},100);
									},750);
								},250);
							},1000);
						},2800);
					},200);
				},200);
			},1800);
		},3000);
	},2800);
}
function step62_3()
{ 
    myStopFunction(); 
	refresh();
    document.getElementById('can6-9').onclick="";
    setTimeout(function()
	{
		document.getElementById('can6-9').style.transformOrigin="100% 80%";
		document.getElementById('can6-9').style.animation = "water-7 0.5s 10 forwards ";
		setTimeout(function()
		{
			document.getElementById('can6-9').style.visibility="hidden";
			document.getElementById('can6-10').style.visibility="visible";
			document.getElementById('can6-10').style.transformOrigin="100% 80%";
			document.getElementById('can6-10').style.animation = "water-7 0.5s 10 forwards ";
			 setTimeout(function()
			{
				document.getElementById('can6-10').style.visibility="hidden";
				setTimeout(function()
				{
					document.getElementById('can6-4').style.visibility="visible";
					setTimeout(function()
					{
						blinkArrow(135,150,360,40);
						document.getElementById('can6-4').onclick=function(){step60_4();}
					},100);
				},100);
			},5000);
		},4600);
	},500);
}

function step60_4()
{
	myStopFunction();
	refresh();
	document.getElementById('can6-4').style.transformOrigin = "100% 80% ";
	document.getElementById('can6-4').style.animation = "mymove2 2.5s forwards";
	setTimeout(function()
	{
		document.getElementById('can6-4').style.visibility="hidden";
		document.getElementById('can6-5').style.visibility="visible";
		document.getElementById('can6-5').style.transformOrigin = "100% 80% ";
	    document.getElementById('can6-5').style.animation = "mymove3 2.5s forwards";
		setTimeout(function()
		{
			document.getElementById('can6-24').style.visibility="hidden";
			document.getElementById('can6-25').style.visibility="visible";
			setTimeout(function()
			{
				document.getElementById('can6-5').style.visibility="hidden";
				document.getElementById('can6-6').style.visibility="visible";
				document.getElementById('can6-6').style.transformOrigin = "100% 80% ";
				document.getElementById('can6-6').style.animation = "valveturn-6 2s forwards";
				setTimeout(function()
				{
					document.getElementById('can6-6').style.visibility="hidden";
					document.getElementById('can6-7').style.visibility="visible";
					//2nd time pouring cement
					setTimeout(function()
					{
						document.getElementById('can6-7').style.visibility="hidden";
						document.getElementById('can6-8').style.visibility="visible";
						document.getElementById('can6-8').style.transformOrigin = "100% 80% ";
						document.getElementById('can6-8').style.animation = "mymove3 2.5s forwards";
						setTimeout(function()
						{
							document.getElementById('can6-25').style.visibility="hidden";
							document.getElementById('can6-26').style.visibility="visible";
							setTimeout(function()
							{
								document.getElementById('can6-8').style.visibility="hidden";
								document.getElementById('can6-6').style.visibility="visible";
								document.getElementById('can6-6').style.transformOrigin = "100% 80% ";
								document.getElementById('can6-6').style.animation = "valveturn-6 2s forwards";
								setTimeout(function()
								{
									document.getElementById('can6-6').style.visibility="hidden";
									document.getElementById('can6-7').style.visibility="visible";
									setTimeout(function()
									{
										document.getElementById('can6-7').style.visibility="hidden";
										document.getElementById('can6-11').style.visibility="visible";
										setTimeout(function()
										{
											document.getElementById('can6-9').style.visibility="visible";
											setTimeout(function()
											{
												blinkArrow(585,175,360,40);
												document.getElementById('can6-9').onclick=function(){step62_4();}
											},100);
										},750);
									},250);
								},1000);
							},2800);
						},200);
					},200);
				},1000);
			},2800);
		},200);
	},2800);	
}
function step62_4()
{ 
    myStopFunction();
    document.getElementById('can6-9').onclick="";
    setTimeout(function()
	{
		document.getElementById('can6-9').style.transformOrigin="100% 80%";
		document.getElementById('can6-9').style.animation = "water-7 0.5s 10 forwards ";
		setTimeout(function()
		{
			document.getElementById('can6-9').style.visibility="hidden";
			document.getElementById('can6-10').style.visibility="visible";
			document.getElementById('can6-10').style.transformOrigin="100% 80%";
			document.getElementById('can6-10').style.animation = "water-7 0.5s 10 forwards ";
			 setTimeout(function()
			{
				document.getElementById('can6-10').style.visibility="hidden";
				document.getElementById('can6-26').style.visibility="hidden";
				validateAnswer(6,0,"50px","200px");
			},5000);
		},4600);
	},500);  
}

// level the top surface of the slump cone.
function step7()
{
	myStopFunction();
	document.getElementById('can7-4').style.visibility="hidden";
	document.getElementById('can7-5').style.visibility="visible";
	document.getElementById('can7-5').style.transformOrigin = "100% 80%";
	document.getElementById('can7-5').style.animation = "mymove4 0.8s 2 forwards ";
	setTimeout(function()
	{
	    document.getElementById('can7-5').style.visibility="hidden";
	    document.getElementById('can7-2').style.visibility="hidden";
	    document.getElementById('can7-6').style.visibility="visible";
		setTimeout(function()
		{
			validateAnswer(5,2,"50px","125px");
		},100);
	},1700);
}
// remove the slump cone from its position to find the slump value.
function step8()
{
	refresh();
	myStopFunction();
	document.getElementById('can8-3').style.visibility="hidden";
	setTimeout(function()
	{
		blinkArrow(508,415,360,30);
	    document.getElementById('can8-4').onclick=function(){step81();}
	},800);
}
function step81()
{
	myStopFunction();
	refresh();
	document.getElementById('can8-4').style.visibility="hidden";
	setTimeout(function()
	{
		blinkArrow(290,330,180,40);
	    document.getElementById('can8-2').onclick=function(){step82();}
	},800);
}
function step82()
{   
	myStopFunction();
    refresh();
	document.getElementById('can8-2').style.visibility="hidden";
	document.getElementById('can8-5').style.visibility="visible";
	document.getElementById('can8-8').style.visibility="visible";
	document.getElementById('can8-5').style.transformOrigin = "100% 80%";
	document.getElementById('can8-5').style.animation = "water0 2.5s forwards ";
	setTimeout(function()
	{
		document.getElementById('can8-5').style.visibility="hidden";
		document.getElementById('can8-6').style.visibility="visible";
        document.getElementById('can8-6').style.transformOrigin = "100% 80%";
	    document.getElementById('can8-6').style.animation = "water0 2.5s reverse ";    setTimeout(function()
		{
			document.getElementById('can8-6').style.visibility="hidden";
			document.getElementById('can8-7').style.visibility="visible";
			setTimeout(function()
			{
				document.getElementById('nextButton').style.visibility="visible";
			},500);
		},2500);
	},2500);
}

// measure slump value by taking slump cone as reference.
function step9()
{
	myStopFunction();
	refresh();
	document.getElementById('can9-4').style.transformOrigin = "100% 80%";
	document.getElementById('can9-4').style.animation = "mymove5 1.5s forwards";
    setTimeout(function()
	{
		document.getElementById('can9-5').style.visibility="visible";	
		document.getElementById('can9-4').style.visibility="hidden";	
		setTimeout(function()
		{
			document.getElementById('can9-8').style.visibility="visible";	
			setTimeout(function()
			{
				blinkArrow(100,250,180,40);
				document.getElementById('can9-8').onclick=function(){step91();}
			},500);
		},700);
	},1500);
}
function step91()
{
	myStopFunction();
	document.getElementById('can9-8').style.visibility="hidden";	
	document.getElementById('can9-7').style.visibility="visible";
    setTimeout(function()
	{
      	document.getElementById('can9-9').style.visibility="visible";	
	    document.getElementById('can9-10').style.visibility="visible";
		setTimeout(function()
		{
			document.getElementById("p9-1").style.visibility="visible";
			validateAnswer(0,1,"550px","120px");
		},300);
    },500);	
}
function refresh()
{
	document.getElementById('hand').style.transformOrigin = "";
	document.getElementById('hand').style.animation = "";
	document.getElementById('hn').style.transformOrigin = "";
	document.getElementById('hn').style.animation = "";
	document.getElementById("v1-6").innerHTML=" ";
	for(i=4;i<=10;i++)
	{
		if(i==7);
		else
		{
			document.getElementById('can6-'+i).style.transformOrigin = "";
			document.getElementById('can6-'+i).style.animation = "";
		}
	}
    document.getElementById("arrow1").style.animation = "";
}
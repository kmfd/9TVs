current1 = 0;
current2 = 0;
current3 = 0;
current4 = 0;
current5 = 0;
current6 = 0;
current7 = 0;
current8 = 0;
current9 = 0;
nextItem = 1;
index = 0;
index2 = 0;
goodStuff = [];
urls = [];
files = [];
j=0;
k=0;
inc1=0;
inc2=0;
inc3=0;
inc4=0;
inc5=0;
inc6=0;
inc7=0;
inc8=0;
inc9=0;
inc10=0;
inc11=0;
inc12=0;
inc13=0;
inc14=0;
inc15=0;
inc16=0;
inc17=0;
inc18=0;
asptoggle1=0;
asptoggle2=0;
asptoggle3=0;
asptoggle4=0;
asptoggle5=0;
asptoggle6=0;
asptoggle7=0;
asptoggle8=0;
asptoggle9=0;



	
	
function findcode(){
	if(index >= 0 && index < goodStuff.length - 1)
	nextItem = goodStuff[index + 1];
	current1 = nextItem;
	index += 1;
	console.log(current1);
}

function shuffle(a) {
	var j, x, i;
	for (i = a.length; i; i--) {
		j = Math.floor(Math.random() * i);
		x = a[i - 1];
		a[i - 1] = a[j];
		a[j] = x;
	}
}


function getUrlVars() {
var vars = {};
var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
vars[key] = value;
});
return vars;
}



document.getElementById("shuffle").onclick = function () { 
	shuffle(goodStuff)
	console.log(goodStuff)
};

document.getElementById("next-1").onclick = next1
document.getElementById("next-2").onclick = next2
document.getElementById("next-3").onclick = next3
document.getElementById("next-4").onclick = next4
document.getElementById("next-5").onclick = next5
document.getElementById("next-6").onclick = next6
document.getElementById("next-7").onclick = next7
document.getElementById("next-8").onclick = next8
document.getElementById("next-9").onclick = next9

document.getElementById("stop-1").onclick = stop1
document.getElementById("stop-2").onclick = stop2
document.getElementById("stop-3").onclick = stop3
document.getElementById("stop-4").onclick = stop4
document.getElementById("stop-5").onclick = stop5
document.getElementById("stop-6").onclick = stop6
document.getElementById("stop-7").onclick = stop7
document.getElementById("stop-8").onclick = stop8
document.getElementById("stop-9").onclick = stop9

document.getElementById("start-1").onclick = start1
document.getElementById("start-2").onclick = start2
document.getElementById("start-3").onclick = start3
document.getElementById("start-4").onclick = start4
document.getElementById("start-5").onclick = start5
document.getElementById("start-6").onclick = start6
document.getElementById("start-7").onclick = start7
document.getElementById("start-8").onclick = start8
document.getElementById("start-9").onclick = start9


document.getElementById("skip-1").onclick = skip1
document.getElementById("skip-2").onclick = skip2
document.getElementById("skip-3").onclick = skip3
document.getElementById("skip-4").onclick = skip4
document.getElementById("skip-5").onclick = skip5
document.getElementById("skip-6").onclick = skip6
document.getElementById("skip-7").onclick = skip7
document.getElementById("skip-8").onclick = skip8
document.getElementById("skip-9").onclick = skip9



document.getElementById("nextall").onclick = function () { 
	next1();
	next2();
	next3();
	next4();
	next5();
	next6();
	next7();
	next8();
	next9();
};


document.getElementById("startall").onclick = function () { 
	start1();
	start2();
	start3();
	start4();
	start5();
	start6();
	start7();
	start8();
	start9();
};


document.getElementById("skipall").onclick = function () { 
	skip1();
	skip2();
	skip3();
	skip4();
	skip5();
	skip6();
	skip7();
	skip8();
	skip9();
};


document.getElementById("stopall").onclick = function () { 
	stop1();
	stop2();
	stop3();
	stop4();
	stop5();
	stop6();
	stop7();
	stop8();
	stop9();
};



document.getElementById("log").onclick = log1

function log1(){ 	
	var newDiv = document.createElement('logbox');
	newDiv.id = 'logbox';
	newDiv.innerHTML = '<ul> <li>'+ current1 + '</br>' + current2 + '</br>' + current3 + '</br>' + current4 + '</br>' + current5 + '</br>' + current6 + '</br>' + current7 + '</br>' + current8 + '</br>' + current9 +'</li> </ul>' + '<ul>URL: <li>' + 'https://wg.nfshost.com/9tvs/ninetvs.html?tv1=' + current1 + '&tv2=' + current2 + '&tv3=' + current3 + '&tv4=' + current4  + '&tv5=' + current5 + '&tv6=' + current6 + '&tv7=' + current7 + '&tv8=' + current8 + '&tv9=' + current9 + '</li> </ul>';
	
	document.getElementById("area").appendChild(newDiv);
		console.log(current1);
	window.scrollTo(0,document.body.scrollHeight);
};


document.getElementById("parse").onclick = parseurls


function parseurls(){ 
			for (var i=0; i < urls.length; i++) {
				
				urls[i] = urls[i].replace("youtube.com/watch?v=", "youtube.com/embed/");
			}
			goodStuff = urls ;
			console.log(goodStuff);			
};
				
function next1(){
	if(index >= 0 && index < goodStuff.length){
		nextItem = goodStuff[index];
		current1 = nextItem;
		index += 1;
		console.log(current1);
		drop1.innerHTML = '<ul></ul>';
		drop1.innerHTML = '<li>'+ current1 +'</li>';
	};
	var vlc = document.getElementById("vlc");
	vlc.remove();
	var newDiv = document.createElement('embed');
	
	newDiv.id = 'vlc';
	newDiv.type = "application/x-vlc-plugin";
	newDiv.version = "VideoLAN.VLCPlugin.2";
	document.getElementById("tv1").appendChild(newDiv);
	var vlc = document.getElementById("vlc");
	vlc.audio.toggleMute();
	vlc.playlist.stop();
	vlc.playlist.playItem( vlc.playlist.add(current1));
	console.log(current1);
};


function next2(){ 
	if(index >= 0 && index < goodStuff.length){
		nextItem = goodStuff[index];
		current2 = nextItem;
		index += 1;
		console.log(current2);
		drop2.innerHTML = '<ul></ul>';
		drop2.innerHTML = '<li>'+ current2 +'</li>';
	};
	var vlc = document.getElementById("vlc2");
	vlc.remove();
	var newDiv = document.createElement('embed');
	
	newDiv.id = 'vlc2';
	newDiv.type = "application/x-vlc-plugin";
	newDiv.version = "VideoLAN.VLCPlugin.2";
	document.getElementById("tv2").appendChild(newDiv);
	var vlc = document.getElementById("vlc2");
	vlc.audio.toggleMute();
	vlc.playlist.stop();
	vlc.playlist.playItem( vlc.playlist.add(current2));
	console.log(current2);
};

function next3(){ 
	if(index >= 0 && index < goodStuff.length){
		nextItem = goodStuff[index];
		current3 = nextItem;
		index += 1;
		console.log(current3);
		drop3.innerHTML = '<ul></ul>';
		drop3.innerHTML = '<li>'+ current3 +'</li>';
	};
	var vlc = document.getElementById("vlc3");
	vlc.remove();
	
	var newDiv = document.createElement('embed');
	
	newDiv.id = 'vlc3';
	newDiv.type = "application/x-vlc-plugin";
	newDiv.version = "VideoLAN.VLCPlugin.2";
	document.getElementById("tv3").appendChild(newDiv);
	var vlc = document.getElementById("vlc3");
	vlc.audio.toggleMute();
	vlc.playlist.stop();
	vlc.playlist.playItem( vlc.playlist.add(current3));
	console.log(current3);
		
};

function next4(){ 
	if(index >= 0 && index < goodStuff.length){
		nextItem = goodStuff[index];
		current4 = nextItem;
		index += 1;
		console.log(current4);
		drop4.innerHTML = '<ul></ul>';
		drop4.innerHTML = '<li>'+ current4 +'</li>';
	};
	var vlc = document.getElementById("vlc4");
	vlc.remove();
	
	
	var newDiv = document.createElement('embed');
	
	newDiv.id = 'vlc4';
	newDiv.type = "application/x-vlc-plugin";
	newDiv.version = "VideoLAN.VLCPlugin.2";
	document.getElementById("tv4").appendChild(newDiv);
	var vlc = document.getElementById("vlc4");
	vlc.audio.toggleMute();
	vlc.playlist.stop();
	vlc.playlist.playItem( vlc.playlist.add(current4));
	console.log(current4);
		
};

function next5(){ 
	if(index >= 0 && index < goodStuff.length){
		nextItem = goodStuff[index];
		current5 = nextItem;
		index += 1;
		console.log(current5);
		drop5.innerHTML = '<ul></ul>';
		drop5.innerHTML = '<li>'+ current5 +'</li>';
	};
	var vlc = document.getElementById("vlc5");
	vlc.remove();
	
	var newDiv = document.createElement('embed');
	
	newDiv.id = 'vlc5';
	newDiv.type = "application/x-vlc-plugin";
	newDiv.version = "VideoLAN.VLCPlugin.2";
	document.getElementById("tv5").appendChild(newDiv);
	var vlc = document.getElementById("vlc5");
	vlc.audio.toggleMute();
	vlc.playlist.stop();
	vlc.playlist.playItem( vlc.playlist.add(current5));
	console.log(current5);
		
};

function next6(){ 
	if(index >= 0 && index < goodStuff.length){
		nextItem = goodStuff[index];
		current6 = nextItem;
		index += 1;
		console.log(current6);
		drop6.innerHTML = '<ul></ul>';
		drop6.innerHTML = '<li>'+ current6 +'</li>';
	};
	var vlc = document.getElementById("vlc6");
	vlc.remove();
	
	var newDiv = document.createElement('embed');
	
	newDiv.id = 'vlc6';
	newDiv.type = "application/x-vlc-plugin";
	newDiv.version = "VideoLAN.VLCPlugin.2";
	document.getElementById("tv6").appendChild(newDiv);
	var vlc = document.getElementById("vlc6");
	vlc.audio.toggleMute();
	vlc.playlist.stop();
	vlc.playlist.playItem( vlc.playlist.add(current6));
	console.log(current6);
		
};

function next7(){ 
	if(index >= 0 && index < goodStuff.length){
		nextItem = goodStuff[index];
		current7 = nextItem;
		index += 1;
		console.log(current7);
		drop7.innerHTML = '<ul></ul>';
		drop7.innerHTML = '<li>'+ current7 +'</li>';
	};
	var vlc = document.getElementById("vlc7");
	vlc.remove();
	
	var newDiv = document.createElement('embed');
	
	newDiv.id = 'vlc7';
	newDiv.type = "application/x-vlc-plugin";
	newDiv.version = "VideoLAN.VLCPlugin.2";
	document.getElementById("tv7").appendChild(newDiv);
	var vlc = document.getElementById("vlc7");
	vlc.audio.toggleMute();
	vlc.playlist.stop();
	vlc.playlist.playItem( vlc.playlist.add(current7));
	console.log(current7);
	
};

function next8(){ 
	if(index >= 0 && index < goodStuff.length){
		nextItem = goodStuff[index];
		current8 = nextItem;
		index += 1;
		console.log(current8);
		drop8.innerHTML = '<ul></ul>';
		drop8.innerHTML = '<li>'+ current8 +'</li>';
	};
	var vlc = document.getElementById("vlc8");
	vlc.remove();
	
	var newDiv = document.createElement('embed');
	
	newDiv.id = 'vlc8';
	newDiv.type = "application/x-vlc-plugin";
	newDiv.version = "VideoLAN.VLCPlugin.2";
	document.getElementById("tv8").appendChild(newDiv);
	var vlc = document.getElementById("vlc8");
	vlc.audio.toggleMute();
	vlc.playlist.stop();
	vlc.playlist.playItem( vlc.playlist.add(current8));
	console.log(current8);
		
};

function next9(){ 
	if(index >= 0 && index < goodStuff.length){
		nextItem = goodStuff[index];
		current9 = nextItem;
		index += 1;
		console.log(current9);
		drop9.innerHTML = '<ul></ul>';
		drop9.innerHTML = '<li>'+ current9 +'</li>';
	};
	var vlc = document.getElementById("vlc9");
	vlc.remove();

	var newDiv = document.createElement('embed');
	
	newDiv.id = 'vlc9';
	newDiv.type = "application/x-vlc-plugin";
	newDiv.version = "VideoLAN.VLCPlugin.2";
	document.getElementById("tv9").appendChild(newDiv);
	var vlc = document.getElementById("vlc9");
	vlc.audio.toggleMute();
	vlc.playlist.stop();
	vlc.playlist.playItem( vlc.playlist.add(current9));
	console.log(current9);
		
};

function stop1(){ 
	console.log("stop1");
	clearInterval(window.refreshIntervalId);
	var vlc = document.getElementById("vlc");
	vlc.playlist.stop();
};

function stop2(){ 	
	console.log("stop2");
	clearInterval(window.refreshIntervalId);
	var vlc = document.getElementById("vlc2");
	vlc.playlist.stop();
};

function stop3(){ 	
	console.log("stop3");
	clearInterval(window.refreshIntervalId);
	var vlc = document.getElementById("vlc3");
	vlc.playlist.stop();
};

function stop4(){ 
	console.log("stop4");
	clearInterval(window.refreshIntervalId);
	var vlc = document.getElementById("vlc4");
	vlc.playlist.stop();
};

function stop5(){ 	
	console.log("stop5");
	clearInterval(window.refreshIntervalId);
	var vlc = document.getElementById("vlc5");
	vlc.playlist.stop();
};

function stop6(){ 	
	console.log("stop6");
	clearInterval(window.refreshIntervalId);
	var vlc = document.getElementById("vlc6");
	vlc.playlist.stop();
};

function stop7(){ 	
	console.log("stop7");
	clearInterval(window.refreshIntervalId);
	var vlc = document.getElementById("vlc7");
	vlc.playlist.stop();
};

function stop8(){ 	
	console.log("stop8");
	clearInterval(window.refreshIntervalId);
	var vlc = document.getElementById("vlc8");
	vlc.playlist.stop();
};

function stop9(){ 
	console.log("stop9");
	clearInterval(window.refreshIntervalId);
	var vlc = document.getElementById("vlc9");
	vlc.playlist.stop();
};



function start1(){ 
	var vlc = document.getElementById("vlc");
	if(current1 ==0 ){
		if(index >= 0 && index < goodStuff.length){
			nextItem = goodStuff[index];
			current1 = nextItem;
			index += 1;
			console.log(current1);
			vlc.playlist.stop();
			vlc.playlist.playItem( vlc.playlist.add(current1));
		}
			
	}
	else{
		var vlc = document.getElementById("vlc");
		vlc.playlist.playItem(vlc.playlist.currentItem)
	}
};

function start2(){ 
	var vlc = document.getElementById("vlc2");
	if(current2 ==0 ){
		if(index >= 0 && index < goodStuff.length){
			nextItem = goodStuff[index];
			current2 = nextItem;
			index += 1;
			console.log(current2);
			var vlc = document.getElementById("vlc2");
			vlc.playlist.stop();
			vlc.playlist.playItem( vlc.playlist.add(current2));
		}
			
	}
	else{
		vlc.playlist.playItem( vlc.playlist.add(current2));
	}
};

function start3(){ 
	var vlc = document.getElementById("vlc3");
	if(current3 ==0 ){
		if(index >= 0 && index < goodStuff.length){
			nextItem = goodStuff[index];
			current3 = nextItem;
			index += 1;
			console.log(current3);
			var vlc = document.getElementById("vlc3");
			vlc.playlist.stop();
			vlc.playlist.playItem( vlc.playlist.add(current3));
		}
			
	}
	else{
		vlc.playlist.playItem( vlc.playlist.add(current3));
	}
};

function start4(){ 
	var vlc = document.getElementById("vlc4");
	if(current4 ==0 ){
		if(index >= 0 && index < goodStuff.length){
			nextItem = goodStuff[index];
			current4 = nextItem;
			index += 1;
			console.log(current4);
			var vlc = document.getElementById("vlc4");
			vlc.playlist.stop();
			vlc.playlist.playItem( vlc.playlist.add(current4));
		}
			
	}
	else{
		vlc.playlist.playItem( vlc.playlist.add(current4));
	}
};

function start5(){ 
	var vlc = document.getElementById("vlc5");
	if(current5 ==0 ){
		if(index >= 0 && index < goodStuff.length){
			nextItem = goodStuff[index];
			current5 = nextItem;
			index += 1;
			console.log(current5);
			var vlc = document.getElementById("vlc5");
			vlc.playlist.stop();
			vlc.playlist.playItem( vlc.playlist.add(current5));
		}
			
	}
	else{
		vlc.playlist.play();
	}
};

function start6(){ 
	var vlc = document.getElementById("vlc6");
	if(current6 ==0 ){
		if(index >= 0 && index < goodStuff.length){
			nextItem = goodStuff[index];
			current6 = nextItem;
			index += 1;
			console.log(current6);
			var vlc = document.getElementById("vlc6");
			vlc.playlist.stop();
			vlc.playlist.playItem( vlc.playlist.add(current6));
		}
			
	}
	else{
		vlc.playlist.playItem( vlc.playlist.add(current6));
	}
};

function start7(){ 
	var vlc = document.getElementById("vlc7");
	if(current7 ==0 ){
		if(index >= 0 && index < goodStuff.length){
			nextItem = goodStuff[index];
			current7 = nextItem;
			index += 1;
			console.log(current7);
			var vlc = document.getElementById("vlc7");
			vlc.playlist.stop();
			vlc.playlist.playItem( vlc.playlist.add(current7));
		}
			
	}
	else{
		vlc.playlist.playItem( vlc.playlist.add(current7));
	}
};

function start8(){ 
	var vlc = document.getElementById("vlc8");
	if(current8 ==0 ){
		if(index >= 0 && index < goodStuff.length){
			nextItem = goodStuff[index];
			current8 = nextItem;
			index += 1;
			console.log(current8);
			var vlc = document.getElementById("vlc8");
			vlc.playlist.stop();
			vlc.playlist.playItem( vlc.playlist.add(current8));
		}
			
	}
	else{
		vlc.playlist.playItem( vlc.playlist.add(current8));
	}
};

function start9(){ 
	var vlc = document.getElementById("vlc9");
	if(current9 ==0 ){
		if(index >= 0 && index < goodStuff.length){
			nextItem = goodStuff[index];
			current9 = nextItem;
			index += 1;
			console.log(current9);
			var vlc = document.getElementById("vlc9");
			vlc.playlist.stop();
			vlc.playlist.playItem( vlc.playlist.add(current9));
		}
			
	}
	else{
		vlc.playlist.playItem( vlc.playlist.add(current9));
	}
};


function skip1(){ 
	var vlc = document.getElementById("vlc");
	vlc.input.time = vlc.input.time + 30000;
};

function skip2(){ 
	var vlc = document.getElementById("vlc2");
	vlc.input.time = vlc.input.time + 30000;
};

function skip3(){ 
	var vlc = document.getElementById("vlc3");
	vlc.input.time = vlc.input.time + 30000;
};

function skip4(){ 
	var vlc = document.getElementById("vlc4");
	vlc.input.time = vlc.input.time + 30000;
};

function skip5(){ 
	var vlc = document.getElementById("vlc5");
	vlc.input.time = vlc.input.time + 30000;
};

function skip6(){ 
	var vlc = document.getElementById("vlc6");
	vlc.input.time = vlc.input.time + 30000;
};

function skip7(){ 
	var vlc = document.getElementById("vlc7");
	vlc.input.time = vlc.input.time + 30000;
};

function skip8(){ 
	var vlc = document.getElementById("vlc8");
	vlc.input.time = vlc.input.time + 30000;
};

function skip9(){ 
	var vlc = document.getElementById("vlc9");
	vlc.input.time = vlc.input.time + 30000;
};


document.getElementById("asp-1").onclick = function () { 
			var vlc = document.getElementById("vlc");
			if(asptoggle1 == 0){
				vlc.video.aspectRatio = "16:9";
				asptoggle1 = 1; return }
			if	(asptoggle1 == 1){
				vlc.video.aspectRatio = "4:3";
				asptoggle1 = 2; return }
			if	(asptoggle1 == 2){
				vlc.video.aspectRatio = "16:10";
				asptoggle1 = 3; return }
			if	(asptoggle1 == 3){
				vlc.video.aspectRatio = "16:9";
				asptoggle1 = 1; return };
};
document.getElementById("asp-2").onclick = function () { 
			var vlc = document.getElementById("vlc2");
			if(asptoggle2 == 0){
				vlc.video.aspectRatio = "16:9";
				asptoggle2 = 1; return }
			if	(asptoggle2 == 1){
				vlc.video.aspectRatio = "4:3";
				asptoggle2 = 2; return }
			if	(asptoggle2 == 2){
				vlc.video.aspectRatio = "16:10";
				asptoggle2 = 3; return }
			if	(asptoggle2 == 3){
				vlc.video.aspectRatio = "16:9";
				asptoggle2 = 1; return };
};
document.getElementById("asp-3").onclick = function () { 
			var vlc = document.getElementById("vlc3");
			if(asptoggle3 == 0){
				vlc.video.aspectRatio = "16:9";
				asptoggle3 = 1; return }
			if	(asptoggle3 == 1){
				vlc.video.aspectRatio = "4:3";
				asptoggle3 = 2; return }
			if	(asptoggle3 == 2){
				vlc.video.aspectRatio = "16:10";
				asptoggle3 = 3; return }
			if	(asptoggle3 == 3){
				vlc.video.aspectRatio = "16:9";
				asptoggle3 = 1; return };
};
document.getElementById("asp-4").onclick = function () { 
			var vlc = document.getElementById("vlc4");
			if(asptoggle4 == 0){
				vlc.video.aspectRatio = "16:9";
				asptoggle4 = 1; return }
			if	(asptoggle4 == 1){
				vlc.video.aspectRatio = "4:3";
				asptoggle4 = 2; return }
			if	(asptoggle4 == 2){
				vlc.video.aspectRatio = "16:10";
				asptoggle4 = 3; return }
			if	(asptoggle4 == 3){
				vlc.video.aspectRatio = "16:9";
				asptoggle4 = 1; return };
};
document.getElementById("asp-5").onclick = function () { 
			var vlc = document.getElementById("vlc5");
			if(asptoggle5 == 0){
				vlc.video.aspectRatio = "16:9";
				asptoggle5 = 1; return }
			if	(asptoggle5 == 1){
				vlc.video.aspectRatio = "4:3";
				asptoggle5 = 2; return }
			if	(asptoggle5 == 2){
				vlc.video.aspectRatio = "16:10";
				asptoggle5 = 3; return }
			if	(asptoggle5 == 3){
				vlc.video.aspectRatio = "16:9";
				asptoggle5 = 1; return };
};
document.getElementById("asp-6").onclick = function () { 
			var vlc = document.getElementById("vlc6");
			if(asptoggle6 == 0){
				vlc.video.aspectRatio = "16:9";
				asptoggle6 = 1; return }
			if	(asptoggle6 == 1){
				vlc.video.aspectRatio = "4:3";
				asptoggle6 = 2; return }
			if	(asptoggle6 == 2){
				vlc.video.aspectRatio = "16:10";
				asptoggle6 = 3; return }
			if	(asptoggle6 == 3){
				vlc.video.aspectRatio = "16:9";
				asptoggle6 = 1; return };
};
document.getElementById("asp-7").onclick = function () { 
			var vlc = document.getElementById("vlc7");
			if(asptoggle7 == 0){
				vlc.video.aspectRatio = "16:9";
				asptoggle7 = 1; return }
			if	(asptoggle7 == 1){
				vlc.video.aspectRatio = "4:3";
				asptoggle7 = 2; return }
			if	(asptoggle7 == 2){
				vlc.video.aspectRatio = "16:10";
				asptoggle7 = 3; return }
			if	(asptoggle7 == 3){
				vlc.video.aspectRatio = "16:9";
				asptoggle7 = 1; return };
};
document.getElementById("asp-8").onclick = function () { 
			var vlc = document.getElementById("vlc8");
			if(asptoggle8 == 0){
				vlc.video.aspectRatio = "16:9";
				asptoggle8 = 1; return }
			if	(asptoggle8 == 1){
				vlc.video.aspectRatio = "4:3";
				asptoggle8 = 2; return }
			if	(asptoggle8 == 2){
				vlc.video.aspectRatio = "16:10";
				asptoggle8 = 3; return }
			if	(asptoggle8 == 3){
				vlc.video.aspectRatio = "16:9";
				asptoggle8 = 1; return };
};
document.getElementById("asp-9").onclick = function () { 
			var vlc = document.getElementById("vlc9");
			if(asptoggle9 == 0){
				vlc.video.aspectRatio = "16:9";
				asptoggle9 = 1; return }
			if	(asptoggle9 == 1){
				vlc.video.aspectRatio = "4:3";
				asptoggle9 = 2; return }
			if	(asptoggle9 == 2){
				vlc.video.aspectRatio = "16:10";
				asptoggle9 = 3; return }
			if	(asptoggle9 == 3){
				vlc.video.aspectRatio = "16:9";
				asptoggle9 = 1; return };
};


document.getElementById("crop-1w").onclick = function () { 
			var vlc = document.getElementById("vlc");
			inc1 = inc1 + 10;
			var wid = vlc.video.width - inc1
			var hei = vlc.video.height - inc2
			vlc.video.crop = wid + 'x' + hei + '+' + inc1 + '+' + inc2;
};
document.getElementById("crop-1h").onclick = function () { 
			var vlc = document.getElementById("vlc");
			inc2 = inc2 + 10;
			var wid = vlc.video.width -inc1
			var hei = vlc.video.height - inc2
			vlc.video.crop = wid + 'x' + hei + '+' + inc1 + '+' + inc2;
};

document.getElementById("crop-2w").onclick = function () { 
			var vlc = document.getElementById("vlc2");
			inc3 = inc3 + 10;
			var wid = vlc.video.width - inc3
			var hei = vlc.video.height - inc4
			vlc.video.crop = wid + 'x' + hei + '+' + inc3 + '+' + inc4;
};
document.getElementById("crop-2h").onclick = function () { 
			var vlc = document.getElementById("vlc2");
			inc4 = inc4 + 10;
			var wid = vlc.video.width -inc3
			var hei = vlc.video.height - inc4
			vlc.video.crop = wid + 'x' + hei + '+' + inc3 + '+' + inc4;
};

document.getElementById("crop-3w").onclick = function () { 
			var vlc = document.getElementById("vlc3");
			inc5 = inc5 + 10;
			var wid = vlc.video.width - inc5
			var hei = vlc.video.height - inc6
			vlc.video.crop = wid + 'x' + hei + '+' + inc5 + '+' + inc6;
};
document.getElementById("crop-3h").onclick = function () { 
			var vlc = document.getElementById("vlc3");
			inc6 = inc6 + 10;
			var wid = vlc.video.width -inc5
			var hei = vlc.video.height - inc6
			vlc.video.crop = wid + 'x' + hei + '+' + inc5 + '+' + inc6;
};

document.getElementById("crop-4w").onclick = function () { 
			var vlc = document.getElementById("vlc4");
			inc7 = inc7 + 10;
			var wid = vlc.video.width - inc7
			var hei = vlc.video.height - inc8
			vlc.video.crop = wid + 'x' + hei + '+' + inc7 + '+' + inc8;
};
document.getElementById("crop-4h").onclick = function () { 
			var vlc = document.getElementById("vlc4");
			inc8 = inc8 + 10;
			var wid = vlc.video.width -inc7
			var hei = vlc.video.height - inc8
			vlc.video.crop = wid + 'x' + hei + '+' + inc7 + '+' + inc8;
};

document.getElementById("crop-5w").onclick = function () { 
			var vlc = document.getElementById("vlc5");
			inc9 = inc9 + 10;
			var wid = vlc.video.width - inc9
			var hei = vlc.video.height - inc10
			vlc.video.crop = wid + 'x' + hei + '+' + inc9 + '+' + inc10;
};
document.getElementById("crop-5h").onclick = function () { 
			var vlc = document.getElementById("vlc5");
			inc10 = inc10 + 10;
			var wid = vlc.video.width -inc9
			var hei = vlc.video.height - inc10
			vlc.video.crop = wid + 'x' + hei + '+' + inc9 + '+' + inc10;
};

document.getElementById("crop-6w").onclick = function () { 
			var vlc = document.getElementById("vlc6");
			inc11 = inc11 + 10;
			var wid = vlc.video.width - inc11
			var hei = vlc.video.height - inc12
			vlc.video.crop = wid + 'x' + hei + '+' + inc11 + '+' + inc12;
};
document.getElementById("crop-6h").onclick = function () { 
			var vlc = document.getElementById("vlc6");
			inc12 = inc12 + 10;
			var wid = vlc.video.width -inc11
			var hei = vlc.video.height - inc12
			vlc.video.crop = wid + 'x' + hei + '+' + inc11 + '+' + inc12;
};

document.getElementById("crop-7w").onclick = function () { 
			var vlc = document.getElementById("vlc7");
			inc13 = inc13 + 10;
			var wid = vlc.video.width - inc13
			var hei = vlc.video.height - inc14
			vlc.video.crop = wid + 'x' + hei + '+' + inc13 + '+' + inc14;
};
document.getElementById("crop-7h").onclick = function () { 
			var vlc = document.getElementById("vlc7");
			inc14 = inc14 + 10;
			var wid = vlc.video.width -inc13
			var hei = vlc.video.height - inc14
			vlc.video.crop = wid + 'x' + hei + '+' + inc13 + '+' + inc14;
};

document.getElementById("crop-8w").onclick = function () { 
			var vlc = document.getElementById("vlc8");
			inc15 = inc15 + 10;
			var wid = vlc.video.width - inc15
			var hei = vlc.video.height - inc16
			vlc.video.crop = wid + 'x' + hei + '+' + inc15 + '+' + inc16;
};
document.getElementById("crop-8h").onclick = function () { 
			var vlc = document.getElementById("vlc8");
			inc16 = inc16 + 10;
			var wid = vlc.video.width -inc15
			var hei = vlc.video.height - inc16
			vlc.video.crop = wid + 'x' + hei + '+' + inc15 + '+' + inc16;
};

document.getElementById("crop-9w").onclick = function () { 
			var vlc = document.getElementById("vlc9");
			inc17 = inc17 + 10;
			var wid = vlc.video.width - inc17
			var hei = vlc.video.height - inc18
			vlc.video.crop = wid + 'x' + hei + '+' + inc17 + '+' + inc18;
};
document.getElementById("crop-9h").onclick = function () { 
			var vlc = document.getElementById("vlc9");
			inc18 = inc18 + 10;
			var wid = vlc.video.width -inc17
			var hei = vlc.video.height - inc18
			vlc.video.crop = wid + 'x' + hei + '+' + inc17 + '+' + inc18;
};


document.getElementById("crop-0w").onclick = function () { 
			inc1 = 0;
			inc3 = 0;
			inc5 = 0;
			inc7 = 0;
			inc9 = 0;
			inc11 = 0;
			inc13 = 0;
			inc15 = 0;
			inc17 = 0;
			var vlc = document.getElementById("vlc");
			vlc.video.crop = vlc.video.width + 'x' + inc2 + '+0+0';
			var vlc = document.getElementById("vlc2");
			vlc.video.crop = vlc.video.width + 'x' + inc4 + '+0+0';
			var vlc = document.getElementById("vlc3");
			vlc.video.crop = vlc.video.width + 'x' + inc6 + '+0+0';
			var vlc = document.getElementById("vlc4");
			vlc.video.crop = vlc.video.width + 'x' + inc8 + '+0+0';
			var vlc = document.getElementById("vlc5");
			vlc.video.crop = vlc.video.width + 'x' + inc10 + '+0+0';
			var vlc = document.getElementById("vlc6");
			vlc.video.crop = vlc.video.width + 'x' + inc12 + '+0+0';
			var vlc = document.getElementById("vlc7");
			vlc.video.crop = vlc.video.width + 'x' + inc14 + '+0+0';
			var vlc = document.getElementById("vlc8");
			vlc.video.crop = vlc.video.width + 'x' + inc16 + '+0+0';
			var vlc = document.getElementById("vlc9");
			vlc.video.crop = vlc.video.width + 'x' + inc18 + '+0+0';
};

document.getElementById("crop-0h").onclick = function () { 
			inc2 = 0;
			inc4 = 0;
			inc6 = 0;
			inc8 = 0;
			inc10 = 0;
			inc12 = 0;
			inc14 = 0;
			inc16 = 0;
			inc18 = 0;
			var vlc = document.getElementById("vlc");
			vlc.video.crop = inc1 + 'x' + vlc.video.height + '+0+0';
			var vlc = document.getElementById("vlc2");
			vlc.video.crop = inc3 + 'x' + vlc.video.height + '+0+0';
			var vlc = document.getElementById("vlc3");
			vlc.video.crop = inc5 + 'x' + vlc.video.height + '+0+0';
			var vlc = document.getElementById("vlc4");
			vlc.video.crop = inc7 + 'x' + vlc.video.height + '+0+0';
			var vlc = document.getElementById("vlc5");
			vlc.video.crop = inc9 + 'x' + vlc.video.height + '+0+0';
			var vlc = document.getElementById("vlc6");
			vlc.video.crop = inc11 + 'x' + vlc.video.height + '+0+0';
			var vlc = document.getElementById("vlc7");
			vlc.video.crop = inc13 + 'x' + vlc.video.height + '+0+0';
			var vlc = document.getElementById("vlc8");
			vlc.video.crop = inc15 + 'x' + vlc.video.height + '+0+0';
			var vlc = document.getElementById("vlc9");
			vlc.video.crop = inc17 + 'x' + vlc.video.height + '+0+0';
};


document.getElementById("start").onclick = function () {
	window.refreshIntervalId = setInterval(timer, 4000);
	console.log("start");
	function timer(){
		var vlc = document.getElementById("vlc");
		if(vlc.input.state !=3 ){
			vlc.playlist.playItem( vlc.playlist.add(current1) )};
		
		var vlc = document.getElementById("vlc2");
		if(vlc.input.state !=3 ){
			vlc.playlist.playItem( vlc.playlist.add(current2) )};
		
		var vlc = document.getElementById("vlc3");
		if(vlc.input.state !=3 ){
			vlc.playlist.playItem( vlc.playlist.add(current3) )};
		
		var vlc = document.getElementById("vlc4");
		if(vlc.input.state !=3 ){
			vlc.playlist.playItem( vlc.playlist.add(current4) )};
		
		var vlc = document.getElementById("vlc5");
		if(vlc.input.state !=3 ){
			vlc.playlist.playItem( vlc.playlist.add(current5) )};
		
		var vlc = document.getElementById("vlc6");
		if(vlc.input.state !=3 ){
			vlc.playlist.playItem( vlc.playlist.add(current6) )};
		
		var vlc = document.getElementById("vlc7");
		if(vlc.input.state !=3 ){
			vlc.playlist.playItem( vlc.playlist.add(current7) )};
		
		var vlc = document.getElementById("vlc8");
		if(vlc.input.state !=3 ){
			vlc.playlist.playItem( vlc.playlist.add(current8) )};
		
		var vlc = document.getElementById("vlc9");
		if(vlc.input.state !=3 ){
			vlc.playlist.playItem( vlc.playlist.add(current9) )};
	};
};

function youtube_parser(url){
		var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
		var match = url.match(regExp);
		return (match&&match[7].length==11)? match[7] : false;
	}
	

setTimeout(function(){ 
	if (document.getElementById("vlc").VersionInfo === undefined){
	} else {
		console.log(document.getElementById("vlc").VersionInfo);
		var vlc = document.getElementById("vlc");
		vlc.audio.toggleMute();
		var vlc = document.getElementById("vlc2");
		vlc.audio.toggleMute();
		var vlc = document.getElementById("vlc3");
		vlc.audio.toggleMute();
		var vlc = document.getElementById("vlc4");
		vlc.audio.toggleMute();
		var vlc = document.getElementById("vlc5");
		vlc.audio.toggleMute();
		var vlc = document.getElementById("vlc6");
		vlc.audio.toggleMute();
		var vlc = document.getElementById("vlc7");
		vlc.audio.toggleMute();
		var vlc = document.getElementById("vlc8");
		vlc.audio.toggleMute();
		var vlc = document.getElementById("vlc9");
		vlc.audio.toggleMute();		
	};
		
	if(getUrlVars()["tv1"] >= ''){
		current1 = getUrlVars()["tv1"];
		console.log(current1);
		drop1.innerHTML = '<ul></ul>';
		drop1.innerHTML = '<li>'+ current1 +'</li>';
		var vlc = document.getElementById("vlc");
		vlc.remove();
		
		var newDiv = document.createElement('embed');
		
		newDiv.id = 'vlc';
		newDiv.type = "application/x-vlc-plugin";
		newDiv.version = "VideoLAN.VLCPlugin.2";
		document.getElementById("tv1").appendChild(newDiv);
		var vlc = document.getElementById("vlc");
		vlc.audio.toggleMute();
		vlc.playlist.stop();
		vlc.playlist.playItem( vlc.playlist.add(current1));
		console.log(current1);
	};
	if(getUrlVars()["tv2"] >= ''){
		current2 = getUrlVars()["tv2"];
		console.log(current2);
		drop2.innerHTML = '<ul></ul>';
		drop2.innerHTML = '<li>'+ current2 +'</li>';
		var vlc = document.getElementById("vlc2");
		vlc.remove();
		
		var newDiv = document.createElement('embed');
		
		newDiv.id = 'vlc2';
		newDiv.type = "application/x-vlc-plugin";
		newDiv.version = "VideoLAN.VLCPlugin.2";
		document.getElementById("tv2").appendChild(newDiv);
		var vlc = document.getElementById("vlc2");
		vlc.audio.toggleMute();
		vlc.playlist.stop();
		vlc.playlist.playItem( vlc.playlist.add(current2));
		console.log(current2);
		
	};
	if(getUrlVars()["tv3"] >= ''){
		current3 = getUrlVars()["tv3"];
		console.log(current3);
		drop3.innerHTML = '<ul></ul>';
		drop3.innerHTML = '<li>'+ current3 +'</li>';
		var vlc = document.getElementById("vlc3");
		vlc.remove();
		
		var newDiv = document.createElement('embed');
		
		newDiv.id = 'vlc3';
		newDiv.type = "application/x-vlc-plugin";
		newDiv.version = "VideoLAN.VLCPlugin.2";
		document.getElementById("tv3").appendChild(newDiv);
		var vlc = document.getElementById("vlc3");
		vlc.audio.toggleMute();
		vlc.playlist.stop();
		vlc.playlist.playItem( vlc.playlist.add(current3));
		console.log(current3);
		
	};
	if(getUrlVars()["tv4"] >= ''){
		current4 = getUrlVars()["tv4"];
		console.log(current4);
		drop4.innerHTML = '<ul></ul>';
		drop4.innerHTML = '<li>'+ current4 +'</li>';
		var vlc = document.getElementById("vlc4");
		vlc.remove();
		
		var newDiv = document.createElement('embed');
		
		newDiv.id = 'vlc4';
		newDiv.type = "application/x-vlc-plugin";
		newDiv.version = "VideoLAN.VLCPlugin.2";
		document.getElementById("tv4").appendChild(newDiv);
		var vlc = document.getElementById("vlc4");
		vlc.audio.toggleMute();
		vlc.playlist.stop();
		vlc.playlist.playItem( vlc.playlist.add(current4));
		console.log(current4);
	
	};
	if(getUrlVars()["tv5"] >= ''){
		current5 = getUrlVars()["tv5"];
		console.log(current5);
		drop5.innerHTML = '<ul></ul>';
		drop5.innerHTML = '<li>'+ current5 +'</li>';
		var vlc = document.getElementById("vlc5");
		vlc.remove();
		
		var newDiv = document.createElement('embed');
		
		newDiv.id = 'vlc5';
		newDiv.type = "application/x-vlc-plugin";
		newDiv.version = "VideoLAN.VLCPlugin.2";
		document.getElementById("tv5").appendChild(newDiv);
		var vlc = document.getElementById("vlc5");
		vlc.audio.toggleMute();
		vlc.playlist.stop();
		vlc.playlist.playItem( vlc.playlist.add(current5));
		console.log(current5);
	
	};
	if(getUrlVars()["tv6"] >= ''){
		current6 = getUrlVars()["tv6"];
		console.log(current6);
		drop6.innerHTML = '<ul></ul>';
		drop6.innerHTML = '<li>'+ current6 +'</li>';
		var vlc = document.getElementById("vlc6");
		vlc.remove();
		
		var newDiv = document.createElement('embed');
		
		newDiv.id = 'vlc6';
		newDiv.type = "application/x-vlc-plugin";
		newDiv.version = "VideoLAN.VLCPlugin.2";
		document.getElementById("tv6").appendChild(newDiv);
		var vlc = document.getElementById("vlc6");
		vlc.audio.toggleMute();
		vlc.playlist.stop();
		vlc.playlist.playItem( vlc.playlist.add(current6));
		console.log(current6);
	
	};
	if(getUrlVars()["tv7"] >= ''){
		current7 = getUrlVars()["tv7"];
		console.log(current7);
		drop7.innerHTML = '<ul></ul>';
		drop7.innerHTML = '<li>'+ current7 +'</li>';
		var vlc = document.getElementById("vlc7");
		vlc.remove();
		
		var newDiv = document.createElement('embed');
		
		newDiv.id = 'vlc7';
		newDiv.type = "application/x-vlc-plugin";
		newDiv.version = "VideoLAN.VLCPlugin.2";
		document.getElementById("tv7").appendChild(newDiv);
		var vlc = document.getElementById("vlc7");
		vlc.audio.toggleMute();
		vlc.playlist.stop();
		vlc.playlist.playItem( vlc.playlist.add(current7));
		console.log(current7);
		
	};
	if(getUrlVars()["tv8"] >= ''){
		current8 = getUrlVars()["tv8"];
		console.log(current8);
		drop8.innerHTML = '<ul></ul>';
		drop8.innerHTML = '<li>'+ current8 +'</li>';
		var vlc = document.getElementById("vlc8");
		vlc.remove();
		
		var newDiv = document.createElement('embed');
		
		newDiv.id = 'vlc8';
		newDiv.type = "application/x-vlc-plugin";
		newDiv.version = "VideoLAN.VLCPlugin.2";
		document.getElementById("tv8").appendChild(newDiv);
		var vlc = document.getElementById("vlc8");
		vlc.audio.toggleMute();
		vlc.playlist.stop();
		vlc.playlist.playItem( vlc.playlist.add(current8));
		console.log(current8);
	
	};
	if(getUrlVars()["tv9"] >= ''){
		current9 = getUrlVars()["tv9"];
		console.log(current9);
		drop9.innerHTML = '<ul></ul>';
		drop9.innerHTML = '<li>'+ current9 +'</li>';
		var vlc = document.getElementById("vlc9");
		vlc.remove();
		
		var newDiv = document.createElement('embed');
		
		newDiv.id = 'vlc9';
		newDiv.type = "application/x-vlc-plugin";
		newDiv.version = "VideoLAN.VLCPlugin.2";
		document.getElementById("tv9").appendChild(newDiv);
		var vlc = document.getElementById("vlc9");
		vlc.audio.toggleMute();
		vlc.playlist.stop();
		vlc.playlist.playItem( vlc.playlist.add(current9));
		console.log(current9);
	
	};

}, 1000);


function handleFileSelect(evt) {
    var files = evt.target.files; // FileList object

    // Loop through the FileList
    for (var i = 0, f; f = files[i]; i++) {

        var reader = new FileReader();

      // Closure to capture the file information.
        reader.onload = (function(theFile) {
			return function(e) {
				var vlc = document.getElementById("vlc");
				var playlistUL = reader.result;
				var plarray = playlistUL.split(/\r\n/);
				var exts = [/ext/i]
				var filteredArr = plarray.filter(function(val) {
					return !(val === "");
				}); 
				var newitems = filteredArr.filter(function (text) {
					return !exts.some(function (regex) {
						return regex.test(text);
					});
				});
				combined = newitems.concat(goodStuff);
				goodStuff = combined;
				for (var i=0; i < goodStuff.length; i++) {
					var re = new RegExp("file:///");
					var regex = /^(?:(?:https?|ftp|rtmp|rtsp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/i;
					if (regex.test(goodStuff[i])) {
						console.log(regex.test(goodStuff[i]));
						console.log(goodStuff[i]);
						urls[j] = goodStuff[i];
						j++;
					} else if (re.test(goodStuff[i])) {
						
					} else {
						
						goodStuff[i] = 'file:///' + goodStuff[i];
					}
					
				}
				console.log(urls);
				console.log(goodStuff);
				;
			};
        })(f);

        // Read in the file as a data URL.
		// Can perhaps instead use object URLs see https://developer.mozilla.org/en-US/docs/Using_files_from_web_applications#Using_object_URLs
        reader.readAsText(f);
    }
  }

document.getElementById('files').addEventListener('change', handleFileSelect, false);


function cancel(e) {
  if (e.preventDefault) e.preventDefault(); // required by FF + Safari
  e.dataTransfer.dropEffect = 'copy';       // tells the browser what drop effect is allowed here
  return false;                             // required by IE
}

function entities(s) {
  var e = {
    '"' : '"',
    '&' : '&',
    '<' : '<',
    '>' : '>'
  };
  return s.replace(/["&<>]/g, function (m) {
    return e[m];
  });
}

var getDataType = document.querySelector('#text');
var drop = document.querySelector('#drop1');

	// Tells the browser that we *can* drop on this target
	addEvent(drop, 'dragover', cancel);
	addEvent(drop, 'dragenter', cancel);

	addEvent(drop, 'drop', function (e) {
	  if (e.preventDefault) e.preventDefault(); // stops the browser from redirecting off to the text.

	  // just rendering the text in to the list

	  // clear out the original text
	  drop.innerHTML = '<ul></ul>';
	  var li = document.createElement('li');
	  
	  /** THIS IS THE MAGIC: we read from getData based on the content type - so it grabs the item matching that format **/
	  if (getDataType.checked == false && e.dataTransfer.types) {
		li.innerHTML = '<ul>';
		[].forEach.call(e.dataTransfer.types, function (type) {
		  li.innerHTML += '<li>' + entities(e.dataTransfer.getData(type) + ' (content-type: ' + type + ')') + '</li>';
		});
		li.innerHTML += '</ul>';
	  } else {
		// ... however, if we're IE, we don't have the .types property, so we'll just get the Text value
		li.innerHTML = e.dataTransfer.getData('Text');
	  }
	  
	  var ul = drop.querySelector('ul');

	  if (ul.firstChild) {
		ul.insertBefore(li, ul.firstChild);
	  } else {
		ul.appendChild(li);
	  }
	  var addURL;
	  var addURL = e.dataTransfer.getData('Text');
	  console.log(addURL);
	  addURL = addURL.replace("youtube.com/watch?v=", "youtube.com/embed/");
	  
	  current1 = addURL
	  console.log(addURL)
	var vlc = document.getElementById("vlc");
	vlc.remove();
	
	var newDiv = document.createElement('embed');
	
	newDiv.id = 'vlc';
	newDiv.type = "application/x-vlc-plugin";
	newDiv.version = "VideoLAN.VLCPlugin.2";
	document.getElementById("tv1").appendChild(newDiv);
	var vlc = document.getElementById("vlc");
	vlc.audio.toggleMute();
	vlc.playlist.stop();
	vlc.playlist.playItem( vlc.playlist.add(current1));
	console.log(current1);
		
	  drop1.innerHTML = '<ul></ul>';
	  drop1.innerHTML = '<li>'+ current1 +'</li>';
	  return false;
	});


var drop2 = document.querySelector('#drop2');

	addEvent(drop2, 'dragover', cancel);
	addEvent(drop2, 'dragenter', cancel);

	addEvent(drop2, 'drop', function (e) {
	  if (e.preventDefault) e.preventDefault();
	  drop2.innerHTML = '<ul></ul>';
	  var li = document.createElement('li');
	  if (getDataType.checked == false && e.dataTransfer.types) {
		li.innerHTML = '<ul>';
		[].forEach.call(e.dataTransfer.types, function (type) {
		  li.innerHTML += '<li>' + entities(e.dataTransfer.getData(type) + ' (content-type: ' + type + ')') + '</li>';
		});
		li.innerHTML += '</ul>';
	  } else {
		li.innerHTML = e.dataTransfer.getData('Text');
	  }
	  
	  var ul = drop2.querySelector('ul');

	  if (ul.firstChild) {
		ul.insertBefore(li, ul.firstChild);
	  } else {
		ul.appendChild(li);
	  }
	  var addURL;
	  var addURL = e.dataTransfer.getData('Text');
	  console.log(addURL);
	  addURL = addURL.replace("youtube.com/watch?v=", "youtube.com/embed/");
	  current2 = addURL
	var vlc = document.getElementById("vlc2");
	vlc.remove();
	
		var newDiv = document.createElement('embed');
		
		newDiv.id = 'vlc2';
		newDiv.type = "application/x-vlc-plugin";
		newDiv.version = "VideoLAN.VLCPlugin.2";
		document.getElementById("tv2").appendChild(newDiv);
		var vlc = document.getElementById("vlc2");
		vlc.audio.toggleMute();
		vlc.playlist.stop();
		vlc.playlist.playItem( vlc.playlist.add(current2));
		console.log(current2);
		
	  drop2.innerHTML = '<ul></ul>';
	  drop2.innerHTML = '<li>'+ current2 +'</li>';
	  return false;
	});

var drop3 = document.querySelector('#drop3');
	addEvent(drop3, 'dragover', cancel);
	addEvent(drop3, 'dragenter', cancel);

	addEvent(drop3, 'drop', function (e) {
	  if (e.preventDefault) e.preventDefault(); 
	  drop3.innerHTML = '<ul></ul>';
	  var li = document.createElement('li');
	  if (getDataType.checked == false && e.dataTransfer.types) {
		li.innerHTML = '<ul>';
		[].forEach.call(e.dataTransfer.types, function (type) {
		  li.innerHTML += '<li>' + entities(e.dataTransfer.getData(type) + ' (content-type: ' + type + ')') + '</li>';
		});
		li.innerHTML += '</ul>';
	  } else {
		li.innerHTML = e.dataTransfer.getData('Text');
	  }
	  
	  var ul = drop3.querySelector('ul');

	  if (ul.firstChild) {
		ul.insertBefore(li, ul.firstChild);
	  } else {
		ul.appendChild(li);
	  }
	  var addURL;
	  var addURL = e.dataTransfer.getData('Text');
	  console.log(addURL);
	  addURL = addURL.replace("youtube.com/watch?v=", "youtube.com/embed/");
	  current3 = addURL
	var vlc = document.getElementById("vlc3");
	vlc.remove();
	
		var newDiv = document.createElement('embed');
		
		newDiv.id = 'vlc3';
		newDiv.type = "application/x-vlc-plugin";
		newDiv.version = "VideoLAN.VLCPlugin.2";
		document.getElementById("tv3").appendChild(newDiv);
		var vlc = document.getElementById("vlc3");
		vlc.audio.toggleMute();
		vlc.playlist.stop();
		vlc.playlist.playItem( vlc.playlist.add(current3));
		console.log(current3)

	  drop3.innerHTML = '<ul></ul>';
	  drop3.innerHTML = '<li>'+ current3 +'</li>';
	  return false;
	});

var drop4 = document.querySelector('#drop4');
	addEvent(drop4, 'dragover', cancel);
	addEvent(drop4, 'dragenter', cancel);

	addEvent(drop4, 'drop', function (e) {
	  if (e.preventDefault) e.preventDefault();
	  drop4.innerHTML = '<ul></ul>';
	  var li = document.createElement('li');
	  if (getDataType.checked == false && e.dataTransfer.types) {
		li.innerHTML = '<ul>';
		[].forEach.call(e.dataTransfer.types, function (type) {
		  li.innerHTML += '<li>' + entities(e.dataTransfer.getData(type) + ' (content-type: ' + type + ')') + '</li>';
		});
		li.innerHTML += '</ul>';
	  } else {
		li.innerHTML = e.dataTransfer.getData('Text');
	  }
	  
	  var ul = drop4
	  if (ul.firstChild) {
		ul.insertBefore(li, ul.firstChild);
	  } else {
		ul.appendChild(li);
	  }
	  var addURL;
	  var addURL = e.dataTransfer.getData('Text');
	  console.log(addURL);
	  addURL = addURL.replace("youtube.com/watch?v=", "youtube.com/embed/");
	  current4 = addURL
	var vlc = document.getElementById("vlc4");
	vlc.remove();
	
		var newDiv = document.createElement('embed');
		
		newDiv.id = 'vlc4';
		newDiv.type = "application/x-vlc-plugin";
		newDiv.version = "VideoLAN.VLCPlugin.2";
		document.getElementById("tv4").appendChild(newDiv);
		var vlc = document.getElementById("vlc4");
		vlc.audio.toggleMute();
		vlc.playlist.stop();
		vlc.playlist.playItem( vlc.playlist.add(current4));
		console.log(current4)

	  drop4.innerHTML = '<ul></ul>';
	  drop4.innerHTML = '<li>'+ current4 +'</li>';
	  return false;
	});

var drop5 = document.querySelector('#drop5');
	addEvent(drop5, 'dragover', cancel);
	addEvent(drop5, 'dragenter', cancel);

	addEvent(drop5, 'drop', function (e) {
	  if (e.preventDefault) e.preventDefault(); 
	  drop5.innerHTML = '<ul></ul>';
	  var li = document.createElement('li');
	  if (getDataType.checked == false && e.dataTransfer.types) {
		li.innerHTML = '<ul>';
		[].forEach.call(e.dataTransfer.types, function (type) {
		  li.innerHTML += '<li>' + entities(e.dataTransfer.getData(type) + ' (content-type: ' + type + ')') + '</li>';
		});
		li.innerHTML += '</ul>';
	  } else {
		li.innerHTML = e.dataTransfer.getData('Text');
	  }
	  
	  var ul = drop5
	  if (ul.firstChild) {
		ul.insertBefore(li, ul.firstChild);
	  } else {
		ul.appendChild(li);
	  }
	  var addURL;
	  var addURL = e.dataTransfer.getData('Text');
	  console.log(addURL);
	  addURL = addURL.replace("youtube.com/watch?v=", "youtube.com/embed/");
	  current5 = addURL
	var vlc = document.getElementById("vlc5");
	vlc.remove();
	
		var newDiv = document.createElement('embed');
		
		newDiv.id = 'vlc5';
		newDiv.type = "application/x-vlc-plugin";
		newDiv.version = "VideoLAN.VLCPlugin.2";
		document.getElementById("tv5").appendChild(newDiv);
		var vlc = document.getElementById("vlc5");
		vlc.audio.toggleMute();
		vlc.playlist.stop();
		vlc.playlist.playItem( vlc.playlist.add(current5));
		console.log(current5)

	  drop5.innerHTML = '<ul></ul>';
	  drop5.innerHTML = '<li>'+ current5 +'</li>';
	  return false;
	});

var drop6 = document.querySelector('#drop6');addEvent(drop6, 'dragover', cancel);
	addEvent(drop6, 'dragenter', cancel);

	addEvent(drop6, 'drop', function (e) {
	  if (e.preventDefault) e.preventDefault();
	  drop6.innerHTML = '<ul></ul>';
	  var li = document.createElement('li');
	  if (getDataType.checked == false && e.dataTransfer.types) {
		li.innerHTML = '<ul>';
		[].forEach.call(e.dataTransfer.types, function (type) {
		  li.innerHTML += '<li>' + entities(e.dataTransfer.getData(type) + ' (content-type: ' + type + ')') + '</li>';
		});
		li.innerHTML += '</ul>';
	  } else {
		li.innerHTML = e.dataTransfer.getData('Text');
	  }
	  
	  var ul = drop6
	  if (ul.firstChild) {
		ul.insertBefore(li, ul.firstChild);
	  } else {
		ul.appendChild(li);
	  }
	  var addURL;
	  var addURL = e.dataTransfer.getData('Text');
	  console.log(addURL);
	  addURL = addURL.replace("youtube.com/watch?v=", "youtube.com/embed/");
	  current6 = addURL
	var vlc = document.getElementById("vlc6");
	vlc.remove();
	
		var newDiv = document.createElement('embed');
		
		newDiv.id = 'vlc6';
		newDiv.type = "application/x-vlc-plugin";
		newDiv.version = "VideoLAN.VLCPlugin.2";
		document.getElementById("tv6").appendChild(newDiv);
		var vlc = document.getElementById("vlc6");
		vlc.audio.toggleMute();
		vlc.playlist.stop();
		vlc.playlist.playItem( vlc.playlist.add(current6));
		console.log(current6)

	  drop6.innerHTML = '<ul></ul>';
	  drop6.innerHTML = '<li>'+ current6 +'</li>';
	  return false;
	});

var drop7 = document.querySelector('#drop7');

	addEvent(drop7, 'dragover', cancel);
	addEvent(drop7, 'dragenter', cancel);

	addEvent(drop7, 'drop', function (e) {
	  if (e.preventDefault) e.preventDefault();
	  drop7.innerHTML = '<ul></ul>';
	  var li = document.createElement('li');
	  if (getDataType.checked == false && e.dataTransfer.types) {
		li.innerHTML = '<ul>';
		[].forEach.call(e.dataTransfer.types, function (type) {
		  li.innerHTML += '<li>' + entities(e.dataTransfer.getData(type) + ' (content-type: ' + type + ')') + '</li>';
		});
		li.innerHTML += '</ul>';
	  } else {
		li.innerHTML = e.dataTransfer.getData('Text');
	  }
	  
	  var ul = drop7
	  if (ul.firstChild) {
		ul.insertBefore(li, ul.firstChild);
	  } else {
		ul.appendChild(li);
	  }
	  var addURL;
	  var addURL = e.dataTransfer.getData('Text');
	  console.log(addURL);
	  addURL = addURL.replace("youtube.com/watch?v=", "youtube.com/embed/");
	  current7 = addURL
	var vlc = document.getElementById("vlc7");
	vlc.remove();
	
		var newDiv = document.createElement('embed');
		
		newDiv.id = 'vlc7';
		newDiv.type = "application/x-vlc-plugin";
		newDiv.version = "VideoLAN.VLCPlugin.2";
		document.getElementById("tv7").appendChild(newDiv);
		var vlc = document.getElementById("vlc7");
		vlc.audio.toggleMute();
		vlc.playlist.stop();
		vlc.playlist.playItem( vlc.playlist.add(current7));
		console.log(current7)

	  drop7.innerHTML = '<ul></ul>';
	  drop7.innerHTML = '<li>'+ current7 +'</li>';
	  return false;
	});

var drop8 = document.querySelector('#drop8');

	addEvent(drop8, 'dragover', cancel);
	addEvent(drop8, 'dragenter', cancel);

	addEvent(drop8, 'drop', function (e) {
	  if (e.preventDefault) e.preventDefault();
	  drop8.innerHTML = '<ul></ul>';
	  var li = document.createElement('li');
	  
	  if (getDataType.checked == false && e.dataTransfer.types) {
		li.innerHTML = '<ul>';
		[].forEach.call(e.dataTransfer.types, function (type) {
		  li.innerHTML += '<li>' + entities(e.dataTransfer.getData(type) + ' (content-type: ' + type + ')') + '</li>';
		});
		li.innerHTML += '</ul>';
	  } else {
		li.innerHTML = e.dataTransfer.getData('Text');
	  }
	  
	  var ul = drop8
	  if (ul.firstChild) {
		ul.insertBefore(li, ul.firstChild);
	  } else {
		ul.appendChild(li);
	  }
	  var addURL;
	  var addURL = e.dataTransfer.getData('Text');
	  console.log(addURL);
	  addURL = addURL.replace("youtube.com/watch?v=", "youtube.com/embed/");
	  current8 = addURL
	var vlc = document.getElementById("vlc8");
	vlc.remove();
	
		var newDiv = document.createElement('embed');
		
		newDiv.id = 'vlc8';
		newDiv.type = "application/x-vlc-plugin";
		newDiv.version = "VideoLAN.VLCPlugin.2";
		document.getElementById("tv8").appendChild(newDiv);
		var vlc = document.getElementById("vlc8");
		vlc.audio.toggleMute();
		vlc.playlist.stop();
		vlc.playlist.playItem( vlc.playlist.add(current8));
		console.log(current8);
	  drop8.innerHTML = '<ul></ul>';
	  drop8.innerHTML = '<li>'+ current8 +'</li>';
	  return false;
	});

var drop9 = document.querySelector('#drop9');

	addEvent(drop9, 'dragover', cancel);
	addEvent(drop9, 'dragenter', cancel);

	addEvent(drop9, 'drop', function (e) {
	  if (e.preventDefault) e.preventDefault();
	  drop9.innerHTML = '<ul></ul>';
	  var li = document.createElement('li');
	  if (getDataType.checked == false && e.dataTransfer.types) {
		li.innerHTML = '<ul>';
		[].forEach.call(e.dataTransfer.types, function (type) {
		  li.innerHTML += '<li>' + entities(e.dataTransfer.getData(type) + ' (content-type: ' + type + ')') + '</li>';
		});
		li.innerHTML += '</ul>';
	  } else {
		li.innerHTML = e.dataTransfer.getData('Text');
	  }
	  
	  var ul = drop9
	  if (ul.firstChild) {
		ul.insertBefore(li, ul.firstChild);
	  } else {
		ul.appendChild(li);
	  }
	  var addURL;
	  var addURL = e.dataTransfer.getData('Text');
	  console.log(addURL);
	  addURL = addURL.replace("youtube.com/watch?v=", "youtube.com/embed/");
	  current9 = addURL
	var vlc = document.getElementById("vlc9");
	vlc.remove();
	
		var newDiv = document.createElement('embed');
		
		newDiv.id = 'vlc9';
		newDiv.type = "application/x-vlc-plugin";
		newDiv.version = "VideoLAN.VLCPlugin.2";
		document.getElementById("tv9").appendChild(newDiv);
		var vlc = document.getElementById("vlc9");
		vlc.audio.toggleMute();
		vlc.playlist.stop();
		vlc.playlist.playItem( vlc.playlist.add(current9));
		console.log(current9)

	  drop9.innerHTML = '<ul></ul>';
	  drop9.innerHTML = '<li>'+ current9 +'</li>';
	  return false;
	});


var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
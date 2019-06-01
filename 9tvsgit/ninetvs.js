8888

window.goodstuff = []
window.end=''

function next(arg){
		let video = document.getElementById('video'+arguments[0]);
		document.getElementById(eval("'drop'+arguments[0]")).innerHTML = '<li>'+ window.goodstuff[0] +'</li>';
		let nexted=window.goodstuff[0]
		if ((/m3u|\.ts/).test(window.goodstuff[0])){
			console.log('next '+arguments[0]+': m3u/ts found...')
			loadhls(arguments[0]);
		}
		if ((/m3u|\.ts/).test(window.goodstuff[0])){
			console.log('next '+arguments[0]+': m3u/ts found...')
			loadhls(arguments[0]);


		}else if ((/\.mp4$/).test(window.goodstuff[0])){
			 console.log('mp4 found...');
			video.src = window.goodstuff.shift();
			console.log('next '+arguments[0]+': '+video.src);
			video.type = 'video/mp4';
			video.play();
			console.log('loaded');

		}else if ((/\.mkv$/).test(window.goodstuff[0])){
			video.src = window.goodstuff.shift();
			console.log('next '+arguments[0]+': mkv not supported on Firefox')
			video.type = 'video/x-matroska';
			video.play();

		}else if (nexted==window.goodstuff[0]){
			console.log(window.goodstuff.shift()+' was unplayable, next...')
		}


};

function nextall(){
    let i;
    for (i = 1; i < 10; i++) {
      let video = document.getElementById('video'+i);
      next(i);
    }
};

function start(arg){
		let video = document.getElementById('video'+arguments[0]);
		video.play();
};

function startall(){
    let i;
    for (i = 1; i < 10; i++) {
      let video = document.getElementById('video'+i);
      start(i);
    }
};

function skip(arg){
		let video = document.getElementById('video'+arguments[0]);
		video.currentTime = video.currentTime + 30;
};

function skipall(){
    let i;
    for (i = 1; i < 10; i++) {
      let video = document.getElementById('video'+i);
      skip(i);
    }
};

function stopall(){
    let i;
    for (i = 1; i < 10; i++) {
      let video = document.getElementById('video'+i);
      stop(i);
    }
};

function stop(arg){
    let video = document.getElementById('video'+arguments[0]);
    video.load();
};

function loadhls(arg){
   let video = document.getElementById('video'+arguments[0]);
   if(Hls.isSupported()) {
	   console.log('HLS is supported, Loading: '+window.goodstuff[0]);
          let hls = new Hls();
          hls.loadSource(window.goodstuff.shift());
          hls.attachMedia(video);
          hls.on(Hls.Events.MANIFEST_PARSED,function() {
            video.play();
        });
       }
       // hls.js is not supported on platforms that do not have Media Source Extensions (MSE) enabled.
       // When the browser has built-in HLS support (check using `canPlayType`), we can provide an HLS manifest (i.e. .m3u8 URL) directly to the video element throught the `src` property.
       // This is using the built-in support of the plain video element, without using hls.js.
        else if (video.canPlayType('application/vnd.apple.mpegurl')) {
          video.src = window.goodstuff.shift();
          video.addEventListener('canplay',function() {
            video.play();
          });
        }
}

function shuffle(a) { let j, x, i; for (i = a.length; i; i--) { j = Math.floor(Math.random() * i); x = a[i - 1]; a[i - 1] = a[j]; a[j] = x; }; console.log('shuffling...')}



document.getElementById("filebutton").onclick = function() {
    document.getElementById("files").click();
}

document.getElementById("next-1").onclick = function() {
  next('1');
};
document.getElementById("next-2").onclick = function() {
  next('2');
};
document.getElementById("next-3").onclick = function() {
  next('3');
};
document.getElementById("next-4").onclick = function() {
  next('4');
};
document.getElementById("next-5").onclick = function() {
  next('5');
};
document.getElementById("next-6").onclick = function() {
  next('6');
};
document.getElementById("next-7").onclick = function() {
  next('7');
};
document.getElementById("next-8").onclick = function() {
  next('8');
};
document.getElementById("next-9").onclick = function() {
  next('9');
};
document.getElementById("nextall").onclick =  nextall;


document.getElementById("start-1").onclick = function() {
  start('1');
};
document.getElementById("start-2").onclick = function() {
  start('2');
};
document.getElementById("start-3").onclick = function() {
  start('3');
};
document.getElementById("start-4").onclick = function() {
  start('4');
};
document.getElementById("start-5").onclick = function() {
  start('5');
};
document.getElementById("start-6").onclick = function() {
  start('6');
};
document.getElementById("start-7").onclick = function() {
  start('7');
};
document.getElementById("start-8").onclick = function() {
  start('8');
};
document.getElementById("start-9").onclick = function() {
  start('9');
};
document.getElementById("startall").onclick =  startall;

document.getElementById("stop-1").onclick = function() {
  stop('1');
};
document.getElementById("stop-2").onclick = function() {
  stop('2');
};
document.getElementById("stop-3").onclick = function() {
  stop('3');
};
document.getElementById("stop-4").onclick = function() {
  stop('4');
};
document.getElementById("stop-5").onclick = function() {
  stop('5');
};
document.getElementById("stop-6").onclick = function() {
  stop('6');
};
document.getElementById("stop-7").onclick = function() {
  stop('7');
};
document.getElementById("stop-8").onclick = function() {
  stop('8');
};
document.getElementById("stop-9").onclick = function() {
  stop('9');
};
document.getElementById("stopall").onclick =  stopall;

document.getElementById("skip-1").onclick = function() {
  skip('1');
};
document.getElementById("skip-2").onclick = function() {
  skip('2');
};
document.getElementById("skip-3").onclick = function() {
  skip('3');
};
document.getElementById("skip-4").onclick = function() {
  skip('4');
};
document.getElementById("skip-5").onclick = function() {
  skip('5');
};
document.getElementById("skip-6").onclick = function() {
  skip('6');
};
document.getElementById("skip-7").onclick = function() {
  skip('7');
};
document.getElementById("skip-8").onclick = function() {
  skip('8');
};
document.getElementById("skip-9").onclick = function() {
  skip('9');
};
document.getElementById("skipall").onclick =  skipall;

document.getElementById("shuffle").onclick = function() {
  shuffle(window.goodstuff);
};

document.getElementById("loopnext").onclick = function() {
  window.end='next';
	console.log('loop next enabled');
};


document.getElementById("loopsame").onclick = function() {
  window.end='restartsame';
	console.log('loop restart enabled');
};


document.getElementById("loopoff").onclick = function() {
  window.end='off';
	console.log('loop off');
};

function handleFileSelect(evt) {
    let files = evt.target.files; // FileList object

    // Loop through the FileList
    for (let i = 0, f; f = files[i]; i++) {

        let reader = new FileReader();

      // Closure to capture the file information.
        reader.onload = (function(theFile) {
			return function(e) {
				let vlc = document.getElementById("vlc");
				let playlistUL = reader.result;
				let plarray = playlistUL.split(/\r\n/);
				let exts = [/ext/i]
				let filteredArr = plarray.filter(function(val) {
					return !(val === "");
				});
				let newitems = filteredArr.filter(function (text) {
					return !exts.some(function (regex) {
						return regex.test(text);
					});
				});
				let urls = [];

				combined = newitems.concat(window.goodstuff);
				window.goodstuff = combined;
				for (let i=0; i < (window.goodstuff.length)-1; i++) {
					let re = new RegExp("file:///");
					let regex = /^(?:(?:https?|ftp|rtmp|rtsp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/i;
					if (regex.test(window.goodstuff[i])) {
						console.log(regex.test(window.goodstuff[i]));
						urls[i] = window.goodstuff[i];
					} else if (re.test(window.goodstuff[i])) {
					} else {

						window.goodstuff[i] = 'file:///' + window.goodstuff[i];
					}

				}
				console.log(urls);
				console.log(window.goodstuff);
				;
			};
        })(f);

        // Read in the file as a data URL.
		// Can perhaps instead use object URLs see https://developer.mozilla.org/en-US/docs/Using_files_from_web_applications#Using_object_URLs
        reader.readAsText(f);
    }
  }

document.getElementById('files').addEventListener('change', handleFileSelect, false);



document.getElementById('video1').addEventListener('ended',autoNext1,false);
    function autoNext1(e) {
			if (window.end.match('next')){
		    console.log('video1 autonext');
			  next('1');
			} else if (window.end.match('restart')){
				console.log('video1 autorestart');
				start('1');
			}
}

document.getElementById('video2').addEventListener('ended',autoNext2,false);
    function autoNext2(e) {
			if (window.end.match('next')){
		    console.log('video2 autonext');
			  next('2');
			} else if (window.end.match('restart')){
				console.log('video2 autorestart');
				start('2');
			}
}

document.getElementById('video3').addEventListener('ended',autoNext3,false);
    function autoNext3(e) {
			if (window.end.match('next')){
		    console.log('video3 autonext');
			  next('3');
			} else if (window.end.match('restart')){
				console.log('video3 autorestart');
				start('3');
			}
}

document.getElementById('video4').addEventListener('ended',autoNext4,false);
    function autoNext4(e) {
			if (window.end.match('next')){
		    console.log('video4 autonext');
			  next('4');
			} else if (window.end.match('restart')){
				console.log('video4 autorestart');
				start('4');
			}
}

document.getElementById('video5').addEventListener('ended',autoNext5,false);
    function autoNext5(e) {
			if (window.end.match('next')){
		    console.log('video5 autonext');
			  next('5');
			} else if (window.end.match('restart')){
				console.log('video5 autorestart');
				start('5');
			}
}

document.getElementById('video6').addEventListener('ended',autoNext6,false);
    function autoNext6(e) {
			if (window.end.match('next')){
		    console.log('video6 autonext');
			  next('6');
			} else if (window.end.match('restart')){
				console.log('video6 autorestart');
				start('6');
			}
}

document.getElementById('video7').addEventListener('ended',autoNext7,false);
    function autoNext7(e) {
			if (window.end.match('next')){
		    console.log('video7 autonext');
			  next('7');
			} else if (window.end.match('restart')){
				console.log('video7 autorestart');
				start('7');
			}
}

document.getElementById('video8').addEventListener('ended',autoNext8,false);
    function autoNext8(e) {
			if (window.end.match('next')){
		    console.log('video8 autonext');
			  next('8');
			} else if (window.end.match('restart')){
				console.log('video8 autorestart');
				start('8');
			}
}

document.getElementById('video9').addEventListener('ended',autoNext9,false);
    function autoNext9(e) {
			if (window.end.match('next')){
		    console.log('video9 autonext');
			  next('9');
			} else if (window.end.match('restart')){
				console.log('video9 autorestart');
				start('9');
			}
}

document.getElementById('video1').addEventListener("error", errfn);
function errfn(arg){
	console.log('video1 media unplayable, trying the next...');
	setTimeout(function(){
	next('1');
	}, 2000);
};
document.getElementById('video2').addEventListener("error", errfn2);
function errfn2(arg){
	console.log('video2 media unplayable, trying the next...');
	setTimeout(function(){
	next('2');
	}, 2000);
};
document.getElementById('video3').addEventListener("error", errfn3);
function errfn3(arg){
	console.log('video3 media unplayable, trying the next...');
	setTimeout(function(){
	next('3');
	}, 2000);
};
document.getElementById('video4').addEventListener("error", errfn4);
function errfn4(arg){
	console.log('video4 media unplayable, trying the next...');
	setTimeout(function(){
	next('4');
	}, 2000);
};
document.getElementById('video5').addEventListener("error", errfn5);
function errfn5(arg){
	console.log('video5 media unplayable, trying the next...');
	setTimeout(function(){
	next('5');
	}, 2000);
};
document.getElementById('video6').addEventListener("error", errfn6);
function errfn6(arg){
	console.log('video6 media unplayable, trying the next...');
	setTimeout(function(){
	next('6');
	}, 2000);
};
document.getElementById('video7').addEventListener("error", errfn7);
function errfn7(arg){
	console.log('video7 media unplayable, trying the next...');
	setTimeout(function(){
	next('7');
	}, 2000);
};
document.getElementById('video8').addEventListener("error", errfn8);
function errfn8(arg){
	console.log('video8 media unplayable, trying the next...');
	setTimeout(function(){
	next('8');
	}, 2000);
};
document.getElementById('video9').addEventListener("error", errfn9);
function errfn9(arg){

	console.log('video9 media unplayable, trying the next...');
	setTimeout(function(){
	next('9');
	}, 2000);
};

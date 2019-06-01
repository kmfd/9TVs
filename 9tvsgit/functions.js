function next(){
	  console.log(arguments[0]);
		var video = document.getElementById(arguments[0]);
		video.src = 'samples/Sample.mp4';
		video.type = 'video/mp4';
};

function startvid(){
		var video = document.getElementById(arguments[0]);
		video.play();
};

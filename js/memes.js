var memes = ["barber.png", "bst.jpeg", "cage.jpg", "cookie.png", "java.png", "jesse.jpg", "logn.png", "money,jpg", "muppet.jpg", "ryan.png", "stack.png", "trump.jpeg", "web.jpg"];

function dankIt(memes) {
	var randMeme = memes[Math.floor(Math.random() * memes.length)];
	var img = document.createElement("img");
	var imgShortcut = "./img/";
	img.src = imgShortcut.concat(randMeme);
	document.getElementById("memesGoesHere").appendChild(img);
}
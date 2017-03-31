# MemesGenerator
A basic webpage that generates random memes using basic JavaScript. This was created for educational purposes in order to show the CISC282 Web Development course a cool application of JavaScript.

If you would like the template of this version, please click [here](https://github.com/weedenDev/282Demo). This tutorial assumes you know at least the basic knowledge of HTML and CSS. There is no experience needed within this tutorial to learn JavaScript.

### Step One
Clone or download the template.

### Step Two
Open up **index.html** and the **memes.js** and **memes.css** files in the /js and /css folder respectively.

### Step Three
In the **memes.css** file, we will be adding the styling first. Please add:
```
body {
	background-color: #efefef;
	padding-top: 1.8rem;
	font-family: 'Oswald', sans-serif;
}

div#memesGoesHere {
	padding: 1.4rem 0 1.4rem 0;
}
```
### Step Four
In the **index.html** file, add ```id="memesGoesHere"``` in the first div tag on line 19. It should look like this: ```<div id="memesGoesHere"></div>```. What the id tag will do is help us identify the element when we are writing the function to generate random memes from an array. It will also allow us to place the meme/image there.

### Step Five
In your **memes.js** file, you will see an array already there. Let's add a function to make use of that array! Create a function by writing:
```
function memeIt(memes) {
   //code goes here
}
```
### Step Six
We are now going to create a variable the length of the meme array. Within the function, add ```var randMeme = memes[Math.floor(Math.random() * memes.length)];```. Your code should now look like this:

```
function memeIt(memes) {
   var randMeme = memes[Math.floor(Math.random() * memes.length)];
}
```
To break down what happens within this variable, ```memes[index]``` is the element we want in the array, and ```index``` is just ```Math.floor(Math.random() * memes.length)```. Within the square bracket, we call both ```Math.floor``` and ```Math.random()``` because ```Math.random()``` only generates a number in decimal value between 0 and 1 and we use floor to bring it down to the next integer. Once a random value between 0 and 1 is generated, it will be multiplied by the array's length then floor down. That will now be our index value.

If you are wondering why we want this inside our function than outside of it, it is because everytime we click the button on the webpage to generate a new meme to appear, we want a new index value than having the same one be repeated.

### Step Seven
Add ```var img = document.createElement("img");``` and ```var imgShortcut = "./img/";```. What ```document.createElement()``` do is create an element. In our case we created the ```<img>``` tag.

### Step Eight
Add ```	img.setAttribute("class", "img-fluid");``` and ```img.src = imgShortcut.concat(randMeme);```. By using ```setAttribute()```, we are adding a class to the image element. In BootStrap 4 Alpha 6, the class ```img-fluid``` makes the image responsive. ```img.src = imgShortcut.concat(randMeme);``` will concatenate two strings together. E.g. if you have elementA as "hello" and elementB as "World", by concatenating them, the result will be "helloWorld".

### Step Nine
Let's make the image appear on our webpage! We will now add the following:
```
document.getElementById("memesGoesHere").innerHTML = "";
document.getElementById("memesGoesHere").appendChild(img);
```
What ```document.getElementById("memesGoesHere").innerHTML = "";``` do is set the content of the element with the id "memesGoesHere" as blank. Then by using ```document.getElementById("memesGoesHere").appendChild(img);```, we are appending/adding the img variable containing the img element to the element id as "memesGoesHere".

Now before we move back to **index.html**, let's check our JS code. Your code should now look like this:
```
var memes = ["barber.png", "bst.jpeg", "cage.jpg", "cookie.png", "java.jpg", "logn.png", "money.jpg", "muppet.jpg", "ryan.png", "stack.png", "source.png", "itcrowd.jpeg", "web.jpg"];

function memeIt(memes) {
	var randMeme = memes[Math.floor(Math.random() * memes.length)];
	var img = document.createElement("img");
	var imgShortcut = "./img/";
	img.setAttribute("class", "img-fluid");
	img.src = imgShortcut.concat(randMeme);
	document.getElementById("memesGoesHere").innerHTML = "";
	document.getElementById("memesGoesHere").appendChild(img);
}
```

### Step Ten
Let's make the button look cool! Add the class ```btn btn-danger btn-lg``` to the button tag. This will make the button red and large. Next we will add the JavaScript function! Add ```onclick="memeIt(memes);"``` to the button tag. What this does is when you click the button, it will call the JavaScritp function called memeIt which will generate a meme for you.

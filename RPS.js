const staticScorsese = document.getElementById('scorsese-static').innerHTML, hoverScorsese = document.getElementById('scorsese-hover').innerHTML;

staticScorsese.onmouseover = function(){
  hoverScorsese.style.display = "block";
  staticScorsese.style.display = "none";
}

hoverScorsese.onmouseover = function(){
  hoverScorsese.style.display = "block";
  staticScorsese.style.display = "none";
}

staticScorsese.onmouseout = function(){
  hoverScorsese.style.display = "none";
  staticScorsese.style.display = "block";
}

hoverScorsese.onmouseout = function(){
  hoverScorsese.style.display = "none";
  staticScorsese.style.display = "block";
}








// // document.getElementById('score-counter').innerHTML = new Date().toDateString();

// const userIcons = document.getElementById("#user-scorsese-icon").innerHTML;
// const userIcons = document.images["#user-icon-choices"]
// const scorseseHoverImage = document.getElementById("#scorsese-hover-image").innerHTML;
// const staticScorseseImage = document.getElementById("#scorsese-static-image").innerHTML;
// // function isPressed() {
// // 		this.classList.add('is-pressed');
// // 	}

// // function isDepressed() {
// // 		this.classList.remove('is-pressed');
// // 	}

// // userIcons.forEach(user-scorsese-i => {
// // // 		button.addEventListener('mousedown', isPressed);
// // // 		button.addEventListener('mouseup', isDepressed);
// // // 		button.addEventListener('mouseout', isDepressed);
// // 		// button.addEventListener('click', buttonClick);
// // 		button.addEventListener('click', buttonClick);
// // 	});


// userIcons.addEventListener('mouseover', showHoverScorsese);



// function showHoverScorsese('show-scorsese-image') {
//     document.getElementById('scorsese-hover-image')style.visibility = "visible";
//   }

  // function hideStaticScorsese() {
  //   document.getElementById('scorsese-static').style.visibility = "hidden";
  // }

  // document.getElementById('scorsese-hover-image').addEventListener('mouseover', showHoverScorsese);
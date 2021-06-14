
document.addEventListener('DOMContentLoaded', function() {
 
// When the user scrolls the page, execute myFunction
  window.onscroll = function() {scrollFunction(), navFunction()};

//Get the button
  var scrollToTopbutton = document.getElementById("scrollToTopBtn");

  // When the user scrolls down 20px from the top of the document, show the button
  // window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollToTopbutton.style.display = "block";
    } else {
      scrollToTopbutton.style.display = "none";
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  scrollToTopbutton.onclick = function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }


  // Get the navbar
  var navbar = document.getElementById("navbar");

  // Get the offset position of the navbar
  var sticky = navbar.offsetTop;

  // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function navFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  }

})


  //Get Back to Top Button to Hide
  var backtotopbutton = document.getElementById("scrollToTopBtn");

    // create references to the modal...
  var imgmodal = document.getElementById("myImgModal");
  // to all images -- note I'm using a class!
  var images = document.getElementsByClassName("myImages");
  // the image in the modal
  var modalImg = document.getElementById("img01");
  // and the caption in the modal
  var imgCaptionText = document.getElementById("imgCaption");
  //get body of site to stop scrolling
  var docbody = document.getElementById("body");
  //get navbar of site to hide it
  var navbar = document.getElementById("navbar");

    // Go through all of the images with our custom class
    for (var i = 0; i < images.length; i++) {
      var img = images[i];
      // and attach our click listener for this image.
      img.onclick = function(evt) {
        navbar.style.display = "none";
        docbody.style.overflow = 'hidden';
        imgmodal.style.display = "block";
        backtotopbutton.style.display = "none";
        modalImg.src = this.src;
        imgCaptionText.innerHTML = this.alt;
      }
    }

    var imagespan = document.getElementsByClassName("imgclose")[0];

    imagespan.onclick = function() {
      navbar.style.display = "block";
      docbody.style.overflow = 'auto';
      imgmodal.style.display = "none";
      backtotopbutton.style.display = "block";
    }

      // create references to the modal...
  var videomodal = document.getElementById("myVideoModal");
  // to all images -- note I'm using a class!
  var videos = document.getElementsByClassName("myVideos");
  // the image in the modal
  var modalVid = document.getElementById("vid01");
  // and the caption in the modal
  var videoCaptionText = document.getElementById("videoCaption");
  //get body of site to stop scrolling
  var docbody = document.getElementById("body");
  //get navbar of site to hide it
  var navbar = document.getElementById("navbar");

    // Go through all of the images with our custom class
    for (var i = 0; i < videos.length; i++) {
      var vid = videos[i];
      // and attach our click listener for this image.
      vid.onclick = function(evt) {
        navbar.style.display = "none";
        docbody.style.overflow = 'hidden';
        videomodal.style.display = "block";
        backtotopbutton.style.display = "none";
        modalVid.src = this.src;
        videoCaptionText.innerHTML = this.title;
      }
    }

    
    var videospan = document.getElementsByClassName("videoclose")[0];
    var videotopause = document.getElementById("vid01");
    
    videospan.onclick = function() {
      videotopause.pause();
      navbar.style.display = "block";
      docbody.style.overflow = 'auto';
      videomodal.style.display = "none";
      backtotopbutton.style.display = "block";
    }
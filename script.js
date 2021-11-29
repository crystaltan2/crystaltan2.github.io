let carouselWidth = 380;


let prevButton = document.getElementById("button-previous");
let nextButton = document.getElementById("button-next");
let imageRow = document.getElementById("carousel-journal");

let imageNum = 0;

function showNextImage() {
	imageNum += 1;
	checkButtons();
	let calcleft = -carouselWidth * imageNum;
	imageRow.style.left = calcleft + "px";

}

nextButton.onclick = showNextImage;

function showPrevImage() {
	imageNum -= 1;
	checkButtons();
	let calcleft = -carouselWidth * imageNum;
	imageRow.style.left = calcleft + "px";
}

prevButton.onclick=showPrevImage;

let totalImages = document.getElementsByClassName("journal-page").length;

function checkButtons() {
	if (imageNum == 0) {
		prevButton.classList.add("hidden")
	}
	else if (prevButton.classList.contains("hidden")) {
		prevButton.classList.remove("hidden")
	}
	if (imageNum == totalImages - 1) {
		nextButton.classList.add("hidden")
	}
	else if (nextButton.classList.contains("hidden")) {
		nextButton.classList.remove("hidden")
	}
}

let sticky = document.getElementById("sticky1");

sticky.onmousedown = function(event) {
    let shiftX = event.clientX - sticky.getBoundingClientRect().left;
    let shiftY = event.clientY - sticky.getBoundingClientRect().top;
    sticky.style.position = 'absolute';
    sticky.style.zIndex = 1000;
    document.body.append(sticky);
  
    moveAt(event.pageX, event.pageY);
  
    function moveAt(pageX, pageY) {
      sticky.style.left = pageX - shiftX + 'px';
      sticky.style.top = pageY - shiftY + 'px';
    }
  
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
  
    document.addEventListener('mousemove', onMouseMove);
  
    sticky.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      sticky.onmouseup = null;
    };
  
  };
  
  sticky.ondragstart = function() {
    return false;
  };

  let sticky1 = document.getElementById("sticky2");

  sticky1.onmousedown = function(event) {
      let shiftX = event.clientX - sticky1.getBoundingClientRect().left;
      let shiftY = event.clientY - sticky1.getBoundingClientRect().top;
      sticky1.style.position = 'absolute';
      sticky1.style.zIndex = 1000;
      document.body.append(sticky1);
    
      moveAt(event.pageX, event.pageY);
    
      function moveAt(pageX, pageY) {
        sticky1.style.left = pageX - shiftX + 'px';
        sticky1.style.top = pageY - shiftY + 'px';
      }
    
      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
      }
    
      document.addEventListener('mousemove', onMouseMove);
    
      sticky1.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        sticky1.onmouseup = null;
      };
    
    };
    
    sticky1.ondragstart = function() {
      return false;
    };

    let sticky2 = document.getElementById("sticky3");

sticky2.onmousedown = function(event) {
    let shiftX = event.clientX - sticky2.getBoundingClientRect().left;
    let shiftY = event.clientY - sticky2.getBoundingClientRect().top;
    sticky2.style.position = 'absolute';
    sticky2.style.zIndex = 1000;
    document.body.append(sticky2);
  
    moveAt(event.pageX, event.pageY);
  
    function moveAt(pageX, pageY) {
      sticky2.style.left = pageX - shiftX + 'px';
      sticky2.style.top = pageY - shiftY + 'px';
    }
  
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
  
    document.addEventListener('mousemove', onMouseMove);
  
    sticky2.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      sticky2.onmouseup = null;
    };
  
  };
  
  sticky2.ondragstart = function() {
    return false;
  };

  let sticky3 = document.getElementById("sticky4");

sticky3.onmousedown = function(event) {
    let shiftX = event.clientX - sticky3.getBoundingClientRect().left;
    let shiftY = event.clientY - sticky3.getBoundingClientRect().top;
    sticky3.style.position = 'absolute';
    sticky3.style.zIndex = 1000;
    document.body.append(sticky3);
  
    moveAt(event.pageX, event.pageY);
  
    function moveAt(pageX, pageY) {
      sticky3.style.left = pageX - shiftX + 'px';
      sticky3.style.top = pageY - shiftY + 'px';
    }
  
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
  
    document.addEventListener('mousemove', onMouseMove);
  
    sticky3.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      sticky3.onmouseup = null;
    };
  
  };
  
  sticky3.ondragstart = function() {
    return false;
  };






  
  

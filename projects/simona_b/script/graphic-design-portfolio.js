let nav = document.getElementById("hamburger");
nav.addEventListener("click", navigation);


function navigation() { //mobile navigation
    let navLinks = document.getElementById("navLinks");

    if (navLinks.style.display === "none") {
        navLinks.style.display = "block";
    }else {
        navLinks.style.display = "none";
    };
};

// PROJECT IMAGE SLIDESHOWS
function slideShow() {
    let slideIndex1 = document.getElementById("countProj1");
    let proj1 = document.getElementById("slideProj1");
    let imgCount1 = parseInt(slideIndex1.textContent);

    let slideIndex2 = document.getElementById("countProj2");
    let proj2 = document.getElementById("slideProj2");
    let imgCount2 = parseInt(slideIndex2.textContent);

    let slideIndex3 = document.getElementById("countProj3");
    let proj3 = document.getElementById("slideProj3");
    let imgCount3 = parseInt(slideIndex3.textContent);

  
    const projData1 = ["", 
    "./images/DearData/Postcard 1 Back.jpg", "./images/DearData/Postcard 1 Front.jpg", 
    "./images/DearData/Postcard 2 Back.jpg", "./images/DearData/Postcard 2 Front.jpg", 
    "./images/DearData/Postcard 3 Back.jpg", "./images/DearData/Postcard 3 Front.jpg", 
    "./images/DearData/Postcard 4 Back.jpg", "./images/DearData/Postcard 4 Front.jpg",
    "./images/DearData/Postcard 5 Back.jpg", "./images/DearData/Postcard 5 Front.jpg",
    "./images/DearData/Postcard 6 Back.jpg", "./images/DearData/Postcard 6 Front.jpg"];

    const projData2 = ["", 
    "./images/PlayByEar/Front cover.png", "./images/PlayByEar/Back cover.png", 
    "./images/PlayByEar/Pages 1 and 2.png", "./images/PlayByEar/Pages 3 and 4.png", 
    "./images/PlayByEar/Pages 5 and 6.png", "./images/PlayByEar/Pages 7 and 8.png"];

    const projData3 = ["", 
    "./images/FeelingBrandNew/Brand Guidelines.jpg", "./images/FeelingBrandNew/Brand Guidelines2.jpg", 
    "./images/FeelingBrandNew/Brand Guidelines3.jpg", "./images/FeelingBrandNew/Brand Guidelines4.jpg", 
    "./images/FeelingBrandNew/Brand Guidelines5.jpg", "./images/FeelingBrandNew/Brand Guidelines6.jpg", 
    "./images/FeelingBrandNew/Brand Guidelines7.jpg", "./images/FeelingBrandNew/Brand Guidelines8.jpg",
    "./images/FeelingBrandNew/Brand Guidelines9.jpg", "./images/FeelingBrandNew/Brand Guidelines10.jpg",
    "./images/FeelingBrandNew/Brand Guidelines11.jpg", "./images/FeelingBrandNew/Brand Guidelines12.jpg",
    "./images/FeelingBrandNew/Brand Guidelines13.jpg", "./images/FeelingBrandNew/Brand Guidelines14.jpg",
    "./images/FeelingBrandNew/Brand Guidelines15.jpg", "./images/FeelingBrandNew/Brand Guidelines16.jpg",
    "./images/FeelingBrandNew/Brand Guidelines17.jpg", "./images/FeelingBrandNew/Brand Guidelines18.jpg",
    "./images/FeelingBrandNew/Brand Guidelines19.jpg", "./images/FeelingBrandNew/Brand Guidelines20.jpg",
    "./images/FeelingBrandNew/Brand Guidelines21.jpg", "./images/FeelingBrandNew/Brand Guidelines22.jpg",
    "./images/FeelingBrandNew/Brand Guidelines23.jpg", "./images/FeelingBrandNew/Brand Guidelines24.jpg",
    "./images/FeelingBrandNew/Brand Guidelines25.jpg"];

    
    if (button === 'rightProj1') {
      if (imgCount1 != 12) {
        imgCount1++;
        proj1.src = projData1[imgCount1];
        slideIndex1.textContent = imgCount1;
      };
    }else if (button === 'leftProj1') {
      if (imgCount1 != 1) {
        proj1.src = projData1[--imgCount1];
        slideIndex1.textContent = imgCount1;
      };
    }else if (button === 'rightProj2') {
      if (imgCount2 != 6) {
        imgCount2++;
        proj2.src = projData2[imgCount2];
        slideIndex2.textContent = imgCount2;
      };
    }else if (button === 'leftProj2') {
      if (imgCount2 != 1) {
        proj2.src = projData2[--imgCount2];
        slideIndex2.textContent = imgCount2;
      };
    }else if (button === 'rightProj3') {
      if (imgCount3 != 25) {
        imgCount3++;
        proj3.src = projData3[imgCount3];
        slideIndex3.textContent = imgCount3;
      };
    }else if (button === 'leftProj3') {
      if (imgCount3 != 1) {
        proj3.src = projData3[--imgCount3];
        slideIndex3.textContent = imgCount3;
      };
    };
  };
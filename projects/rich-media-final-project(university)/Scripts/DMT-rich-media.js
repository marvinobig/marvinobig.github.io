function moNav () {
    let hamNav = document.getElementById("mobileContainer");

    if (hamNav.style.display === "block") {
        hamNav.style.display = "none";
      } else {
        hamNav.style.display = "block";
      }
};




function marvin() {
  let filmDraft = document.getElementById("drafts");
  let description = document.getElementById("vidDescription");

  filmDraft.src = "./Media/2PostManDrugs!!!.mp4";
  description.textContent = "Marvin's plot is unique and very captivating. \
  Some ideas were used from Marvin's plot but it was not excuted due to lack of actors, \
  materials and locations mentioned in the plot. \
  The plot is exceptional but unattainable.";
}

function howard() {
  let filmDraft = document.getElementById("drafts");
  let description = document.getElementById("vidDescription");

  filmDraft.src = "./Media/T0116282(720p).mp4";
  description.textContent = "Howard's version of the movie involves the main \
  character's friends in many scenarios which was removed \
  from the final version due to lack of actors. However, \
  the idea was great but the resources weren't available.";
}

function salem() {
  let filmDraft = document.getElementById("drafts");
  let description = document.getElementById("vidDescription");

  filmDraft.src = "./Media/t0106107.mp4";
  description.textContent = "The video above describes Salem's \
  version of the initial concept of the story. The plot has some \
  similarities to the final version of the movie, but the final version \
  is a clear improvement due to every group member's contribution.";
}

function lare() {
  let filmDraft = document.getElementById("drafts");
  let description = document.getElementById("vidDescription");

  filmDraft.src = "./Media/T0094068.mp4";
  description.textContent = "Lare's take on the story portraits a lighter version which reverses \
  the friend's personality from a bad influencer to a good one. It is certainly an intersenting plot \
  but after discussions, the group members agreed that the plot should portray a darker version to show \
  the consequences of drugs.";
}




function draft() {
  let filmFinal = document.getElementById("groupFinal");
  let filmDescription = document.getElementById("finalDescription");

  filmFinal.src = "../Media/Storyboard Movie.mp4";
  filmDescription.textContent = "Above is the story board draft to guide the group \
  through filiming the actual movie.";
};

function final() {
  let filmFinal = document.getElementById("groupFinal");
  let filmDescription = document.getElementById("finalDescription");

  filmFinal.src = "../Media/Chain Reaction (web use).mp4";
  filmDescription.textContent = "Above is the final movie with color grading and sound added \
  in for increased atmosphere and immersion into the story.";
};

function review() {
  let filmFinal = document.getElementById("groupFinal");
  let filmDescription = document.getElementById("finalDescription");
  
  filmFinal.src = "../Media/Review.mp4";
  filmDescription.textContent = "Above is a review video for the movie \
  'Chain Reaction' where we discuss what worked and what didn't.";
}




// STORYBOARD IMAGE SLIDESHOW
function slideShow() {
  let slideIndex = document.getElementById("imgCounter").textContent;
  let storyBoardImg = document.getElementById("storyboardImg");
  let imgCount = parseInt(slideIndex);

  const img = ["../Media/0.jpg", "../Media/1.jpg", 
  "../Media/2.jpg", "../Media/3.jpg", 
  "../Media/4.jpg", "../Media/5.jpg", 
  "../Media/6.jpg"];
  
  if (button === 'next') {
    if (imgCount != 6) {
      imgCount++;
      storyBoardImg.src = img[imgCount];
      document.getElementById("imgCounter").textContent = imgCount;
    }
  }else {
    if (imgCount != 0) {
      storyBoardImg.src = img[--imgCount];
      document.getElementById("imgCounter").textContent = imgCount;
    }
  };
};
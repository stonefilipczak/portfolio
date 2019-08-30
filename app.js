const s = sketch => {
  sketch.setup = () => {
    if (sketch.windowWidth <= 1080) {
      sketch.createCanvas(sketch.windowWidth, 300);
    } else {
      sketch.createCanvas(1080, 300);
    }
    sketch.frameRate(15);
  };

  sketch.draw = () => {
    sketch.clear();

    for (i = 0; i < sketch.height; i += 28) {
      sketch.strokeWeight(sketch.random(2));
      // sketch.stroke(sketch.random(210, 255), sketch.random(255), 100);
      sketch.line(0, i, sketch.width, i);
    }
    // sketch.stroke(255);
    // sketch.ellipse(sketch.width / 2, sketch.height / 2, 230);
    sketch.stroke(0);
    sketch.strokeWeight(20);

    for (i = 0; i < sketch.height; i += 28) {
      if (sketch.mouseY >= i) {
        sketch.line(0, i, sketch.width, i);
      }
    }
  };

  sketch.windowResized = () => {
    if (sketch.windowWidth <= 1080) {
      sketch.resizeCanvas(sketch.windowWidth, 300);
    }
  };
};

let myp5 = new p5(s, "bars");

function aboutClick() {
  window.scrollBy({
    top: 470, // could be negative value
    left: 0,
    behavior: "smooth"
  });
  setTimeout(function() {
    document.getElementById("about").classList.add("show");
  }, 300);
}

function projectsClick() {
  window.scrollBy({
    top: 750, // could be negative value
    left: 0,
    behavior: "smooth"
  });
  Array.from(document.getElementsByClassName("piece")).forEach(function(
    element,
    index,
    array
  ) {
    console.log(element);
    element.classList.add("show");
  });
}

function contactClick() {
  window.scrollBy({
    top: 4000, // could be negative value
    left: 0,
    behavior: "smooth"
  });
}

function loadAbout() {
  document.getElementById("about").classList.add("load");
}

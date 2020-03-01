// start function create contant paragraph
function createContent(content) {
  let myContent = document.createElement("P");
  myContent.classList.add("content");
  myContent.innerText = content;
  return myContent;
}
// end function create contant paragraph

// start function create subtitle
function createSubtitle(sub) {
  let myS = document.createElement("P");
  myS.classList.add("subtitle");
  myS.innerHTML = sub;
  return myS;
}
// end function create subtitle

// start function create title
function createTitle(title) {
  let myh = document.createElement("P");
  myh.classList.add("title");
  myh.innerHTML = title;
  return myh;
}
// end function create title

// start function create child div
function createChildrenDiv() {
  let divChild = document.createElement("DIV");
  return divChild;
}
// end function create child div

// start function create button arrow

function createArrow(index) {
  let arrow = document.createElement("I"); // create element i

  arrow.classList.add("material-icons"); // add class to element i

  arrow.innerText = "keyboard_arrow_down"; // add text

  let isTrue = true;
  arrow.addEventListener("click", function() {
    // add click Event
    if (isTrue) {
      // if variable isTrue is true append keyboard_arrow_up text
      this.innerText = "keyboard_arrow_up";
      isTrue = false;
    } else {
      // if variable isTrue is false append keyboard_arrow_down text
      this.innerText = "keyboard_arrow_down";
      isTrue = true;
    }

    this.parentElement.classList.toggle("opened"); // toggle class to the parent for this element / child div /
    this.nextElementSibling.classList.toggle("show-content"); // toggle class to the next Sibling for this element / content paragraph /
    this.parentElement.previousElementSibling.classList.toggle("shadow"); // toggle class to the previous child div for this element's parent
  });

  return arrow;
}

// end function create button arrow

// start function create accordion
function createAccordion(options) {
  let myDiv = document.getElementById("my-accordion"); // get div container through id

  let headingChild = document.createElement("H2"); // create title main heading

  headingChild.classList.add("main-title"); // add class

  headingChild.innerText = options.mainTitle; // add the title that comes from the object through the parameter

  myDiv.appendChild(headingChild); // append headin to div container

  options.panels.map((item, index) => {
    // create a div for an object through map function

    let divChild = createChildrenDiv(); // create div through createChildrenDiv function

    divChild.appendChild(createTitle(item.title)); // append paragraph title to child div through the createTitle function

    if (item.subtitle) {
      divChild.appendChild(createSubtitle(item.subtitle)); // if the object includ subtitle append to child div through createSubtitle function
    }

    divChild.appendChild(createArrow(index)); // append button arrow to child div through createArrow funcion

    divChild.appendChild(createContent(item.content)); // append paragraph content to child div through createContent funcion

    myDiv.appendChild(divChild); // append div child to div container

    return myDiv;
  });
}

// end function create accordion

// start class Accordion

class Accordion {
  constructor(options) {
    this.options = options;
  }

  get option() {
    return this.compile(); // get the function compile
  }
  compile() {
    let AccordionComplate = createAccordion(options); // create Accordion thruogh this function
    return AccordionComplate;
  }
}

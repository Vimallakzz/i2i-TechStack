let data = [
  {
    id: 1,
    name: "java",
    techState: 1,
    techType: 2,
    description:
      "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a"
  },
  {
    id: 2,
    name: "c",
    techState: 1,
    techType: 2,
    description:
      "type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"
  },
  {
    id: 3,
    name: "c++",
    techState: 1,
    techType: 2,
    description:
      "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
  },
  {
    id: 4,
    name: "HTML",
    techState: 1,
    techType: 2,
    description:
      "ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old"
  },
  {
    id: 5,
    name: "JS",
    techState: 1,
    techType: 2,
    description:
      "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of"
  },
  {
    id: 6,
    name: "JQuery",
    techState: 1,
    techType: 2,
    description:
      "de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32."
  },
  {
    id: 7,
    name: "css",
    techState: 1,
    techType: 2,
    description:
      "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
  },
  {
    id: 8,
    name: "HighCharts",
    techState: 1,
    techType: 2,
    description:
      "the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
  },
  {
    id: 9,
    name: "React",
    techState: 1,
    techType: 2,
    description:
      "sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on"
  },
  {
    id: 10,
    name: "angular",
    techState: 1,
    techType: 2,
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be"
  },
  {
    id: 11,
    name: "angular 6",
    techState: 2,
    techType: 1,
    description:
      "l text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
  },
  {
    id: 12,
    name: "Java 6",
    techState: 2,
    techType: 1,
    description:
      "letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default mod"
  },
  {
    id: 13,
    name: "sql",
    techState: 2,
    techType: 1,
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of"
  },
  {
    id: 14,
    name: "javascript",
    techState: 2,
    techType: 1,
    description:
      "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"
  },
  {
    id: 15,
    name: "c#",
    techState: 2,
    techType: 1,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
  },
  {
    id: 16,
    name: "python",
    techState: 2,
    techType: 1,
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, "
  },
  {
    id: 17,
    name: "php",
    techState: 2,
    techType: 1,
    description:
      "sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem"
  },
  {
    id: 18,
    name: "Ruby on Rails",
    techState: 3,
    techType: 3,
    description:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
  },
  {
    id: 19,
    name: "swift",
    techState: 3,
    techType: 3,
    description:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids "
  },
  {
    id: 20,
    name: "Ecmascript",
    techState: 3,
    techType: 3,
    description:
      "asure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances"
  },
  {
    id: 21,
    name: "groovy",
    techState: 3,
    techType: 3,
    description:
      "occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
  },
  {
    id: 22,
    name: "C shell",
    techState: 3,
    techType: 3,
    description:
      " vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem"
  },
  {
    id: 23,
    name: "IBM BASICA",
    techState: 3,
    techType: 3,
    description:
      "rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat"
  },
  {
    id: 24,
    name: ".NET",
    techState: 3,
    techType: 3,
    description:
      "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and"
  },
  {
    id: 25,
    name: "j++",
    techState: 4,
    techType: 0,
    description:
      "easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains"
  },
  {
    id: 26,
    name: "MATLAB",
    techState: 4,
    techType: 0,
    description:
      " et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere"
  },
  {
    id: 27,
    name: "NetLogo",
    techState: 4,
    techType: 0,
    description:
      "system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever underta"
  },
  {
    id: 28,
    name: "prolog",
    techState: 4,
    techType: 0,
    description:
      "uga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a"
  }
];
var currentData = [];
var technologyStates = ["All", "Ideal", "Useful", "Not ready", "Avoid"];
var technologyTypes = ["Frameworks", "Technologies", "Tools", "Techniques"];
var classNames = ["all", "ideal", "useful", "not-ready", "avoid"];
var colorcodes = ["#f6955f", "#82b858", "#2fb1dd", "#f1ba31", "#e65858"];
let currentTechnologyState = 0;
var isWheelScroll = false;
var currentTechnology;
let currentTechnologyType = data[0].techType;
var timeoutId;
var rotatingAngle = 0;
var textGroupDistance = 20;

var wheelHeight = 600;
var wheelWidth = 600;
var typeWidth = 250;

var centerX = wheelWidth / 2;
var centerY = wheelHeight / 2;

var typeBoxInnerHeight = wheelHeight * (3 / 4);
let typeBoxInnerWidth = typeWidth;
let equidistantTypeBoxLength = typeBoxInnerHeight / technologyTypes.length;

let circlePositions = technologyTypes.map((type, index) => ({
  x: typeBoxInnerWidth / 2,
  y: equidistantTypeBoxLength * (index + 1)
}));

let textPositions = technologyTypes.map((type, index) => ({
  x: (typeBoxInnerWidth / 2) - 30,
  y: equidistantTypeBoxLength * (index + 1)
}));

let adjacentCirclePositions = technologyTypes.map((type, index) => ({
  x: typeBoxInnerWidth * (3 / 4),
  y: equidistantTypeBoxLength * (index + 1)
}));

let commonLinePositions = [
  { x: typeWidth, y: wheelHeight / 2 },
  { x: typeWidth * (3 / 4), y: wheelHeight / 2 }
];

/*
  An SVG circle with stroke-width renders two concentric circles (or a doughnut like image) with its internal radius as r - ½
  the stroke width and its external radius as r + ½ stroke-width.
*/
var strokeWidth = 20; // to create concentric circle by using stroke width
var outerCircleRadius = (wheelHeight - strokeWidth) / 2;
var innerCircleRadius = outerCircleRadius / 2.2;

var textSRadius = 11;
var textLRadius = 13;

var textSlSize = 11;
var textLgSize = 13;

var innerSquareX =
  centerX +
  (innerCircleRadius + textGroupDistance) *
    Math.cos((Math.PI / 180) * (45 - 180));
var innerSquareY =
  centerY +
  (innerCircleRadius + textGroupDistance) *
    Math.sin((Math.PI / 180) * (45 - 180));

const wheelSvgAttributes = {
  height: wheelHeight,
  width: wheelWidth
};

const typeSvgAttributes = {
  height: wheelHeight,
  width: typeWidth
};
const lgAttributes = {
  id: "gradient",
  x1: "0%",
  y1: "100%",
  x2: "100%",
  y2: "0%"
};
const stopAttributes = [
  {
    "stop-color": "#e33780",
    offset: "0%"
  },
  {
    "stop-color": "#fca33e",
    offset: "100%"
  }
];
const circleAttributes = [
  {
    cx: centerX,
    cy: centerY,
    r: innerCircleRadius,
    fill: 'url("#gradient")'
  },
  {
    cx: centerX,
    cy: centerY,
    r: outerCircleRadius,
    fill: "none",
    stroke: "url(#gradient)",
    "stroke-width": strokeWidth
  }
];
const innerForeignAttributes = {
  x: innerSquareX,
  y: innerSquareY,
  height: (innerCircleRadius * 2) / 1.414 + textGroupDistance, // sideOfsquare = 2r / squareroot(2)
  width: (innerCircleRadius * 2) / 1.414 + textGroupDistance
};

var textAttributes = [];
var equidistantAngle;
var textAnimatedAttribute = {
  id: "animate",
  attributeName: "transform",
  attributeType: "XML",
  type: "rotate",
  dur: "0.5s",
  fill: "freeze",
  repeatCount: "1",
  from: `0 ${centerX} ${centerY}`,
  to: ""
};

const constructLineAttributes = () => {
  let lineAttributes = [];
  const listOfLinePositions = [];
  listOfLinePositions.push(commonLinePositions[0]);
  listOfLinePositions.push(commonLinePositions[1]);
  listOfLinePositions.push(adjacentCirclePositions[currentTechnologyType]);
  listOfLinePositions.push(circlePositions[currentTechnologyType]);

  listOfLinePositions.map((obj, index) => {
    if (index !== circlePositions.length - 1) {
      lineAttributes.push({
        x1: listOfLinePositions[index].x,
        y1: listOfLinePositions[index].y,
        x2: listOfLinePositions[index + 1].x,
        y2: listOfLinePositions[index + 1].y,
        style: "stroke:#e33780;stroke-width:4;stroke-linecap: round"
      });
    }
    return null;
  });
  return lineAttributes;
};

const constructTextAttributes = () => {
  textAttributes = []; // clear all text attribute values
  currentData = [];
  if (currentTechnologyState === 0) {
    currentData = [...data];
  } else {
    data.map(object => {
      if (object.techState === currentTechnologyState) {
        currentData.push(object);
      }
      return null;
    });
  }
  let angles = [];
  let length = currentData.length;
  currentTechnology = currentData[0];
  currentTechnologyType = currentData[0].techType;
  equidistantAngle = 360 / length;
  for (let i = 0; i < length; i++) {
    angles[i] = i * equidistantAngle;
  }
  for (let i = 0; i < length; i++) {
    let tita = angles[i] - 180;
    // x = a + rcos(tita)  y = b + rcos(tita)
    let x =
      centerX +
      (innerCircleRadius + textGroupDistance) *
        Math.cos((Math.PI / 180) * tita);
    let y =
      centerY +
      (innerCircleRadius + textGroupDistance) *
        Math.sin((Math.PI / 180) * tita);
    let isRightHemisphere = angles[i] >= 90 && angles[i] < 270;

    let textAttribute = {
      tech: {
        x,
        y,
        class: "text",
        angle: angles[i],
        transform: `rotate(${
          isRightHemisphere ? angles[i] - 180 : angles[i]
        }, ${x}, ${y}) `,
        dy: "0.3em",
        dx: isRightHemisphere ? "1.1em" : "-1.1em",
        fill: i === 0 ? "#e33780" : "#345A7D",
        "text-anchor": `${isRightHemisphere ? "start" : "end"} `,
        "font-size": i === 0 ? textLgSize : textSlSize,
        "font-weight": "600"
      },
      circleId: {
        x,
        y,
        transform: `rotate(${
          isRightHemisphere ? angles[i] - 180 : angles[i]
        }, ${x}, ${y}) `,
        dy: "0.3em",
        fill: "#fff",
        "text-anchor": "middle",
        "font-size": i === 0 ? textLgSize - 2 : textSlSize - 2,
        "font-weight": "600"
      },
      circle: {
        cx: x,
        cy: y,
        r: i === 0 ? textLRadius : textSRadius,
        fill: colorcodes[currentData[i].techState]
      }
    };
    textAttributes.push(textAttribute);
  }
};

//------------------comment brief-----------------------------//
constructTextAttributes();

const onLoadComplete = () => {
  const rootElement = document.getElementById("root");
  if (rootElement.childElementCount) {
    while (rootElement.firstChild) {
      rootElement.removeChild(rootElement.firstChild);
    }
  }

  var svgElement = createElementNS("svg", typeSvgAttributes);
  for (let i = 0; i < circlePositions.length; i++) {
    var cir = createElementNS("circle", {
      cx: circlePositions[i].x,
      cy: circlePositions[i].y,
      r: 15,
      fill: i === currentTechnologyType ? "#e53f65" : "none",
      stroke: i === currentTechnologyType ? "#e53f65" : "#d5d5d5",
    "stroke-width": 2

    });
    svgElement.appendChild(cir);
  }

  for (let i = 0; i < textPositions.length; i++) {
    var text = createElementNS("text", {
      x: textPositions[i].x,
      y: textPositions[i].y,
      dy:"0.3em",
      fill: i === currentTechnologyType ? "#e53f65" : "#d5d5d5",
      "text-anchor": "end",
      "font-size": "13",
      "font-weight": "600"
    });
    text.innerHTML = technologyTypes[i];
    svgElement.appendChild(text);
  }

  let lineAttributes = constructLineAttributes();
  lineAttributes.map(attribute => {
    let lineElement = createElementNS("line", attribute);
    svgElement.appendChild(lineElement);
    return null;
  });

  rootElement.appendChild(svgElement);

  var techWheelGroup = createTechWheel();
  rootElement.appendChild(techWheelGroup);

  const techStateElement = document.getElementById("tech-state");
  if (techStateElement.childElementCount) {
    techStateElement.removeChild(techStateElement.childNodes[0]);
  }
  var technologyStates = createTechStates();
  techStateElement.appendChild(technologyStates);
};

const createTechWheel = () => {
  var techWheelGroup = createElementNS("svg", wheelSvgAttributes);
  techWheelGroup.addEventListener("wheel", onMouseWheel);

  var linearGradient = createElementNS("linearGradient", lgAttributes);
  var stop1 = createElementNS("stop", stopAttributes[0]);
  var stop2 = createElementNS("stop", stopAttributes[1]);
  linearGradient.appendChild(stop1);
  linearGradient.appendChild(stop2);
  techWheelGroup.appendChild(linearGradient);

  var innerCircle = createElementNS("circle", circleAttributes[0]);
  techWheelGroup.appendChild(innerCircle);

  var innerCircleContent = createInnerCircleContent();
  techWheelGroup.appendChild(innerCircleContent);

  var outerCircle = createElementNS("circle", circleAttributes[1]);
  techWheelGroup.appendChild(outerCircle);

  var groupElement = createTextGroup();
  techWheelGroup.appendChild(groupElement);

  var lineElement = createElementNS("line", {
    x1: 0,
    y1: centerY,
    x2: "40",
    y2: centerY,
    style: "stroke: #e53f65; stroke-width:4",
    "stroke-linecap": "round"
  });
  techWheelGroup.appendChild(lineElement);

  return techWheelGroup;
};

const createTechStates = () => {
  const techStateDiv = document.createElement("div");

  technologyStates.map((stateType, index) => {
    const selectType = document.createElement("div");
    selectType.className = "select-type";
    selectType.addEventListener("click", evt => {
      removeSelectedType();
      // innerDiv.className="inner";
      currentTechnologyState = index;
      constructTextAttributes();
      onLoadComplete();
    });

    const outerDiv = document.createElement("div");
    outerDiv.className = `outer ${classNames[index]}`;
    const innerDiv = document.createElement("div");
    innerDiv.id = stateType;
    innerDiv.className = index === currentTechnologyState ? "inner" : "";
    outerDiv.appendChild(innerDiv);
    selectType.appendChild(outerDiv);

    const nameElement = document.createElement("span");
    nameElement.className = "name";
    nameElement.innerHTML = stateType;
    selectType.appendChild(nameElement);

    techStateDiv.appendChild(selectType);
  });
  return techStateDiv;
};

const removeSelectedType = () => {
  technologyStates.map(stateType => {
    let element = document.getElementById(stateType);
    element.classList.remove("inner");
  });
};

function createInnerCircleContent() {
  const innerElement = createElementNS("foreignObject", innerForeignAttributes);
  const shortInfo = document.createElement("div");
  shortInfo.className = "shortInfo";

  const heading = document.createElement("div");
  heading.id = "heading";
  heading.className = "heading";
  heading.innerHTML = currentTechnology.name;
  shortInfo.appendChild(heading);

  const content = document.createElement("div");
  content.id = "content";
  content.className = "content";
  content.innerHTML = currentTechnology.description;
  shortInfo.appendChild(content);

  const readMoreButton = document.createElement("div");
  readMoreButton.style.margin = "20px";
  const span = document.createElement("span");
  span.className = "readMore";
  span.innerHTML = "read more";
  readMoreButton.appendChild(span);
  shortInfo.appendChild(readMoreButton);

  innerElement.appendChild(shortInfo);
  return innerElement;
}

function onMouseWheel(evt) {
  evt.preventDefault();
  if (!isWheelScroll) {
    isWheelScroll = true;
    var deltaY = evt.deltaY;
    var to;
    if (deltaY > 0) {
      rotatingAngle = rotatingAngle + equidistantAngle;
      to = `${rotatingAngle} ${centerX} ${centerY}`;
      let element = currentData.pop(); // deltaY = positve- rotate  currentData array in clockwise
      currentData.unshift(element);
    } else {
      rotatingAngle = rotatingAngle - equidistantAngle;
      to = `${rotatingAngle} ${centerX} ${centerY}`;
      let element = currentData.shift(); // deltaY = negative- rotate  currentData array in anticlockwise
      currentData.push(element);
    }
    currentTechnology = currentData[0];
    currentTechnologyType = currentData[0].techType;

    // spin wheel by equidistant angle
    const animateElement = document.getElementById("animate");
    animateElement.setAttributeNS(null, "to", to);
    animateElement.beginElement();

    clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => {
      rotatingAngle = 0;
      isWheelScroll = false;
      onLoadComplete();
    }, 750);
  }
}

function createTextGroup() {
  var group = createElementNS("g", {
    id: "text-group"
  });
  const animatedElement = createElementNS(
    "animateTransform",
    textAnimatedAttribute
  );
  group.appendChild(animatedElement);

  for (let i = 0; i < textAttributes.length; i++) {
    let subGroup = createElementNS("g", {
      id: i
    });

    let textElement = createElementNS("text", textAttributes[i].tech);
    textElement.innerHTML = currentData[i].name;
    subGroup.appendChild(textElement);

    textElement.addEventListener("click", onClickRotate);

    let circleElement = createElementNS("circle", textAttributes[i].circle);
    subGroup.appendChild(circleElement);

    let circularcontent = createElementNS("text", textAttributes[i].circleId);
    circularcontent.innerHTML = currentData[i].id;
    subGroup.appendChild(circularcontent);

    group.append(subGroup);
  }
  return group;
}

function onClickRotate(evt) {
  const angle = evt.target.getAttribute("angle");
  let noOfshift = Math.round(angle / equidistantAngle);
  let arr = currentData.splice(0, noOfshift);
  currentData = currentData.concat(arr);
  currentTechnology = currentData[0];
  currentTechnologyType = currentData[0].techType;

  let to;
  if (angle > 180) {
    to = `${360 - angle} ${centerX} ${centerY}`;
  } else {
    to = `-${angle} ${centerX} ${centerY}`;
  }
  const animateElement = document.getElementById("animate");
  animateElement.setAttributeNS(null, "to", to);
  animateElement.beginElement();

  clearTimeout(timeoutId);
  timeoutId = window.setTimeout(() => {
    onLoadComplete();
  }, 750);
}

function createElementNS(name, attributes) {
  var svgns = "http://www.w3.org/2000/svg";
  var element = document.createElementNS(svgns, name);
  Object.keys(attributes).map(key => {
    element.setAttributeNS(null, key, attributes[key]);
    return null;
  });
  return element;
}

onLoadComplete();
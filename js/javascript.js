
//---------------------------------------------------
//01: Javascript helper functions BEGGINING
//---------------------------------------------------

// Function: getToolById
// Description: Gets any selected tool by its ID
// I used "==" insted of "===" to be able to
// receive the id as numbers or strings.
function getToolById(id) {
  return TOOLS.find((tool) => {
    return tool.id == id;
  })
}

// Function: getToolsByCategory
// Description: Return all tools if category is "all"
// Return the specific category if selected
function getToolsByCategory(cat) {
  if(cat === "all") {return TOOLS};

  //else...
  return TOOLS.filter((tool) => {
    return tool.category === cat;
  })
}

// Function: getCategoryColor
// Description: initialize an object converting
// the category names to 'variable'
// if the category exists it returns it, else return default
function getCategoryColor(cat) {
  let colors = {
    writing: "category-writing",
    image: "category-image",
    code: "category-code",
    audio: "category-audio",
    video: "category-video",
    research: "category-research",
  }

  // if category exists, returns it. Else return default value
  return colors[category] || "category-default"
}
//---------------------------------------------------
//01: Javascript helper functions ENDING
//---------------------------------------------------

//---------------------------------------------------
//02: localStorage Functions BEGGINING
//---------------------------------------------------

// Function: getSaved
// Description: localStorage save everything as a string
// JSON.parse converts the string back to an array.
// If nothing is stored, return an empty array.
// font: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
function getSaved(){
  return JSON.parse(localStorage.getItem("savedTools") || "[]");
}


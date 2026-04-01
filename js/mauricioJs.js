//---------------------------------------------------
//01: Tools array
//---------------------------------------------------
// An array with the featured tools.
// They are hard-coded for simplicity.

const TOOLS = [
  {
    id: 1,
    name: "ChatGPT",
    category: "writing",
    description: "Conversational AI for writing, coding, and analysis. Handles everything from essays to debugging code.",
    pricing: "freemium",
    url: "https://chat.openai.com",
    featured: true
  },
  {
    id: 2,
    name: "Midjourney",
    category: "image",
    description: "Generate high quality images from text prompts. Popular with designers and artists.",
    pricing: "paid",
    url: "https://www.midjourney.com",
    featured: true
  },
  {
    id: 3,
    name: "GitHub Copilot",
    category: "code",
    description: "AI pair programmer that suggests code in your editor. Supports most languages.",
    pricing: "paid",
    url: "https://github.com/features/copilot",
    featured: true
  },
  {
    id: 4,
    name: "ElevenLabs",
    category: "audio",
    description: "Realistic AI voice generation and cloning. Used for podcasts, videos, and accessibility.",
    pricing: "freemium",
    url: "https://elevenlabs.io",
    featured: false
  },
  {
    id: 5,
    name: "Runway",
    category: "video",
    description: "AI video generation and editing tools. Create videos from text or images.",
    pricing: "freemium",
    url: "https://runwayml.com",
    featured: true
  },
  {
    id: 6,
    name: "Perplexity",
    category: "research",
    description: "AI-powered search engine with cited sources. Great for academic and professional research.",
    pricing: "free",
    url: "https://www.perplexity.ai",
    featured: true
  },
  {
    id: 7,
    name: "Claude",
    category: "writing",
    description: "AI assistant for writing, analysis, and coding. Known for long-form content and reasoning.",
    pricing: "freemium",
    url: "https://claude.ai",
    featured: false
  },
  {
    id: 8,
    name: "DALL-E",
    category: "image",
    description: "OpenAI's image generator. Create and edit images using natural language descriptions.",
    pricing: "paid",
    url: "https://openai.com/dall-e-3",
    featured: false
  },
  {
    id: 9,
    name: "Cursor",
    category: "code",
    description: "AI-first code editor built on VS Code. Understands your entire codebase for smarter suggestions.",
    pricing: "freemium",
    url: "https://cursor.sh",
    featured: true
  },
  {
    id: 10,
    name: "Suno",
    category: "audio",
    description: "Generate full songs with vocals and instruments from a text prompt. No musical skills needed.",
    pricing: "freemium",
    url: "https://suno.com",
    featured: false
  },
  {
    id: 11,
    name: "Notebook LM",
    category: "research",
    description: "Google's AI research assistant. Upload documents and ask questions about them.",
    pricing: "free",
    url: "https://notebooklm.google.com",
    featured: false
  },
  {
    id: 12,
    name: "Kling",
    category: "video",
    description: "AI video generation from text and images. Produces cinematic quality short clips.",
    pricing: "freemium",
    url: "https://klingai.com",
    featured: false
  }
];

const CATEGORIES = [
  {
    id: "0",
    name: "All tools",
  },
    {
    id: "1",
    name: "Writing",
  },
    {
    id: "2",
    name: "Image",
  },
    {
    id: "3",
    name: "Code",
  },
    {
    id: "4",
    name: "Video",
  },
    {
    id: "5",
    name: "Audio",
  },
    {
    id: "6",
    name: "Research",
  },
    {
    id: "7",
    name: "Productivity",
  },
]

//---------------------------------------------------
//02: Javascript helper functions BEGGINING
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
//02: Javascript helper functions ENDING
//---------------------------------------------------

//---------------------------------------------------
//03: localStorage Functions BEGGINING
//---------------------------------------------------

// Function: getSaved
// Description: localStorage save everything as a string
// JSON.parse converts the string back to an array.
// If nothing is stored, return an empty array.
// font: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
function getSaved(){
  return JSON.parse(localStorage.getItem("savedTools") || "[]");
}

// Function: saveTool
// Description: Creates a toggle to save or remove tool from favorites.
function saveTool(id){
  //creates a copy of the content of the localStorage.
  // I did it this way to get the autocomplete features for arrays.
  // If it was just assigned to the variable, it wouldn't activate.
  let saved = [...getSaved()];

  // if saved array has the id, it removes it.
  if(saved.includes(id)){
    saved = saveTool.filter((savedId) => {
      return saved != id;
    })
  }else{
    //save into the array
    saved.push(id);
  }

  localStorage.setItem("savedTool", JSON.stringify(saved))
  updateSavedBadge();
  return saved.includes(id);
}

function updateSavedBadge(){
  //creates a copy of the content of the localStorage.
  // I did it this way to get the autocomplete features for arrays.
  // If it was just assigned to the variable, it wouldn't activate.
  const saved = [...getSaved()]
  const badge = document.getElementById("savedCount");
  if(!badge) return;

  //if there is a saved tool, update the count and remove hidden property.
  if(saved.length > 0){
    badge.textContent = saved.length;
    badge.classList.remove("hidden");
  }else{
    // sets count to zero and add property hidden
    badge.textContent = "0";
    badge.classList.add("hidden")
  }
}


// Function: buildCardHtml
// Description: Builds the html for the tool cards.
// we pass the tool as a parameter and since it's an object,
// we can use the dot notation to get its content.
function buildCardHtml(tool){
  const saved = getSaved();
  const isSaved = saved.includes(tool.id);
  const btnText = isSaved ? "Saved" : "Save";
  const btnClass = isSaved ? "btn btn-save active" : "btn btn-save";

  return `
  <div class="tool-card" data-id="${tool.id}>"
    <div class="card-top">
      <span class="cat-badge ${getCategoryColor(tool.category)}"></span>
      <span class="price-badge price-${tool.pricing}>${tool.price}></span>"
    </div>
      
    <div class="card-body">
      <a href="tool.html?id=${tool.id}" class="card-link">
        <p class="card-desc">${tool.name}</p>
      </a>
    </div>
      
    <div class="card-actions">
      <button class="${btnClass}" data-id=${tool.id}">${buttonText}</button>
        <a href="${tool.url}" target="_blank" class="btn btn-visit">
          Visit
        </a>
    </div>
  </div>
  `
}

// update the navbar badge on every page load
updateSavedBadge();

// Home page
// if #featured-grid exists, it renders the cards and save button clicks

const featuredGrid = document.getElementById("featured-grid");

if(featuredGrid){
  function renderFeatured(){
    const featured = TOOLS.filter((tool) => {
      return tool.featured === true;
    })

    // return the card for every featured tool
    featuredGrid.innerHTML = featured.map((tool) => {
      return buildCardHtml(tool)
    }).join("");
  }

  featuredGrid.addEventListener("click", (e) => {
    if(!e.target.classList.contains("btn-save")){
      return;
    }

    const id = parseInt(e.target.dataset.id);
    const isSaved = saveTool(id);

    e.target.textContent = isSaved ? "Saved" : "Save";
    e.target.classList.toggle("active", isSaved)
  })

  renderFeatured();
}

const catFilters = document.getElementById("cat-filters");

if(catFilters){
  catFilters.innerHTML = CATEGORIES.map(cat => {
    const isAll = cat.name === "All tools";
    const href = isAll
    ? "browse.html"
    : `browse.html?category=${cat.name.toLowerCase().trim()}`
    const activeClass = isAll ? "cat-filter active" : "cat-filter";

    return `<a href=${href} class="${activeClass}">${cat.name}</a>`
  }).join("");
}
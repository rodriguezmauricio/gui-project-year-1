// Updates the number in the navbar (Saved badge)
function updateSavedBadge(){

  // Get saved tools from localStorage
  const saved = JSON.parse(localStorage.getItem("savedTools") || "[]");

  // Get the badge element from HTML
  const badge = document.getElementById("savedCount");

  // If badge doesn't exist (safety check), stop function
  if(!badge) return;

  // If there are saved tools
  if(saved.length > 0){
    badge.textContent = saved.length; // show number
    badge.classList.remove("hidden"); // make visible
  } else {
    badge.textContent = "0"; // reset to 0
    badge.classList.add("hidden"); // hide badge
  }
}
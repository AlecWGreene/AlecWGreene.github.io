// SVG variables
const arrows_collapse = `
<svg id="navbar-collapse-icon" width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrows-collapse" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8zm6-7a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V1.5A.5.5 0 0 1 8 1z"/>
  <path fill-rule="evenodd" d="M10.354 3.646a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L8 5.293l1.646-1.647a.5.5 0 0 1 .708 0zM8 15a.5.5 0 0 0 .5-.5V10a.5.5 0 0 0-1 0v4.5a.5.5 0 0 0 .5.5z"/>
  <path fill-rule="evenodd" d="M10.354 12.354a.5.5 0 0 0 0-.708l-2-2a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0 .708.708L8 10.707l1.646 1.647a.5.5 0 0 0 .708 0z"/>
</svg>
`;
const arrows_expand = `
<svg id="navbar-collapse-icon" width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrows-expand" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8zm6-1.5a.5.5 0 0 0 .5-.5V1.5a.5.5 0 0 0-1 0V6a.5.5 0 0 0 .5.5z"/>
  <path fill-rule="evenodd" d="M10.354 3.854a.5.5 0 0 0 0-.708l-2-2a.5.5 0 0 0-.708 0l-2 2a.5.5 0 1 0 .708.708L8 2.207l1.646 1.647a.5.5 0 0 0 .708 0zM8 9.5a.5.5 0 0 1 .5.5v4.5a.5.5 0 0 1-1 0V10a.5.5 0 0 1 .5-.5z"/>
  <path fill-rule="evenodd" d="M10.354 12.146a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L8 13.793l1.646-1.647a.5.5 0 0 1 .708 0z"/>
</svg>
`;

// Change icon for navbar toggler on click
const $nav_btn_collapse = $(".navbar-toggler").html(arrows_collapse);

// Runtime script
$(document).on("load", () => {
  // If toggle div is clicked
  $nav_btn_collapse.on("click", function(){
    // If navbar is being collapsed
    if($(".navbar-collapse").hasClass("show")){
      // Show expand icon
      $nav_btn_collapse.html(arrows_expand);
    }
    else{
      $nav_btn_collapse.html(arrows_collapse);
    }
  });
  // If icon is clicked
  $("#navbar-collapse-icon").on("click", function(){
    // If navbar is being collapsed
    if($(".navbar-collapse").hasClass("show")){
      // Show expand icon
      $nav_btn_collapse.html(arrows_expand);
    }
    else{
      $nav_btn_collapse.html(arrows_collapse);
    }
  });
});
/**
 * ============================== 
 * DOM ELEMENTS
 * ==============================
*/

var $dropdowns = $(".dropdown");
var $dropdownTogglers = $(".dropdown-toggle");
var $dropdownMenus = $(".dropdown-menu");
var $megamenus = $(".megamenu");

/**
 * ============================== 
 * NAVBAR METHODS
 * ==============================
*/



/**
 * ============================== 
 * EVENT HANDLERS
 * ==============================
*/

/**
 * Resize handler
 * 
 * @param {Event} a_event The event of the window resizing
 */
function ResizeHandler(a_event){

    if(window.matchMedia("(min-width: 786px)").matches){

        // Add hover listeners
        $dropdowns.hover(
            // Mouse enter listener
            function (){
                // Add underline back to the dropdown toggler
                $(this).css("box-shadow", "0 0.1rem red")

                // Display dropdown
                $(this).addClass("show");
                $(this).find($dropdownTogglers).attr("aria-expanded", "true");
                $(this).find($dropdownMenus).addClass("show");
            },
            // Mouse leave listener
            function (){
                // Store this to pass to timeout handler
                var $this = $(this);
                
                // Gives user 500ms to move mouse to dropdown
                if($this.hasClass("nav-link")){
                    setTimeout(function(a_this){
                        a_this.css("box-shadow", "none");
                        a_this.removeClass("show");
                        a_this.find($dropdownMenus).removeClass("show");
                    },700,$this);
                }
                else{
                    $this.css("box-shadow", "none");
                    $this.removeClass("show");
                    $this.find($dropdownMenus).removeClass("show");
                }
            }
        );

    }
    else{
        // Remove listeners
        $dropdowns.off("mouseenter mouseleave");
    }
}

/**
 * ============================== 
 * EVENT LISTENERS
 * ==============================
*/

$(window).on("load resize", ResizeHandler);
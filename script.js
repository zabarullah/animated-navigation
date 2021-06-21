const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');
const navItems = [nav1, nav2, nav3, nav4, nav5]; // adding the nav1 to nav5 into an array to be used inside the forEachloop in the following navAnimation function

// Control navigation animation
function navAnimation(direction1, direction2) {  // this function has two directions to reference slide-in or slide out
    navItems.forEach((nav, i) => {  // for each navigation Item there is an index (since navItems are in an array)
        nav.classList.replace(`slide-${direction1}-${i + 1}`, `slide-${direction2}-${i + 1}`); // this will cover to replace slide in and slide out classes with the correct index (i.e line 28 to 37). Note i + 1 is because arrays start indexing at 0 so the animation code stopped working until i +1 was added.
    })
}

// toggle nav
function toggleNav() {
    //Toggle: Menu Bars Open Closed
    menuBars.classList.toggle('change'); // the change class is in the css to toggle on and off the menuBars styling
    // Toggle: Menu active or not
    overlay.classList.toggle('overlay-active'); /* if class overlay-active exists then toggle it off, if there isn't then toggle in on */
    if (overlay.classList.contains('overlay-active')) { /* if class overlay-active is on then go to run the next condition otherwise run the else condition */
        // Animate In - Overlay
        overlay.classList.replace('overlay-slide-left', 'overlay-slide-right'); // since replace works with classes that exist in the html, we added overlay-slide-left so that it can be replaced with overlay-slide-right.. The reason why we dont need to add the class overlay-slide-right to the html is that when the toggle is switched this lide will make overlay-slide-right exist thus like 40 working.
        // Animate in - Nav Items
        navAnimation('out', 'in'); // This function removes out and adds in
        // nav1.classList.remove('slide-out-1');   // slide out added to html as class to make it default to allow the replace function to work 
        // nav1.classList.add('slide-in-1');
        // nav2.classList.remove('slide-out-2');
        // nav2.classList.add('slide-in-2');
        // nav3.classList.remove('slide-out-3');
        // nav3.classList.add('slide-in-3');
        // nav4.classList.remove('slide-out-4');
        // nav4.classList.add('slide-in-4');
        // nav5.classList.remove('slide-out-5');
        // nav5.classList.add('slide-in-5');
    }   else {
        //Animate Out - Overlay
        overlay.classList.replace('overlay-slide-right', 'overlay-slide-left');
        // Animate out - Nav Items
        navAnimation('in', 'out'); // This function removes in and adds out
        // nav1.classList.remove('slide-in-1');      
        // nav1.classList.add('slide-out-1');
        // nav2.classList.remove('slide-in-2');
        // nav2.classList.add('slide-out-2');
        // nav3.classList.remove('slide-in-3');
        // nav3.classList.add('slide-out-3');
        // nav4.classList.remove('slide-in-4');
        // nav4.classList.add('slide-out-4');
        // nav5.classList.remove('slide-in-5');
        // nav5.classList.add('slide-out-5');
        }
    
}


// Event Listeners
menuBars.addEventListener('click', toggleNav);
// nav1.addEventListener('click', toggleNav); These evenListeners have now been re-factored below
// nav2.addEventListener('click', toggleNav);
// nav3.addEventListener('click', toggleNav);
// nav4.addEventListener('click', toggleNav);
// nav5.addEventListener('click', toggleNav);
navItems.forEach((nav) => {
    nav.addEventListener('click', toggleNav);
});

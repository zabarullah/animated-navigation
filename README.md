# animatied-navigation

Animated Navigation using Javascript Vanilla. Click the Link to try it. https://zabarullah.github.io/animatied-navigation/

I have left the JS DRY code commented for learning purposes: Refactored code would look like:

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
}   else {
        //Animate Out - Overlay
        overlay.classList.replace('overlay-slide-right', 'overlay-slide-left');
        // Animate out - Nav Items
        navAnimation('in', 'out'); // This function removes in and adds out
        
// Event Listeners
menuBars.addEventListener('click', toggleNav);
navItems.forEach((nav) => {
    nav.addEventListener('click', toggleNav);
});

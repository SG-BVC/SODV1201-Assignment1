/**
* @name: Assignement1
* @Course Code: SODV1201
* @class: Software Development.
* @author: AH-BVC.
*/
// I'm not sure if I need this anywhere else, but I put it here anyway!

document.addEventListener('DOMContentLoaded', () => {
    // Make the name of the picture (doesn't really have one lol) appear after 10 seconds
    setTimeout(() => {
        const caption = document.getElementById('image_caption');
        caption.textContent = "It's a Profile Picture!";
    }, 10000); // 10 seconds delay
});
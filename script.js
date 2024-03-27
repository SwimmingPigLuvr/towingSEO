document.querySelector('.dropdown-toggle').addEventListener('click', function() {
    console.log('testing dropdown toggle');
    var dropdownContent = document.querySelector('.dropdown-content');
    if (dropdownContent.style.display === 'block') {
        dropdownContent.style.display = 'none';
    } else {
        dropdownContent.style.display = 'block';
    }
});

// Listen for a click on the document
document.addEventListener('click', function(e) {
    var dropdownContent = document.querySelector('.dropdown-content');
    var dropdownToggle = document.querySelector('.dropdown-toggle');

    // Check if the clicked element is the dropdown toggle or a descendant of the dropdown content
    var isClickInside = dropdownToggle.contains(e.target) || dropdownContent.contains(e.target);

    // If the click is outside the dropdown toggle and content, hide the dropdown
    if (!isClickInside) {
        dropdownContent.style.display = 'none';
    }
});


let startX, isDown = false, scrollLeft;

const slider = document.querySelector('.carousel-items');

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
});

slider.addEventListener('mouseup', () => {
  isDown = false;
});

slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX); // The distance dragged
  slider.scrollLeft = scrollLeft - walk;
});

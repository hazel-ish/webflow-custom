document.addEventListener('click', function(event) {
    var clickedElements = JSON.parse(localStorage.getItem('clickedKeys')) || [];
    var clickedElementId = event.target.id;
    if (clickedElementId) {
        clickedElements.push(clickedElementId);
        localStorage.setItem('clickedKeys', JSON.stringify(clickedElements));
    }
});

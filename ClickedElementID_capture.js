document.addEventListener('click', function(event) {
    var clickedElements = JSON.parse(localStorage.getItem('clickedKey')) || [];
    var clickedElementId = event.target.id;
    if (clickedElementId) {
        console.log('clickedElement',clickedElementId);
        clickedElements.push(clickedElementId);
        localStorage.setItem('clickedKey', JSON.stringify(clickedElements));
        console.log('Value set in local storage');
    }
});

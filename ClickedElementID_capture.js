document.addEventListener('click', function(event) {
var clickedElement=event.target;
var clickedElementId = event.target.id;
if (clickedElementId) {
localStorage.setItem('clickedKey', clickedElementId);}});

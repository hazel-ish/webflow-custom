document.addEventListener('click', function(event) {
console.log("CDN link working");
var clickedElement=event.target;
var clickedElementId = event.target.id;
if (clickedElementId) {
localStorage.setItem('clickedKey', clickedElementId);}});

document.addEventListener('click', function(event) {
    var clickedElements = localStorage.getItem('clickedKey');
    if(clickedElements==null || clickedElements==undefined){
        clickedElements=[];
    }else{
        clickedElements=JSON.parse(clickedElements);
    }
    var clickedElementId = event.target.id;
    if (clickedElementId) {
        console.log('clickedElement',clickedElementId);
        clickedElements.push(clickedElementId);
        localStorage.setItem('clickedKey', JSON.stringify(clickedElements));
        console.log('Value set in local storage');
    }
});

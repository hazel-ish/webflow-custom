document.addEventListener('click', function(event) {
    console.log('event', event);
    var clickedElements = localStorage.getItem('clickedKey');
    console.log('clickedELements',typeof clickedElements);
    if(clickedElements==='' || clickedElements==null || clickedElements==undefined){
        clickedElements=[];
    }else{
        clickedElements=JSON.parse(clickedElements);
    }
    var clickedElementId = event.target.id;
    var clickedElementAttr= event.target.getAttribute('blog-card-defi-module');
    if (clickedElementId) {
        console.log('clickedElement',clickedElementId);
        if(clickedElementId!=='marketing-2' && clickedElementId!=='analytics-2' && clickedElementId!=='personalization-2' && clickedElementId!=='w-dropdown-toggle-0')
        clickedElements.push(clickedElementId);
        localStorage.setItem('clickedKey', JSON.stringify(clickedElements));
        console.log('Value set in local storage');
    }
    if (clickedElementAttr) {
        console.log('clickedElementAttr',clickedElementAttr);
        if(clickedElementAttr!=='marketing-2' && clickedElementAttr!=='analytics-2' && clickedElementAttr!=='personalization-2' && clickedElementAttr!=='w-dropdown-toggle-0')
        clickedElements.push(clickedElementAttr);
        localStorage.setItem('clickedKey', JSON.stringify(clickedElements));
        console.log('Value set in local storage');
    }
});

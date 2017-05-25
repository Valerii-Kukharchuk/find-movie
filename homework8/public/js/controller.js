(function(){
    
	var model = window.app.model;
    var Gallery = window.app.Gallery;
    var gallery = null;            

    function bindUpdateGallery() {
        gallery.eventHolder.on( gallery.changeEventName, (event, searchText) => {
            updateGallery(searchText);
        });
    }

    function updateGallery(searchText) {
        model.getData(searchText).then(serverResponse => {
            gallery.updateGallery(serverResponse);
        });   
    }
    
    function bindEvents(){
        bindUpdateGallery();
    }
    
    function initGallery(data){
        gallery = new Gallery(data.Search);   
    }
    
    function init() {
        let startText = "start";
        model.getData(startText).then(serverResponse => {
            initGallery(serverResponse);
            bindEvents();
        });    
    }
    
    init();
    
}())

(function(){
    
	var model = window.app.model;
    var Gallery = window.app.Gallery;
    var gallery = null;
            
    /*function bindSave() {
        gallery.saveDefer.then((item) => {
            model.saveData(item);    
        });
    }*/
    
    function bindUpdate() {
        gallery.eventHolder.on( gallery.updateEventName, (event, item) => {
            model.updateData(item);
        });
    }

    function bindUpdateGallery() {
        gallery.eventHolder.on( gallery.changeEventName, (event, item) => {
            updateGallery(item);
        });
    }

    function updateGallery(searchText) {
        model.getData(searchText).then((data) => {
            gallery.updateGallery(data);
        });   
    }
    
    function bindEvents(){
        //bindSave();  
        bindUpdate();
        bindUpdateGallery();
    }
    
    function initGallery(data){
        gallery = new Gallery(data);   
    }
    
    function init() {
        let startText = "start";
        model.getData(startText).then((data) => {
            initGallery(data);
            bindEvents();
        });    
    }
    
    init();
    
}())

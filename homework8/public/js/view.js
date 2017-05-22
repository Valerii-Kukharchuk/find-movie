'use strict';
(function() {

    function Gallery (items) {        
        this.DOMElements = {
            saveBtn     : document.querySelector("#saveBtn"),
            refreshBtn  : document.querySelector("#refreshBtn"),
            galleryContainer : document.querySelector("#content"),
            searchText : document.querySelector("#searchText")
        };

        //this.saveDefer = $.Deferred();
        this.items = items;
        this.counter = 0;
        
        this.eventHolder = $({});
        this.updateEventName = "update";
        this.changeEventName = "changeSearchText";
        this.init();
    }
    
    Gallery.prototype = {
        
        init : function () {
            this.buildGallery(this.items);
            this.initListeners();
        },

        formContentCard : function (element) {
            return `
            <div class="col-sm-6 col-md-4">
                <div class="thumbnail"> 
                    <img src="${element.Poster}" alt="${element.Title}"> 
                    <div class="caption">
                        <h3>${element.Title}</h3>
                        <p><a href="#" class="btn btn-primary" role="button">Detail</a></p>
                    </div>
                </div>
             </div>   
            `;
        },
        
        buildGallery : function (items) {
            console.log("Gallery is ready");
            console.log(items);

            this.DOMElements.galleryContainer.innerHTML = 
                items.Search.reduce((accum,cur) => accum += this.formContentCard(cur),"");
        },

        cleanGallery : function() {
            let container = this.DOMElements.galleryContainer;
             while(container.childNodes[0]){
                container.removeChild(container.childNodes[0]);
             }    
        },

        showNotFoundResults : function() {
            this.DOMElements.galleryContainer.innerHTML = "<h3>Not Found Results</h3>";
        },

        updateGallery : function (items) {
           this.cleanGallery();
           if(items.Search) {
                this.buildGallery(items);
           } else {
               this.showNotFoundResults();
           } 
        },

        initListeners : function () {
            
            /*this.DOMElements.saveBtn.addEventListener("click", () => {
                let item = this.items[0];
                item.name = "New name";
                this.saveDefer.resolve(item);
            });*/
            
            this.DOMElements.refreshBtn.addEventListener("click", () => {
                this.eventHolder.trigger( this.updateEventName , [{counter: this.counter++}]);
            });

            this.DOMElements.searchText.addEventListener("change", (e) => {
                this.eventHolder.trigger( this.changeEventName, [e.currentTarget.value]);
            });
        } 

    }
    
    window.app = window.app || {};
    window.app.Gallery = Gallery;
    
}());

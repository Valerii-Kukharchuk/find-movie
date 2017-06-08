'use strict';
(function() {

    function Gallery (films) {        
        this.DOMElements = {
            galleryContainer : document.querySelector("#content"),
            searchText : document.querySelector("#searchText")
        };

        this.films = films || {};
        this.counter = 0;
        
        this.eventHolder = $({});
        this.changeEventName = "changeSearchText";
        this.init();
    }
    
    Gallery.prototype = {
        
        init : function () {
            this.buildGallery(this.films);
            this.initListeners();
        },

        formContentCard : function (element) {
            return `
            <div class="col-sm-6 col-md-4"">
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
        
        buildGallery : function (films) {
            console.log("Gallery is ready");
            console.log(films);

            this.DOMElements.galleryContainer.innerHTML = 
                films.reduce((accum,cur) => accum += this.formContentCard(cur),"");
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

        updateGallery : function (serverResponse) {
           this.cleanGallery();
           if(serverResponse.Search) {
                this.buildGallery(serverResponse.Search);
           } else {
               this.showNotFoundResults();
           } 
        },

        initListeners : function () {        
            this.DOMElements.searchText.addEventListener("change", (e) => {
                this.eventHolder.trigger( this.changeEventName, [e.currentTarget.value]);
            });
        } 

    }
    
    window.app = window.app || {};
    window.app.Gallery = Gallery;
    
}());

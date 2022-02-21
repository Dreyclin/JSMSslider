function Slider() {
    this.slideImagesUrls = [];
    this.prevBtn = null;
    this.nextBtn = null;
    this.slideImage = null;
    this.currentImagesIndex = 0;
    this.start = function (elId) {
        let that = this;

        let elSelector = '#' + elId;
        let el = document.querySelector(elSelector);

        this.prevBtn = el.querySelector('.show-prev');
        this.nextBtn = el.querySelector('.show-next');
        this.slideImage = el.querySelector('.slide-img');

        this.slideImagesUrls.push('https://static.turbosquid.com/Preview/2020/10/05__07_11_14/1.jpgDF0F826A-4899-48DA-B22D-A09A46FE5FB6Large.jpg');
        this.slideImagesUrls.push('https://www.carlogos.org/review-images/cheapest-luxury-super-sport-cars-r8.jpg');
        this.slideImagesUrls.push('https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/images/car-reviews/first-drives/legacy/15-jaguar-f-type-coupe-2020-fd-otr-front_0.jpg?itok=-szMj7fP');
        this.slideImagesUrls.push('https://image.winudf.com/v2/image1/Y29tLmFkZWx3ZWlzc3N0dWRpb3MuY2FyLmF1ZGkuc3BvcnQud2FsbHBhcGVyZm9yYXVkaXNwb3J0Y2Fyc19zY3JlZW5fMTFfMTYwODY1MTAyMV8wNDg/screen-11.jpg?fakeurl=1&type=.jpg');

        this.prevBtn.addEventListener("click", function (e) {
            that.onPrevBtnClick(event);
        });
        this.nextBtn.addEventListener("click", function (e) {
            that.onNextBtnClick(event);
        });

        this.slideImage.src = this.slideImagesUrls[this.currentImagesIndex];
    };

    this.onPrevBtnClick = function (event) {
        if (this.currentImagesIndex == 0) {
            this.currentImagesIndex = this.slideImagesUrls.length;
        }
        this.currentImagesIndex--;
        this.slideImage.src = this.slideImagesUrls[this.currentImagesIndex];
    }
    this.onNextBtnClick = function (event) {
        if (this.currentImagesIndex == (this.slideImagesUrls.length - 1)) {
            this.currentImagesIndex = -1;
        }
        this.currentImagesIndex++;
        this.slideImage.src = this.slideImagesUrls[this.currentImagesIndex];
    }
}




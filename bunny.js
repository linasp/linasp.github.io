class Bunny {
    constructor() {
        this.bunnyImg = document.createElement('img');
        this.bunnyImg.src = 'img/bunny.png';
        this.bunnyImg.style.display = 'none';
        this.bunnyImg.style.width = '150px';
        this.bunnyImg.style.height = '200px';
        this.bunnyImg.style.position = 'absolute';
        function registerOnClickHandler(bunny) {
            bunny.bunnyImg.addEventListener('click', function() {
                bunny.show();
            });
            // TODO: the same should happen when window is resized.
        }
        registerOnClickHandler(this);
        document.body.appendChild(this.bunnyImg);
    }
    show() {
        let pageWidth = document.documentElement.clientWidth;
        let pageHeight = document.documentElement.clientHeight;
        // FIXME: clientWidth returns 0 when the element is not displayed.
        let bunnyWidth = 150; // this.bunnyImg.clientWidth;
        let bunnyHeight = 200; // this.bunnyImg.clientHeight;

        // Position the bunny somewhere randomly at the bottom
        // of the page.
        let newTop = pageHeight - bunnyHeight;
        let newLeft = Math.floor(Math.random() * (pageWidth - bunnyWidth));
        this.bunnyImg.style.top = newTop + 'px';
        this.bunnyImg.style.left = newLeft + 'px';
        this.bunnyImg.style.display = 'block';
    }
}

class Bunny {
    constructor() {
        this.bunnyImg = document.createElement('img');
        this.bunnyImg.src = 'img/bunny.png';
        this.bunnyImg.classList.add('bunny');
        // Hide initially.
        let topPosition = document.documentElement.clientHeight;
        this.bunnyImg.style.top = topPosition + 'px';
        // this.bunnyImg.style.display = 'none';
        this.bunnyImg.style.width = '300px';
        this.bunnyImg.style.height = '400px';
        this.bunnyImg.style.position = 'absolute';
        function registerOnClickHandler(bunny) {
            bunny.bunnyImg.addEventListener('click', function() {
                bunny.hide();
                bunny.waitAndShow();
            });
            // TODO: the same should happen when window is resized.
        }
        registerOnClickHandler(this);
        document.body.appendChild(this.bunnyImg);
    }

    waitAndShow() {
        // Wait up to 10 seconds before showing, but at least 1 second,
        // in order to let the transitiona animation complete.
        function registerTimeout(bunny) {
            setTimeout(function() { bunny.show() }, 1000 + Math.random() * 4000);
        }
        registerTimeout(this);
    }

    show() {
        let pageWidth = document.documentElement.clientWidth;
        let pageHeight = document.documentElement.clientHeight;
        // FIXME: clientWidth returns 0 when the element is not displayed.
        let bunnyWidth = 300; // this.bunnyImg.clientWidth;
        let bunnyHeight = 400; // this.bunnyImg.clientHeight;

        // Position the bunny somewhere randomly at the bottom of the page.
        let newTop = pageHeight - bunnyHeight;
        console.log('Current top setting: ', this.bunnyImg.style.top);
        console.log('New top setting: ', newTop);
        let newLeft = Math.floor(Math.random() * (pageWidth - bunnyWidth));
        this.bunnyImg.style.top = newTop + 'px';
        this.bunnyImg.style.left = newLeft + 'px';
        // this.bunnyImg.style.display = 'block';
    }

    hide() {
        let newTop = document.documentElement.clientHeight;
        this.bunnyImg.style.top = newTop + 'px';
    }
}

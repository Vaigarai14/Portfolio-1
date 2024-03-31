

function animateIcon() {
    const elem = document.querySelector(".iconimage");
    elem.addEventListener("mousemove", parallax);
    function parallax(e) {
        let _w = window.innerWidth / 2;
        let _h = window.innerHeight / 2;
        let _mouseX = e.clientX;
        let _mouseY = e.clientY;
        let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 2}%`;
        let _depth2 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 2}%`;
        let _depth3 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.2}%`;
        let x = `${_depth3}, ${_depth2}, ${_depth1}`;
        elem.style.backgroundPosition = x;
    }

}
animateIcon();
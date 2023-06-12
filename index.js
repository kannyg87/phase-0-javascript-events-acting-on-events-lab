function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);

    if (left > 0) {
        left--;
        dodger.style.left = `${left}px`;
    }
}

function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);

    const gameWidth = 400; // Adjust this value according to your game width

    if (left < gameWidth - dodger.offsetWidth) {
        left++;
        dodger.style.left = `${left}px`;
    }
}

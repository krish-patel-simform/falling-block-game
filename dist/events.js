import { blockClick, startGame } from "./features.js";
const blockEle = document.querySelector('.block');
function initApp() {
    // call the start game
    startGame();
}
function handleBlockClick(e) {
    const target = e.target;
    if (!target)
        return;
    blockClick();
}
document.addEventListener('DOMContentLoaded', initApp);
blockEle.addEventListener('click', handleBlockClick);
//# sourceMappingURL=events.js.map
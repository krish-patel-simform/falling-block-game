import { blockClick, startGame } from "./features.ts"
import { state } from "./index.ts"

const blockEle = document.querySelector<HTMLDivElement>('.block')!

const startGameEle = document.querySelector<HTMLButtonElement>('#start-game')!

function initApp()
{
    //reste state
    state.score = 0
    state.difficulty = 0
    state.lives = 3

    // call the start game
    startGame()
}

function handleBlockClick(e:PointerEvent)
{
    const target = e.target as HTMLElement;

    if(!target)
        return

    blockClick()
}

// document.addEventListener('DOMContentLoaded',initApp)

blockEle.addEventListener('click',handleBlockClick)

startGameEle.addEventListener('click',initApp)
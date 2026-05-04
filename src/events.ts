import { blockClick, startGame } from "./features.ts"

const blockEle = document.querySelector<HTMLDivElement>('.block')!

const startGameEle = document.querySelector<HTMLButtonElement>('.start-game')!

function initApp()
{
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
import { state } from "./index.ts";
import { Block } from "./types.ts";

const containerEle = document.querySelector<HTMLDivElement>('.container')!

const blockEle = document.querySelector<HTMLDivElement>('.block')!
const stopGameBtnEle  = document.querySelector<HTMLButtonElement>('#stop-game')!
const scoreEle = document.querySelector<HTMLSpanElement>('#score')!
const livesEle = document.querySelector<HTMLSpanElement>('#lives')!

let timer:null|number = null

const endY:number = containerEle.getBoundingClientRect().height - blockEle.getBoundingClientRect().height

function getRandom(min=1001,max=9999)
{
    return (Math.floor(Math.random() * (max-min + 1))) + min
}

function getRandomY()
{
    const maxHeight = containerEle.getBoundingClientRect().height;

    console.log("maxHeight:",maxHeight)
    const randomHeight = getRandom(100,maxHeight-200)

    return Math.min(maxHeight,randomHeight)
}

function getRandomX()
{
    const maxWidth = containerEle.getBoundingClientRect().width;
console.log("maxWidt:",maxWidth)
    const randomWidth = getRandom(101,maxWidth-200)

    return Math.min(maxWidth,randomWidth)
}

export function startGame()
{
    //Generate the Block
    const block:Block = generateBlock()

    //Start falling
    if(timer)
        clearInterval(timer)
    
    const timeout = 1000 - (state.difficulty * 50)
    if(!timeout)
    {
        if(timer)
            stopGame(timer)
    }

    timer = setInterval(()=>{
        startFalling(block)
    },(1000 - (state.difficulty * 100)))
    // check the if we reach to end then stop the game 
}

//User click block
export function blockClick()
{
    if(state.lives <= 0)
    {
        if(timer)
            stopGame(timer)
    }
    else
    {
        // check if is end 
        state.score += 100
        console.log("Score:",state.score)
        scoreEle.textContent = state.score.toString()
    
        //Increase difficulty
        state.difficulty += 1
    
        // start game()
        startGame()
    }
}

function stopGame(timerId:number)
{
    console.log("Stop game called")
    clearInterval(timerId)
    // alert like game is stop
    alert(`Game is Over Your Score is : ${state.score}`)
}

function generateBlock()
{
    const id = getRandom(1001,9999)
    const x = getRandomX()
    const y = getRandomY()


    const block = new Block(id,x,y)
    renderBlock(block)

    return block
}

function startFalling(block:Block)
{

    if(block.y>=endY)
    {
        state.lives -= 1
        livesEle.textContent = state.lives.toString()
        
        if(state.lives > 0)
        {
            startGame()
        }
        else
        {
            if(timer)
                stopGame(timer)
        } 
    }
    else
    {
        block.y += (100)
        renderBlock(block)
    }
}

function renderBlock(block:Block)
{
    console.log(block)
    blockEle.style.top = `${block.y}px`
    blockEle.style.left = `${block.x}px`
}

// stop game when btn click
stopGameBtnEle.addEventListener('click',()=>{
    if(timer)
        stopGame(timer)
})
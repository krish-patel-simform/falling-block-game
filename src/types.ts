export type State = {
    score:number,
    lives:number,
    difficulty:number
}

interface BlockType {
    x:number,
    y:number,
    id:number
}

export class Block implements BlockType{
    x: number
    y: number
    id: number

    constructor(id:number,x:number,y:number)
    {
        this.id = id;
        this.x = x;
        this.y = y
    }
}
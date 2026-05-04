export type State = {
    score: number;
    lives: number;
    difficulty: number;
};
interface BlockType {
    x: number;
    y: number;
    id: number;
}
export declare class Block implements BlockType {
    x: number;
    y: number;
    id: number;
    constructor(id: number, x: number, y: number);
}
export {};
//# sourceMappingURL=types.d.ts.map
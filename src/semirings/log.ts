import {Semiring, Property} from "../index";
import {MULTIPLY, ADD}  from "./floating-point";

export const LogSemiring: Semiring<number> = {
    // constructor() {
    //     super([Property.LeftSemiring,
    //         Property.RightSemiring,
    //         Property.Commutative]);
    // }
    AdditiveIdentity: Infinity,
    MultiplicativeIdentity: 0.0,


    plus: (x:number,y:number)=>{
        if (x === Infinity)
            return y;
        else if (y === Infinity)
            return x;
        else
            return -Math.log(Math.exp(-x) + Math.exp(-y));
    },
    times: ADD
};

export function fromProbability(x: number): number {
    if (x > 1.0 || x < 0.0) throw new Error("Can't have probabilities >1.0 or <0.0");
    return -Math.log(x);
}

export function toProbability(x: number): number {
    let p = Math.exp(-x);
    if (p > 1.0 || p < 0.0) throw new Error("Can't have probabilities >1.0 or <0.0");
    return p;
}

export default LogSemiring ;
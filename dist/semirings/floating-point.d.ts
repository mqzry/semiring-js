import { Semiring } from "../index";
import { Expression } from "../abstract-expression/expression";
import { Multiplication, Addition } from "../abstract-expression/arithmetic";
export declare function ADD(x: number, y: number): number;
export declare function MULTIPLY(x: number, y: number): number;
export declare const FloatingPointSemiring: Semiring<number>;
export declare function createMultiplication(x: Expression<number>, y: Expression<number>): Multiplication;
export declare function createAddition(x: Expression<number>, y: Expression<number>): Addition;
export declare const FloatingPointTreeSemiring: Semiring<Expression<number>>;
export default FloatingPointTreeSemiring;

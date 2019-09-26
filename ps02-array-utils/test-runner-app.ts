// TODO: Add Honor Code Header

/** Import Test Helpers */
import { testNumber, testArray, testBoolean } from "./test-util";

// TODO: Import functions as you write them
import { count } from "./array-utils";
import {  max  } from "./array-utils";
import {  has  } from "./array-utils";
import {  all  } from "./array-utils";
import { equals } from "./array-utils";
import { cycle } from "./array-utils";
import { concat } from "./array-utils";
import {  sub  } from "./array-utils";
import { splice } from "./array-utils";

export let main = async () => {
    
    // Part 1. count
    // Use Cases
    testNumber("count([10, 20], 20)", 1, count([10, 20], 20));
    testNumber("count([20, 20], 20)", 2, count([20, 20], 20));
    // Edge Cases
    testNumber("count([], 20)", 0, count([], 20));
    testNumber("count([10, 30], 20)", 0, count([10, 30], 20));

    // TODO: Add tests for parts as you work through each

    // Part 2. max
    // Use Cases 
    testNumber("max([2, 3, 8])", 8, max([2, 3, 8]));
    testNumber("max([1, 2, 3])", 3, max([1, 2, 3]));
    // Edge Cases
    testNumber("max(placeholder)", 0.5, max([-1, 0.5, -2]));
    testNumber("max(placeholder)", -10, max([-12, -10, -11]));
    testNumber("max([])", Number.MIN_VALUE, max([]));

    // Part 3. has
    // Use Cases
    testBoolean("has([1, 3, 4], 3)", true, has([1, 3, 4], 3));
    testBoolean("has([1, 4, 7], 2)", false, has([1, 4, 7], 2));
    // Edge Cases
    testBoolean("has([], 8)", false, has([], 8));

    // Part 4. all
    // Use Cases
    testBoolean("all[2, 4, 5], 2)", false, all([2, 4, 5], 2));
    testBoolean("all[1, 1, 1], 1)", true, all([1, 1, 1], 1));
    // Edge Cases
    testBoolean("all[], 1)", false, all([], 1));

    // Part 5. equals
    // Use Cases
    testBoolean("equals[1, 2, 3], [1, 2, 3])", true, equals([1, 2, 3], [1, 2, 3]));
    testBoolean("equals[1, 2], [2, 1])", false, equals([1, 2], [2, 1]));
    // // Edge Cases
    testBoolean("equals[], [])", true, equals([], []));

     // Part 6. cycle
     // Use Cases
    testArray("cycle(3, 5)", [1, 2, 3, 1, 2], cycle(3, 5));
    testArray("cycle(2, 5)", [1, 2, 1, 2, 1], cycle(2, 5));
    // Edge Cases
    testArray("cycle(1, 3)", [1, 1, 1], cycle(1, 3));

    testArray("cycle(0, 3))", [], cycle(0, 3));

    testArray("cycle(3, -3))", [], cycle(3, -3));

    // Part 7. concat
    // Use Cases
    testArray("concat([1], [2])", [1, 2], concat([1], [2]));
    testArray("concat([2], [3])", [2, 3], concat([2], [3]));
    // Edge Cases
    testArray("concat([], [1])", [1], concat([], [1])); 
    
    // Part 8. sub
    // Use Cases
    testArray("sub([0, 1, 2], 1, 2)",  [1], sub([0, 1, 2], 1, 2));
    testArray("sub([0, 1, 2], 1, 2)",  [1], sub([0, 1, 2], 1, 2));
    // Edge Cases
    testArray("sub([1], 2 ,2)", [], sub([1], 2, 2));

    // Part 9. splice
    // Use Cases
    testArray("splice[0, 1, 2], 1, [6, 7])", [0, 6, 7, 1, 2], splice([0, 1, 2], 1, [6, 7]));
    testArray("([1, 2, 3, 4], 2, [6, 7])", [1, 2, 6, 7, 3, 4], splice([1, 2, 3, 4], 2, [6, 7]));
    testArray("([1, 2, 3, 4, 5, 6], 4, [20, 30])", [1, 2, 3, 4, 20, 30, 5, 6], splice([1, 2, 3, 4, 5, 6], 4, [20, 30]));

    // Edge Cases
    testArray("splice[0, 1], 2, [2])", [0, 1, 2], splice([0, 1], 2, [2]));
};

main();
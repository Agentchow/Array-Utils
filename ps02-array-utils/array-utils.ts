// TODO: Add Honor Code Header

/*
 * 1. count
 * Given an array of numbers and a number to search for, returns a count of the
 * number of times the number occurs in the array.
 */
import { print } from "introcs";
export let count = (a: number[], b: number): number => {
    let c = 0;
    for (let i = 0; i < a.length; i++ ) {
    if (a[i] === b) {
        c = c + 1;
    }
}
    return c;
};

export let max = (a: number[]): number => {
    let m = -15;
    if (a.length === 0) {
        m = Number.MIN_VALUE;
    }
    if (a.length === 0) {
        return m;
    }
    for (let i = 0; i < a.length; i++) {
        if (a[i] > m) {
            m = a[i];
        }

    }
    return m;
};

export let has = (a: number[], b: number): boolean => {
    let h = false;
    for (let i = 0; i < a.length; i++) {
        if (a[i] === b) {
            h = true;
        }
    }
    return h;
};

export let all = (a: number[], b: number): boolean => {
    let al = true;
    if (a.length === 0) {
        al = false;
        return al;
    }
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b) {
            al = false;
            return al;
        }
        }
    return al;
    };

export let equals = (a: number[], b: number[]): boolean => {
    let e = true;
    if (a.length === 0 && b.length === 0) {
        e = true;
        return e;
    }
    if (a.length !== b.length) {
        e = false;
        return e;
    }
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            e = false;
            return e;
        }
    }
    return e;
};

export let cycle = (a: number,  b: number): number[] => {
    let c: number[] = [];
    let d = 1;
    if (a <= 0) {
        return c;
        }
    if (b <= 0) {
        return c;
    }

    for (let i = 0; i < b; i++) {
        c[i] = d;
        d++;
        if (d > a) {
          d = 1;
            }
    }
    return c;
};

export let concat = (a: number[], b: number[]): number[] => {
    let c: number[] = [];
    if (a.length === 0) {
            return b;
    } 
    if (b.length === 0) {
            return a;      
    }
    for (let i = 0; i < a.length; i++) {
        c[i] = a[i];
    }
    for (let i = 0; i < b.length; i++) {
        c[i + a.length] = b[i];
    }
    return c;
};

export let sub = (a: number [], start: number, end: number): number[] => {
    let arr: number[] = [];
    let count = 0;
    if (start >= a.length) {
        
        return [];
    }
   
    if (start < 0) {
        start = 0;
    }

    if (end > a.length) {
        end = a.length;
    }
    
    for (let i = start; i <= end - 1 ; i++) {
        arr[count] = a[i];
        count++;
    }
    return arr;
};

export let splice = (a: number[], b:number, c: number[]): number[] => {
    let s: number[] = [];
    if (b < 0) {
        s = concat(c, a);
        return s;
    }
    if (b > a.length) {
        s = concat(a, c);
        return s;
    }
    s = concat(concat(sub(a, 0, b), c), sub(a, b, a.length));
    return s;
};

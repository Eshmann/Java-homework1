const a = parseFloat(prompt('Enter A'));
const b = parseFloat(prompt('Enter B'));
const c = parseFloat(prompt('Enter C'));
const result1 = solveQuadr(a, b, c);
const result2 = solveQuadr(a, b, c);

const result  = solveQuadr(a, b, c);
 document.write(result);



function solveQuadr (a, b, c) {
    const d = discr('a, b, c');
    if (d > 0) {
    x1 = (-b + Math.sqrt(d)/(2*a));
    x2 = (-b - Math.sqrt(d)/(2*a));
    }
    return document.write(x1);
}

// function discr(a, b, c) {
//     return ;
// }


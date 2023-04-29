import { usolve } from 'mathjs';

export function calculateLinearRegression(data) {
    // console.log(data);
    const matrix = [
        [
            data.reduce((prev, d) => prev + d.salary, 0),
            data.reduce((prev, d) => prev + Math.pow(d.salary, 2), 0),
        ],
        [data.length, data.reduce((prev, d) => prev + d.salary, 0)],
    ];

    const R = [
        data.reduce((prev, d) => prev + d.salary * d.creditSum, 0),
        data.reduce((prev, d) => prev + d.creditSum, 0),
    ];

    const answer = usolve(matrix, R);
    console.log('Regression calculated:', answer);

    return {
        a: answer[0][0],
        b: answer[1][0],
    };
}

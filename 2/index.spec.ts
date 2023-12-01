import Program from '.';
import { parseInputString } from '../utils';

describe('Part 1', () => {
    let program: Program;
    const input = parseInputString(`
        5 1 9 5
        7 5 3
        2 4 6 8
    `);

    beforeEach(() => {
        program = new Program();
    });

    it('difference of 1 & 9 should be 8', async () => {
        const output = await program.getDifference(1, 9);

        expect(output).toEqual(8);
    });

    it('largest and smallest number of 5,1,9,5 should be 1 & 9', async () => {
        const output = await program.getHighestAndLowestNumber([5, 1, 9, 5]);

        expect(output).toEqual({
            highest: 9,
            lowest: 1,
        });
    });

    it('checksum should be 18', async () => {
        const output = await program.runPart1(input);

        expect(output).toEqual(18);
    });
});

describe('Part 2', () => {
    let program: Program;
    const input = parseInputString(`
        5 9 2 8
        9 4 7 3
        3 8 6 5
    `);

    beforeEach(() => {
        program = new Program();
    });

    it('divisible numbers of 5, 9, 2, 8 should be 8 & 2', async () => {
        const output = await program.getEvenlyDivisibleNumbers([5, 9, 2, 8]);

        expect(output).toEqual([8, 2]);
    });

    it('checksum should be 18', async () => {
        const output = await program.runPart2(input);

        expect(output).toEqual(9);
    });
});

import Program from '.';
import { parseInputString } from '../utils';

describe('Part 1', () => {
    let program: Program;

    beforeEach(() => {
        program = new Program();
    });

    it('should throw error', () => {
        expect(() => {
            program.runPart1(parseInputString(`
                b inc 5 a > 1
            `));
        }).toThrow('Invalid instruction');
    });

    it('should return 1', () => {
        const output = program.runPart1(parseInputString(`
            b inc 5 if a > 1
            a inc 1 if b < 5
            c dec -10 if a >= 1
            c inc -20 if c == 10
        `));

        expect(output).toEqual(1);
    });
});

describe('Part 2', () => {
    let program: Program;

    beforeEach(() => {
        program = new Program();
    });

    it('should return 10', () => {
        const output = program.runPart2(parseInputString(`
            b inc 5 if a > 1
            a inc 1 if b < 5
            c dec -10 if a >= 1
            c inc -20 if c == 10
        `));

        expect(output).toEqual(10);
    });
});

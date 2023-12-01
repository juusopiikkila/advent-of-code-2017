import Program from '.';
import { parseInputString } from '../utils';

describe('Part 1', () => {
    let program: Program;

    beforeEach(() => {
        program = new Program();
    });

    it('should parse input', () => {
        // eslint-disable-next-line no-tabs
        const output = program.parseInput('0	2	7	0');

        expect(output).toEqual([0, 2, 7, 0]);
    });

    it('should return 5', () => {
        /* eslint-disable no-tabs */
        const output = program.runPart1(parseInputString(`
            0	2	7	0
        `));
        /* eslint-enable no-tabs */

        expect(output).toEqual(5);
    });
});

describe('Part 2', () => {
    let program: Program;

    beforeEach(() => {
        program = new Program();
    });

    it('should return 4', () => {
        /* eslint-disable no-tabs */
        const output = program.runPart2(parseInputString(`
            0	2	7	0
        `));
        /* eslint-enable no-tabs */

        expect(output).toEqual(4);
    });
});

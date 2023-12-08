import Program from '.';
import { parseInputString } from '../utils';

describe('Part 1', () => {
    let program: Program;

    beforeEach(() => {
        program = new Program();
    });

    it('should return tknk', () => {
        const output = program.runPart1(parseInputString(`
            pbga (66)
            xhth (57)
            ebii (61)
            havc (66)
            ktlj (57)
            fwft (72) -> ktlj, cntj, xhth
            qoyq (66)
            padx (45) -> pbga, havc, qoyq
            tknk (41) -> ugml, padx, fwft
            jptl (61)
            ugml (68) -> gyxo, ebii, jptl
            gyxo (61)
            cntj (57)
        `));

        expect(output).toEqual('tknk');
    });
});

// describe('Part 2', () => {
//     let program: Program;

//     beforeEach(() => {
//         program = new Program();
//     });

//     it('should return 1', () => {
//         const output = program.runPart2(parseInputString(`
//             pbga (66)
//             xhth (57)
//             ebii (61)
//             havc (66)
//             ktlj (57)
//             fwft (72) -> ktlj, cntj, xhth
//             qoyq (66)
//             padx (45) -> pbga, havc, qoyq
//             tknk (41) -> ugml, padx, fwft
//             jptl (61)
//             ugml (68) -> gyxo, ebii, jptl
//             gyxo (61)
//             cntj (57)
//         `));

//         expect(output).toEqual(60);
//     });
// });

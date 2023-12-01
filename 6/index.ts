import type { ProgramDefinition } from '../utils';

export default class Program implements ProgramDefinition {
    parseInput(input: string): number[] {
        return input.split('\t').map(Number);
    }

    runProgram(input: number[], returnCyclesBetween = false) {
        const banks = [...input];
        const states: string[] = [];
        let cycles = 0;
        let currentState: string;

        states.push(banks.join(','));

        // eslint-disable-next-line no-constant-condition
        while (true) {
            const maxValue = Math.max(...banks);
            const maxBankIndex = banks.indexOf(maxValue);

            banks[maxBankIndex] = 0;
            cycles += 1;

            for (let index = 1; index <= maxValue; index += 1) {
                banks[(maxBankIndex + index) % banks.length] += 1;
            }

            currentState = banks.join(',');

            if (states.includes(currentState)) {
                break;
            }

            states.push(currentState);
        }

        if (returnCyclesBetween) {
            return states.length - states.indexOf(currentState);
        }

        return cycles;
    }

    runPart1(input: string[]) {
        return this.runProgram(this.parseInput(input[0]));
    }

    runPart2(input: string[]) {
        return this.runProgram(this.parseInput(input[0]), true);
    }
}

import type { ProgramDefinition } from '../utils';

export default class Program implements ProgramDefinition {
    private pointer = 0;

    runProgram(input: string[], reduceOffset = false) {
        const program = input.map(Number);
        let steps = 0;

        while (this.pointer >= 0 && this.pointer < program.length) {
            const currentPointer = this.pointer;

            this.pointer += program[currentPointer];

            if (reduceOffset && program[currentPointer] >= 3) {
                program[currentPointer] -= 1;
            } else {
                program[currentPointer] += 1;
            }

            steps += 1;
        }

        return steps;
    }

    runPart1(input: string[]) {
        return this.runProgram(input);
    }

    runPart2(input: string[]) {
        return this.runProgram(input, true);
    }
}

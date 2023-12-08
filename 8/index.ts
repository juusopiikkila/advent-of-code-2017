import type { ProgramDefinition } from '../utils';

class Register {
    private values: Record<string, number> = {};

    private highestValue: number = 0;

    getValue(pointer: string) {
        return this.values[pointer] || 0;
    }

    increment(pointer: string, value: number) {
        if (this.values[pointer] === undefined) {
            this.values[pointer] = 0;
        }

        this.values[pointer] += value;

        this.highestValue = Math.max(this.highestValue, this.values[pointer]);
    }

    decrement(pointer: string, value: number) {
        if (this.values[pointer] === undefined) {
            this.values[pointer] = 0;
        }

        this.values[pointer] -= value;

        this.highestValue = Math.max(this.highestValue, this.values[pointer]);
    }

    getHighestValue() {
        return this.highestValue;
    }

    getLargestValue() {
        return Math.max(...Object.values(this.values));
    }
}

class Instruction {
    constructor(
        private readonly pointer: string,
        private readonly operation: string,
        private readonly value: number,
        private readonly conditionPointer: string,
        private readonly conditionComparator: string,
        private readonly conditionValue: number,
    ) {}

    process(register: Register) {
        if (
            (this.conditionComparator === '==' && register.getValue(this.conditionPointer) === this.conditionValue)
            || (this.conditionComparator === '!=' && register.getValue(this.conditionPointer) !== this.conditionValue)
            || (this.conditionComparator === '>=' && register.getValue(this.conditionPointer) >= this.conditionValue)
            || (this.conditionComparator === '<=' && register.getValue(this.conditionPointer) <= this.conditionValue)
            || (this.conditionComparator === '>' && register.getValue(this.conditionPointer) > this.conditionValue)
            || (this.conditionComparator === '<' && register.getValue(this.conditionPointer) < this.conditionValue)
        ) {
            if (this.operation === 'inc') {
                register.increment(this.pointer, this.value);
            } else {
                register.decrement(this.pointer, this.value);
            }
        }
    }
}

class CPU {
    constructor(
        private readonly instructions: Instruction[],
        public register: Register = new Register(),
    ) {}

    run() {
        for (const instruction of this.instructions) {
            instruction.process(this.register);
        }
    }
}

export default class Program implements ProgramDefinition {
    parseInstructions(input: string[]) {
        const instructions: Instruction[] = [];

        for (const line of input) {
            const matches = line.match(/(\w+) (inc|dec) (-?\d+) if (\w+) ([!<=>]+) (-?\d+)/);

            if (!matches) {
                throw new Error('Invalid instruction');
            }

            instructions.push(new Instruction(
                matches[1],
                matches[2],
                Number(matches[3]),
                matches[4],
                matches[5],
                Number(matches[6]),
            ));
        }

        return instructions;
    }

    runPart1(input: string[]) {
        const instructions = this.parseInstructions(input);
        const cpu = new CPU(instructions);

        cpu.run();

        return cpu.register.getLargestValue();
    }

    runPart2(input: string[]) {
        const instructions = this.parseInstructions(input);
        const cpu = new CPU(instructions);

        cpu.run();

        return cpu.register.getHighestValue();
    }
}

import type { ProgramDefinition } from '../utils';

export default class Program implements ProgramDefinition {
    checkPassword(password: string, isStrong = false) {
        const words = password.split(' ');

        if (isStrong) {
            const sortedWords = [...words].map((word) => [...word].sort().join(''));

            return sortedWords.length === sortedWords
                .filter((word, index, array) => array.indexOf(word) === index).length;
        }

        return words.length === words.filter((word, index, array) => array.indexOf(word) === index).length;
    }

    async runPart1(input: string[]) {
        return input.filter((password) => this.checkPassword(password)).length;
    }

    async runPart2(input: string[]) {
        return input.filter((password) => this.checkPassword(password, true)).length;
    }
}

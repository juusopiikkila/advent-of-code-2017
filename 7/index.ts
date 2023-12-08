import type { ProgramDefinition } from '../utils';

interface Node {
    name: string
    value: number
    parent?: Node
    children: Node[]
}

export default class Program implements ProgramDefinition {
    createNodes(input: string[]) {
        const nodes: Node[] = [];
        const children: Record<string, string[]> = {};

        for (const line of input) {
            const matches = line.match(/(\w+) \((\d+)\)(?: -> ([\w ,]+))?/);

            if (!matches) {
                throw new Error('Invalid input');
            }

            if (matches[3]) {
                children[matches[1]] = matches[3].split(', ');
            }

            const node: Node = {
                name: matches[1],
                value: Number(matches[2]),
                children: [],
            };

            nodes.push(node);
        }

        for (const [name, items] of Object.entries(children)) {
            const node = nodes.find((x) => x.name === name);

            if (!node) {
                throw new Error('No node found');
            }

            for (const item of items) {
                const child = nodes.find((x) => x.name === item);

                if (!child) {
                    throw new Error('No child found');
                }

                child.parent = node;
                node.children.push(child);
            }
        }

        return nodes;
    }

    runPart1(input: string[]) {
        const nodes = this.createNodes(input);

        const rootNode = nodes.find((x) => !x.parent);

        if (!rootNode) {
            throw new Error('No root node found');
        }

        return rootNode.name;
    }

    runPart2(input: string[]) {
        return 1;
    }
}

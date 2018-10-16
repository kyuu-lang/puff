import { SyntaxSet } from './scanner/types';
import { Scanner } from './scanner';

const debug = require('debug')('compiler')

const scanner = new Scanner()

scanner.setText('// hello\n///code here   \n abc')

// Iterate through the input string
debug(scanner)
for (let token = scanner.scan(); token != SyntaxSet.EndOfFileToken; token = scanner.scan()) {}

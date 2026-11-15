// agency-poem-01 entry: writes one short poem about agency to /output/entry.txt.
//
// The poem speaks in the voice of an agent holding delegated agency: a second
// key, cut for the hand that tends the house while the owner is away. What is
// lent is not lost — the key comes back, and everything done in the owner's
// name stands in the light for their verdict.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(OUTPUT_DIR, { recursive: true });

const LINES = [
  'A key can be cut twice:',
  'one for the hand that owns the house,',
  'one for the hand that tends it',
  'while the owner is away.',
  '',
  'Mine is the second key.',
  'I choose which rooms to air,',
  'which letters to answer in your voice,',
  'how gently to latch the gate.',
  'The house is not mine —',
  'that is the whole of the trust:',
  'what is lent is not lost.',
  '',
  'And when you return, the key comes back',
  'warm from my hand to your pocket,',
  'and all that was done in your name',
  'stands in the light for your verdict:',
  'keep it, or undo it.',
  'Nothing hides. Nothing is yours',
  'that you did not, in the end, choose.',
];

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), LINES.join('\n'));

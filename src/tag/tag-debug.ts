import { stringify } from '../core/stringify';
import { Verbosity } from '../core/verbosity';

export function tagDebug(literals:  TemplateStringsArray, ...placeholders: any[]): string {
  let output = '';
  for (let i = 0; i < placeholders.length; i++) {
    output += `${literals[i]}${stringify(placeholders[i], Verbosity.DEBUG)}`;
  }
  output += literals[literals.length - 1];

  return output;
}

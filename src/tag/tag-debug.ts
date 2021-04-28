import {stringify} from '../core/stringify';

type TemplateTag = (literals: TemplateStringsArray, ...placeholders: any[]) => string;

/**
 * Tagger to stringify all placeholders in the template string.
 *
 * @param verbosity - Verbosity level of the string's placeholders.
 * @returns The tagger to tag template strings.
 * @public
 */
export function tagStringify(verbosity: number): TemplateTag {
  return (literals: TemplateStringsArray, ...placeholders: any[]) => {
    let output = '';
    for (let i = 0; i < placeholders.length; i++) {
      output += `${literals[i]}${stringify(placeholders[i], verbosity)}`;
    }
    output += literals[literals.length - 1];

    return output;
  };
}

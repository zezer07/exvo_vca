export function validInput(input: string, regexp: RegExp) {
  return new RegExp(regexp).test(input);
}

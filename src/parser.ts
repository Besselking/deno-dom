/**
 * Parser interface
 */
export type Parser = (html: string) => string;
export let parse: Parser = (_html) => {
  throw new Error("Error: deno-dom: No parser registered");
};

export let parseFrag: Parser = (_html) => {
  throw new Error("Error: deno-dom: No parser registered");
};

const originalParse = parse;
export function register(func: Parser, fragFunc: Parser) {
  if (parse !== originalParse) {
    return;
  }

  parse = func;
  parseFrag = fragFunc;
}


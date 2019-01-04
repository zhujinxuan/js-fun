const book = new Weakmap();
const UNDEFINED = Symbol('undefined');
const MISSING = Symbol('MISSING')

function describe(r, knowledge) {
  if (!book.has(r)) book.set(r, {})
}

function what(r, p) {
  if (!book.has(r)) return MISSING
  const knowledge = book.get(r)
  if (r[p] === undefined) return MISSING
  return r[p] === UNDEFINED ? undefined : r[p]
}

export {descrie, what, MISSING}

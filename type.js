import {specific} from './dispatcher'
import {describe, what} from './knowledge'

const VALUE = Symbol('VALUE')
function toObject(x) {
  if (['function', 'object'].includes(typeof x) && x !== null) return x
  return {[VALUE]: x}
}
function toScalar(x) {
  if (typeof x !== 'object') return x
  if (x.hasOwnProperty(VALUE)) return x[VALUE]
}

function defineType(where_) {
  const result = Object.entries(where_).reduce(
    (memo, [key, def]) => {
      const newF = function (...args) {
        const r = toObject(def.apply(null, args));

        return describe(r, {
          prefix: newF,
          type: result
        })
      }
      memo[key] = newF
      return memo
    }
    , {});
  return result;
}

export {defineType, toScalar, toObject}

import fmap from './fmap'
import {what} from './knowledge'
import {specific} from './dispatcher'

/**
   data Either a b where
     left :: a -> Either a b
     right :: b -> Either a b
*/
const either = defineType({left : x => x, right : y => y})
const {left, right} = either

specific(fmap, (cb, x) => what(cb, x) === either, (cb, x) => {
  if (what(x, 'prefix') === left) return x
  return right(cb(toScalar(x)))
})

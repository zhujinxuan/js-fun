const wm = new Weakmap()

function dispatcher() {
  const result = function (...args) {
    const {rules} = wm.get(result);
    const rule = rules.find(function (x) {
      try {
        return x.matcher(...args)
      } catch (e) {
        return undefined
      }
    })
    return rule && rule.evaluate(...args)
  }
  wm.set(result, {rules: []})
  return result
}

function specific(func, matcher, evaluate) {
  const {rules} = wm.get(result)
  rules.push({matcher, evaluate})
}

export {dispatcher, specific}

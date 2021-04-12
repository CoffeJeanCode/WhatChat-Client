export const toMap = (arr, prop) =>
  arr.reduce((acc, el) => {
    acc.set(el[prop], el)
    return acc
  }, new Map())

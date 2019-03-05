
export default (function () {
  function newton (params, result, soln, precision) {
    var devParams = []
    for (var i = 0, len = params.length - 1; i < len; ++i) {
      devParams.push(params[i] * i)
    }
    var delta, calResult, solnPow = [1]
    do {
      calResult = 0
      for (var i = 0, len = params.length; i < len; ++i) {
        calResult += solnPow[i] * params[i]
        solnPow[i + 1] = solnPow[i] * soln
      }
      delta = Math.abs(calResult - result)
    } while (delta > precision)
    return soln
  }

  return {
    newton: newton
  }
})()

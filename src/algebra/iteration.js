
export default (function () {
  function newton (params, soln, precision, step) {
    var devParams = []
    for (var i = 0, len = params.length - 1; i < len; ++i) {
      devParams.push(params[i] * i)
    }
    var result = 0, solnPow = [1], count = 0, slope = 0
    while (true) {
      result = 0
      for (var i = 0, len = params.length; i < len; ++i) {
        result += solnPow[i] * params[i]
        solnPow[i + 1] = solnPow[i] * soln
      }
      if (Math.abs(result) < precision) {
        return soln
      }
      if (++count >= step) {
        return soln
      }
      slope = 0
      for (var i = 0, len = devParams.length; i < len; ++i) {
        slope += solnPow[i] * devParams[i]
      }
      soln = slope === 0 ? (soln + precision) : (soln - result / slope)
    }
  }

  return {
    newton: newton
  }
})()


import iteration from './src/algebra/iteration'
import matrix from './src/geometry/matrix'
import rectangle from './src/geometry/rectangle'

export default (function () {
  return {
    algebra: {
      iteration: iteration
    },
    geometry: {
      matrix: matrix,
      rectangle: rectangle
    }
  }
})()
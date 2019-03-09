
import iteration from './src/algebra/iteration'
import matrix from './src/geometry/matrix'
import rectangle from './src/geometry/rectangle'
import Svg from './src/graphics/svg'

export default (function () {
  return {
    algebra: {
      iteration: iteration
    },
    geometry: {
      matrix: matrix,
      rectangle: rectangle
    },
    graphics: {
      Svg: Svg
    }
  }
})()
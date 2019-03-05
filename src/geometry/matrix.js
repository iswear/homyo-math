
export default (function () {
  function newIdentityMat2D () {
    return [
      1, 0, 0,
      0, 1, 0
    ]
  }

  function resetMat2D (mat) {
    mat[0] = 1
    mat[1] = 0
    mat[2] = 0
    mat[3] = 0
    mat[4] = 1
    mat[5] = 0
    return mat
  }

  function copyMat2D (src, des) {
    for (var i = 0, len = des.length; i < len; ++i) {
      des[i] = src[i]
    }
    return des
  }

  function multiplyMat2D (mat1, mat2) {
    return [
      mat1[0] * mat2[0] + mat1[1] * mat2[3], 
      mat1[0] * mat2[1] + mat1[1] * mat2[4], 
      mat1[0] * mat2[2] + mat1[1] * mat2[5] + mat1[2],
      mat1[3] * mat2[0] + mat1[4] * mat2[3], 
      mat1[3] * mat2[1] + mat1[4] * mat2[4], 
      mat1[3] * mat2[2] + mat1[4] * mat2[5] + mat1[5]
    ]
  }

  function translate2D (mat, x, y) {
    return [
      mat[0],
      mat[1],
      mat[0] * x + mat[1] * y + mat[2],
      mat[3],
      mat[4],
      mat[3] * x + mat[4] * y + mat[5]
    ]
  }

  function scale2D (mat, x, y) {
    return [
      mat[0] * x,
      mat[1] * y, 
      mat[2],
      mat[3] * x, 
      mat[4] * y, 
      mat[5]
    ]
  }

  function shear2D (mat, x, y) {
    return [
      mat[0] + mat[1] * y, 
      mat[0] * x + mat[1], 
      mat[2],
      mat[3] + mat[4] * y, 
      mat[3] * x + mat[4], 
      mat[5]
    ]
  }

  function rotate2D (mat, angle) {
    var s = Math.sin(angle);
    var c = Math.cos(angle);
    return [
      mat[0] * c + mat[1] * s,
      mat[1] * c - mat[0] * s,
      mat[2],
      mat[3] * c + mat[4] * s,
      mat[4] * c - mat[3] * s, 
      mat[5]
    ]
  }

  function reverse2D (mat) {
    var temp = mat[0] * mat[4] - mat[1] * mat[3];
    return [
      mat[4] / temp, 
      -mat[1] / temp, 
      (mat[1] * mat[5] - mat[2] * mat[4]) / temp,
      -mat[3] / temp, 
      mat[0] / temp, 
      (mat[3] * mat[2] - mat[0] * mat[5]) / temp
    ]
  }

  return {

  }
})()

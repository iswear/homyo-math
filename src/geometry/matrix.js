
export default (function () {
  function newMat2D () {
    return [
      1, 0, 0,
      0, 1, 0
    ];
  }

  function resetMat2D (mat) {
    mat[0] = 1
    mat[1] = 0
    mat[2] = 0
    mat[3] = 0
    mat[4] = 1
    mat[5] = 0
    return mat;
  }

  function copyMat2D (src, des) {
    if (!des) {
      des = [];
    }
    for (var i = 0, len = src.length; i < len; ++i) {
      des[i] = src[i];
    }
    return des;
  }

  function multiplyMat2D (mat1, mat2) {
    return [
      mat1[0] * mat2[0] + mat1[1] * mat2[3], 
      mat1[0] * mat2[1] + mat1[1] * mat2[4], 
      mat1[0] * mat2[2] + mat1[1] * mat2[5] + mat1[2],
      mat1[3] * mat2[0] + mat1[4] * mat2[3], 
      mat1[3] * mat2[1] + mat1[4] * mat2[4], 
      mat1[3] * mat2[2] + mat1[4] * mat2[5] + mat1[5]
    ];
  }

  function transformVector2D (mat, vector) {
    return [
      mat[0] * vector[0] + mat[1] * vector[1] + mat[2],
      mat[3] * vector[0] + mat[4] * vector[1] + mat[5]
    ];
  }

  function translate2D (mat, x, y) {
    return [
      mat[0],
      mat[1],
      mat[0] * x + mat[1] * y + mat[2],
      mat[3],
      mat[4],
      mat[3] * x + mat[4] * y + mat[5]
    ];
  }

  function scale2D (mat, x, y) {
    return [
      mat[0] * x,
      mat[1] * y, 
      mat[2],
      mat[3] * x, 
      mat[4] * y, 
      mat[5]
    ];
  }

  function shear2D (mat, x, y) {
    return [
      mat[0] + mat[1] * y, 
      mat[0] * x + mat[1], 
      mat[2],
      mat[3] + mat[4] * y, 
      mat[3] * x + mat[4], 
      mat[5]
    ];
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
    ];
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
    ];
  }

  function newMat3D () {
    return [
      1, 0, 0, 0,
      0, 1, 0, 0,
      0, 0, 1, 0,
      0, 0, 0, 1
    ];
  }

  function resetMat3D (mat) {
    mat[0] = 1
    mat[1] = 0
    mat[2] = 0
    mat[3] = 0
    mat[4] = 0
    mat[5] = 1
    mat[6] = 0
    mat[7] = 0
    mat[8] = 0
    mat[9] = 0
    mat[10] = 1
    mat[11] = 0
    mat[12] = 0
    mat[13] = 0
    mat[14] = 0
    mat[15] = 1
    return mat;
  }

  function copyMat3D (src, des) {
    if (!des) {
      des = [];
    }
    for (var i = 0, len = src.length; i < len; ++i) {
      des[i] = src[i];
    }
    return des;
  }

  function multiplyMat3D (mat1, mat2) {
    return [
      mat1[0] * mat2[0] + mat1[1] * mat2[4] + mat1[2] * mat2[8] + mat1[3] * mat2[12],
      mat1[0] * mat2[1] + mat1[1] * mat2[5] + mat1[2] * mat2[9] + mat1[3] * mat2[13],
      mat1[0] * mat2[2] + mat1[1] * mat2[6] + mat1[2] * mat2[10] + mat1[3] * mat2[14],
      mat1[0] * mat2[3] + mat1[1] * mat2[7] + mat1[2] * mat2[11] + mat1[3] * mat2[15],
      mat1[4] * mat2[0] + mat1[5] * mat2[4] + mat1[6] * mat2[8] + mat1[7] * mat2[12],
      mat1[4] * mat2[1] + mat1[5] * mat2[5] + mat1[6] * mat2[9] + mat1[7] * mat2[13],
      mat1[4] * mat2[2] + mat1[5] * mat2[6] + mat1[6] * mat2[10] + mat1[7] * mat2[14],
      mat1[4] * mat2[3] + mat1[5] * mat2[7] + mat1[6] * mat2[11] + mat1[7] * mat2[15],
      mat1[8] * mat2[0] + mat1[9] * mat2[4] + mat1[10] * mat2[8] + mat1[11] * mat2[12],
      mat1[8] * mat2[1] + mat1[9] * mat2[5] + mat1[10] * mat2[9] + mat1[11] * mat2[13],
      mat1[8] * mat2[2] + mat1[9] * mat2[6] + mat1[10] * mat2[10] + mat1[11] * mat2[14],
      mat1[8] * mat2[3] + mat1[9] * mat2[7] + mat1[10] * mat2[11] + mat1[11] * mat2[15],
      mat1[12] * mat2[0] + mat1[13] * mat2[4] + mat1[14] * mat2[8] + mat1[15] * mat2[12],
      mat1[12] * mat2[1] + mat1[13] * mat2[5] + mat1[14] * mat2[9] + mat1[15] * mat2[13],
      mat1[12] * mat2[2] + mat1[13] * mat2[6] + mat1[14] * mat2[10] + mat1[15] * mat2[14],
      mat1[12] * mat2[3] + mat1[13] * mat2[7] + mat1[14] * mat2[11] + mat1[15] * mat2[15]          
    ];
  }

  function transformVector3D (mat, vect) {
    return [
      mat1[0] * mat2[0] + mat1[1] * mat2[1] + mat1[2] * mat2[2] + mat1[3] * mat2[3],
      mat1[4] * mat2[0] + mat1[5] * mat2[1] + mat1[6] * mat2[2] + mat1[7] * mat2[3],
      mat1[8] * mat2[0] + mat1[9] * mat2[1] + mat1[10] * mat2[2] + mat1[11] * mat2[3],
      mat1[12] * mat2[0] + mat1[13] * mat2[1] + mat1[14] * mat2[2] + mat1[15] * mat2[3],
    ];
  }

  function translate3D (mat, x, y, z) {
    return [
      mat[0],
      mat[1],
      mat[2],
      mat[0] * x + mat[1] * y + mat[2] * z + mat[3],
      mat[4],
      mat[5],
      mat[6],
      mat[4] * x + mat[5] * y + mat[6] * z + mat[7],
      mat[8],
      mat[9],
      mat[10],
      mat[8] * x + mat[9] * y + mat[10] * z + mat[11],
      mat[12],
      mat[13],
      mat[14],
      mat[12] * x + mat[13] * y + mat[14] * z + mat[15],
    ];
  }

  function scale3D (mat, x, y, z) {
    return [
      mat[0] * x,
      mat[1] * y,
      mat[2] * z,
      mat[3],
      mat[4] * x,
      mat[5] * y,
      mat[6] * z,
      mat[7],
      mat[8] * x,
      mat[9] * y,
      mat[10] * z,
      mat[11],
      mat[12] * x,
      mat[13] * y,
      mat[14] * z,
      mat[15]
    ];
  }

  function shear3D (mat, x, y, z) {
    var x_y = 0, x_z = 0;
    var y_x = 0, y_z = 0;
    var z_x = 0, z_y = 0;
    if (x) {
      if (x.y) {
        x_y = x.y;
      }
      if (x.z) {
        x_z = x.z;
      }
    }
    if (y) {
      if (y.z) {
        y_z = y.z;
      }
      if (y.x) {
        y_x = y.x;
      }
    }
    if (z) {
      if (z.x) {
        z_x = z.x;
      }
      if (z.y) {
        z_y = z.y;
      }
    }
    return [
      mat[0] + mat[1] * x_y + mat[2] * x_z,
      mat[0] * y_x + mat[1] + mat[2] * y_z,
      mat[0] * z_x + mat[1] * z_y + mat[2],
      mat[3],
      mat[4] + mat[5] * x_y + mat[6] * x_z,
      mat[4] * y_x + mat[5] + mat[6] * y_z,
      mat[4] * z_x + mat[5] * z_y  + mat[6],
      mat[7],
      mat[8] + mat[9] * x_y + mat[10] * x_z,
      mat[8] * y_x + mat[9] + mat[10] * y_z,
      mat[8] * z_x + mat[9] * z_y + mat[10],
      mat[11],
      mat[12] + mat[13] * x_y + mat[14] * x_z,
      mat[12] * y_x + mat[13] + mat[14] * y_z,
      mat[12] * z_x + mat[13] * z_y + mat[14],
      mat[15]
    ];
  }

  function rotate3D (mat, x, y, z) {
    var mat1 = util.m3d.copyMat3D(mat);
    if (x !== 0) {
      var sinx = Math.sin(x)
      var cosx = Math.cos(x)
      mat1[1] = mat1[1] * cosx + mat1[2] * sinx;
      mat1[2] = mat1[1] * -sinx + mat1[2] * cosx;
      mat1[5] = mat1[5] * cosx + mat1[6] * sinx;
      mat1[6] = mat1[5] * -sinx + mat1[6] * cosx;
      mat1[9] = mat1[9] * cosx + mat1[10] * sinx;
      mat1[10] = mat1[9] * -sinx + mat1[10] * cosx;
      mat1[13] = mat1[13] * cosx + mat1[14] * sinx;
      mat1[14] = mat1[13] * -sinx + mat1[14] * cosx;
    }
    if (y !== 0) {
      var siny = Math.sin(y)
      var cosy = Math.cos(y)
      mat1[0] = mat1[0] * cosy + mat1[2] * siny;
      mat1[2] = mat1[0] * -siny + mat1[2] * cosy;
      mat1[4] = mat1[4] * cosy + mat1[6] * siny;
      mat1[6] = mat1[4] * -siny + mat1[6] * cosy;
      mat1[8] = mat1[8] * cosy + mat1[10] * siny;
      mat1[10] = mat1[8] * -siny + mat1[10] * cosy;
      mat1[12] = mat1[12] * cosy + mat1[14] * siny;
      mat1[14] = mat1[12] * -siny + mat1[14] * cosy;
    }
    if (z !== 0) {
      var sinz = Math.sin(z)
      var cosz = Math.cos(z)
      mat1[0] = mat1[0] * cosz + mat1[1] * sinz;
      mat1[1] = mat1[0] * -sinz + mat1[1] * cosz;
      mat1[4] = mat1[4] * cosz + mat1[5] * sinz;
      mat1[5] = mat1[4] * -sinz + mat1[5] * cosz;
      mat1[8] = mat1[8] * cosz + mat1[9] * sinz;
      mat1[9] = mat1[8] * -sinz + mat1[9] * cosz;
      mat1[12] = mat1[12] * cosz + mat1[13] * sinz;
      mat1[13] = mat1[12] * -sinz + mat1[13] * cosz;
    }
    return mat1;
  }

  function lookAt3D (mat, eye, look, up) {
    var n = [eye[0] - look[0], eye[1] - look[1], eye[2] - look[2]];
    var u = [up[1] * n[2] - up[2] * n[1], up[2] * n[0] - up[0] * n[2], up[0] * n[1] - up[1] * n[0]];
    var v = [n[1] * u[2] - n[2] * u[1], n[2] * u[0] - n[0] * u[2], n[0] * u[1] - n[1] * u[0]];
    var nl = Math.sqrt(n[0] * n[0] + n[1] * n[1] + n[2] * n[2]);
    var ul = Math.sqrt(u[0] * u[0] + u[1] * u[1] + u[2] * u[2]);
    var vl = Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]);
    return [
      n[0] / nl, n[1] / nl, n[2] / nl, -(n[0] * eye[0] + n[1] * eye[1] + n[2] * eye[2]) / nl,
      u[0] / ul, u[1] / ul, u[2] / ul, -(u[0] * eye[0] + u[1] * eye[1] + u[2] * eye[2]) / ul,
      v[0] / vl, v[1] / vl, v[2] / vl, -(v[0] * eye[0] + v[1] * eye[1] + v[2] * eye[2]) / vl,
      0, 0, 0, 1
    ];
  }

  function reverse3D (mat) {
    var temp = m[0] * m[5] * m[10] * m[15] + m[1] * m[6] * m[11] * [12] + m[2] * m[7] * m[8] * m[13] + m[3] * m[4] * m[9] * m[14] - m[0] * m[7] * m[10] * m[13] - m[1] * m[4] * m[11] * m[14] - m[2] * m[5] * m[8] * m[15] - m[3] * m[6] * m[9] * m[12];
    return [
      (m[5] * m[10] * m[15] + m[6] * m[11] * m[13] + m[7] * m[9] * m[14] - m[5] * m[11] * m[14] - m[6] * m[9] * m[15] - m[7] * m[10] * m[13]) / temp,
      -(m[4] * m[10] * m[15] + m[6] * m[11] * m[12] + m[7] * m[8] * m[14] - m[4] * m[11] * m[14] - m[6] * m[8] * m[15] - m[7] * m[10] * m[12]) / temp, 
      (m[4] * m[9] * m[15] + m[5] * m[11] * m[12] + m[7] * m[8] * m[13] - m[4] * m[11] * m[13] - m[5] * m[8] * m[15] - m[7] * m[9] * m[12]) / temp, 
      -(m[4] * m[9] * m[14] + m[5] * m[10] * m[12] + m[6] * m[8] * m[13] - m[4] * m[10] * m[13] - m[5] * m[8] * m[14] - m[6] * m[9] * m[12]) / temp,
      -(m[1] * m[10] * m[15] + m[2] * m[11] * m[13] + m[3] * m[9] * m[14] - m[1] * m[11] * m[14] - m[2] * m[9] * m[15] - m[3] * m[10] * m[13]) / temp,
      (m[0] * m[10] * m[15] + m[2] * m[11] * m[12] + m[3] * m[8] * m[14] - m[0] * m[11] * m[14] - m[2] * m[8] * m[15] - m[3] * m[10] * m[12]) / temp, 
      -(m[0] * m[9] * m[15] + m[1] * m[11] * m[12] + m[3] * m[8] * m[13] - m[0] * m[11] * m[13] - m[1] * m[8] * m[15] - m[3] * m[9] * m[12]) / temp, 
      (m[0] * m[9] * m[14] + m[1] * m[10] * m[12] + m[2] * m[8] * m[13] - m[0] * m[10] * m[13] - m[1] * m[8] * m[14] - m[2] * m[9] * m[12]) / temp, 
      (m[1] * m[6] * m[15] + m[2] * m[7] * m[13] + m[3] * m[5] * m[14] - m[1] * m[7] * m[14] - m[2] * m[5] * m[15] - m[3] * m[6] * m[13]) / temp, 
      -(m[0] * m[6] * m[15] + m[2] * m[7] * m[12] + m[3] * m[4] * m[14] - m[0] * m[7] * m[14] - m[2] * m[4] * m[15] - m[3] * m[6] * m[12]) / temp, 
      (m[0] * m[5] * m[15] + m[1] * m[7] * m[12] + m[3] * m[4] * m[13] - m[0] * m[7] * m[13] - m[1] * m[4] * m[15] - m[3] * m[5] * m[12]) / temp, 
      -(m[0] * m[5] * m[14] + m[1] * m[6] * m[12] + m[2] * m[4] * m[13] - m[0] * m[6] * m[13] - m[1] * m[4] * m[14] - m[2] * m[5] * m[12]) / temp, 
      -(m[1] * m[6] * m[11] + m[2] * m[7] * m[9] + m[3] * m[5] * m[10] - m[5] * m[11] * m[14] - m[6] * m[9] * m[15] - m[7] * m[10] * m[13]) / temp, 
      (m[0] * m[6] * m[11] + m[2] * m[7] * m[8] + m[3] * m[4] * m[10] - m[0] * m[7] * m[10] - m[2] * m[4] * m[11] - m[3] * m[6] * m[8]) / temp, 
      -(m[0] * m[5] * m[11] + m[1] * m[7] * m[8] + m[3] * m[4] * m[9] - m[0] * m[7] * m[9] - m[1] * m[4] * m[11] - m[3] * m[5] * m[8]) / temp, 
      (m[0] * m[5] * m[10] + m[1] * m[6] * m[8] + m[2] * m[4] * m[9] - m[0] * m[6] * m[9] - m[1] * m[4] * m[10] - m[2] * m[5] * m[8]) / temp
    ];
  }

  return {
    m2d: {
      new: newMat2D,
      reset: resetMat2D,
      copy: copyMat2D,
      multiply: multiplyMat2D,
      transformVector: transformVector2D,
      translate: translate2D,
      scale: scale2D,
      shear: shear2D,
      rotate: rotate2D,
      reverse: reverse2D
    },
    m3d: {
      new: newMat3D,
      reset: resetMat3D,
      copy: copyMat3D,
      multiply: multiplyMat3D,
      transformVector: transformVector3D,
      translate: translate3D,
      scale: scale3D,
      shear: shear3D,
      rotate: rotate3D,
      lookAt: lookAt3D,
      reverse: reverse3D 
    }
  }
})()

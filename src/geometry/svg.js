
export default (function () {
  function svg () {
    this.elements = []
    this.context = {curPath: null}
  }

  svg.prototype.rect = function (x, y, width, height, style) {
    this.elements.push({
      el: 'rect',
      x: x,
      y: y,
      width: width,
      height: height,
      style: style
    });
    return this;
  }

  svg.prototype.circle = function (x, y, radius, style) {
    this.elements.push({
      el: 'circle',
      cx: x,
      cy: y,
      r: radius,
      style: style
    });
    return this;
  }

  svg.prototype.ellipse = function (x, y, radiusX, radiusY, style) {
    this.elements.push({
      el: 'ellipse',
      cx: x,
      cy: y,
      rx: radiusX,
      ry: radiusY,
      style: style
    });
    return this;
  }

  svg.prototype.line = function (x1, y1, x2, y2, style) {
    this.elements.push({
      el: 'line',
      x1: x1,
      y1: y1,
      x2: x2,
      y2: y2,
      style: style
    });
    return this;
  }

  svg.prototype.polygon = function (points, style) {
    if (points != null && points.length > 0) {
      var pList = [], point;
      for (var i = 0, len = points.length; i < len; ++i) {
        point = points[i]
        pList.push(point[0] + ',' + point[1])
      }
      this.elements.push({
        el: 'polygon',
        points: pList.join(' '),
        style: style
      })
    }
    return this;
  }

  svg.prototype.polyline = function (points, style) {
    if (points != null && points.length > 0) {
      var pList = [], point;
      for (var i = 0, len = points.length; i < len; ++i) {
        point = points[i]
        pList.push(point[0] + ',' + point[1])
      }
      this.elements.push({
        el: 'polyline',
        points: pList.join(' '),
        style: style
      });
    }
  }

  svg.prototype.beginPath = function (style) {
    this.closePath();
    this.context.curPath = {
      commands: [],
      style: style
    };
  }

  svg.prototype.moveTo = function (x, y) {
    var arr = [x, y];
    this.context.curPath.commands.push('M' + arr.join(' '));
  }

  svg.prototype.lineTo = function (x, y) {
    var arr = [x, y];
    this.context.curPath.commands.push('L' + arr.join(' '));
  }

  svg.prototype.horizontalLineTo = function (x) {
    this.context.curPath.commands.push('H' + x);
  }

  svg.prototype.verticalLineTo = function (y) {
    this.context.curPath.commands.push('V' + y);
  }

  svg.prototype.curveTo = function (x1, y1, x2, y2, x, y) {
    var arr = [x1, y1, x2, y2, x, y0];
    this.context.curPath.commands.push('C' + arr.join(' '));
  }

  svg.prototype.smoothCurveTo = function (x2, y2, x, y) {
    var arr = [x2, y2, x, y];
    this.context.curPath.commands.push('S' + arr.join(' '));
  }


  svg.prototype.quadraticBelzierCurveTo = function (x1, y1, x, y) {
    var arr = [x1, y1, x, y];
    this.context.curPath.commands.push('Q' + arr.join(' '));
  }

  svg.prototype.smoothQuadraticBelzierCurveTo = function (x, y) {
    var arr = [x, y];
    this.context.curPath.commands.push('T' + arr.join(' '));
  }

  svg.prototype.ellipticalArcTo = function (radiusX, radiusY, xAxisRotation, largeArcFlag, sweepFlag, x, y) {
    var arr = [radiusX, radiusY, xAxisRotation, largeArcFlag, sweepFlag, x, y]
    this.context.curPath.commands.push('A' + arr.join(' '));
  }

  svg.prototype.closePath = function () {
    if (this.context.curPath !== null) {
      this.elements.push({
        el: 'path',
        d: this.context.curPath.commands.join(' '),
        style: this.context.curPath.style
      });
      this.context.curPath = null;
    }
  }
  
  svg.prototype.toHtmlString = function (x, y, radiusX, radiusY, style) {

  }

  return {
    svg: svg
  }
})()

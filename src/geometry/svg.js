
export default (function () {
  function svg () {
    this.path = []
  }

  svg.prototype.rect = function (x, y, width, height, style) {
    this.path.push({
      el: 'rect',
      x: x,
      y: y,
      width: width,
      height: height,
      style: style
    });
  }

  svg.prototype.circle = function (x, y, radius, style) {
    this.path.push({
      el: 'circle',
      cx: x,
      cy: y,
      r: radius,
      style: style
    });
  }

  svg.prototype.ellipse = function (x, y, radiusX, radiusY, style) {
    this.path.push({
      el: 'circle',
      cx: x,
      cy: y,
      rx: radiusX,
      ry: radiusY,
      style: style
    });
  }

  svg.prototype.line = function (x1, y1, x2, y2, style) {
    this.path.push({
      el: 'line',
      x1: x1,
      y1: y1,
      x2: x2,
      y2: y2,
      style: style
    });
  }

  svg.prototype.polygon = function (points, style) {
    if (points != null && points.length > 0) {
      var pList = [], point;
      for (var i = 0, len = points.length; i < len; ++i) {
        point = points[i]
        pList.push(point[0] + ',' + point[1])
      }
      this.path.push({
        el: 'polygon',
        points: pList.join(' '),
        style: style
      })
    }
  }

  svg.prototype.polyline = function (points, style) {
    if (points != null && points.length > 0) {
      var pList = [], point;
      for (var i = 0, len = points.length)
    }
  }

  svg.prototype.toHtmlString = function (x, y, radiusX, radiusY, style) {

  }

  return {
    svg: svg
  }
})()

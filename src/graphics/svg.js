
export default (function () {
  function Svg () {
    this.elements = []
    this.context = {curPath: null}
  }

  Svg.prototype.createSvgTag = function (tagName) {
    return document.createElementNS('http://www.w3.org/2000/svg', tagName);
  }

  Svg.prototype.rect = function (x, y, width, height, style) {
    this.elements.push({
      tag: 'rect',
      attribute: {
        x: x,
        y: y,
        width: width,
        height: height,
        style: style
      }
    });
    return this;
  }

  Svg.prototype.circle = function (x, y, radius, style) {
    this.elements.push({
      tag: 'circle',
      attribute: {
        cx: x,
        cy: y,
        r: radius,
        style: style
      }
    });
    return this;
  }

  Svg.prototype.ellipse = function (x, y, radiusX, radiusY, style) {
    this.elements.push({
      tag: 'ellipse',
      attribute: {
        cx: x,
        cy: y,
        rx: radiusX,
        ry: radiusY,
        style: style
      }
    });
    return this;
  }

  Svg.prototype.line = function (x1, y1, x2, y2, style) {
    this.elements.push({
      tag: 'line',
      attribute: {
        x1: x1,
        y1: y1,
        x2: x2,
        y2: y2,
        style: style
      }
    });
    return this;
  }

  Svg.prototype.polygon = function (points, style) {
    if (points != null && points.length > 0) {
      var pList = [], point;
      for (var i = 0, len = points.length; i < len; ++i) {
        point = points[i]
        pList.push(point[0] + ',' + point[1])
      }
      this.elements.push({
        tag: 'polygon',
        attribute: {
          points: pList.join(' '),
          style: style
        }
      })
    }
    return this;
  }

  Svg.prototype.polyline = function (points, style) {
    if (points != null && points.length > 0) {
      var pList = [], point;
      for (var i = 0, len = points.length; i < len; ++i) {
        point = points[i]
        pList.push(point[0] + ',' + point[1])
      }
      this.elements.push({
        tag: 'polyline',
        attribute: {
          points: pList.join(' '),
          style: style
        }
      });
    }
  }

  Svg.prototype.beginPath = function (style) {
    if (this.context.curPath !== null) {
      this.elements.push({
        tag: 'path',
        attribute: {
          d: this.context.curPath.commands.join(' '),
          style: this.context.curPath.style
        }
      })
    }
    this.context.curPath = {
      commands: [],
      style: style
    };
  }

  Svg.prototype.moveTo = function (x, y) {
    var arr = [x, y];
    this.context.curPath.commands.push('M' + arr.join(' '));
  }

  Svg.prototype.lineTo = function (x, y) {
    var arr = [x, y];
    this.context.curPath.commands.push('L' + arr.join(' '));
  }

  Svg.prototype.horizontalLineTo = function (x) {
    this.context.curPath.commands.push('H' + x);
  }

  Svg.prototype.verticalLineTo = function (y) {
    this.context.curPath.commands.push('V' + y);
  }

  Svg.prototype.curveTo = function (x1, y1, x2, y2, x, y) {
    var arr = [x1, y1, x2, y2, x, y0];
    this.context.curPath.commands.push('C' + arr.join(' '));
  }

  Svg.prototype.smoothCurveTo = function (x2, y2, x, y) {
    var arr = [x2, y2, x, y];
    this.context.curPath.commands.push('S' + arr.join(' '));
  }


  Svg.prototype.quadraticBelzierCurveTo = function (x1, y1, x, y) {
    var arr = [x1, y1, x, y];
    this.context.curPath.commands.push('Q' + arr.join(' '));
  }

  Svg.prototype.smoothQuadraticBelzierCurveTo = function (x, y) {
    var arr = [x, y];
    this.context.curPath.commands.push('T' + arr.join(' '));
  }

  Svg.prototype.ellipticalArcTo = function (radiusX, radiusY, xAxisRotation, largeArcFlag, sweepFlag, x, y) {
    var arr = [radiusX, radiusY, xAxisRotation, largeArcFlag, sweepFlag, x, y]
    this.context.curPath.commands.push('A' + arr.join(' '));
  }

  Svg.prototype.closePath = function () {
    if (this.context.curPath !== null) {
      this.context.curPath.commands.push('Z');
    }
  }
  
  Svg.prototype.clear = function () {
    this.elements = [];
    this.context = {curPath: null};
  }
  
  Svg.prototype.toXmlString = function (withSvgTag) {
    var nodes = [], elements = this.elements;
    for (var i = 0, len = elements.length; i < len; ++i) {
      var element = elements[i];
      var node = this.createSvgTag(element.tag);
      var attributes = element.attribute;
      for (var key in attributes) {
        var value = attributes[key];
        if (value !== undefined && value !== null) {
          node[key] = attributes[key];
        }
      }
      nodes.push(node);
    }
    if (this.context.curPath !== null) {
      var node = this.createSvgTag('path');
      var attributes = {
        d: this.context.curPath.commands.join(' '),
        style: this.context.curPath.style
      }
      for (var key in attributes) {
        var value = attributes[key];
        if (value !== undefined && value !== null) {
          node[key] = attributes[key];
        }
      }
      nodes.push(node);
    }
    if (withSvgTag) {
      var root = this.createSvgTag('svg');
      for (var i = 0, len = nodes.length; i < len; ++i) {
        root.appendChild(nodes[i]);
      }
      return root.outerHTML;
    } else {
      var nodeStrs = [];
      for (var i = 0, len = nodes.length; i < len; ++i) {
        nodeStrs.push(nodes[i].outerHTML);
      }
      return nodeStrs.join('');
    }
  }

  return Svg
})();

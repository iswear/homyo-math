
function getZoneCross (zone1, zone2) {
  var left = Math.max(zone1.left, zone2.left);
  var right = Math.min(zone1.right, zone2.right);
  var width = right - left;
  if (width <= 0) {
    return null;
  }
  var top = Math.max(zone1.top, zone2.top);
  var bottom = Math.min(zone1.bottom, zone2.bottom);
  var height = bottom - top;
  if (height <= 0) {
    return null;
  }
  return {
    left: left,
    right: right,
    top: top,
    bottom: bottom,
    width: width,
    height: height
  }
}

function isZoneNotCross (zone1, zone2) {
  return zone1.left >= zone2.right || zone2.left >= zone1.right || zone1.top >= zone2.bottom || zone2.top > zone1.bottom;
}

function isZoneCross (zone1, zone2) {
  return !isZoneNotCross(zone1, zone2);
}

export default {
  getZoneCross: getZoneCross,
  isZoneNotCross: isZoneNotCross,
  isZoneCross: isZoneCross
}

/**
 * Calculates real color of items and their backgrounds, similar to an eye-dropper.
 */
(function($) {

  /**
   * Converts an array of values to a hex value such as "#ff3366"
   * @param rgb an array of either integers or strings, such as [255,32,43].
   */
  function rgb2hex(rgb) {
    var c = [];
    for (var i = 0; i < 3; ++i) {
      var p = parseInt(rgb[i]).toString(16);
      if (p.length == 1) {
        p = '0' + p;
      }
      c.push(p);
    }
    return "#" + c.join(''); // "#0070ff"
  }

  /**
   * Converts varioius formats to the standard size-color hex string.
   */
  $.toHexColor = function(color) {
    if (color.match(/#[a-f0-9]{6,6}/i)) {
      return color;
    }
    if (namedColors[color]) {
      return rgb2hex(namedColors[color]);
    }
    var parts = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(,\s*\d+)?\)$/);
    // parts => ["rgb(0, 70, 255", "0", "70", "255"]
    if (parts) {
	return rgb2hex(parts.splice(1,3));
    }
    return color;
  };

  $.fn.backgroundColor = function() {
    var bc = $(this).css('backgroundColor');
    if (bc && bc !== 'transparent' && bc != 'rgba(0, 0, 0, 0)') {
      return $.toHexColor(bc);
    } else {
      return $(this).parent().backgroundColor();
    }
  };
  $.fn.color = function() {
    var bc = $(this).css('color');
    if (bc && bc !== 'transparent') { //&& bc.replace(' ','') != 'rgba(0,0,0,0)'
      return $.toHexColor(bc);
    } else {
      return $(this).parent().color();
    }
  };


  // From Interface by Stefan Petre
  // http://interface.eyecon.ro/
  var namedColors = {
    aqua:[0,255,255],
    azure:[240,255,255],
    beige:[245,245,220],
    black:[0,0,0],
    blue:[0,0,255],
    brown:[165,42,42],
    cyan:[0,255,255],
    darkblue:[0,0,139],
    darkcyan:[0,139,139],
    darkgrey:[169,169,169],
    darkgreen:[0,100,0],
    darkkhaki:[189,183,107],
    darkmagenta:[139,0,139],
    darkolivegreen:[85,107,47],
    darkorange:[255,140,0],
    darkorchid:[153,50,204],
    darkred:[139,0,0],
    darksalmon:[233,150,122],
    darkviolet:[148,0,211],
    fuchsia:[255,0,255],
    gold:[255,215,0],
    green:[0,128,0],
    indigo:[75,0,130],
    khaki:[240,230,140],
    lightblue:[173,216,230],
    lightcyan:[224,255,255],
    lightgreen:[144,238,144],
    lightgrey:[211,211,211],
    lightpink:[255,182,193],
    lightyellow:[255,255,224],
    lime:[0,255,0],
    magenta:[255,0,255],
    maroon:[128,0,0],
    navy:[0,0,128],
    olive:[128,128,0],
    orange:[255,165,0],
    pink:[255,192,203],
    purple:[128,0,128],
    violet:[128,0,128],
    red:[255,0,0],
    silver:[192,192,192],
    white:[255,255,255],
    yellow:[255,255,0]
  };

})(jQuery);


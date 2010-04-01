## Purpose

Built so that could determine the color of an element on the page. This
was critical to being able to write a SIFR plugin that would work
in across a heterogenous set of elements. Could be useful in other
general purpose code.

Tested on Firefox, Chrome, Safari, IE7.


## Usage
    &lt;script src="./lib/jquery-1.4.2.js">&lt;/script>
    &lt;script src="./jquery.color_spy-0.1.0.js">&lt;/script>
    &lt;script type="text/javascript">
    alert($('.selector').backgroundColor());
    &lt;/script>

### $(...).backgroundColor()

Returns the background color of the first element as a hex string. For example, #ff0000.
Traverses up the DOM until it finds an explicit color. Converts rgb, rgba and named colors
to their hex equivalents.

### $(...).color()

Returns the color of the first element. Traverses up the DOM until it finds an explicit color.
Converts rgb, rgba and named colors
to their hex equivalents.

### $.toHexColor(color)

Converts varioius formats to the standard size-color hex string.

## Demo & Development

Open **jquery.color_spy_spec.js**

Tests are written in ScrewUnit and included here.


## License

Copyright (c) Andrew J. Peterson / NDPSoftware  All Rights Reserved. Use with permission only.


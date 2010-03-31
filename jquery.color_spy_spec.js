Screw.Unit(function() {

  before(function() {
    var $f = $('#fixtures');
    if ($f.attr('original')) {
      $f.html($f.attr('original'));
    } else {
      $f.attr('original', $f.html());
    }
  });

  describe("backgroundColor", function() {
    it("should report when hex color is inlined", function() {
      expect($('#hex_inline').backgroundColor()).to(equal, '#ff0000');
    });
    it("should report when rgb color is inlined", function() {
      expect($('#rgb_inline').backgroundColor()).to(equal, '#ff0000');
    });
    it("should report when named color is inlined", function() {
      expect($('#name_inline').backgroundColor()).to(equal, '#ff0000');
    });
    it("should report when hex color from class", function() {
      expect($('#hex_class').backgroundColor()).to(equal, '#ff0000');
    });
    it("should report when rgb color from class", function() {
      expect($('#rgb_class').backgroundColor()).to(equal, '#ff0000');
    });
    it("should report when named color from class", function() {
      expect($('#name_class').backgroundColor()).to(equal, '#ff0000');
    });
    it("should look up from a parent", function() {
      expect($('#son').backgroundColor()).to(equal, '#ff0000');
    });
    it("should look up from a parent when transparent", function() {
      $('#son').css('backgroundColor', 'transparent');
      expect($('#son').backgroundColor()).to(equal, '#ff0000');
    });
    it("should look up from the html element", function() {
      expect($('#grandfather').backgroundColor()).to(equal, $('html').backgroundColor());
    });
  });

  describe('color', function() {
    it("should report when hex color is inlined", function() {
      expect($('#hex_inline').color()).to(equal, '#0000ff');
    });
    it("should report when rgb color is inlined", function() {
      expect($('#rgb_inline').color()).to(equal, '#0000ff');
    });
    it("should report when named color is inlined", function() {
      expect($('#name_inline').color()).to(equal, '#0000ff');
    });
    it("should report when hex color from class", function() {
      expect($('#hex_class').color()).to(equal, '#0000ff');
    });
    it("should report when rgb color from class", function() {
      expect($('#rgb_class').color()).to(equal, '#0000ff');
    });
    it("should report when named color from class", function() {
      expect($('#name_class').color()).to(equal, '#0000ff');
    });
    it("should look up from a parent", function() {
      expect($('#son').color()).to(equal, '#0000ff');
    });
    it("should look up from a parent when transparent", function() {
      $('#son').css('color', 'transparent');
      expect($('#son').color()).to(equal, '#0000ff');
    });
    it("should look up from the html element", function() {
      expect($('#grandfather').color()).to(equal, $('html').color());
    });
  });

});

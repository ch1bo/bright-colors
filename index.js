var Color = require('color');

Color.prototype.hsvString = function hsvString() {
  return 'hsv(' + this.hue() + ', ' +
                  this.saturationv() + '%, ' +
                  this.value() + '%)';
};

// Generate bright colors from these 8 base colors
var brightnessIncrease = 25;
var colors = {
  black: Color('#282C34'),
  red: Color('#E06C75'),
  green: Color('#98C379'),
  yellow: Color('#E5C07B'),
  blue: Color('#61AFEF'),
  magenta: Color('#C678DD'),
  cyan: Color('#56B6C2'),
  white: Color('#ABB2BF'),
};

console.log('name' + ' '.repeat(9) + ' | ' +
            'hex' + ' '.repeat(4) + ' | ' +
            'rgb' + ' '.repeat(15) + ' | ' +
            'hsl' + ' '.repeat(15) + ' | ' +
            'hsv');
console.log('-'.repeat(14) + '+' +
            '-'.repeat(9) + '+' +
            '-'.repeat(20) + '+' +
            '-'.repeat(20) + '+' +
            '-'.repeat(20));
for (var name in colors) {
  var color = colors[name];
  console.log(name + '_normal' + ' '.repeat(7 - name.length) + '| ' +
              color.hexString() + ' | ' +
              color.rgbString() + ' '.repeat(19 - color.rgbString().length) + '| ' +
              color.hslString() + ' '.repeat(19 - color.hslString().length) + '| ' +
              color.hsvString());
  var bright = color.clone();
  bright.value(color.value() + brightnessIncrease);
  console.log(name + '_bright' + ' '.repeat(7 - name.length) + '| ' +
              bright.hexString() + ' | ' +
              bright.rgbString() + ' '.repeat(19 - bright.rgbString().length) + '| ' +
              bright.hslString() + ' '.repeat(19 - bright.hslString().length) + '| ' +
              bright.hsvString());
}

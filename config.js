const StyleDictionary = require('style-dictionary');

StyleDictionary.registerTransform({
  name: 'size/px',
  type: 'value',
  matcher: function(prop) {
    // You can be more specific here if you only want 'em' units for font sizes    
    return prop.attributes.category === 'size';
  },
  transformer: function(prop) {
    // You can also modify the value here if you want to convert pixels to ems
    return parseFloat(prop.original.value) + 'px';
  }
});

StyleDictionary.extend('config.json');

StyleDictionary.buildAllPlatforms();
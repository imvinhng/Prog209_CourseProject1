export function colorPickerCreator(colorPickerId, targetId, targetArea) {
    var colorPicker = new iro.ColorPicker(colorPickerId, {
      // Set the size of the color picker
      width: 200,
      // Set the initial color to pure red
      color: "#f00"
      
    });
    
    colorPicker.on('color:change', function(color) {
      $(targetId).css(targetArea, color.hexString);
    
      // log the current color as a HEX string
      console.log(color.hexString);
    });
}
  
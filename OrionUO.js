// Mock OrionUO Scripting API
// by Vlek

var Orion = {
    debug: false,
    CharPrint: function(serial, color, text) {
        if (!serial || !color || !text) {
            throw "Not enough parameters!";
        }

        if (this.debug) {
            console.log("Printing above serial " + serial +
                "with '" + text + "' in color " + color);
        }
    },
    Print: function(color, text) {
        if (!text) {
            text = color;
            color = -1;
        }

        if (this.debug) {
            console.log("Printing '" + text + "' with color " + color)
        }
    },
    SaveConfig: function() {
        if (this.debug) {
            console.log("Config saved!");
        }
    },
    Say: function(text) {
        if (this.debug) {
            console.log("Saying: " + text);
        }
    },
    SetLight: function(state, value) {
        // TODO: Mock out the light levels, see what values can be
        // in place and also have a state probably in the Orion
        // namespace that tracks the state of the light level.
        if (!state) {
            throw "Too few parameters!";
        }

        if (this.debug) {
            console.log("Setting light level");
        }
    }

};

Orion.Print("1");
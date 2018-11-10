// Mock OrionUO Scripting API
// by Vlek

// TODO: Turn all of these into functions with constructors!!
// TODO: Verify, if I do that, that static analysis will be able
//      to see all of the methods that the object would have

var GameObject = {
    /**
     * @return {string}
     */
    Serial: function() {
        return "0x00003";
    }
};

var Orion = {
    // TODO: for all of the find functions, do consistent parameter verification
    debug: false,
    CharPrint: function (serial, color, text) {
        if (!serial || !color || !text) {
            throw "Not enough parameters!";
        }

        if (this.debug) {
            console.log("Printing above serial " + serial +
                "with '" + text + "' in color " + color);
        }
    },
    ClearJournal: function() {
        // TODO: clear the mocked journal object
        if (this.debug) {
            console.log("Clearing journal!");
        }
    },
    /**
     * @return {string}
     */
    FindFriend: function(flags, distance) {
        return "0x000006";
    },
    FindObject: function(serial) {
        if (!serial) {
            throw "Not enough parameters!";
        }
        // TODO: Fix this when I fix the GameObject
        return GameObject;
    },
    FindType: function(graphic, color, container, flags, distance, notoriety, recurse) {
        if (!graphic) {
            throw "Not enough parameters!";
        }

        if (this.debug) {
            console.log("Trying to find graphic: " + graphic);
        }
    },
    /**
     * @return {boolean}
     */
    InJournal: function(pattern, flags, serial, color, startTime, endTime) {
        if (!pattern) {
            throw "Not enough parameters!";
        }
        // TODO: Mock out a journal object
        return false;
    },
    MoveItem: function(serial, count, container, x, y, z) {
        // MoveItem technically doesn't have any required parameters.
        // It will just fail quietly.

        if (this.debug) {
            console.log("Moving item!");
        }
    },
    /**
     * @return {number}
     */
    Now: function() {
        return Date.now();
    },
    ObjAtLayer: function(layerName, serial) {
        if (!layerName) {
            throw "Not enough parameters!";
        }

        // TODO: When I fix GameObject with a constructor,
        // make this a function call with new
        return GameObject;
    },
    Print: function (color, text) {
        if (!text) {
            text = color;
            color = -1;
        }

        if (this.debug) {
            console.log("Printing '" + text + "' with color " + color)
        }
    },
    SaveConfig: function () {
        if (this.debug) {
            console.log("Config saved!");
        }
    },
    Say: function (text) {
        if (this.debug) {
            console.log("Saying: " + text);
        }
    },
    SetLight: function (state, value) {
        // TODO: Mock out the light levels, see what values can be
        // in place and also have a state probably in the Orion
        // namespace that tracks the state of the light level.
        if (!state) {
            throw "Too few parameters!";
        }

        if (this.debug) {
            console.log("Setting light level");
        }
    },
    UseSkill: function(skillname, target) {
        if (!skillname) {
            throw "Not enough parameters!";
        }

        // TODO: Verify that skillname is an actual skill
        if (this.debug) {
            console.log("Using skill: " + skillname);
        }
    },
    Wait: function(timeout) {
        if (this.debug) {
            console.log("Waiting " + timeout + " ms");
        }
    }

};

var Player = {
    // TODO: Create player constants that let people change their internal
    // values to mock out a "session" with a character so that they can try
    // their scripts out in more realistic ways. So Hidden will return true
    // or false whether Player._isHidden is true or false, etc
    /**
     * @return {boolean}
     */
    Dead: function() {
        return false;
    },
    /**
     * @return {boolean}
     */
    Hidden: function() {
        return false;
    },
    /**
     * @return {number}
     */
    Mana: function() {
        return 100;
    },
    /**
     * @return {number}
     */
    MaxMana: function() {
        return 100;
    },
    /**
     * @return {string}
     */
    Serial: function() {
        return "0x000001";
    },
    /**
     * @return {number}
     */
    X: function() {
        return 1;
    },
    /**
     * @return {number}
     */
    Y: function() {
        return 2;
    },
    /**
     * @return {number}
     */
    Z: function() {
        return 3;
    }
};

Orion.Print("1");
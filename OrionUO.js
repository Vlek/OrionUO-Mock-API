// Mock OrionUO Scripting API
// by Vlek

// TODO: Turn all of these into functions with constructors!!
// TODO: Verify, if I do that, that static analysis will be able
//      to see all of the methods that the object would have

var fileObject = {
    Open: function(filename) {
        if (!filename) {
            throw "Too few parameters";
        }
    }
};

var GameObject = {
    /**
     * @return {number}
     */
    Count: function() {
        return 1;
    },
    /**
     * @return {string}
     */
    Serial: function() {
        return "0x00003";
    }
};

var GumpHookObject = {

};

var GumpObject = {
    /**
     * @return {boolean}
     */
    Replayed: function() {
        return false;
    },
    /**
     * @return {string}
     */
    ID: function() {
        return "0x0000AA"
    },
    Select: function(hook) {
        if (!hook) {
            throw "Too few parameters!";
        }
        // TODO: Mock this out when gumps are done
        if (this.debug) {
            console.log("Selecting with gump hook!");
        }
    }
};

var Orion = {
    // TODO: for all of the find functions, do consistent parameter verification
    debug: false,
    Attack: function(serial) {
        if (!serial) {
            throw "Too few parameters!";
        }

        if (this.debug) {
            console.log("Attacking serial " + serial);
        }
    },
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
    ClearTimers: function() {
        // TODO: Once mocked, clear all timers from list
        if (this.debug) {
            console.log("Clearing all timers!");
        }
    },
    Click: function(serial) {
        serial = serial | 'self';

        if (this.debug) {
            console.log("Clicking serial " + serial);
        }
    },
    CreateGumpHook: function(index) {
        if (!index) {
            throw "Too few parameters";
        }

        return GumpHookObject;
    },
    /**
     * @return {string}
     */
    FindFriend: function(flags, distance) {
        return "0x000006";
    },
    FindList: function(listName, container, flags, distance, notoriety, recurse) {
        if (!listName) {
            throw "Too few parameters";
        }

        return ['0x0000AB'];
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

        // TODO: Once mocked, return "real" value
        if (this.debug) {
            console.log("Trying to find graphic: " + graphic);
        }

        return ["0x000056"];
    },
    /**
     * @return {number}
     */
    GetDistance: function(serial) {
        if (!serial) {
            throw "Too few parameters";
        }

        if (this.debug) {
            console.log("Requesting distance of serial " + serial);
        }

        // TODO: Mock out an actual number from a mocked object
        // TODO: Get the value when they're not present. I think it's
        //      10500?
        return 2;
    },
    GetGump: function(index) {
        if (!index) {
            throw "Too few parameters";
        }

        if (this.debug) {
            console.log("Requesting gump at index " + index);
        }

        // TODO: Once mocked, return "real" value
        return GumpObject;
    },
    /**
     * @return {number}
     */
    GumpCount: function() {
        // TODO: Once mocked, return real value
        return 0;
    },
    HelpGump: function() {
        if (this.debug) {
            console.log("Requesting help gump");
        }
    },
    Ignore: function(serial, state) {
        if (!serial) {
            throw "Too few parameters";
        }

        // TODO: Create a mocked ignore list
        if (this.debug) {
            console.log("Setting ignore on serial " + serial);
        }
    },
    IgnoreReset: function() {

        // TODO: Create a mocked ignore list, and fix this with it.
        if (this.debug) {
            console.log("Resetting ignore list!");
        }
    },
    InfoGump: function(index) {
        // TODO: Look into this further. Github wiki says this is a void.
        // it might just output to system, i.e. journal.
        index = index | -1;

        // TODO: Once mocked, return real value
        if (this.debug) {
            console.log("Getting info on gump at index " + index);
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
    Quit: function() {
        if (this.debug) {
            console.log("Quitting!");
        }
    },
    RemoveTimer: function(name) {
        if (!name) {
            throw "Too few parameters!";
        }

        // TODO: Once mocked, remove timer from list
        if (this.debug) {
            console.log("Removing timer " + name);
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
    SetTimer: function(name, delay) {
        if (!name) {
            throw "Too few parameters!";
        }

        // TODO: Once mocked, fix by adding timer to object
        if (this.debug) {
            console.log("Setting timer " + name);
        }
    },
    TargetObject: function(serial) {
        if (!serial) {
            throw "Too few parameters";
        }

        if (this.debug) {
            console.log("Targeting object with serial " + serial);
        }
    },
    /**
     * @return {number}
     */
    Timer: function(name) {
        if (!name) {
            throw "Too few parameters!";
        }

        // TODO: Once mocked, fix with real value
        return 1000;
    },
    /**
     * @return {boolean}
     */
    TimerExists: function(name) {
        if (!name) {
            throw "Too few parameters!";
        }

        // TODO: Once the timer objects are mocked, make this actually
        // return the value of whether the timer exists!
        return false;
    },
    UseObject: function(serial) {
        serial = serial | "self";

        if (this.debug) {
            console.log("Using object with serial " + serial);
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
    UseType: function(graphic, color, container, recurse) {
        if (!graphic) {
            throw "Too few parameters!";
        }

        if (this.debug) {
            console.log("Trying to use type with graphic " + graphic);
        }

        // TODO: Double-check this doesn't throw a bool when done.
        // TODO: Give some sort of confirmation if able to use type
        //      once stuff has been properly mocked out.
    },
    Wait: function(timeout) {
        if (this.debug) {
            console.log("Waiting " + timeout + " ms");
        }
    },
    WaitForTarget: function(delay) {
        delay = delay | 1000;

        if (this.debug) {
            console.log("Waiting for target with delay " + delay);
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
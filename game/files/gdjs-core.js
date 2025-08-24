// Minimal GDevelop Core Runtime
var gdjs = gdjs || {};

// Core Logger class
gdjs.Logger = class Logger {
    constructor(name) {
        this.name = name;
    }
    
    log(message) {
        console.log(`[${this.name}] ${message}`);
    }
    
    error(message, error) {
        console.error(`[${this.name}] ${message}`, error);
    }
    
    warn(message) {
        console.warn(`[${this.name}] ${message}`);
    }
    
    info(message) {
        console.info(`[${this.name}] ${message}`);
    }
};

// Core RuntimeObject class
gdjs.RuntimeObject = class RuntimeObject {
    constructor(runtimeScene, objectData) {
        this._runtimeScene = runtimeScene;
        this._objectData = objectData;
        this._name = objectData.name || "Unknown";
        this._visible = true;
        this._hidden = false;
        this._layer = "";
        this._zOrder = 0;
        this._variables = new gdjs.VariablesContainer();
        this._behaviors = [];
        this._effects = [];
    }
    
    getName() { return this._name; }
    isVisible() { return this._visible && !this._hidden; }
    setVisible(visible) { this._visible = visible; }
    hide() { this._hidden = true; }
    show() { this._hidden = false; }
    getLayer() { return this._layer; }
    setLayer(layer) { this._layer = layer; }
    getZOrder() { return this._zOrder; }
    setZOrder(zOrder) { this._zOrder = zOrder; }
    getVariables() { return this._variables; }
    getBehaviors() { return this._behaviors; }
    getEffects() { return this._effects; }
    
    update(runtimeScene) {
        // Update behaviors
        for (let i = 0; i < this._behaviors.length; i++) {
            if (this._behaviors[i].update) {
                this._behaviors[i].update(runtimeScene);
            }
        }
    }
    
    render(renderer) {
        // Base render method - override in subclasses
    }
};

// Core RuntimeBehavior class
gdjs.RuntimeBehavior = class RuntimeBehavior {
    constructor(runtimeScene, behaviorData, owner) {
        this._runtimeScene = runtimeScene;
        this._behaviorData = behaviorData;
        this._owner = owner;
        this._name = behaviorData.name || "Unknown";
        this._type = behaviorData.type || "Unknown";
        this._enabled = true;
    }
    
    getName() { return this._name; }
    getType() { return this._type; }
    isEnabled() { return this._enabled; }
    enable() { this._enabled = true; }
    disable() { this._enabled = false; }
    getOwner() { return this._owner; }
    
    update(runtimeScene) {
        // Base update method - override in subclasses
    }
    
    doStepPreEvents(runtimeScene) {
        // Base pre-events method - override in subclasses
    }
    
    doStepPostEvents(runtimeScene) {
        // Base post-events method - override in subclasses
    }
};

// Core VariablesContainer class
gdjs.VariablesContainer = class VariablesContainer {
    constructor() {
        this._variables = new Map();
    }
    
    get(name) {
        return this._variables.get(name) || null;
    }
    
    set(name, value) {
        this._variables.set(name, value);
    }
    
    has(name) {
        return this._variables.has(name);
    }
    
    remove(name) {
        return this._variables.delete(name);
    }
    
    clear() {
        this._variables.clear();
    }
};

// Core RuntimeScene class
gdjs.RuntimeScene = class RuntimeScene {
    constructor(runtimeGame, sceneData) {
        this._runtimeGame = runtimeGame;
        this._sceneData = sceneData;
        this._name = sceneData.name || "Unknown";
        this._objects = new Map();
        this._layers = new Map();
        this._variables = new gdjs.VariablesContainer();
        this._timeManager = new gdjs.TimeManager();
        this._renderer = null;
    }
    
    getName() { return this._name; }
    getGame() { return this._runtimeGame; }
    getObjects() { return this._objects; }
    getLayers() { return this._layers; }
    getVariables() { return this._variables; }
    getTimeManager() { return this._timeManager; }
    getRenderer() { return this._renderer; }
    setRenderer(renderer) { this._renderer = renderer; }
    
    update() {
        // Update time
        this._timeManager.update();
        
        // Update objects
        for (let [name, objects] of this._objects) {
            for (let i = 0; i < objects.length; i++) {
                if (objects[i].update) {
                    objects[i].update(this);
                }
            }
        }
    }
    
    render() {
        if (this._renderer && this._renderer.render) {
            this._renderer.render(this);
        }
    }
};

// Core RuntimeGame class
gdjs.RuntimeGame = class RuntimeGame {
    constructor(gameData, options) {
        this._gameData = gameData;
        this._options = options || {};
        this._variables = new gdjs.VariablesContainer();
        this._scenes = new Map();
        this._currentScene = null;
        this._renderer = null;
        this._inputManager = new gdjs.InputManager();
        this._soundManager = new gdjs.SoundManager();
        this._imageManager = new gdjs.ImageManager();
        this._fontManager = new gdjs.FontManager();
    }
    
    getGameData() { return this._gameData; }
    getOptions() { return this._options; }
    getVariables() { return this._variables; }
    getScenes() { return this._scenes; }
    getCurrentScene() { return this._currentScene; }
    getRenderer() { return this._renderer; }
    setRenderer(renderer) { this._renderer = renderer; }
    getInputManager() { return this._inputManager; }
    getSoundManager() { return this._soundManager; }
    getImageManager() { return this._imageManager; }
    getFontManager() { return this._fontManager; }
    
    update() {
        if (this._currentScene) {
            this._currentScene.update();
        }
    }
    
    render() {
        if (this._currentScene) {
            this._currentScene.render();
        }
    }
};

// Core TimeManager class
gdjs.TimeManager = class TimeManager {
    constructor() {
        this._elapsedTime = 0;
        this._deltaTime = 0;
        this._lastTime = Date.now();
    }
    
    update() {
        const currentTime = Date.now();
        this._deltaTime = currentTime - this._lastTime;
        this._elapsedTime += this._deltaTime;
        this._lastTime = currentTime;
    }
    
    getElapsedTime() { return this._elapsedTime; }
    getDeltaTime() { return this._deltaTime; }
};

// Core InputManager class
gdjs.InputManager = class InputManager {
    constructor() {
        this._keys = new Map();
        this._mouseX = 0;
        this._mouseY = 0;
        this._mouseButtons = {
            LEFT: false,
            RIGHT: false,
            MIDDLE: false
        };
        
        // Constants
        this.MOUSE_LEFT_BUTTON = 0;
        this.MOUSE_RIGHT_BUTTON = 1;
        this.MOUSE_MIDDLE_BUTTON = 2;
        
        this.KEY_UP = 38;
        this.KEY_DOWN = 40;
        this.KEY_LEFT = 37;
        this.KEY_RIGHT = 39;
        this.KEY_SPACE = 32;
        this.KEY_ENTER = 13;
        this.KEY_ESCAPE = 27;
        this.KEY_SHIFT = 16;
        this.KEY_CTRL = 17;
        this.KEY_ALT = 18;
    }
    
    isKeyPressed(keyCode) {
        return this._keys.get(keyCode) || false;
    }
    
    isMouseButtonPressed(button) {
        switch(button) {
            case this.MOUSE_LEFT_BUTTON: return this._mouseButtons.LEFT;
            case this.MOUSE_RIGHT_BUTTON: return this._mouseButtons.RIGHT;
            case this.MOUSE_MIDDLE_BUTTON: return this._mouseButtons.MIDDLE;
            default: return false;
        }
    }
    
    getMouseX() { return this._mouseX; }
    getMouseY() { return this._mouseY; }
    
    setMousePosition(x, y) {
        this._mouseX = x;
        this._mouseY = y;
    }
};

// Core SoundManager class
gdjs.SoundManager = class SoundManager {
    constructor() {
        this._sounds = new Map();
    }
    
    playSound(name, loop = false, volume = 1.0) {
        // Placeholder for sound playback
        console.log(`Playing sound: ${name}`);
    }
    
    stopSound(name) {
        console.log(`Stopping sound: ${name}`);
    }
    
    setSoundVolume(name, volume) {
        console.log(`Setting volume for ${name}: ${volume}`);
    }
};

// Core ImageManager class
gdjs.ImageManager = class ImageManager {
    constructor() {
        this._images = new Map();
    }
    
    loadImage(name, path) {
        // Placeholder for image loading
        console.log(`Loading image: ${name} from ${path}`);
    }
    
    getImage(name) {
        return this._images.get(name);
    }
};

// Core FontManager class
gdjs.FontManager = class FontManager {
    constructor() {
        this._fonts = new Map();
    }
    
    loadFont(name, path) {
        // Placeholder for font loading
        console.log(`Loading font: ${name} from ${path}`);
    }
    
    getFont(name) {
        return this._fonts.get(name);
    }
};

// Core filter registration
gdjs.registerFilterCreator = function(name, creator) {
    // Placeholder for filter registration
    console.log(`Registering filter: ${name}`);
};

// Core runtime scene callback registration
gdjs.registerRuntimeSceneUnloadedCallback = function(callback) {
    // Placeholder for callback registration
    console.log(`Registering runtime scene unloaded callback`);
};

// Initialize the runtime
console.log("GDevelop Core Runtime loaded");


if (typeof gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer !== "undefined") {
  gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer = {};


gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(20465876);
}
if (isConditionTrue_0) {
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0).setNumber(gdjs.evtTools.input.getCursorX(runtimeScene, eventsFunctionContext.getArgument("Layer"), eventsFunctionContext.getArgument("Camera")));
}{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(1).setNumber(gdjs.evtTools.input.getCursorY(runtimeScene, eventsFunctionContext.getArgument("Layer"), eventsFunctionContext.getArgument("Camera")));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("Direction") != "vertical");
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.camera.getCameraX(runtimeScene, eventsFunctionContext.getArgument("Layer"), eventsFunctionContext.getArgument("Camera")) - (gdjs.evtTools.input.getCursorX(runtimeScene, eventsFunctionContext.getArgument("Layer"), eventsFunctionContext.getArgument("Camera")) - eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0).getAsNumber()), eventsFunctionContext.getArgument("Layer"), eventsFunctionContext.getArgument("Camera"));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("Direction") != "horizontal");
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, eventsFunctionContext.getArgument("Layer"), eventsFunctionContext.getArgument("Camera")) - (gdjs.evtTools.input.getCursorY(runtimeScene, eventsFunctionContext.getArgument("Layer"), eventsFunctionContext.getArgument("Camera")) - eventsFunctionContext.sceneVariablesForExtension.getFromIndex(1).getAsNumber()), eventsFunctionContext.getArgument("Layer"), eventsFunctionContext.getArgument("Camera"));
}}

}


};gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, eventsFunctionContext.getArgument("InputButton"));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_2) {
isConditionTrue_2 = false;
{isConditionTrue_2 = !eventsFunctionContext.getArgument("InputButton");
}
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.func = function(runtimeScene, Camera, Layer, Direction, InputButton, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("DragCameraWithPointer"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("DragCameraWithPointer"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Camera") return Camera;
if (argName === "Layer") return Layer;
if (argName === "Direction") return Direction;
if (argName === "InputButton") return InputButton;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.eventsList1(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.registeredGdjsCallbacks = [];
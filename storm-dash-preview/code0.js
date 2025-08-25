gdjs.introCode = {};
gdjs.introCode.localVariables = [];
gdjs.introCode.GDplaceholderObjects1= [];
gdjs.introCode.GDplaceholderObjects2= [];
gdjs.introCode.GDplaceholderObjects3= [];
gdjs.introCode.GDlogoObjects1= [];
gdjs.introCode.GDlogoObjects2= [];
gdjs.introCode.GDlogoObjects3= [];
gdjs.introCode.GDbiggerhill2Objects1= [];
gdjs.introCode.GDbiggerhill2Objects2= [];
gdjs.introCode.GDbiggerhill2Objects3= [];
gdjs.introCode.GDsmallerhill2Objects1= [];
gdjs.introCode.GDsmallerhill2Objects2= [];
gdjs.introCode.GDsmallerhill2Objects3= [];
gdjs.introCode.GDreflection2Objects1= [];
gdjs.introCode.GDreflection2Objects2= [];
gdjs.introCode.GDreflection2Objects3= [];
gdjs.introCode.GDBackground2Objects1= [];
gdjs.introCode.GDBackground2Objects2= [];
gdjs.introCode.GDBackground2Objects3= [];
gdjs.introCode.GDBackgroundcloud2Objects1= [];
gdjs.introCode.GDBackgroundcloud2Objects2= [];
gdjs.introCode.GDBackgroundcloud2Objects3= [];
gdjs.introCode.GDSweat_9595DropObjects1= [];
gdjs.introCode.GDSweat_9595DropObjects2= [];
gdjs.introCode.GDSweat_9595DropObjects3= [];


gdjs.introCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.storage.elementExistsInJSONFile("records", "easy"));
if (isConditionTrue_0) {
{gdjs.evtTools.storage.writeNumberInJSONFile("records", "easy", 0);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.storage.elementExistsInJSONFile("records", "normal"));
if (isConditionTrue_0) {
{gdjs.evtTools.storage.writeNumberInJSONFile("records", "normal", 0);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.storage.elementExistsInJSONFile("records", "hard"));
if (isConditionTrue_0) {
{gdjs.evtTools.storage.writeNumberInJSONFile("records", "hard", 0);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.storage.elementExistsInJSONFile("records", "impossibru"));
if (isConditionTrue_0) {
{gdjs.evtTools.storage.writeNumberInJSONFile("records", "impossibru", 0);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.storage.elementExistsInJSONFile("records", "money"));
if (isConditionTrue_0) {
{gdjs.evtTools.storage.writeNumberInJSONFile("records", "money", 0);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.storage.elementExistsInJSONFile("records", "money");
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readNumberFromJSONFile("records", "money", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(2));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.storage.elementExistsInJSONFile("items", "lavaDrop"));
if (isConditionTrue_0) {
{gdjs.evtTools.storage.writeNumberInJSONFile("items", "lavaDrop", 0);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.storage.elementExistsInJSONFile("items", "waterDrop"));
if (isConditionTrue_0) {
{gdjs.evtTools.storage.writeNumberInJSONFile("items", "waterDrop", 0);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.storage.elementExistsInJSONFile("items", "toxicDrop"));
if (isConditionTrue_0) {
{gdjs.evtTools.storage.writeNumberInJSONFile("items", "toxicDrop", 0);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.storage.elementExistsInJSONFile("items", "blueBear"));
if (isConditionTrue_0) {
{gdjs.evtTools.storage.writeNumberInJSONFile("items", "blueBear", 0);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.storage.elementExistsInJSONFile("items", "whiteBear"));
if (isConditionTrue_0) {
{gdjs.evtTools.storage.writeNumberInJSONFile("items", "whiteBear", 0);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.storage.elementExistsInJSONFile("items", "pinkBear"));
if (isConditionTrue_0) {
{gdjs.evtTools.storage.writeNumberInJSONFile("items", "pinkBear", 0);
}}

}


};gdjs.introCode.asyncCallback20987692 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.introCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("logo"), gdjs.introCode.GDlogoObjects2);

{for(var i = 0, len = gdjs.introCode.GDlogoObjects2.length ;i < len;++i) {
    gdjs.introCode.GDlogoObjects2[i].getBehavior("Tween").addObjectScaleXTween2("a", 0, "linear", 0, false, false);
}
}{for(var i = 0, len = gdjs.introCode.GDlogoObjects2.length ;i < len;++i) {
    gdjs.introCode.GDlogoObjects2[i].setXOffset(0);
}
}gdjs.introCode.localVariables.length = 0;
}
gdjs.introCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.introCode.localVariables);
for (const obj of gdjs.introCode.GDlogoObjects1) asyncObjectsList.addObject("logo", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.introCode.asyncCallback20987692(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.introCode.asyncCallback20990212 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.introCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", false);
}gdjs.introCode.localVariables.length = 0;
}
gdjs.introCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.introCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.introCode.asyncCallback20990212(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.introCode.eventsList3 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.window.setWindowTitle(runtimeScene, "Storm Dash (early beta)");
}{gdjs.evtTools.advancedWindow.maximize(true, runtimeScene);
}{gdjs.evtTools.advancedWindow.setFullScreenable(false, runtimeScene);
}
{ //Subevents
gdjs.introCode.eventsList0(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("logo"), gdjs.introCode.GDlogoObjects1);
{for(var i = 0, len = gdjs.introCode.GDlogoObjects1.length ;i < len;++i) {
    gdjs.introCode.GDlogoObjects1[i].getBehavior("Tween").addObjectOpacityTween2("", 255, "linear", 1, false);
}
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "intro2.wav", 0, false, 100, 1);
}{for(var i = 0, len = gdjs.introCode.GDlogoObjects1.length ;i < len;++i) {
    gdjs.introCode.GDlogoObjects1[i].getBehavior("Tween").addObjectScaleXTween2("a", 20, "linear", 3, false, true);
}
}{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.introCode.GDlogoObjects1.length !== 0 ? gdjs.introCode.GDlogoObjects1[0] : null), true, "", 0);
}{gdjs.evtTools.camera.setCameraZoom(runtimeScene, -(0.5), "", 0);
}
{ //Subevents
gdjs.introCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.sound.isSoundOnChannelStopped(runtimeScene, 0);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(20989332);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("logo"), gdjs.introCode.GDlogoObjects1);
{for(var i = 0, len = gdjs.introCode.GDlogoObjects1.length ;i < len;++i) {
    gdjs.introCode.GDlogoObjects1[i].getBehavior("Tween").addObjectOpacityTween2("", 0, "linear", 1, false);
}
}
{ //Subevents
gdjs.introCode.eventsList2(runtimeScene);} //End of subevents
}

}


};

gdjs.introCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.introCode.GDplaceholderObjects1.length = 0;
gdjs.introCode.GDplaceholderObjects2.length = 0;
gdjs.introCode.GDplaceholderObjects3.length = 0;
gdjs.introCode.GDlogoObjects1.length = 0;
gdjs.introCode.GDlogoObjects2.length = 0;
gdjs.introCode.GDlogoObjects3.length = 0;
gdjs.introCode.GDbiggerhill2Objects1.length = 0;
gdjs.introCode.GDbiggerhill2Objects2.length = 0;
gdjs.introCode.GDbiggerhill2Objects3.length = 0;
gdjs.introCode.GDsmallerhill2Objects1.length = 0;
gdjs.introCode.GDsmallerhill2Objects2.length = 0;
gdjs.introCode.GDsmallerhill2Objects3.length = 0;
gdjs.introCode.GDreflection2Objects1.length = 0;
gdjs.introCode.GDreflection2Objects2.length = 0;
gdjs.introCode.GDreflection2Objects3.length = 0;
gdjs.introCode.GDBackground2Objects1.length = 0;
gdjs.introCode.GDBackground2Objects2.length = 0;
gdjs.introCode.GDBackground2Objects3.length = 0;
gdjs.introCode.GDBackgroundcloud2Objects1.length = 0;
gdjs.introCode.GDBackgroundcloud2Objects2.length = 0;
gdjs.introCode.GDBackgroundcloud2Objects3.length = 0;
gdjs.introCode.GDSweat_9595DropObjects1.length = 0;
gdjs.introCode.GDSweat_9595DropObjects2.length = 0;
gdjs.introCode.GDSweat_9595DropObjects3.length = 0;

gdjs.introCode.eventsList3(runtimeScene);
gdjs.introCode.GDplaceholderObjects1.length = 0;
gdjs.introCode.GDplaceholderObjects2.length = 0;
gdjs.introCode.GDplaceholderObjects3.length = 0;
gdjs.introCode.GDlogoObjects1.length = 0;
gdjs.introCode.GDlogoObjects2.length = 0;
gdjs.introCode.GDlogoObjects3.length = 0;
gdjs.introCode.GDbiggerhill2Objects1.length = 0;
gdjs.introCode.GDbiggerhill2Objects2.length = 0;
gdjs.introCode.GDbiggerhill2Objects3.length = 0;
gdjs.introCode.GDsmallerhill2Objects1.length = 0;
gdjs.introCode.GDsmallerhill2Objects2.length = 0;
gdjs.introCode.GDsmallerhill2Objects3.length = 0;
gdjs.introCode.GDreflection2Objects1.length = 0;
gdjs.introCode.GDreflection2Objects2.length = 0;
gdjs.introCode.GDreflection2Objects3.length = 0;
gdjs.introCode.GDBackground2Objects1.length = 0;
gdjs.introCode.GDBackground2Objects2.length = 0;
gdjs.introCode.GDBackground2Objects3.length = 0;
gdjs.introCode.GDBackgroundcloud2Objects1.length = 0;
gdjs.introCode.GDBackgroundcloud2Objects2.length = 0;
gdjs.introCode.GDBackgroundcloud2Objects3.length = 0;
gdjs.introCode.GDSweat_9595DropObjects1.length = 0;
gdjs.introCode.GDSweat_9595DropObjects2.length = 0;
gdjs.introCode.GDSweat_9595DropObjects3.length = 0;


return;

}

gdjs['introCode'] = gdjs.introCode;

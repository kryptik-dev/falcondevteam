gdjs.customizeCode = {};
gdjs.customizeCode.localVariables = [];
gdjs.customizeCode.GDstripesObjects1= [];
gdjs.customizeCode.GDstripesObjects2= [];
gdjs.customizeCode.GDstripesObjects3= [];
gdjs.customizeCode.GDbackgroundObjects1= [];
gdjs.customizeCode.GDbackgroundObjects2= [];
gdjs.customizeCode.GDbackgroundObjects3= [];
gdjs.customizeCode.GDbiggerhill2Objects1= [];
gdjs.customizeCode.GDbiggerhill2Objects2= [];
gdjs.customizeCode.GDbiggerhill2Objects3= [];
gdjs.customizeCode.GDsmallerhill2Objects1= [];
gdjs.customizeCode.GDsmallerhill2Objects2= [];
gdjs.customizeCode.GDsmallerhill2Objects3= [];
gdjs.customizeCode.GDreflection2Objects1= [];
gdjs.customizeCode.GDreflection2Objects2= [];
gdjs.customizeCode.GDreflection2Objects3= [];
gdjs.customizeCode.GDBackground2Objects1= [];
gdjs.customizeCode.GDBackground2Objects2= [];
gdjs.customizeCode.GDBackground2Objects3= [];
gdjs.customizeCode.GDBackgroundcloud2Objects1= [];
gdjs.customizeCode.GDBackgroundcloud2Objects2= [];
gdjs.customizeCode.GDBackgroundcloud2Objects3= [];
gdjs.customizeCode.GDSweat_9595DropObjects1= [];
gdjs.customizeCode.GDSweat_9595DropObjects2= [];
gdjs.customizeCode.GDSweat_9595DropObjects3= [];


gdjs.customizeCode.eventsList0 = function(runtimeScene) {

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


};gdjs.customizeCode.eventsList1 = function(runtimeScene) {

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
gdjs.customizeCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("background"), gdjs.customizeCode.GDbackgroundObjects1);
{for(var i = 0, len = gdjs.customizeCode.GDbackgroundObjects1.length ;i < len;++i) {
    gdjs.customizeCode.GDbackgroundObjects1[i].setXOffset(gdjs.customizeCode.GDbackgroundObjects1[i].getXOffset() + (2));
}
}}

}


};

gdjs.customizeCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.customizeCode.GDstripesObjects1.length = 0;
gdjs.customizeCode.GDstripesObjects2.length = 0;
gdjs.customizeCode.GDstripesObjects3.length = 0;
gdjs.customizeCode.GDbackgroundObjects1.length = 0;
gdjs.customizeCode.GDbackgroundObjects2.length = 0;
gdjs.customizeCode.GDbackgroundObjects3.length = 0;
gdjs.customizeCode.GDbiggerhill2Objects1.length = 0;
gdjs.customizeCode.GDbiggerhill2Objects2.length = 0;
gdjs.customizeCode.GDbiggerhill2Objects3.length = 0;
gdjs.customizeCode.GDsmallerhill2Objects1.length = 0;
gdjs.customizeCode.GDsmallerhill2Objects2.length = 0;
gdjs.customizeCode.GDsmallerhill2Objects3.length = 0;
gdjs.customizeCode.GDreflection2Objects1.length = 0;
gdjs.customizeCode.GDreflection2Objects2.length = 0;
gdjs.customizeCode.GDreflection2Objects3.length = 0;
gdjs.customizeCode.GDBackground2Objects1.length = 0;
gdjs.customizeCode.GDBackground2Objects2.length = 0;
gdjs.customizeCode.GDBackground2Objects3.length = 0;
gdjs.customizeCode.GDBackgroundcloud2Objects1.length = 0;
gdjs.customizeCode.GDBackgroundcloud2Objects2.length = 0;
gdjs.customizeCode.GDBackgroundcloud2Objects3.length = 0;
gdjs.customizeCode.GDSweat_9595DropObjects1.length = 0;
gdjs.customizeCode.GDSweat_9595DropObjects2.length = 0;
gdjs.customizeCode.GDSweat_9595DropObjects3.length = 0;

gdjs.customizeCode.eventsList1(runtimeScene);
gdjs.customizeCode.GDstripesObjects1.length = 0;
gdjs.customizeCode.GDstripesObjects2.length = 0;
gdjs.customizeCode.GDstripesObjects3.length = 0;
gdjs.customizeCode.GDbackgroundObjects1.length = 0;
gdjs.customizeCode.GDbackgroundObjects2.length = 0;
gdjs.customizeCode.GDbackgroundObjects3.length = 0;
gdjs.customizeCode.GDbiggerhill2Objects1.length = 0;
gdjs.customizeCode.GDbiggerhill2Objects2.length = 0;
gdjs.customizeCode.GDbiggerhill2Objects3.length = 0;
gdjs.customizeCode.GDsmallerhill2Objects1.length = 0;
gdjs.customizeCode.GDsmallerhill2Objects2.length = 0;
gdjs.customizeCode.GDsmallerhill2Objects3.length = 0;
gdjs.customizeCode.GDreflection2Objects1.length = 0;
gdjs.customizeCode.GDreflection2Objects2.length = 0;
gdjs.customizeCode.GDreflection2Objects3.length = 0;
gdjs.customizeCode.GDBackground2Objects1.length = 0;
gdjs.customizeCode.GDBackground2Objects2.length = 0;
gdjs.customizeCode.GDBackground2Objects3.length = 0;
gdjs.customizeCode.GDBackgroundcloud2Objects1.length = 0;
gdjs.customizeCode.GDBackgroundcloud2Objects2.length = 0;
gdjs.customizeCode.GDBackgroundcloud2Objects3.length = 0;
gdjs.customizeCode.GDSweat_9595DropObjects1.length = 0;
gdjs.customizeCode.GDSweat_9595DropObjects2.length = 0;
gdjs.customizeCode.GDSweat_9595DropObjects3.length = 0;


return;

}

gdjs['customizeCode'] = gdjs.customizeCode;

gdjs.Introducci_243nCode = {};
gdjs.Introducci_243nCode.localVariables = [];
gdjs.Introducci_243nCode.GDTitleObjects1= [];
gdjs.Introducci_243nCode.GDTitleObjects2= [];
gdjs.Introducci_243nCode.GDPlayObjects1= [];
gdjs.Introducci_243nCode.GDPlayObjects2= [];
gdjs.Introducci_243nCode.GDSettingsLabelObjects1= [];
gdjs.Introducci_243nCode.GDSettingsLabelObjects2= [];
gdjs.Introducci_243nCode.GDSoundVolumeObjects1= [];
gdjs.Introducci_243nCode.GDSoundVolumeObjects2= [];
gdjs.Introducci_243nCode.GDMusicVolumeObjects1= [];
gdjs.Introducci_243nCode.GDMusicVolumeObjects2= [];
gdjs.Introducci_243nCode.GDBackObjects1= [];
gdjs.Introducci_243nCode.GDBackObjects2= [];
gdjs.Introducci_243nCode.GDQuitObjects1= [];
gdjs.Introducci_243nCode.GDQuitObjects2= [];
gdjs.Introducci_243nCode.GDMarkerObjects1= [];
gdjs.Introducci_243nCode.GDMarkerObjects2= [];
gdjs.Introducci_243nCode.GDSettingsMarkerObjects1= [];
gdjs.Introducci_243nCode.GDSettingsMarkerObjects2= [];
gdjs.Introducci_243nCode.GDSoundSliderObjects1= [];
gdjs.Introducci_243nCode.GDSoundSliderObjects2= [];
gdjs.Introducci_243nCode.GDMusicSliderObjects1= [];
gdjs.Introducci_243nCode.GDMusicSliderObjects2= [];
gdjs.Introducci_243nCode.GDScreenOrientationCheckerObjects1= [];
gdjs.Introducci_243nCode.GDScreenOrientationCheckerObjects2= [];
gdjs.Introducci_243nCode.GDlogoObjects1= [];
gdjs.Introducci_243nCode.GDlogoObjects2= [];
gdjs.Introducci_243nCode.GDGreenButtonObjects1= [];
gdjs.Introducci_243nCode.GDGreenButtonObjects2= [];
gdjs.Introducci_243nCode.GDComenzarObjects1= [];
gdjs.Introducci_243nCode.GDComenzarObjects2= [];
gdjs.Introducci_243nCode.GDTexto_9595introObjects1= [];
gdjs.Introducci_243nCode.GDTexto_9595introObjects2= [];
gdjs.Introducci_243nCode.GDExtintorObjects1= [];
gdjs.Introducci_243nCode.GDExtintorObjects2= [];
gdjs.Introducci_243nCode.GDNewSpriteObjects1= [];
gdjs.Introducci_243nCode.GDNewSpriteObjects2= [];
gdjs.Introducci_243nCode.GDNewSprite2Objects1= [];
gdjs.Introducci_243nCode.GDNewSprite2Objects2= [];
gdjs.Introducci_243nCode.GDTransitionObjects1= [];
gdjs.Introducci_243nCode.GDTransitionObjects2= [];
gdjs.Introducci_243nCode.GDDarkenObjects1= [];
gdjs.Introducci_243nCode.GDDarkenObjects2= [];


gdjs.Introducci_243nCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.systemInfo.isMobile();
if (isConditionTrue_0) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "Screen orientation checker");
}}

}


};gdjs.Introducci_243nCode.mapOfGDgdjs_9546Introducci_9595243nCode_9546GDGreenButtonObjects1Objects = Hashtable.newFrom({"GreenButton": gdjs.Introducci_243nCode.GDGreenButtonObjects1});
gdjs.Introducci_243nCode.eventsList1 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Marker"), gdjs.Introducci_243nCode.GDMarkerObjects1);
{gdjs.evtTools.sound.continueMusicOnChannel(runtimeScene, 0);
}{for(var i = 0, len = gdjs.Introducci_243nCode.GDMarkerObjects1.length ;i < len;++i) {
    gdjs.Introducci_243nCode.GDMarkerObjects1[i].hide();
}
}
{ //Subevents
gdjs.Introducci_243nCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.Introducci_243nCode.GDBackObjects1);
gdjs.copyArray(runtimeScene.getObjects("Marker"), gdjs.Introducci_243nCode.GDMarkerObjects1);
gdjs.copyArray(runtimeScene.getObjects("MusicSlider"), gdjs.Introducci_243nCode.GDMusicSliderObjects1);
gdjs.copyArray(runtimeScene.getObjects("MusicVolume"), gdjs.Introducci_243nCode.GDMusicVolumeObjects1);
gdjs.copyArray(runtimeScene.getObjects("Play"), gdjs.Introducci_243nCode.GDPlayObjects1);
gdjs.copyArray(runtimeScene.getObjects("Quit"), gdjs.Introducci_243nCode.GDQuitObjects1);
gdjs.copyArray(runtimeScene.getObjects("SettingsLabel"), gdjs.Introducci_243nCode.GDSettingsLabelObjects1);
gdjs.copyArray(runtimeScene.getObjects("SettingsMarker"), gdjs.Introducci_243nCode.GDSettingsMarkerObjects1);
gdjs.copyArray(runtimeScene.getObjects("SoundSlider"), gdjs.Introducci_243nCode.GDSoundSliderObjects1);
gdjs.copyArray(runtimeScene.getObjects("SoundVolume"), gdjs.Introducci_243nCode.GDSoundVolumeObjects1);
gdjs.copyArray(runtimeScene.getObjects("Title"), gdjs.Introducci_243nCode.GDTitleObjects1);
{for(var i = 0, len = gdjs.Introducci_243nCode.GDTitleObjects1.length ;i < len;++i) {
    gdjs.Introducci_243nCode.GDTitleObjects1[i].setCenterXInScene(0.5 * gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0));
}
for(var i = 0, len = gdjs.Introducci_243nCode.GDPlayObjects1.length ;i < len;++i) {
    gdjs.Introducci_243nCode.GDPlayObjects1[i].setCenterXInScene(0.5 * gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0));
}
for(var i = 0, len = gdjs.Introducci_243nCode.GDSettingsLabelObjects1.length ;i < len;++i) {
    gdjs.Introducci_243nCode.GDSettingsLabelObjects1[i].setCenterXInScene(0.5 * gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0));
}
for(var i = 0, len = gdjs.Introducci_243nCode.GDQuitObjects1.length ;i < len;++i) {
    gdjs.Introducci_243nCode.GDQuitObjects1[i].setCenterXInScene(0.5 * gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0));
}
for(var i = 0, len = gdjs.Introducci_243nCode.GDMarkerObjects1.length ;i < len;++i) {
    gdjs.Introducci_243nCode.GDMarkerObjects1[i].setCenterXInScene(0.5 * gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0));
}
}{for(var i = 0, len = gdjs.Introducci_243nCode.GDSoundSliderObjects1.length ;i < len;++i) {
    gdjs.Introducci_243nCode.GDSoundSliderObjects1[i].setCenterXInScene(1.5 * gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0));
}
for(var i = 0, len = gdjs.Introducci_243nCode.GDMusicSliderObjects1.length ;i < len;++i) {
    gdjs.Introducci_243nCode.GDMusicSliderObjects1[i].setCenterXInScene(1.5 * gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0));
}
for(var i = 0, len = gdjs.Introducci_243nCode.GDSoundVolumeObjects1.length ;i < len;++i) {
    gdjs.Introducci_243nCode.GDSoundVolumeObjects1[i].setCenterXInScene(1.5 * gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0));
}
for(var i = 0, len = gdjs.Introducci_243nCode.GDMusicVolumeObjects1.length ;i < len;++i) {
    gdjs.Introducci_243nCode.GDMusicVolumeObjects1[i].setCenterXInScene(1.5 * gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0));
}
for(var i = 0, len = gdjs.Introducci_243nCode.GDBackObjects1.length ;i < len;++i) {
    gdjs.Introducci_243nCode.GDBackObjects1[i].setCenterXInScene(1.5 * gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0));
}
for(var i = 0, len = gdjs.Introducci_243nCode.GDSettingsMarkerObjects1.length ;i < len;++i) {
    gdjs.Introducci_243nCode.GDSettingsMarkerObjects1[i].setCenterXInScene(1.5 * gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0));
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Play"), gdjs.Introducci_243nCode.GDPlayObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Introducci_243nCode.GDPlayObjects1.length;i<l;++i) {
    if ( gdjs.Introducci_243nCode.GDPlayObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Introducci_243nCode.GDPlayObjects1[k] = gdjs.Introducci_243nCode.GDPlayObjects1[i];
        ++k;
    }
}
gdjs.Introducci_243nCode.GDPlayObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Transition"), gdjs.Introducci_243nCode.GDTransitionObjects1);
{for(var i = 0, len = gdjs.Introducci_243nCode.GDTransitionObjects1.length ;i < len;++i) {
    gdjs.Introducci_243nCode.GDTransitionObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 1, "Circular", "Forward", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Transition"), gdjs.Introducci_243nCode.GDTransitionObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Introducci_243nCode.GDTransitionObjects1.length;i<l;++i) {
    if ( gdjs.Introducci_243nCode.GDTransitionObjects1[i].getBehavior("FlashTransitionPainter").PaintEffectIsEnd((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Introducci_243nCode.GDTransitionObjects1[k] = gdjs.Introducci_243nCode.GDTransitionObjects1[i];
        ++k;
    }
}
gdjs.Introducci_243nCode.GDTransitionObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreenButton"), gdjs.Introducci_243nCode.GDGreenButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Introducci_243nCode.mapOfGDgdjs_9546Introducci_9595243nCode_9546GDGreenButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Introducci_243nCode.GDGreenButtonObjects1.length;i<l;++i) {
    if ( gdjs.Introducci_243nCode.GDGreenButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Introducci_243nCode.GDGreenButtonObjects1[k] = gdjs.Introducci_243nCode.GDGreenButtonObjects1[i];
        ++k;
    }
}
gdjs.Introducci_243nCode.GDGreenButtonObjects1.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


};

gdjs.Introducci_243nCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Introducci_243nCode.GDTitleObjects1.length = 0;
gdjs.Introducci_243nCode.GDTitleObjects2.length = 0;
gdjs.Introducci_243nCode.GDPlayObjects1.length = 0;
gdjs.Introducci_243nCode.GDPlayObjects2.length = 0;
gdjs.Introducci_243nCode.GDSettingsLabelObjects1.length = 0;
gdjs.Introducci_243nCode.GDSettingsLabelObjects2.length = 0;
gdjs.Introducci_243nCode.GDSoundVolumeObjects1.length = 0;
gdjs.Introducci_243nCode.GDSoundVolumeObjects2.length = 0;
gdjs.Introducci_243nCode.GDMusicVolumeObjects1.length = 0;
gdjs.Introducci_243nCode.GDMusicVolumeObjects2.length = 0;
gdjs.Introducci_243nCode.GDBackObjects1.length = 0;
gdjs.Introducci_243nCode.GDBackObjects2.length = 0;
gdjs.Introducci_243nCode.GDQuitObjects1.length = 0;
gdjs.Introducci_243nCode.GDQuitObjects2.length = 0;
gdjs.Introducci_243nCode.GDMarkerObjects1.length = 0;
gdjs.Introducci_243nCode.GDMarkerObjects2.length = 0;
gdjs.Introducci_243nCode.GDSettingsMarkerObjects1.length = 0;
gdjs.Introducci_243nCode.GDSettingsMarkerObjects2.length = 0;
gdjs.Introducci_243nCode.GDSoundSliderObjects1.length = 0;
gdjs.Introducci_243nCode.GDSoundSliderObjects2.length = 0;
gdjs.Introducci_243nCode.GDMusicSliderObjects1.length = 0;
gdjs.Introducci_243nCode.GDMusicSliderObjects2.length = 0;
gdjs.Introducci_243nCode.GDScreenOrientationCheckerObjects1.length = 0;
gdjs.Introducci_243nCode.GDScreenOrientationCheckerObjects2.length = 0;
gdjs.Introducci_243nCode.GDlogoObjects1.length = 0;
gdjs.Introducci_243nCode.GDlogoObjects2.length = 0;
gdjs.Introducci_243nCode.GDGreenButtonObjects1.length = 0;
gdjs.Introducci_243nCode.GDGreenButtonObjects2.length = 0;
gdjs.Introducci_243nCode.GDComenzarObjects1.length = 0;
gdjs.Introducci_243nCode.GDComenzarObjects2.length = 0;
gdjs.Introducci_243nCode.GDTexto_9595introObjects1.length = 0;
gdjs.Introducci_243nCode.GDTexto_9595introObjects2.length = 0;
gdjs.Introducci_243nCode.GDExtintorObjects1.length = 0;
gdjs.Introducci_243nCode.GDExtintorObjects2.length = 0;
gdjs.Introducci_243nCode.GDNewSpriteObjects1.length = 0;
gdjs.Introducci_243nCode.GDNewSpriteObjects2.length = 0;
gdjs.Introducci_243nCode.GDNewSprite2Objects1.length = 0;
gdjs.Introducci_243nCode.GDNewSprite2Objects2.length = 0;
gdjs.Introducci_243nCode.GDTransitionObjects1.length = 0;
gdjs.Introducci_243nCode.GDTransitionObjects2.length = 0;
gdjs.Introducci_243nCode.GDDarkenObjects1.length = 0;
gdjs.Introducci_243nCode.GDDarkenObjects2.length = 0;

gdjs.Introducci_243nCode.eventsList1(runtimeScene);
gdjs.Introducci_243nCode.GDTitleObjects1.length = 0;
gdjs.Introducci_243nCode.GDTitleObjects2.length = 0;
gdjs.Introducci_243nCode.GDPlayObjects1.length = 0;
gdjs.Introducci_243nCode.GDPlayObjects2.length = 0;
gdjs.Introducci_243nCode.GDSettingsLabelObjects1.length = 0;
gdjs.Introducci_243nCode.GDSettingsLabelObjects2.length = 0;
gdjs.Introducci_243nCode.GDSoundVolumeObjects1.length = 0;
gdjs.Introducci_243nCode.GDSoundVolumeObjects2.length = 0;
gdjs.Introducci_243nCode.GDMusicVolumeObjects1.length = 0;
gdjs.Introducci_243nCode.GDMusicVolumeObjects2.length = 0;
gdjs.Introducci_243nCode.GDBackObjects1.length = 0;
gdjs.Introducci_243nCode.GDBackObjects2.length = 0;
gdjs.Introducci_243nCode.GDQuitObjects1.length = 0;
gdjs.Introducci_243nCode.GDQuitObjects2.length = 0;
gdjs.Introducci_243nCode.GDMarkerObjects1.length = 0;
gdjs.Introducci_243nCode.GDMarkerObjects2.length = 0;
gdjs.Introducci_243nCode.GDSettingsMarkerObjects1.length = 0;
gdjs.Introducci_243nCode.GDSettingsMarkerObjects2.length = 0;
gdjs.Introducci_243nCode.GDSoundSliderObjects1.length = 0;
gdjs.Introducci_243nCode.GDSoundSliderObjects2.length = 0;
gdjs.Introducci_243nCode.GDMusicSliderObjects1.length = 0;
gdjs.Introducci_243nCode.GDMusicSliderObjects2.length = 0;
gdjs.Introducci_243nCode.GDScreenOrientationCheckerObjects1.length = 0;
gdjs.Introducci_243nCode.GDScreenOrientationCheckerObjects2.length = 0;
gdjs.Introducci_243nCode.GDlogoObjects1.length = 0;
gdjs.Introducci_243nCode.GDlogoObjects2.length = 0;
gdjs.Introducci_243nCode.GDGreenButtonObjects1.length = 0;
gdjs.Introducci_243nCode.GDGreenButtonObjects2.length = 0;
gdjs.Introducci_243nCode.GDComenzarObjects1.length = 0;
gdjs.Introducci_243nCode.GDComenzarObjects2.length = 0;
gdjs.Introducci_243nCode.GDTexto_9595introObjects1.length = 0;
gdjs.Introducci_243nCode.GDTexto_9595introObjects2.length = 0;
gdjs.Introducci_243nCode.GDExtintorObjects1.length = 0;
gdjs.Introducci_243nCode.GDExtintorObjects2.length = 0;
gdjs.Introducci_243nCode.GDNewSpriteObjects1.length = 0;
gdjs.Introducci_243nCode.GDNewSpriteObjects2.length = 0;
gdjs.Introducci_243nCode.GDNewSprite2Objects1.length = 0;
gdjs.Introducci_243nCode.GDNewSprite2Objects2.length = 0;
gdjs.Introducci_243nCode.GDTransitionObjects1.length = 0;
gdjs.Introducci_243nCode.GDTransitionObjects2.length = 0;
gdjs.Introducci_243nCode.GDDarkenObjects1.length = 0;
gdjs.Introducci_243nCode.GDDarkenObjects2.length = 0;


return;

}

gdjs['Introducci_243nCode'] = gdjs.Introducci_243nCode;

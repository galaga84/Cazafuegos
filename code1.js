gdjs.Game_32OverCode = {};
gdjs.Game_32OverCode.localVariables = [];
gdjs.Game_32OverCode.GDTitleObjects1= [];
gdjs.Game_32OverCode.GDTitleObjects2= [];
gdjs.Game_32OverCode.GDTitleObjects3= [];
gdjs.Game_32OverCode.GDPlayObjects1= [];
gdjs.Game_32OverCode.GDPlayObjects2= [];
gdjs.Game_32OverCode.GDPlayObjects3= [];
gdjs.Game_32OverCode.GDSettingsLabelObjects1= [];
gdjs.Game_32OverCode.GDSettingsLabelObjects2= [];
gdjs.Game_32OverCode.GDSettingsLabelObjects3= [];
gdjs.Game_32OverCode.GDSoundVolumeObjects1= [];
gdjs.Game_32OverCode.GDSoundVolumeObjects2= [];
gdjs.Game_32OverCode.GDSoundVolumeObjects3= [];
gdjs.Game_32OverCode.GDMusicVolumeObjects1= [];
gdjs.Game_32OverCode.GDMusicVolumeObjects2= [];
gdjs.Game_32OverCode.GDMusicVolumeObjects3= [];
gdjs.Game_32OverCode.GDBackObjects1= [];
gdjs.Game_32OverCode.GDBackObjects2= [];
gdjs.Game_32OverCode.GDBackObjects3= [];
gdjs.Game_32OverCode.GDQuitObjects1= [];
gdjs.Game_32OverCode.GDQuitObjects2= [];
gdjs.Game_32OverCode.GDQuitObjects3= [];
gdjs.Game_32OverCode.GDMarkerObjects1= [];
gdjs.Game_32OverCode.GDMarkerObjects2= [];
gdjs.Game_32OverCode.GDMarkerObjects3= [];
gdjs.Game_32OverCode.GDSettingsMarkerObjects1= [];
gdjs.Game_32OverCode.GDSettingsMarkerObjects2= [];
gdjs.Game_32OverCode.GDSettingsMarkerObjects3= [];
gdjs.Game_32OverCode.GDSoundSliderObjects1= [];
gdjs.Game_32OverCode.GDSoundSliderObjects2= [];
gdjs.Game_32OverCode.GDSoundSliderObjects3= [];
gdjs.Game_32OverCode.GDMusicSliderObjects1= [];
gdjs.Game_32OverCode.GDMusicSliderObjects2= [];
gdjs.Game_32OverCode.GDMusicSliderObjects3= [];
gdjs.Game_32OverCode.GDScreenOrientationCheckerObjects1= [];
gdjs.Game_32OverCode.GDScreenOrientationCheckerObjects2= [];
gdjs.Game_32OverCode.GDScreenOrientationCheckerObjects3= [];
gdjs.Game_32OverCode.GDlogoObjects1= [];
gdjs.Game_32OverCode.GDlogoObjects2= [];
gdjs.Game_32OverCode.GDlogoObjects3= [];
gdjs.Game_32OverCode.GDNewSpriteObjects1= [];
gdjs.Game_32OverCode.GDNewSpriteObjects2= [];
gdjs.Game_32OverCode.GDNewSpriteObjects3= [];
gdjs.Game_32OverCode.GDNewSprite2Objects1= [];
gdjs.Game_32OverCode.GDNewSprite2Objects2= [];
gdjs.Game_32OverCode.GDNewSprite2Objects3= [];
gdjs.Game_32OverCode.GDNewSprite3Objects1= [];
gdjs.Game_32OverCode.GDNewSprite3Objects2= [];
gdjs.Game_32OverCode.GDNewSprite3Objects3= [];
gdjs.Game_32OverCode.GDNewSprite4Objects1= [];
gdjs.Game_32OverCode.GDNewSprite4Objects2= [];
gdjs.Game_32OverCode.GDNewSprite4Objects3= [];
gdjs.Game_32OverCode.GDNewBitmapTextObjects1= [];
gdjs.Game_32OverCode.GDNewBitmapTextObjects2= [];
gdjs.Game_32OverCode.GDNewBitmapTextObjects3= [];
gdjs.Game_32OverCode.GDTransitionObjects1= [];
gdjs.Game_32OverCode.GDTransitionObjects2= [];
gdjs.Game_32OverCode.GDTransitionObjects3= [];
gdjs.Game_32OverCode.GDDarkenObjects1= [];
gdjs.Game_32OverCode.GDDarkenObjects2= [];
gdjs.Game_32OverCode.GDDarkenObjects3= [];


gdjs.Game_32OverCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.storage.elementExistsInJSONFile("Settings", "Settings");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MusicSlider"), gdjs.Game_32OverCode.GDMusicSliderObjects2);
gdjs.copyArray(runtimeScene.getObjects("SoundSlider"), gdjs.Game_32OverCode.GDSoundSliderObjects2);
{gdjs.evtTools.storage.readStringFromJSONFile("Settings", "Settings", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(0));
}{gdjs.evtTools.network.jsonToVariableStructure(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString(), runtimeScene.getGame().getVariables().getFromIndex(0));
}{for(var i = 0, len = gdjs.Game_32OverCode.GDSoundSliderObjects2.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDSoundSliderObjects2[i].SetValue(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Sound").getAsNumber(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Game_32OverCode.GDMusicSliderObjects2.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDMusicSliderObjects2[i].SetValue(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Music").getAsNumber(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.systemInfo.isMobile();
if (isConditionTrue_0) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "Screen orientation checker");
}}

}


};gdjs.Game_32OverCode.eventsList1 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Marker"), gdjs.Game_32OverCode.GDMarkerObjects1);
gdjs.copyArray(runtimeScene.getObjects("SettingsMarker"), gdjs.Game_32OverCode.GDSettingsMarkerObjects1);
{for(var i = 0, len = gdjs.Game_32OverCode.GDMarkerObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDMarkerObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Game_32OverCode.GDSettingsMarkerObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDSettingsMarkerObjects1[i].hide();
}
}{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 1.5, "transition", 0);
}{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "musica\\Retro Gaming Music.mp3", 0, false, 100, 1);
}
{ //Subevents
gdjs.Game_32OverCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.Game_32OverCode.GDBackObjects1);
gdjs.copyArray(runtimeScene.getObjects("Marker"), gdjs.Game_32OverCode.GDMarkerObjects1);
gdjs.copyArray(runtimeScene.getObjects("MusicSlider"), gdjs.Game_32OverCode.GDMusicSliderObjects1);
gdjs.copyArray(runtimeScene.getObjects("MusicVolume"), gdjs.Game_32OverCode.GDMusicVolumeObjects1);
gdjs.copyArray(runtimeScene.getObjects("Play"), gdjs.Game_32OverCode.GDPlayObjects1);
gdjs.copyArray(runtimeScene.getObjects("Quit"), gdjs.Game_32OverCode.GDQuitObjects1);
gdjs.copyArray(runtimeScene.getObjects("SettingsLabel"), gdjs.Game_32OverCode.GDSettingsLabelObjects1);
gdjs.copyArray(runtimeScene.getObjects("SettingsMarker"), gdjs.Game_32OverCode.GDSettingsMarkerObjects1);
gdjs.copyArray(runtimeScene.getObjects("SoundSlider"), gdjs.Game_32OverCode.GDSoundSliderObjects1);
gdjs.copyArray(runtimeScene.getObjects("SoundVolume"), gdjs.Game_32OverCode.GDSoundVolumeObjects1);
gdjs.copyArray(runtimeScene.getObjects("Title"), gdjs.Game_32OverCode.GDTitleObjects1);
{for(var i = 0, len = gdjs.Game_32OverCode.GDTitleObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDTitleObjects1[i].setCenterXInScene(0.5 * gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0));
}
for(var i = 0, len = gdjs.Game_32OverCode.GDPlayObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDPlayObjects1[i].setCenterXInScene(0.5 * gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0));
}
for(var i = 0, len = gdjs.Game_32OverCode.GDSettingsLabelObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDSettingsLabelObjects1[i].setCenterXInScene(0.5 * gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0));
}
for(var i = 0, len = gdjs.Game_32OverCode.GDQuitObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDQuitObjects1[i].setCenterXInScene(0.5 * gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0));
}
for(var i = 0, len = gdjs.Game_32OverCode.GDMarkerObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDMarkerObjects1[i].setCenterXInScene(0.5 * gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0));
}
}{for(var i = 0, len = gdjs.Game_32OverCode.GDSoundSliderObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDSoundSliderObjects1[i].setCenterXInScene(1.5 * gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0));
}
for(var i = 0, len = gdjs.Game_32OverCode.GDMusicSliderObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDMusicSliderObjects1[i].setCenterXInScene(1.5 * gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0));
}
for(var i = 0, len = gdjs.Game_32OverCode.GDSoundVolumeObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDSoundVolumeObjects1[i].setCenterXInScene(1.5 * gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0));
}
for(var i = 0, len = gdjs.Game_32OverCode.GDMusicVolumeObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDMusicVolumeObjects1[i].setCenterXInScene(1.5 * gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0));
}
for(var i = 0, len = gdjs.Game_32OverCode.GDBackObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDBackObjects1[i].setCenterXInScene(1.5 * gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0));
}
for(var i = 0, len = gdjs.Game_32OverCode.GDSettingsMarkerObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDSettingsMarkerObjects1[i].setCenterXInScene(1.5 * gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SoundSlider"), gdjs.Game_32OverCode.GDSoundSliderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32OverCode.GDSoundSliderObjects1.length;i<l;++i) {
    if ( gdjs.Game_32OverCode.GDSoundSliderObjects1[i].IsBeingDragged((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32OverCode.GDSoundSliderObjects1[k] = gdjs.Game_32OverCode.GDSoundSliderObjects1[i];
        ++k;
    }
}
gdjs.Game_32OverCode.GDSoundSliderObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32OverCode.GDSoundSliderObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Sound").setNumber((( gdjs.Game_32OverCode.GDSoundSliderObjects1.length === 0 ) ? 0 :gdjs.Game_32OverCode.GDSoundSliderObjects1[0].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MusicSlider"), gdjs.Game_32OverCode.GDMusicSliderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32OverCode.GDMusicSliderObjects1.length;i<l;++i) {
    if ( gdjs.Game_32OverCode.GDMusicSliderObjects1[i].IsBeingDragged((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32OverCode.GDMusicSliderObjects1[k] = gdjs.Game_32OverCode.GDMusicSliderObjects1[i];
        ++k;
    }
}
gdjs.Game_32OverCode.GDMusicSliderObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32OverCode.GDMusicSliderObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Music").setNumber((( gdjs.Game_32OverCode.GDMusicSliderObjects1.length === 0 ) ? 0 :gdjs.Game_32OverCode.GDMusicSliderObjects1[0].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Play"), gdjs.Game_32OverCode.GDPlayObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32OverCode.GDPlayObjects1.length;i<l;++i) {
    if ( gdjs.Game_32OverCode.GDPlayObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32OverCode.GDPlayObjects1[k] = gdjs.Game_32OverCode.GDPlayObjects1[i];
        ++k;
    }
}
gdjs.Game_32OverCode.GDPlayObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Transition"), gdjs.Game_32OverCode.GDTransitionObjects1);
{for(var i = 0, len = gdjs.Game_32OverCode.GDTransitionObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDTransitionObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 1, "Circular", "Forward", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Transition"), gdjs.Game_32OverCode.GDTransitionObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32OverCode.GDTransitionObjects1.length;i<l;++i) {
    if ( gdjs.Game_32OverCode.GDTransitionObjects1[i].getBehavior("FlashTransitionPainter").PaintEffectIsEnd((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32OverCode.GDTransitionObjects1[k] = gdjs.Game_32OverCode.GDTransitionObjects1[i];
        ++k;
    }
}
gdjs.Game_32OverCode.GDTransitionObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Quit"), gdjs.Game_32OverCode.GDQuitObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32OverCode.GDQuitObjects1.length;i<l;++i) {
    if ( gdjs.Game_32OverCode.GDQuitObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32OverCode.GDQuitObjects1[k] = gdjs.Game_32OverCode.GDQuitObjects1[i];
        ++k;
    }
}
gdjs.Game_32OverCode.GDQuitObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SettingsLabel"), gdjs.Game_32OverCode.GDSettingsLabelObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32OverCode.GDSettingsLabelObjects1.length;i<l;++i) {
    if ( gdjs.Game_32OverCode.GDSettingsLabelObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32OverCode.GDSettingsLabelObjects1[k] = gdjs.Game_32OverCode.GDSettingsLabelObjects1[i];
        ++k;
    }
}
gdjs.Game_32OverCode.GDSettingsLabelObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SettingsMarker"), gdjs.Game_32OverCode.GDSettingsMarkerObjects1);
{gdjs.evtTools.tween.tweenCamera2(runtimeScene, "CameraMove", (( gdjs.Game_32OverCode.GDSettingsMarkerObjects1.length === 0 ) ? 0 :gdjs.Game_32OverCode.GDSettingsMarkerObjects1[0].getCenterXInScene()), gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0), "", "easeInOutQuad", 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.Game_32OverCode.GDBackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32OverCode.GDBackObjects1.length;i<l;++i) {
    if ( gdjs.Game_32OverCode.GDBackObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32OverCode.GDBackObjects1[k] = gdjs.Game_32OverCode.GDBackObjects1[i];
        ++k;
    }
}
gdjs.Game_32OverCode.GDBackObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Marker"), gdjs.Game_32OverCode.GDMarkerObjects1);
{gdjs.evtTools.tween.tweenCamera2(runtimeScene, "CameraMove", (( gdjs.Game_32OverCode.GDMarkerObjects1.length === 0 ) ? 0 :gdjs.Game_32OverCode.GDMarkerObjects1[0].getCenterXInScene()), gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0), "", "easeInOutQuad", 1);
}{gdjs.evtTools.storage.writeStringInJSONFile("Settings", "Settings", gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getGame().getVariables().getFromIndex(0)));
}}

}


};

gdjs.Game_32OverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32OverCode.GDTitleObjects1.length = 0;
gdjs.Game_32OverCode.GDTitleObjects2.length = 0;
gdjs.Game_32OverCode.GDTitleObjects3.length = 0;
gdjs.Game_32OverCode.GDPlayObjects1.length = 0;
gdjs.Game_32OverCode.GDPlayObjects2.length = 0;
gdjs.Game_32OverCode.GDPlayObjects3.length = 0;
gdjs.Game_32OverCode.GDSettingsLabelObjects1.length = 0;
gdjs.Game_32OverCode.GDSettingsLabelObjects2.length = 0;
gdjs.Game_32OverCode.GDSettingsLabelObjects3.length = 0;
gdjs.Game_32OverCode.GDSoundVolumeObjects1.length = 0;
gdjs.Game_32OverCode.GDSoundVolumeObjects2.length = 0;
gdjs.Game_32OverCode.GDSoundVolumeObjects3.length = 0;
gdjs.Game_32OverCode.GDMusicVolumeObjects1.length = 0;
gdjs.Game_32OverCode.GDMusicVolumeObjects2.length = 0;
gdjs.Game_32OverCode.GDMusicVolumeObjects3.length = 0;
gdjs.Game_32OverCode.GDBackObjects1.length = 0;
gdjs.Game_32OverCode.GDBackObjects2.length = 0;
gdjs.Game_32OverCode.GDBackObjects3.length = 0;
gdjs.Game_32OverCode.GDQuitObjects1.length = 0;
gdjs.Game_32OverCode.GDQuitObjects2.length = 0;
gdjs.Game_32OverCode.GDQuitObjects3.length = 0;
gdjs.Game_32OverCode.GDMarkerObjects1.length = 0;
gdjs.Game_32OverCode.GDMarkerObjects2.length = 0;
gdjs.Game_32OverCode.GDMarkerObjects3.length = 0;
gdjs.Game_32OverCode.GDSettingsMarkerObjects1.length = 0;
gdjs.Game_32OverCode.GDSettingsMarkerObjects2.length = 0;
gdjs.Game_32OverCode.GDSettingsMarkerObjects3.length = 0;
gdjs.Game_32OverCode.GDSoundSliderObjects1.length = 0;
gdjs.Game_32OverCode.GDSoundSliderObjects2.length = 0;
gdjs.Game_32OverCode.GDSoundSliderObjects3.length = 0;
gdjs.Game_32OverCode.GDMusicSliderObjects1.length = 0;
gdjs.Game_32OverCode.GDMusicSliderObjects2.length = 0;
gdjs.Game_32OverCode.GDMusicSliderObjects3.length = 0;
gdjs.Game_32OverCode.GDScreenOrientationCheckerObjects1.length = 0;
gdjs.Game_32OverCode.GDScreenOrientationCheckerObjects2.length = 0;
gdjs.Game_32OverCode.GDScreenOrientationCheckerObjects3.length = 0;
gdjs.Game_32OverCode.GDlogoObjects1.length = 0;
gdjs.Game_32OverCode.GDlogoObjects2.length = 0;
gdjs.Game_32OverCode.GDlogoObjects3.length = 0;
gdjs.Game_32OverCode.GDNewSpriteObjects1.length = 0;
gdjs.Game_32OverCode.GDNewSpriteObjects2.length = 0;
gdjs.Game_32OverCode.GDNewSpriteObjects3.length = 0;
gdjs.Game_32OverCode.GDNewSprite2Objects1.length = 0;
gdjs.Game_32OverCode.GDNewSprite2Objects2.length = 0;
gdjs.Game_32OverCode.GDNewSprite2Objects3.length = 0;
gdjs.Game_32OverCode.GDNewSprite3Objects1.length = 0;
gdjs.Game_32OverCode.GDNewSprite3Objects2.length = 0;
gdjs.Game_32OverCode.GDNewSprite3Objects3.length = 0;
gdjs.Game_32OverCode.GDNewSprite4Objects1.length = 0;
gdjs.Game_32OverCode.GDNewSprite4Objects2.length = 0;
gdjs.Game_32OverCode.GDNewSprite4Objects3.length = 0;
gdjs.Game_32OverCode.GDNewBitmapTextObjects1.length = 0;
gdjs.Game_32OverCode.GDNewBitmapTextObjects2.length = 0;
gdjs.Game_32OverCode.GDNewBitmapTextObjects3.length = 0;
gdjs.Game_32OverCode.GDTransitionObjects1.length = 0;
gdjs.Game_32OverCode.GDTransitionObjects2.length = 0;
gdjs.Game_32OverCode.GDTransitionObjects3.length = 0;
gdjs.Game_32OverCode.GDDarkenObjects1.length = 0;
gdjs.Game_32OverCode.GDDarkenObjects2.length = 0;
gdjs.Game_32OverCode.GDDarkenObjects3.length = 0;

gdjs.Game_32OverCode.eventsList1(runtimeScene);
gdjs.Game_32OverCode.GDTitleObjects1.length = 0;
gdjs.Game_32OverCode.GDTitleObjects2.length = 0;
gdjs.Game_32OverCode.GDTitleObjects3.length = 0;
gdjs.Game_32OverCode.GDPlayObjects1.length = 0;
gdjs.Game_32OverCode.GDPlayObjects2.length = 0;
gdjs.Game_32OverCode.GDPlayObjects3.length = 0;
gdjs.Game_32OverCode.GDSettingsLabelObjects1.length = 0;
gdjs.Game_32OverCode.GDSettingsLabelObjects2.length = 0;
gdjs.Game_32OverCode.GDSettingsLabelObjects3.length = 0;
gdjs.Game_32OverCode.GDSoundVolumeObjects1.length = 0;
gdjs.Game_32OverCode.GDSoundVolumeObjects2.length = 0;
gdjs.Game_32OverCode.GDSoundVolumeObjects3.length = 0;
gdjs.Game_32OverCode.GDMusicVolumeObjects1.length = 0;
gdjs.Game_32OverCode.GDMusicVolumeObjects2.length = 0;
gdjs.Game_32OverCode.GDMusicVolumeObjects3.length = 0;
gdjs.Game_32OverCode.GDBackObjects1.length = 0;
gdjs.Game_32OverCode.GDBackObjects2.length = 0;
gdjs.Game_32OverCode.GDBackObjects3.length = 0;
gdjs.Game_32OverCode.GDQuitObjects1.length = 0;
gdjs.Game_32OverCode.GDQuitObjects2.length = 0;
gdjs.Game_32OverCode.GDQuitObjects3.length = 0;
gdjs.Game_32OverCode.GDMarkerObjects1.length = 0;
gdjs.Game_32OverCode.GDMarkerObjects2.length = 0;
gdjs.Game_32OverCode.GDMarkerObjects3.length = 0;
gdjs.Game_32OverCode.GDSettingsMarkerObjects1.length = 0;
gdjs.Game_32OverCode.GDSettingsMarkerObjects2.length = 0;
gdjs.Game_32OverCode.GDSettingsMarkerObjects3.length = 0;
gdjs.Game_32OverCode.GDSoundSliderObjects1.length = 0;
gdjs.Game_32OverCode.GDSoundSliderObjects2.length = 0;
gdjs.Game_32OverCode.GDSoundSliderObjects3.length = 0;
gdjs.Game_32OverCode.GDMusicSliderObjects1.length = 0;
gdjs.Game_32OverCode.GDMusicSliderObjects2.length = 0;
gdjs.Game_32OverCode.GDMusicSliderObjects3.length = 0;
gdjs.Game_32OverCode.GDScreenOrientationCheckerObjects1.length = 0;
gdjs.Game_32OverCode.GDScreenOrientationCheckerObjects2.length = 0;
gdjs.Game_32OverCode.GDScreenOrientationCheckerObjects3.length = 0;
gdjs.Game_32OverCode.GDlogoObjects1.length = 0;
gdjs.Game_32OverCode.GDlogoObjects2.length = 0;
gdjs.Game_32OverCode.GDlogoObjects3.length = 0;
gdjs.Game_32OverCode.GDNewSpriteObjects1.length = 0;
gdjs.Game_32OverCode.GDNewSpriteObjects2.length = 0;
gdjs.Game_32OverCode.GDNewSpriteObjects3.length = 0;
gdjs.Game_32OverCode.GDNewSprite2Objects1.length = 0;
gdjs.Game_32OverCode.GDNewSprite2Objects2.length = 0;
gdjs.Game_32OverCode.GDNewSprite2Objects3.length = 0;
gdjs.Game_32OverCode.GDNewSprite3Objects1.length = 0;
gdjs.Game_32OverCode.GDNewSprite3Objects2.length = 0;
gdjs.Game_32OverCode.GDNewSprite3Objects3.length = 0;
gdjs.Game_32OverCode.GDNewSprite4Objects1.length = 0;
gdjs.Game_32OverCode.GDNewSprite4Objects2.length = 0;
gdjs.Game_32OverCode.GDNewSprite4Objects3.length = 0;
gdjs.Game_32OverCode.GDNewBitmapTextObjects1.length = 0;
gdjs.Game_32OverCode.GDNewBitmapTextObjects2.length = 0;
gdjs.Game_32OverCode.GDNewBitmapTextObjects3.length = 0;
gdjs.Game_32OverCode.GDTransitionObjects1.length = 0;
gdjs.Game_32OverCode.GDTransitionObjects2.length = 0;
gdjs.Game_32OverCode.GDTransitionObjects3.length = 0;
gdjs.Game_32OverCode.GDDarkenObjects1.length = 0;
gdjs.Game_32OverCode.GDDarkenObjects2.length = 0;
gdjs.Game_32OverCode.GDDarkenObjects3.length = 0;


return;

}

gdjs['Game_32OverCode'] = gdjs.Game_32OverCode;

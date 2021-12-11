// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"QUpdate","status":true,"description":"<QUpdate>\r\nChecks QPlugins for updates","parameters":{}},
{"name":"========================","status":true,"description":"","parameters":{}},
{"name":"QPlus","status":true,"description":"<QPlus> (Should go above all Q Plugins)\r\nSome small changes to MV for easier plugin development.","parameters":{"Quick Test":"false","Default Enabled Switches":"[]","Ignore Mouse when inactive":"false"}},
{"name":"QInput","status":true,"description":"<QInput>\r\nAdds additional keys to Input class, and allows remapping keys.","parameters":{"Threshold":"0.5","Input Remap":"","Ok":"[\"#enter\", \"#space\", \"$A\"]","Escape / Cancel":"[\"#esc\", \"$B\"]","Menu":"[\"#esc\", \"$Y\", \"$start\"]","Shift":"[\"#shift\", \"$R3\"]","Control":"[\"#ctrl\", \"$L3\"]","Tab":"[\"#tab\", \"$X\"]","Pageup":"[]","Pagedown":"[]","Left":"[\"#a\", \"$LEFT\"]","Right":"[\"#d\", \"$RIGHT\"]","Up":"[\"#w\", \"$UP\"]","Down":"[\"#s\", \"$DOWN\"]","Debug":"[\"#f9\", \"$SELECT\"]","ControlKeys Remap":"","FPS":"f2","Streched":"f3","FullScreen":"f4","Restart":"f5","Console":"f8"}},
{"name":"========================","status":true,"description":"","parameters":{}},
{"name":"QMovement","status":true,"description":"<QMovement>\r\nMore control over character movement","parameters":{"Main Settings":"","Grid":"1","Tile Size":"48","Off Grid":"true","Optional Settings":"","Smart Move":"2","Mid Pass":"false","Move on click":"false","Diagonal":"true","Diagonal Speed":"0","Colliders":"","Player Collider":"{\"Type\":\"circle\",\"Width\":\"44\",\"Height\":\"92\",\"Offset X\":\"6\",\"Offset Y\":\"-46\"}","Event Collider":"{\"Type\":\"circle\",\"Width\":\"44\",\"Height\":\"44\",\"Offset X\":\"3\",\"Offset Y\":\"0\"}","Presets":"[\"{\\\"ID\\\":\\\"boss\\\",\\\"Type\\\":\\\"circle\\\",\\\"Width\\\":\\\"80\\\",\\\"Height\\\":\\\"160\\\",\\\"Offset X\\\":\\\"-15\\\",\\\"Offset Y\\\":\\\"-120\\\"}\",\"{\\\"ID\\\":\\\"chasm\\\",\\\"Type\\\":\\\"circle\\\",\\\"Width\\\":\\\"44\\\",\\\"Height\\\":\\\"44\\\",\\\"Offset X\\\":\\\"3\\\",\\\"Offset Y\\\":\\\"0\\\"}\"]","Debug Settings":"","Show Colliders":"false"}},
{"name":"========================","status":true,"description":"","parameters":{}},
{"name":"QABS","status":true,"description":"<QABS>\r\nAction Battle System for QMovement","parameters":{"Attack Settings":"","Quick Target":"false","Lock when Targeting":"true","Aim with Mouse":"true","Aim with Analog":"true","Move Resistance Rate Stat":"xparam(1)","Loot Settings":"","Loot Decay":"600","AoE Loot":"false","Loot Touch Trigger":"true","Gold Icon":"314","Level Animation":"52","Enemy AI":"","AI Default Sight Range":"240","AI Action Wait":"30","AI Uses QSight":"true","AI uses QPathfind":"true","Default Skills":"[\"{\\\"Keyboard Input\\\":\\\"mouse1\\\",\\\"Gamepad Input\\\":\\\"$R2\\\",\\\"Rebind\\\":\\\"true\\\",\\\"Skill Id\\\":\\\"1\\\"}\",\"{\\\"Keyboard Input\\\":\\\"#shift\\\",\\\"Gamepad Input\\\":\\\"$L2\\\",\\\"Rebind\\\":\\\"true\\\",\\\"Skill Id\\\":\\\"7\\\"}\",\"{\\\"Keyboard Input\\\":\\\"#shift\\\",\\\"Gamepad Input\\\":\\\"$R3\\\",\\\"Rebind\\\":\\\"true\\\",\\\"Skill Id\\\":\\\"0\\\"}\",\"{\\\"Keyboard Input\\\":\\\"#e\\\",\\\"Gamepad Input\\\":\\\"$L1\\\",\\\"Rebind\\\":\\\"true\\\",\\\"Skill Id\\\":\\\"9\\\"}\",\"{\\\"Keyboard Input\\\":\\\"mouse2\\\",\\\"Gamepad Input\\\":\\\"$L3\\\",\\\"Rebind\\\":\\\"true\\\",\\\"Skill Id\\\":\\\"11\\\"}\",\"{\\\"Keyboard Input\\\":\\\"#q\\\",\\\"Gamepad Input\\\":\\\"$R1\\\",\\\"Rebind\\\":\\\"true\\\",\\\"Skill Id\\\":\\\"8\\\"}\"]"}},
{"name":"QABS+Gauges","status":true,"description":"<QABSGauges>\r\nQABS Addon: Adds hp gauges to enemies","parameters":{"Gauge Configs":"","Gauge Width":"48","Gauge Height":"4","Boss Gauge Width":"480","Boss Gauge Height":"16","Gauge Default OX":"0","Gauge Default OY":"-48","Boss Gauge Default OX":"0","Boss Gauge Default OY":"24","Gauge Colors":"","Gauge Background Color":"#202040","Gauge Inbetween Color":"#ffffff","Gauge HP Color 1":"#e08040","Gauge HP Color 2":"#f0c040","Gauge Text":"","Text Font":"GameFont","Font Size":"14","Font Color":"#ffffff","Boss Text Font":"GameFont","Boss Font Size":"18","Boss Font Color":"#ffffff"}},
{"name":"QABS+Skillbar","status":true,"description":"<QABSSkillbar>\r\nQABS Addon: Adds a skillbar","parameters":{"Show Unassigned Keys":"false","Default visibility":"true"}},
{"name":"========================","status":true,"description":"","parameters":{}},
{"name":"QPathfind","status":true,"description":"<QPathfind>\r\nA* Pathfinding algorithm","parameters":{"Diagonals":"false","Any Angle":"true","Intervals":"200","Smart Wait":"60","Dash on Mouse":"false"}},
{"name":"QSight","status":true,"description":"<QSight>\r\nReal time line of sight","parameters":{"See Through Terrain":"[\"1\"]","Show":"true"}},
{"name":"QPopup","status":true,"description":"<QPopup>\r\nLets you create popups in the map or on screen","parameters":{"Presets":"[]"}},
{"name":"QSprite","status":true,"description":"<QSprite>\r\nLets you configure Spritesheets","parameters":{"File Name Identifier":"Q{config}-","Random Idle Interval":"","Use New Adjust":"true"}},
{"name":"========================","status":true,"description":"","parameters":{}},
{"name":"SRD_GameUpgrade","status":true,"description":"Enables more customization over the core mechanics of one's game while also providing additional functions for future plugins.","parameters":{"Game Window":"====================================","Game Reconstruction (1.5.X & below)":"true","Game Resolution":"{\"Width\":\"816\",\"Height\":\"624\"}","Screen Resolution":"{\"Width\":\"\",\"Height\":\"\"}","Minimum Resolution":"{\"Width\":\"408\",\"Height\":\"312\"}","Maximum Resolution":"{\"Width\":\"\",\"Height\":\"\"}","Window Title":"","Allow Resize":"true","Initial Fullscreen":"false","Show Frame":"true","Always on Top":"false","Core Defaults":"====================================","Audio Master Volume":"100","Video Master Volume":"100","Image Cache Limit":"30","Decrypter Ignore List":"[\"system/Window.png\"]","JsonEx Max Depth":"100","Retry Intervals":"[\"500\",\"1000\",\"3000\"]","HTML Settings":"====================================","Background Color":"#000000","Image Rendering":"auto","PIXI Settings":"====================================","Garbage Collection Mode":"Automatic","Round Pixels":"false","Scale Mode":"Nearest","Wrap Mode":"Clamp"}},
{"name":"SRD_SuperToolsEngine","status":true,"description":"The heart of all maker-style plugins; it adds a playtesting editor that can be opened with F12.","parameters":{"Connect Editor":"true","Auto Open Window":"false","Auto Move Window":"true","Menu Editor Exempt List":"[\"Window_BattleLog\",\"Window_MapName\"]"}},
{"name":"SRD_TimedAttackCore","status":false,"description":"Adds a system which forces the user to time certain inputs to preform actions during battle.","parameters":{"Enable Touch?":"true","Default Source":"None","== Window Options ==":"","X Alignment":"Center","Y Alignment":"Top","X Offset":"0","Y Offset":"0","Window Width":"Graphics.width","Window Height":"this.fittingHeight(3)","== Default Props. ==":"","Sound Effect":"Sword2","Cursor Image":"","Background Image":"DefaultBackground","Window Opacity":"255","Target Location":"Graphics.width / 2","Repeat Type":"None","Speed":"10","Main Color":"#FFFFFF","Shape":"Rectangle","Width":"24","Outline Color":"#000000","Outline Size":"3","Direction":"Right","Flash Rate":"8"}},
{"name":"SRD_HUDMaker","status":true,"description":"Allows developers to create their own map-based HUD through an in-game GUI window!","parameters":{"Active Updating":"false","Show During Events":"transparent","Map Global Condition":"","Battle Global Condition":"","Disable Delete Key":"true"}},
{"name":"AudioStreaming","status":true,"description":"Load audio faster and use only ogg files.","parameters":{"mode":"10","deleteM4a":"false"}},
{"name":"MNKR_GoldIcon","status":true,"description":"Replace currency unit display with icon","parameters":{"Gold Icon":"314"}},
{"name":"Community_Basic","status":true,"description":"Plugin used to set basic parameters.","parameters":{"cacheLimit":"10","screenWidth":"1152","screenHeight":"624","changeWindowWidthTo":"","changeWindowHeightTo":"","renderingMode":"auto","alwaysDash":"off"}},
{"name":"dingk_AnimationVariance","status":true,"description":"[v0.4.1] Allow randomized variations and custom movement in animations.","parameters":{"Animation Move Rate":"0","Global Animation Variance":"[]"}},
{"name":"OrangeMouseData","status":true,"description":"Will give you access to mouse's X, Y, TileX, TileY and Down Status for both left and right buttons <OrangeMouseData>","parameters":{"variableMouseX":"0","variableMouseY":"0","variableMouseTileX":"8","variableMouseTileY":"9","switchLeftButtonDown":"0","switchRightButtonDown":"0","switchMiddleButtonDown":"0"}},
{"name":"ButtonPressed","status":true,"description":"","parameters":{}},
{"name":"AnimatedIcons","status":false,"description":"","parameters":{}},
{"name":"SRD_OptionsUpgrade","status":true,"description":"Upgrades the Options Menu. Commands are placed into different categories and a description window has been added.","parameters":{"Categories":"General, Volume","Default Category":"General","Add Window Colors?":"false","== Reset Option ==":"","Add Reset Option?":"true","Reset Option Name":"Reset Options","Reset Option SE":"Save","== Category Window ==":"","Category Window Cols":"3","Category Window Rows":"1","Category Window X":"0","Category Window Y":"this._helpWindow.y + this._helpWindow.height","Category Window Width":"Graphics.boxWidth","Category Text Align":"center","== Options Window ==":"","Options Window X":"(Graphics.boxWidth - this.width) / 2","Options Window Y":"this._categoryWindow.y + this._categoryWindow.height","Options Window Width":"500","== Help Window ==":"","Help Window X":"0","Help Window Y":"0","== Window Color Text ==":"","Window Red Text":"Window Red","Window Green Text":"Window Green","Window Blue Text":"Window Blue","== Option 1 ==":"","Option 1 Symbol":"alwaysDash","Option 1 Category":"General","Option 1 Description":"If this is turned ON, then you will dash automatically; \\notherwise, you will have to hold SHIFT.","== Option 2 ==":"","Option 2 Symbol":"commandRemember","Option 2 Category":"General","Option 2 Description":"If this is turned ON, then the position of the \\ncommand cursor will be saved throughout battle.","== Option 3 ==":"","Option 3 Symbol":"bgmVolume","Option 3 Category":"Volume","Option 3 Description":"This changes the volume of the background music.","== Option 4 ==":"","Option 4 Symbol":"bgsVolume","Option 4 Category":"Volume","Option 4 Description":"This changes the volume of the background sound.","== Option 5 ==":"","Option 5 Symbol":"meVolume","Option 5 Category":"Volume","Option 5 Description":"This changes the volume of music effects.","== Option 6 ==":"","Option 6 Symbol":"seVolume","Option 6 Category":"Volume","Option 6 Description":"This changes the volume of sound effects.","== Option 7 ==":"","Option 7 Symbol":"windowRed","Option 7 Category":"Window","Option 7 Description":"This determines the amount of \\c[2]red\\c[0] tone within \\nthe window's base color.","== Option 8 ==":"","Option 8 Symbol":"windowGreen","Option 8 Category":"Window","Option 8 Description":"This determines the amount of \\c[3]green\\c[0] tone within \\nthe window's base color.","== Option 9 ==":"","Option 9 Symbol":"windowBlue","Option 9 Category":"Window","Option 9 Description":"This determines the amount of \\c[1]blue\\c[0] tone within \\nthe window's base color.","== Option 10 ==":"","Option 10 Symbol":"windowSkin","Option 10 Category":"Window","Option 10 Description":"This game's window style can be selected from a list \\nof available choices using this option.","== Option 11 ==":"","Option 11 Symbol":"fullscreen","Option 11 Category":"General","Option 11 Description":"If this is turned ON, the game will be switched \\nto full-screen mode.","== Option 12 ==":"","Option 12 Symbol":"","Option 12 Category":"","Option 12 Description":"","== Option 13 ==":"","Option 13 Symbol":"","Option 13 Category":"","Option 13 Description":"","== Option 14 ==":"","Option 14 Symbol":"","Option 14 Category":"","Option 14 Description":"","== Option 15 ==":"","Option 15 Symbol":"","Option 15 Category":"","Option 15 Description":"","== Option 16 ==":"","Option 16 Symbol":"","Option 16 Category":"","Option 16 Description":"","== Option 17 ==":"","Option 17 Symbol":"","Option 17 Category":"","Option 17 Description":"","== Option 18 ==":"","Option 18 Symbol":"","Option 18 Category":"","Option 18 Description":"","== Option 19 ==":"","Option 19 Symbol":"","Option 19 Category":"","Option 19 Description":"","== Option 20 ==":"","Option 20 Symbol":"","Option 20 Category":"","Option 20 Description":"","== Option 21 ==":"","Option 21 Symbol":"","Option 21 Category":"","Option 21 Description":"","== Option 22 ==":"","Option 22 Symbol":"","Option 22 Category":"","Option 22 Description":"","== Option 23 ==":"","Option 23 Symbol":"","Option 23 Category":"","Option 23 Description":"","== Option 24 ==":"","Option 24 Symbol":"","Option 24 Category":"","Option 24 Description":"","== Option 25 ==":"","Option 25 Symbol":"","Option 25 Category":"","Option 25 Description":"","== Option 26 ==":"","Option 26 Symbol":"","Option 26 Category":"","Option 26 Description":"","== Option 27 ==":"","Option 27 Symbol":"","Option 27 Category":"","Option 27 Description":"","== Option 28 ==":"","Option 28 Symbol":"","Option 28 Category":"","Option 28 Description":"","== Option 29 ==":"","Option 29 Symbol":"","Option 29 Category":"","Option 29 Description":"","== Option 30 ==":"","Option 30 Symbol":"","Option 30 Category":"","Option 30 Description":"","== Option 31 ==":"","Option 31 Symbol":"","Option 31 Category":"","Option 31 Description":"","== Option 32 ==":"","Option 32 Symbol":"","Option 32 Category":"","Option 32 Description":"","== Option 33 ==":"","Option 33 Symbol":"","Option 33 Category":"","Option 33 Description":"","== Option 34 ==":"","Option 34 Symbol":"","Option 34 Category":"","Option 34 Description":"","== Option 35 ==":"","Option 35 Symbol":"","Option 35 Category":"","Option 35 Description":"","== Option 36 ==":"","Option 36 Symbol":"","Option 36 Category":"","Option 36 Description":"","== Option 37 ==":"","Option 37 Symbol":"","Option 37 Category":"","Option 37 Description":"","== Option 38 ==":"","Option 38 Symbol":"","Option 38 Category":"","Option 38 Description":"","== Option 39 ==":"","Option 39 Symbol":"","Option 39 Category":"","Option 39 Description":"","== Option 40 ==":"","Option 40 Symbol":"","Option 40 Category":"","Option 40 Description":"","== Option 41 ==":"","Option 41 Symbol":"","Option 41 Category":"","Option 41 Description":"","== Option 42 ==":"","Option 42 Symbol":"","Option 42 Category":"","Option 42 Description":"","== Option 43 ==":"","Option 43 Symbol":"","Option 43 Category":"","Option 43 Description":"","== Option 44 ==":"","Option 44 Symbol":"","Option 44 Category":"","Option 44 Description":"","== Option 45 ==":"","Option 45 Symbol":"","Option 45 Category":"","Option 45 Description":"","== Option 46 ==":"","Option 46 Symbol":"","Option 46 Category":"","Option 46 Description":"","== Option 47 ==":"","Option 47 Symbol":"","Option 47 Category":"","Option 47 Description":"","== Option 48 ==":"","Option 48 Symbol":"","Option 48 Category":"","Option 48 Description":"","== Option 49 ==":"","Option 49 Symbol":"","Option 49 Category":"","Option 49 Description":"","== Option 50 ==":"","Option 50 Symbol":"","Option 50 Category":"","Option 50 Description":""}},
{"name":"SRD_OptionsCreator","status":true,"description":"Provides developers with the ability to add \"options\" to the Options Menu.","parameters":{"Options":"[\"{\\\"Name\\\":\\\"Difficulty\\\",\\\"Category\\\":\\\"General\\\",\\\"Description\\\":\\\"\\\\\\\"The difficuty of the game.\\\\\\\"\\\",\\\"Position\\\":\\\"Above\\\",\\\"Condition\\\":\\\"true\\\",\\\"Variable ID\\\":\\\"14\\\",\\\"Default Value\\\":\\\"1\\\",\\\"On Change Eval\\\":\\\"\\\\\\\"$gameVariables.setValue(16, $gameVariables.value(14));\\\\\\\\n\\\\\\\"\\\",\\\"Options\\\":\\\"[\\\\\\\"Easy\\\\\\\",\\\\\\\"Medium\\\\\\\",\\\\\\\"Hard\\\\\\\"]\\\"}\"]"}},
{"name":"GALV_RollCredits","status":true,"description":"(v.1.5) A plugin that calls a new scene to display scrolling information located in an external text file.","parameters":{"Folder":"data","Skippable":"true","Block Skipping":"false","Title Menu":"Credits","Title Credits Music":"credsshroter"}}
];
sap.ui.require([
	"sap/m/Text",
    "sap/ui/model/json/JSONModel"
], function (Text,JSONModel) {
	"use strict";

	// Attach an anonymous function to the SAPUI5 'init' event
	sap.ui.getCore().attachInit(function () {
		// Create a text UI element that displays a hardcoded text string
        var oModel = new JSONModel({
			greetingText: "Hi,, my name is Harry Hawk"
		});

		// Assign the model object to the SAPUI5 core
		sap.ui.getCore().setModel(oModel);
		new Text({text: "{/greetingText}"}).placeAt("content");
	});
});
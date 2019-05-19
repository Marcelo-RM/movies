sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/base/Log"
], function (Controller, Log) {
	"use strict";

	return Controller.extend("opensap.movies.controller.App", {
		onInit: function () {
			
		},

		onPress: function (oEvent) {
			sap.m.MessageToast.show("Searching...");
		}
	});
});
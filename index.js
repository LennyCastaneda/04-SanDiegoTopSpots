$(document).ready(function() {
	//Allows error feedback from any syntax error in my code so I can catch those error...Strict mode declared at beginning of script = global scope (all code in the script will execute in strict mode)...With strict mode, you can not use undeclared variables. If I didn't have this I wouldn't know if there was any misspelled variables that could linger in the code wihtout my awareness.
	"use strict";  
	$.getJSON("topspots.json",function(tableList) {
		//Get JSON array list
		// assign tableList to objectList
		var objectList = tableList; 
		//assign jQuery call <tbody> tags to  tableBody variable.
		var tableBody = $("<tbody><tbody>");

		//Iterate across each JSON oject
		$.each(objectList, function(i){
			//Create seperate row data for each object
			var object = objectList[i];
			var row = $("<tr></tr>");	//assign jQuery call <tr> tags to table row variable.

			//Create object for each prototype for name and description within the table.
			var protoObject = {};
			protoObject.name = object.name;
			protoObject.description = object.description;
	
			//Connect Latitude and Longitude to the clickable Google maps link
			var link = $('<a class="center-block button btn btn-success" target="blank">Open in Google Maps</a>');

			var googleMaps = "https://www.google.com/maps?q=";
			//Taking the JSON object list table and looking inside the "location" property grabbing the first index containing the latitude value then going in index 2 of that location array and grabbing that longtitude value, contcatinating and adding those value pairs to googleMaps vairable.
			googleMaps += object.location[0] + "," + object.location[1];
			//
			link.attr("href", googleMaps);

			// attach link to prototype
			protoObject.location = link;

			//Add location name and description data to rows.
			$.each(protoObject, function(content){
				var tableData = $("<td></td>");
				tableData.append(protoObject[content]);
				tableData.appendTo(row);
			});
			//Append entire itteration into table rows
			tableBody.append(row);
		}); //.each function interation.
		//Create the table body with generated content.
		$("thead").after(tableBody);
	}); //.getJSON function
}); //document function

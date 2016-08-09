$(document).ready(readJSON);

function readJSON(){
 $.get( "c_1.json", processJSON, 'text');
}

function processJSON(json){
	// Draw original object from root file
	var obj = JSROOT.parse(json);
	JSROOT.draw("pad-file", obj);

	// Try to add new legend based on the original
	// TODO: We need the following simple, e.g:
	//    var legend = JSROOT.CreateLegend(0.5, 0.6, 0.7, 0.9);
	//    legend.AddEntry(h1, "some label");
	//    obj.fPrimitives.Add(legend);
	var new_obj = $.extend(true, {}, obj);
	var current_legend = new_obj.fPrimitives.arr[2];
	var new_legend = $.extend(true, {}, current_legend);
	new_legend.fY1 = new_legend.fY1 - 0.2;
	new_legend.fY2 = new_legend.fY2 - 0.2;
	new_obj.fPrimitives.Add(new_legend);

	JSROOT.draw("pad-script", new_obj);
	console.log(new_obj);

}


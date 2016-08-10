# Prerequisites

* Mandatory: Linux or OSX with python
* Optional: ROOT for generating JSON files from ROOT objects. In this repository we already provide example file c_1.json which represent canvas "c_1" in the selectedresults.root file

# How to run

`./scripts/server` - will open browser at http://localhost:8000 (you can pass the port as a command parameter)


# What is missing?

User friendly interface for adding objects to the plot from javascript. JSROOT has limited support for manipulating objects from javascript and lack of [documentation](https://github.com/linev/jsroot/blob/master/docs/JSROOT.md#stand-alone-usage-of-jsroot)

Currently what you need to do to add new legend:

```javascript
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
```` 
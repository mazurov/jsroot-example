# Prerequisites

* Mandatory: Linux or OSX with python
* Optional: ROOT for generating JSON files from ROOT objects. In this repository we already provide example file c_1.json which represent canvas "c_1" in the selectedresults.root file

# How to run

`./scripts/server` - will open browser at http://localhost:8000 (you can pass the port as a command parameter)


# What is missing?

User friendly interface for adding objects to the plot from javascript. JSROOT has limited support for manipulating objects from javascript and lack of [documentation](https://github.com/linev/jsroot/blob/master/docs/JSROOT.md#stand-alone-usage-of-jsroot) 
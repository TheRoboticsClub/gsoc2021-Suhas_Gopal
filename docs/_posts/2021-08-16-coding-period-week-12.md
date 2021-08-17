---
layout: single
title:  "Coding Period - Week 12"
---

In this last week of GSOC I will continue the work on code documentation and also work on the Django backend for the whole application.
- [x] Work on code documentation
- [x] Django backend

## Code documentation
I completed all the code documentation for the frontend of VisualCircuit. I have included the pull requests in my previous [blog post]({{ site.baseurl }}{% post_url 2021-08-09-coding-period-week-11 %}).

## Django backend
The main idea of VisualCircuit (on web) is to be able to quickly build robotic applications using pre-built blocks and then download it, to run it on local machine. So for this we need to generate a python application (package) that includes all the necessary code to run the application built on VisualCircuit. 

We already have a backend which can parse the VisualCircuit file and execute it. The goal here would be to seperate out the synthesis and execution part. 
Building upon the django app done by [Shamirtk](https://github.com/Shahmirtk), I created a way to generate python files for the blocks and also the user written code blocks. These files will be present inside a folder named 'modules' and the other files necessary for execution will also be copied over. In addition to these, I also needed a data file that holds the information about parameter values and which block is connected to what and a map for loading code files based on the block ID. These are used at runtime. All these files are packaged into a zipfile and offered for download to the user.

On the frontend, I added a new option under the 'File' menu, 'Build and Download' to submit the VisualCircuit file to the backend and download the packaged zipfile, mentioned above.

### Issues created:
1. Submit VC file to Django backend [#103](https://github.com/JdeRobot/VisualCircuit/issues/103)
2. Refactor Python synthesis to integrate with django [#105](https://github.com/JdeRobot/VisualCircuit/issues/105)

### Pull requests
1. Submit VC model json from frontend [#104](https://github.com/JdeRobot/VisualCircuit/pull/104)
2. Generate Python application from VC file [#106](https://github.com/JdeRobot/VisualCircuit/pull/106)

## Progress Video

{% include video id="Z8jWt4htqK4" provider="youtube" %}
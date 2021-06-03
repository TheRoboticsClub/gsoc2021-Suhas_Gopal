---
layout: single
title:  "Community Bonding - Week 2"
---

This week I started with a basic React app and started implementing the features. Based on previous meeting, the goal for this week was to

- [x] Setup an application
- [x] Build a basic editor which can be saved and loaded back.


## Basic blocks

In order to achieve these, I started by implementing the Menu bar which has options for 'File', and 'Basic'

The 'File' menu has following options:
* New - Open a new project
* Open - Open an existing project from a local .vc file
* Save as - Provide an option to save the current board as a local project file.

The 'Basic' menu has following options:
* Constant - A block which has a particular name and a value.
            For now the name is hard coded, but this will be taken as input in coming weeks.
* Code - A block has has a text edit area to input code. It can take multiple inputs, parameters and provide multiple outputs. For now the inputs, parameters for this is also hard coded and will be improved later.

To offer flexibility in the future I have implemented a basic abstract node and port components, along with factory methods to generate them.
By changing styling or other aspects of these 2 components it will be possible to affect all other components.


## Opening and Saving

To handle Opening and Saving the project files, I made use of serialisation and deserialisation features available in React-Diagrams.

I implemented some methods to save the necessary data while serialising. The serialised data is made into a Data URI and saved as json file with '.vc' extension.
Similarly, to open a project, the JSON data from file is read and passed to deserialise methods of respective components.


## Progress Video

{% include video id="UFitKPPcTX8" provider="youtube" %}





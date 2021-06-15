---
layout: single
title:  "Community Bonding - Week 3"
---

After setting up the application in the previous week with some basic features, this week I concentrated on making a working prototype 'circuit' (set of connected blocks) that could communicate with the existing backend. After discussing with the mentors, the goal was to

- [x] Write a converter to convert new format of serialised data to old format.
- [x] Implement a working circuit that can communicate with current backend.

## Better 'Code' and 'Constant' blocks
Initially the 'Code' and 'Constant' blocks were implemented with hard coded names and ports. So this week I improved it by adding a dialog asking for inputs from the user. 
The dialog is implemented in a generic way so that application waits for data from any dialog and creates a block based on the data.

## Converter for serialisation
The .vc file from VisualCircuit v2.2 has a certain structure which is used by backend to identify how to run different pieces of the code. Since VisualCircuit v3 uses the serialising feature from react-diagrams to create the new .vc files, it is not compatible with the old format.

I wrote a conversion function that will go through all the blocks and connections and form a structure similar to old format. (It doesn't implement nested blocks yet). The serialised data file now stores both the result of direct serialisation as well as this converted data. The direct serialisation data is required because it has lot more information regarding the blocks and connections, such as position of each block, type of connection between each block etc.

## Implementing a basic circuit
To demonstrate the working of the current level of project and the compatibility of serialised file with the existing backend, I implemented a simple circuit involving 2 code blocks and 2 constant blocks. 
One block has code to capture video from webcam and the second block shows the video.

This circuit is saved to a file and this file is given as command line argument to the python backend. 

## Progress Video

{% include video id="tX_-HPzdGQg" provider="youtube" %}

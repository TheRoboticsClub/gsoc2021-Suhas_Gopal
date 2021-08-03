---
layout: single
title:  "Coding Period - Week 10"
---

After showing the videos to my mentors, they suggested to me that a teaser video should a shorter video which is more appealing to the users and the videos I created would be better as tutorials. Also I will be testing all the blocks implemented till now. 

- [x] Create a better teaser video
- [x] Test the collection of blocks and correct if necessary.


## Teaser Video

Based on the feedback from my mentors, I created a shorter video (about a minute long). It shows the designing of application at 4x normal speed and also shows how to execute the visualcircuit file from the terminal. 

As of now we have to execute visualcircuit file using a python script, but in the future it will be a python application that can be directly executed. I have uploaded the video to the official JdeRobot YouTube channel.

{% include video id="cWnsCskuc7M" provider="youtube" %}

## Testing of blocks

I tested all the blocks present in the new release except the Teleoperator block (I'm unsure as to how to use it). 3 of the blocks needed some modifications

ContourDetector  
: In Contour Detector block of VisualCircuit3 there is an index out of range exception, because the output type is 'image' but data being sent out is a 1d array.

FaceDetector  
: In Face detector block for VisualCircuit3 in the initial few seconds, maybe because of incomplete synchronisation between camera block and face detector block, when image is not yet read, the imshow statement fails.

Odometer  
: In Odometer block of VisualCircuit3, the output array dtype is '<U6' which causes an exception when used with other blocks.

### Issues created
1. Contour Detector block - Index out of range error [#90](https://github.com/JdeRobot/VisualCircuit/issues/90)
2. Face Detector block - imshow fails when image is None [#91](https://github.com/JdeRobot/VisualCircuit/issues/91)
3. Odometer block - TypeError: buffer is too small for requested array [#92](https://github.com/JdeRobot/VisualCircuit/issues/92)

### Pull requests
1. ContourDetector block error (fixes #90) [#93](https://github.com/JdeRobot/VisualCircuit/pull/93)
2. fix: Face Detector block (fixes #91) [#94](https://github.com/JdeRobot/VisualCircuit/pull/94)
3. fix: Odometer block (fixes #92) [#95](https://github.com/JdeRobot/VisualCircuit/pull/95)
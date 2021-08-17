---
layout: single
title:  "Coding Period - Week 7"
---

Since most of the major features of the tool are functional, this week I focused on:
- [x] Creating a demo application in the new VisualCircuit.
- [x] Clean the code.
- [x] Pushing all the new code to the original VisualCircuit repository under a different branch.


## Demo Application

For the demo application, I implemented Lane Detection, same as the one present for previous version, in the examples section of [VisualCircuit-resources repository](https://github.com/JdeRobot/VisualCircuit-resources/tree/main/examples/Lane%20Detection).


{% include video id="dLV_sQbxsyM" provider="youtube" %}

In this application, a video file is taken as input and EdgeDetector and ObjDetector blocks are used to identify lanes and cars in the video. These are properly identified and marked in a custom code block and shown using a Screen block.


## Pushing code to main repository

I also moved all the new code to an orphan branch, named 'VisualCircuit3' under the main repo [VisualCircuit](https://github.com/JdeRobot/VisualCircuit)

All future developments will be done against this branch in the main repo.

Pull request:
[https://github.com/JdeRobot/VisualCircuit/pull/84](https://github.com/JdeRobot/VisualCircuit/pull/84)


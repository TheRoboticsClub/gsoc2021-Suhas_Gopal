---
layout: single
title:  "Coding Period - Week 8 and 9"
---

The new release of the VisualCircuit has some of the blocks missing, specifically the ROS sensors and Control blocks, so I will be working on them. Also, this week I will be creating a teaser video for the new release.

- [x] Migrate ROS-Sensor and Control blocks
- [x] Create teaser video for the new release of VisualCircuit3

## Migration of ROS-Sensor and Control blocks

I migrated the following blocks

- ROS-Sensor
    - ROSCamera - Captures video from simulated ROS camera
    - Odometer - Get Robot's position from ROS topic
- Control
    - PID - Navigation control using PID
    - MotorDriver - Motor outputs for ROS robot control
    - Teleoperator - Robot motion using face operation

![New Blocks]({{ site.baseurl }}/assets/images/week-8/blocks.png){: .align-center}

### Issues created
ROS Sensors and Control blocks for VisualCircuit3 [#86](https://github.com/JdeRobot/VisualCircuit/issues/86)

### Pull requests
add ROS sensors and Control blocks [#89](https://github.com/JdeRobot/VisualCircuit/pull/89)

## Creation of Teaser Video

During my discussion with mentors, I was asked to create a minute long teaser video showing the application. But since there are many features I have created 2 videos of approximately 2 minutes each. One video shows how to use VisualCircuit for designing a robotic application and another video shows how to build a custom block from scratch and use it in a new application circuit.

{% include video id="uK725Y-Y9_c" provider="youtube" %}
{% include video id="haW_oEOjKh8" provider="youtube" %}








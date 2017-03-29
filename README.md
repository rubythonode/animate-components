# animate-components

> ***Elemental components for animation in React***

## Install
```
npm install animate-components --save
```

## Usage
```javascript
import React, { Component } from "react";

import { Swing } from "animate-components";

class App extends Component {
  render() {
    return (
      <div>
        <Swing>
          <h1>Hello</h1>
        </Swing>
      </div>
    );
  }
}
```

## Animations
Below is a list of all available animations.

### Bounce
* `Bounce`
* `BounceUp`
* `BounceRight`
* `BounceLeft`
* `BounceDown`

### Fade
* `FadeIn`
* `FadeInUp`
* `FadeInRight`
* `FadeInLeft`
* `FadeInDown`
* `FadeInUpBig`
* `FadeInLeftBig`
* `FadeInRightBig`

### Flip
* `Flip`
* `FlipX`
* `FlipY`

### LightSpeed
* `LightOut`
* `LightIn`

### Rotate
* `RotateIn`
* `RotateRight`
* `RotateLeft`
* `RotateUpRight`
* `RotateUpLeft`

### Slide
* `SlideUp`
* `SlideDown`
* `SlideLeft`
* `SlideRight`
* `SlideExpandUp`

### Special
* `Flash`
* `RollOut`
* `RollIn`
* `Rubber`
* `Swing`
* `Zoom`
* `Hinge`
* `Pulse`
* `ExpandUp`
* `Entrance`
* `Hatch`

## API

Props

**duration**
Type: `string`
Default: `1s`

**timingFunction**
Type: `string`
Default: `ease`

**delay**
Type: `string`
Default: `0s`

**direction**
Type: `string`
Default: `normal`

**iterations**
Type: `string`
Default: `1`

**backfaceVisibility**
Type: `string`
Default: `visible`

### Example
```javascript
<BounceUp duration="2s" timingFunction="ease-in" iterations="3">
  <h1>Hello World</h1>
</BounceUp>
```

## Contributing
Here is the [guide]().
<br/>

<<<<<<< HEAD
**More animations coming soon 😃** !!
=======
**More animations coming soon 😃** !!
>>>>>>> df3d326df4829966e9bf369976ead0a8f9c13346
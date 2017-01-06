<h2>Setting Backgrounds & Gradients</h2>

Single colour

```
div {
background-color: #b2b2b2;
}
```

Transparent background. 
IE doesnt support this properly.

Add BG image
```div{
background-image: url("alert.png");
}
```

BG Repeat
BG img will repeat forever unless specified
```
div{
background-image: url("alert.png");
background-repeat: no-repeat;
}
```
bg repeat accepts 4 diff values
repeat, repeat-x,repeat-y, no-repeat.

BG Position. 
- images positioned at top left corner.
bg position can control where bg image is relative to corner

```
div {
background-image: url("alert.png");
background-position: 20px 10px;
background-repeat: no-repeat;
}
```
bg position needs two values, horizontal and vertical offset. 

Shorthand Background Image Values
```
div {
  background: #b2b2b2 url("alert.png") 20px 10px no-repeat;
}
```
 
 <B> Designing Gradient Backgrounds</B>

Linear gradient bg.

```
div {
background: #466368;
background:  -webkit-linear-gradient(#64880, #293f50);
background:     -moz-linear-gradient(#64880, #293f50);
background:          linear-gradient(#64880, #293f50);
}
```
Changing direction of gradient bg

default: top to bottom transition. 
```div {
  background: #466368;
  background: linear-gradient(to right bottom, #648880, #293f50);
}```

radial gradient
`
div {
background #466368;
background:radial-gradient(#64880, #293f50);
}`

gradient color stops
multiple color transitions
`div{
background: #64880;
background: lineaer-gradient(to right #f6f123, #2482323 #258534);
}`

multiple backgrounds
`
div {
  background:  url("foreground.png") 0 0 no-repeat, url("middle-ground.png") 0 0 no-repeat, url("background.png") 0 0 no-repeat;
}
`
bg image value first will be first and then second is second

background-size property allows us to change the size of a background image, 

background-clip and background-origin properties allow us to control where a background image is cropped and where a background image is contained within the element (inside the border or inside the padding, for example).

 we can specify a width and a height value by using two space-separated values.
 
 `
 div {
  background: url("shay.jpg") 0 0 no-repeat;
  background-size: auto 75%;
  border: 2px dashed #9799a7;
  height: 240px;
  width: 200px;
}
`
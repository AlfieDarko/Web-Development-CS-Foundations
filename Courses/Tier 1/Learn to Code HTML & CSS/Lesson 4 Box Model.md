<h4>Box Model Concept</h4>
Every element on page is a rectangular box. 
+ May have width, height, padding, borders and margins.

<b>Height, Width</b>
<br>May be determined by display property, contents of element or by specified properties.<br><br>

<b>Padding outside the HXW </b><br>
Border outside the padding.
& margin is outside of all the previous.<br><br>

**Inline level elements wont accept width*height properties tied to them.<br>
Block or inline-block will accept.<br><br>

Some browsers may apply default margins and paddings to different elements. CSS Reset is useful for this.<br><br>

Margin allows to set amount of space that surrounds element. <br>
--vertical margins top and bottom are not accepted by inline level elements. vertical margins are accepted by block lvl and inline block elements.<br><br>


Padding works vertically on inline-level elements but may bleed into above and below lines below the element.<br><br>


```
div{
    margin: 10px 20px;
    TOP & BOTTOM, LEFT & RIGHT
}

div{
margin: 10[x 20px 0 15px;
}
TOP RIGHT BOTTOM LEFT
```

<b>Clockwise!</b>
```
div {
    border: 6px solid #949599
    //Border: width, style and color.
}
```<br>

CSS introduced box-sizing property, allowsus to  change exactly how box model works and how an elements size is calculated.<br><br>

accepts 3 primary values.
-- context-box, padding-box, border-box. Each has slightly different impact.<br><br>

content-box value is the default value.
size of an element begins with width and height properties, then any padding border or marin property values are added from there<br><br>

```
div {
    -webkit-box-sizing: content-box;
    -moz-box-sizing: content-box;
    box-sizing: content-box;
}
```

<b>common vendor prefixes</b>
Mozilla Firefox: -moz-
Microsoft Internet Explorer: -ms-
Webkit(Google Chrome and Appple Safari): -webkit-

<h5>Padding Box</h5>
<p>padding box alters box model by including any padding property values within width and height of element. If element has a width of 400px and padding of 20px, actual width will remain 400px. As padding value increases, content size within an element shrinks proportionately.</p>

Adding border or margin, values will be added to width or height properties to calculate full box size.
10px border + 20px padding with width 400px, full width = 420px width<br><br>

<h5>Border Box.</h5>
Lastly, border-box value alters box model so any order or padding values are included in widthxheight of element. <br><br>

400px width & 20px padding +10px border = 400px width. <br><br>

No matter what box sizing propoerty is used, margin values will need to be added to calculate full size of element.<br><br>

Generally, best box sizing is border-box. Makes it easy to do the maths. 400px width is 400px width regardless.<br><br>
Also easily mix length values.
Onl drawback is its not supported in every browser. Should be safe with most though.
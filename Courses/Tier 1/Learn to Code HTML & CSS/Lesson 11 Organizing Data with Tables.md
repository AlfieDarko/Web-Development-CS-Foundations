<h4>Organizing data with tables</h4>

`<table> </table>`
table element to initialize table on a page. 

once table has been defined, you can add a row

```
<table>
<tr>
</tr>
</table>
```

Table Data
Once table and row defined, `<td>` data cells are added.
multiple `<td>` one after another creates columns within a table row.

```
<table>
    <tr>
        <td>
            
        </td>
        
                <td>  
                
                </td>
                            <td>
                                
                            </td>
    </tr>
</table>
```

Table can be broken up into multiple groups

`<thead> <tbody> <tfoot>`

Combining Multiple Cells
Sometimes we need to do this without breaking row and column layout. 

use colspan and rowspan to do this.
Spans a single cell across mutliple columns and rows. 
accepts number to indiciate number of cells to span across.

Table Borders.

Border collapse.
when we apply borders to elements they start to stack up.
border-colapse determines a tables boreder model. 3 values for border-collapse
-colapse
-seperate
-inherit

```
table {
border-collapse: collapse;
}

th,
td {
border: 1px solid #cecfd5;
padding: 10px 15px;
}
```

Border spacing property
can determine how much space appears between borders. 

table with 1px border and 1px cell is 2pixel.

border spacing only works when border-collapse value is seperate.

Adding borders to rowws. 
-make sure tables border collapse is set to collapse. 
add a bottom border to each cell regardless.
- can remove bottom border from cells last two rows by using :last-child.

```
table {
border-collapse: collapse
}
th,
td {
border-bottom: 1px solid #cecfd5;
padding: 10px 15px
}

tfoot tr: last-child td {
border-bottom: 0;
}
```


Table striping

can use :nth child(even/odd) psuedo-class selector on the `<tr>`.

```
table {
  border-collapse: separate;
  border-spacing: 0;
}
th,
td {
  padding: 10px 15px;
}
thead {
  background: #395870;
  color: #fff;
}
tbody tr:nth-child(even) {
  background: #f0f0f2;
}
td {
  border-bottom: 1px solid #cecfd5;
  border-right: 1px solid #cecfd5;
}
td:first-child {
  border-left: 1px solid #cecfd5;
}
```


// sort 3 nos using  conditional statement

document.write("1st alert dialog output is sorted nos input:-(0,-1,4)<br><br>")
var x= 0;
var y=-1;
var z= 4;
if (x>y && x>z)
{
        if (y>z)
        {
            alert(x + ", " + y + ", " +z);
        }
        else
        {
            alert(x + ", " + z + ", " +y);
        }
}
else if (y>x && y >z)
{
        if (x>z)
        {
             alert(y + ", " + x + ", " +z);
        }
        else
        {
             alert(y + ", " + z + ", " +x);
        }
}
else if (z>x && z>y)
{
        if (x>y)
        {
            alert(z + ", " + x + ", " +y);
        }
        else
        {
            alert(z + ", " + y + ", " +x);
        }
}        

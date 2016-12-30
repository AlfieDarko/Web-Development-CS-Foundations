<B>Polyfilling</B>

There are two main techniques you can use to "bring" the new JavaScript stuff to the older browsers: polyfilling and transpilling.

taking definition of a newer feature and producing code from old spec that is its equivalent.

ES6 defines a utility called Number.isNaN(...) for accurate check for NaN.

Consider..
'''
if (!Number.isNaN)
{
    Number.isNaN = function isNaN(x)
    {
        return x !==x;        
    };
}
'''
The if statement guards against applying the polyfill definitoin in ES6 browsers where it will already exist. If its not already present, we define Number.isNaN(..).

The check we do here takes advantage of a quirk with NaN values which is that theyre the only value in the whole language that is not equal to iteself. So the NaN value is the only on that would make x !== x be true!

Not all features a fully polyfillable. Some might have small behaviour deviations. 
Be careful
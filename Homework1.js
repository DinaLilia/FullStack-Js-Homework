function sortArray(arr)
{
    var temp;
    var sorted = false;
    while (!sorted)
    {   sorted = true;
        for (let i=0; i<arr.length; i++)
        {
            if (arr[i-1]>arr[i])
            {
                sorted = false;
                temp = arr[i-1];
                arr[i-1]=arr[i];
                arr[i]=temp;
            }
        }
    }
    return arr;
}
var arr = [-3,8,7,6,5,-4,3,2,1]; 
sortArray(arr);
console.log(arr);

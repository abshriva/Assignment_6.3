function SumWhile()
{
    sum=0;
    var i =0;
    while (i<=1000)
    {
    sum=sum+i;
    i++;
    }
    console.log("Sum of Numbers using While Loop: "+sum);
}

function SumFor()
{
    sum=0;
    for(i=0;i<=1000;i++)
    {
        sum+=i;
    }
    i++;
    console.log("Sum of Numbers using For Loop: "+sum)
}

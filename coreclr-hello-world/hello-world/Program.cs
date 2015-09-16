using System;
using System.Text;

public class Program
{
    private static DateTime _Epoch = new DateTime(1970, 1, 1);
    public static void Main (string[] args)
    {   
        var now = DateTime.UtcNow;          
        var day = now.ToString("yyyMMdd");
        Console.WriteLine(string.Format("Today is: {0}", day));
        
        var timestamp = now.Subtract(_Epoch).TotalMilliseconds;
        Console.WriteLine(string.Format("{0}ms from epoch", timestamp));
 		Console.WriteLine("Any key to exit...");
        Console.ReadLine();
    }
}
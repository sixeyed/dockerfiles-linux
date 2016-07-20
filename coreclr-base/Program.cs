using ddtek.d2ccore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TestApp
{
    public class Program
    {
        public static void Main(string[] args)

        {
            try
            {
                //D2CCoreConnection con = null;
                //              D2CCoreCommand command = null;
                //            D2CCoreDataReader reader = null;
                DDCloudImplConnection con = new DDCloudImplConnection();
      //          con = new D2CCoreConnection();
                con.open();
                Console.WriteLine("Connection Successfull");
                //command = new D2CCoreCommand("select * from ", con);
                //reader = command.Executereader();

                //while (reader.Read())
                //{

                //}
            }
            
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
            
        }
    }
}

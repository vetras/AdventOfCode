using System;

namespace fouth
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");

            var lines = Reader.ReadFile(Constants.DATA_FILE);

            var shifts = new ShiftRecordBuilder(lines).Build();

            shifts.ForEach(x => Console.WriteLine("do, {0}",x));


            Console.WriteLine("Press any key to terminate...");
            Console.ReadKey();
        }
    }
}

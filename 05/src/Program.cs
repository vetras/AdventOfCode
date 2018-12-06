using System;
using System.Linq;

namespace fifth
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello Polymer, lets React!");
            Console.WriteLine("");

            var polymers = Reader.ReadFile(Constants.DATA_FILE);

            // there is only one gigantic polymer on this file
            var polymer = polymers.First();

            var reactor = new Reactor();

            var result = reactor.Burn(polymer);

            Console.WriteLine(result.Length);
            Console.WriteLine("");
            Console.WriteLine("Press any key to terminate...");
            Console.ReadKey();

        }
    }
}

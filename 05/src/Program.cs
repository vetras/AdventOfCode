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

            Console.WriteLine("SOLUTION 1:");
            Console.WriteLine($"  The result of processing the polymer has a length of {result.Length}.");
            Console.WriteLine("");

            var x = new BruteForceReactorOptimizer(reactor);
            var bestResult = x.Optimize(polymer);

            Console.WriteLine("SOLUTION 2:");
            Console.WriteLine($"  Removing all '{bestResult.LetterRemoved}' units was best, producing a polymer that has a length of {bestResult.EndPolymer.Length}.");
            Console.WriteLine("");

            Console.WriteLine("Press any key to terminate...");
            Console.ReadKey();

        }
    }
}

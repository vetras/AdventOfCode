using System;
using System.Collections.Generic;
using System.Linq;

namespace fifth
{
    public class BruteForceReactorOptimizer
    {
        private readonly Reactor reactor;

        public BruteForceReactorOptimizer(Reactor reactor)
        {
            this.reactor = reactor;
        }

        public OptimizationResult Optimize(string polymer)
        {
            // Algorithm:
            // Iterate over each letter of the alphabet,
            // remove it from the polymer and react the result
            // At the end, the shorted result wins

            var result = new List<OptimizationResult>();

            foreach (var letter in Constants.Alphabet)
            {
                var newPolymer = polymer.Replace(letter.ToString(), string.Empty, StringComparison.CurrentCultureIgnoreCase);

                var endPolymer = reactor.Burn(newPolymer);

                result.Add(new OptimizationResult(letter, newPolymer, endPolymer));
            }

            var min = result.Min(x => x.EndPolymer.Length);

            return result.First(x=>x.EndPolymer.Length == min);
        }
    }
}

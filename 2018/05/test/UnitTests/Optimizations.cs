using fifth;
using Xunit;

namespace UnitTests
{
    public class Optimizations
    {
        [Fact]
        public void CanOptimizeReaction()
        {
            var polymer = "dabAcCaCBAcCcaDA";

            var reactor = new Reactor();

            var opt = new BruteForceReactorOptimizer(reactor);

            var result = opt.Optimize(polymer);

            Assert.Equal("c", result.LetterRemoved.ToString());
            Assert.Equal("daDA", result.EndPolymer);
        }
    }
}

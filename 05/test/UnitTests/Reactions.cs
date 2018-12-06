using fifth;
using Xunit;

namespace UnitTests
{
    public class UnitReactions
    {
        public class Units_Of_Same_Type
        {
            [Fact]
            public void Same_Polarity_DontReact()
            {
                var unit = "aa";

                var reactor = new Reactor();

                var result = reactor.Burn(unit);

                Assert.Equal(unit, result);
            }

            [Fact]
            public void Oposite_Polarity_ShouldAnnihilate()
            {
                var unit = "aA";
                
                var reactor = new Reactor();

                var result = reactor.Burn(unit);

                Assert.Empty(result);
            }
        }

        public class Units_Of_Different_Types
        {
            [Fact]
            public void Same_Polarity_DontReact()
            {
                var unit = "ab";

                var reactor = new Reactor();

                var result = reactor.Burn(unit);

                Assert.Equal(unit, result);
            }

            [Fact]
            public void Oposite_Polarity_DontReact()
            {
                var unit = "aB";


                var reactor = new Reactor();

                var result = reactor.Burn(unit);

                Assert.Equal(unit, result);
            }
        }
    }
}

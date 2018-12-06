using System.Text;

namespace fifth
{
    public class Reactor
    {
        private StringBuilder reaction = new StringBuilder();

        public string Burn(string polymer)
        {
            return Burn(polymer.ToCharArray());
        }

        public string Burn(char[] polymer)
        {
            foreach (char c in polymer)
            {
                Feed(c);
            }

            return Terminate();
        }

        public void Feed(char letter)
        {
            var lastOrNull = GetLastLetter();

            if (!lastOrNull.HasValue)
            {
                reaction.Append(letter);
                return;
            }

            var last = lastOrNull.Value;

            if (typeOf(last) == typeOf(letter))
            {
                if (polarity(last) != polarity(letter))
                {
                    DeleteLastLetter();
                    return;
                }
            }

            reaction.Append(letter);
        }

        private void DeleteLastLetter()
        {
            if (reaction.Length > 0)
            {
                reaction.Length--;
            }
        }


        private char? GetLastLetter()
        {
            if (reaction.Length == 0)
            {
                return null;
            }

            return reaction[reaction.Length - 1];
        }

        public string Terminate()
        {
            return reaction.ToString();
        }

        private int polarity(char letter)
        {
            return letter;
        }

        private int typeOf(char letter)
        {
            return letter.ToString().ToLowerInvariant()[0];
        }

    }
}

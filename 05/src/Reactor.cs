using System.Text;

namespace fifth
{
    public class Reactor
    {
        private readonly StringBuilder reaction = new StringBuilder();

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

            if (TypeOf(last) == TypeOf(letter))
            {
                if (Polarity(last) != Polarity(letter))
                {
                    DeleteLastLetter();
                    return;
                }
            }

            reaction.Append(letter);
        }

        public string Terminate()
        {
            var result = reaction.ToString();

            reaction.Clear();

            return result;
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

        private int Polarity(char letter)
        {
            // this method only does implicit casting to int so that we can compare polarity.
            // althoug it can be inlined (removed) I think having the method improves code 
            // readability and intent of the operation
            return letter;
        }

        private int TypeOf(char letter)
        {
            return letter.ToString().ToLowerInvariant()[0];
        }

    }
}

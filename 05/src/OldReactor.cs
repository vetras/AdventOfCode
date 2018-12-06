using System.Text;

namespace fifth
{
    // I decided for a better approach, but kept this one too
    public class OldReactor
    {
        public string Polymer(string polymer)
        {
            return Polymer(polymer.ToCharArray());
        }

        public string Polymer(char[] polymer)
        {
            var result = new StringBuilder();
            bool reaction = false;

            for (int i = 0; i < polymer.Length - 1; i++)
            {
                reaction = false;

                var cL = polymer[i];
                var nL = polymer[i + 1];

                if (typeOf(cL) == typeOf(nL))
                {
                    if (polarity(cL) != polarity(nL))
                    {
                        reaction = true;
                        i++;
                    }
                }

                if (!reaction)
                {
                    result.Append(cL);
                }
            }

            if (!reaction)
            {
                result.Append(polymer[polymer.Length - 1]);
            }

            return result.ToString();
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

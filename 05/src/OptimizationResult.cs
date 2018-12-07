using System;

namespace fifth
{
    public class OptimizationResult
    {
        public char LetterRemoved { get; }
        public string EndPolymer { get; }
        public string StartPolymer { get; }

        public OptimizationResult(char letter, string sp, string ep)
        {
            LetterRemoved = letter;
            StartPolymer = sp ?? string.Empty;
            EndPolymer = ep ?? string.Empty;
        }
    }
}

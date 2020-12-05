using System;
using System.Collections.Generic;

namespace fouth
{
    public class SortByDate : IComparer<string>
    {
        private readonly LineParser lineParser = new LineParser();

        public int Compare(string x, string y)
        {
            return DateTime.Compare(lineParser.ExtractDate(x), lineParser.ExtractDate(y));
        }
    }
}

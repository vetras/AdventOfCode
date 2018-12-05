using System.Collections.Generic;
using System.Linq;
using fouth;
using Xunit;

namespace UnitTests
{
    public class ListSorting
    {
        [Fact]
        public void ByDate()
        {
            var list = new List<string>();

            list.Add("[1518-04-25 00:24]");
            list.Add("[1518-05-22 23:50]");
            list.Add("[1518-06-25 00:25]");
            list.Add("[1518-04-13 00:54]");
            list.Add("[1518-04-10 00:04]");
            list.Add("[1518-08-03 00:01]");
            list.Add("[1518-03-31 00:01]");
            list.Add("[1518-07-07 00:57]");
            list.Add("[1518-03-28 00:59]");
            list.Add("[1518-07-15 23:59]");
            list.Add("[1518-05-22 00:00]");
            list.Add("[1518-10-08 00:50]");
            list.Add("[1518-05-05 00:16]");
            list.Add("[1518-05-24 00:56]");
            list.Add("[1518-04-15 00:57]");
            list.Add("[1518-07-18 00:16]");
            list.Add("[1518-09-29 00:52]");
            list.Add("[1518-05-28 00:54]");

            list.Sort(new SortByDate());

            Assert.Equal("[1518-03-28 00:59]", list.First());
            Assert.Equal("[1518-10-08 00:50]", list.Last());
        }

        [Fact]
        public void ByDate_IgnoresExtraText()
        {
            var first = "[1518-01-25 00:24] extra text does not matter";
            var last = "[1518-07-22 22:50] fooo bar";

            var list = new List<string>();

            list.Add("[1518-05-15 23:59] fooo bar");
            list.Add(last);
            list.Add(first);
            list.Add("[1518-05-21 23:50] fooo bar");

            list.Sort(new SortByDate());

            Assert.Equal(first, list.First());
            Assert.Equal(last, list.Last());
        }
    }
}

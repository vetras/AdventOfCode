using System;
using System.Linq;

namespace fouth
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");

            var lines = Reader.ReadFile(Constants.DATA_FILE);

            lines.Sort(new SortByDate());

            var shifts = new ShiftRecordBuilder(lines).Build();

            var shiftsList = shifts.Values.ToList();

            shiftsList.ForEach(x => Console.WriteLine("Shift: {0}", x));

            var max = shiftsList.Max(y => y.TotalMinutesAsleep);
            var maxSleeper = shiftsList.First(x => x.TotalMinutesAsleep == max);
            int m = maxSleeper.FavoriteMinute();

            Console.WriteLine("");
            Console.WriteLine("The guard that slept the most:");
            Console.WriteLine("   Guard ID: {0}", maxSleeper.GuardId);
            Console.WriteLine("   Slept {0} minutes.", maxSleeper.TotalMinutesAsleep);
            Console.WriteLine("   Favorite Minute: {0}", m);
            Console.WriteLine("");
            Console.WriteLine("Solution: ID * Minute = {0}", m * maxSleeper.GuardId);
            Console.WriteLine("");

            Console.WriteLine("Press any key to terminate...");
            Console.ReadKey();
        }

    }
}

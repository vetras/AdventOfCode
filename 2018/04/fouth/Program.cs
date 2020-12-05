using System;
using System.Collections.Generic;
using System.Linq;

namespace fouth
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello Elves!");

            var lines = Reader.ReadFile(Constants.DATA_FILE);

            lines.Sort(new SortByDate());

            var shifts = new ShiftRecordBuilder(lines).Build();

            var shiftsList = shifts.Values.ToList();

            Console.WriteLine("");
            Console.WriteLine("All Shifts Recorded:");
            shiftsList.ForEach(x => Console.WriteLine("   Shift: {0}", x));

            var maxSleep = shiftsList.Max(y => y.TotalMinutesAsleep);
            var maxSleeper = shiftsList.First(x => x.TotalMinutesAsleep == maxSleep);
            var fav = maxSleeper.FavoriteMinute();

            Console.WriteLine("");
            Console.WriteLine("The guard that slept the most was:");
            Console.WriteLine("   Guard #{0} which slept {1} minutes!", maxSleeper.GuardId, maxSleeper.TotalMinutesAsleep);
            Console.WriteLine("   Favorite Minute: {0}", fav);
            Console.WriteLine("");
            Console.WriteLine("Solution Part 1: ID * Favorite Minute = {0}", fav * maxSleeper.GuardId);
            Console.WriteLine("");

            // Part 2
            // Of all guards, which guard is most frequently asleep on the same minute?
            //
            // To solve this, lets build an array of minutes, 1 to 59
            // On each minute we are saving two things: the guard that sleept the most, and how much.
            // So, For each minute we iterate all guards, then we
            // Get the time the guard splet on the current minute and we update the array to keep only the max value.
            // After this, we just need to find the maximum amount of time sleept on the array,
            // and we have the guard ID and the index of the array that tells us the minute.
            //
            //                      minute , <maxSleepTime, guard>
            var result = new Dictionary<int, Tuple<int, ShiftRecord>>();

            for (int i = 0; i < 60; i++)
            {
                foreach (var shift in shiftsList)
                {
                    var time = 0;
                    if (shift.minutesAsleep.ContainsKey(i))
                    {
                        time = shift.minutesAsleep[i];
                    }

                    // have we saved any value on this minute?
                    if (result.ContainsKey(i))
                    {
                        // is this value greater than what we have?
                        if (result[i].Item1 < time)
                        {
                            result[i] = new Tuple<int, ShiftRecord>(time, shift);
                        }
                    }
                    else
                    {
                        result[i] = new Tuple<int, ShiftRecord>(time, shift);
                    }
                }
            }

            var max = result.OrderByDescending(d => d.Value.Item1).First();

            Console.WriteLine("");
            Console.WriteLine("Guard #{0} spent minute {1} asleep more than any other guard on any other minute.", max.Value.Item2.GuardId, max.Key);
            Console.WriteLine("With a total of {0} minutes across all shifts.", max.Value.Item1);
            Console.WriteLine("");
            Console.WriteLine("Solution Part 2: ID * Minute = {0}", max.Value.Item2.GuardId * max.Key);
            Console.WriteLine("");
            Console.WriteLine("Press any key to terminate...");
            Console.ReadKey();
        }
    }
}

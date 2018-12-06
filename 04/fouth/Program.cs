using System;
using System.Collections.Generic;
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

            var maxSleep = shiftsList.Max(y => y.TotalMinutesAsleep);
            var maxSleeper = shiftsList.First(x => x.TotalMinutesAsleep == maxSleep);

            Console.WriteLine("");
            Console.WriteLine("The guard that slept the most:");
            Console.WriteLine("   Guard ID: {0}", maxSleeper.GuardId);
            Console.WriteLine("   Slept {0} minutes.", maxSleeper.TotalMinutesAsleep);
            Console.WriteLine("   Favorite Minute: {0}", maxSleeper.FavoriteMinute());
            Console.WriteLine("");
            Console.WriteLine("Solution: ID * Minute = {0}", maxSleeper.FavoriteMinute() * maxSleeper.GuardId);
            Console.WriteLine("");

            /* minute : maxSleepTime, guard */
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

                    // eu ja tenho para este minuto um valor??
                    if (result.ContainsKey(i))
                    {
                        // o valor que eu tenho é mais alto que este?
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

            Console.WriteLine("{0}", max.Key);
            Console.WriteLine("{0}", max.Value.Item1);
            Console.WriteLine("{0}", max.Value.Item2.GuardId);
            Console.WriteLine("{0}", max.Value.Item2.GuardId * max.Key);


            Console.WriteLine("Press any key to terminate...");
            Console.ReadKey();
        }

    }
}

//shiftsList.ForEach(shift =>
//{
//    shift.minutesAsleep.Keys.ToList().ForEach(minute =>
//    {
//    // eu ja tenho para este minuto um valoe??
//    // se sim, é max?
//    if (result.ContainsKey(minute))
//        {
//            if (result[0] < shift.minutesAsleep[minute])
//            {
//                result[0] = shift.minutesAsleep[minute];
//            }
//        }
//        else
//        {
//            result[0] = shift.minutesAsleep[minute];
//        }
//    });

//});


//var result = new Dictionary<int, ShiftRecord>(60);
//for (int i = 0; i< 60; i++)
//{
//var temp = shiftsList.Max(x => x.minutesAsleep[i]);
//var shift = shiftsList.First(x => x.TotalMinutesAsleep == temp);
//result[i] = shift;
//}

///* timeAsleep, guard */
//var result2 = new Dictionary<int, ShiftRecord>(60);
//for (int i = 0; i<result.Count; i++)
//{
//var time = result[i].minutesAsleep[i];
//result2[time] = result[i];
//}

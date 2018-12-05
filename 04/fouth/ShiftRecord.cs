using System;
using System.Collections.Generic;
using System.Linq;

namespace fouth
{
    public class ShiftRecord
    {
        public DateTime Date;

        public int GuardId;

        public int TotalMinutesAsleep = 0;

        private Dictionary<int, int> minutesAsleep = new Dictionary<int, int>(60);

        public ShiftRecord(int id, DateTime date)
        {
            GuardId = id;
            Date = date;
        }

        public override string ToString()
        {
            return $"{Date.Month:00}-{Date.Day:00} | Guard ID: {GuardId:0000} | Sleept {TotalMinutesAsleep} minutes";
        }

        public void AddMinutesAsleep(int start, int end)
        {
            TotalMinutesAsleep += end - start;

            for (int i = start; i < end; i++)
            {
                minutesAsleep[i] = 1 + (minutesAsleep.ContainsKey(i) ? minutesAsleep[i] : -1);
            }
        }

        public int FavoriteMinute()
        {
            var max = minutesAsleep.OrderByDescending(d => d.Value).First();

            return max.Key;
        }
    }


}

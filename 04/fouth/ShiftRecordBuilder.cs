using System;
using System.Collections.Generic;
using System.Linq;

namespace fouth
{
    public class ShiftRecordBuilder
    {
        private List<string> lines;

        public ShiftRecordBuilder(List<string> lines)
        {
            this.lines = lines;
        }

        public List<ShiftRecord> Build()
        {
            var result = new List<ShiftRecord>(lines.Capacity);

            // example line, one of 3:
            // [1518-05-22 00:00] Guard #10 begins shift
            // [1518-05-22 00:25] falls asleep
            // [1518-05-22 00:54] wakes up

            // discard lines until the first guard ID appears
            foreach (var line in lines)
            {
                if (line.Contains("begins shift"))
                {
                    var shift = new ShiftRecord();
                    shift.GuardId = Convert.ToInt32(line.Split(" ")[3].Replace("#",""));
                    shift.Date = new SimpleDate(0,0);

                    result.Add(shift);
                }

            }
            return result;
        }
    }


}

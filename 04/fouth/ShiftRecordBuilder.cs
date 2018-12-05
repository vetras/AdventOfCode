using System;
using System.Collections.Generic;
using System.Linq;

namespace fouth
{
    public class ShiftRecordBuilder
    {
        private List<string> lines;
        private readonly LineParser lineParser = new LineParser();


        public ShiftRecordBuilder(List<string> lines)
        {
            this.lines = lines;
        }

        public Dictionary<int, ShiftRecord> Build()
        {
            var dic = new Dictionary<int, ShiftRecord>();

            ShiftRecord currentShift = null;
            bool isWake = true;
            int lastMinute = 0;

            // example line, one of 3 possible options:
            // [1518-05-22 00:00] Guard #10 begins shift
            // [1518-05-22 00:25] falls asleep
            // [1518-05-22 00:54] wakes up
            foreach (var line in lines)
            {
                if (line.Contains("begins shift"))
                {
                    var id = lineParser.ExtractGuardId(line);

                    if (!dic.ContainsKey(id))
                    {
                        var date = lineParser.ExtractDate(line);
                        dic[id] = new ShiftRecord(id, date);
                    }

                    currentShift = dic[id];
                    isWake = true;
                    lastMinute = currentShift.Date.Minute;
                }
                else if (line.Contains("wakes up"))
                {
                    if (!isWake)
                    {
                        var m = lineParser.ExtractDate(line).Minute;
                        currentShift.AddMinutesAsleep(lastMinute, m);
                    }
                }
                else if (line.Contains("falls asleep"))
                {
                    lastMinute = lineParser.ExtractDate(line).Minute;
                    isWake = false;
                }
            }

            return dic;
        }
    }


}

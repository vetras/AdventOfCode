using System;

namespace fouth
{
    public class LineParser
    {
        public DateTime ExtractDate(string x)
        {
            // all lines follow the format: year-month-day hh:mm
            // [1518-05-22 00:00] ...

            x = x.Replace("[", "");
            x = x.Split("]")[0];
            var dateData = x.Split("-");
            var dayAndTime = dateData[2].Split(" ");
            var time = dayAndTime[1].Split(":");
            var year = Convert.ToInt32(dateData[0]);
            var month = Convert.ToInt32(dateData[1]);
            var day = Convert.ToInt32(dayAndTime[0]);
            var hour = Convert.ToInt32(time[0]);
            var minute = Convert.ToInt32(time[1]);

            return new DateTime(year, month, day, hour, minute, 00);
        }

        public int ExtractGuardId(string line)
        {
            // example: [1518-05-22 00:00] Guard #10 begins shift
            return Convert.ToInt32(line.Split(" ")[3].Replace("#", ""));
        }
    }
}

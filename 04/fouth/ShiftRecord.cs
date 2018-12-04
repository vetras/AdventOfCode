using System.Collections.Generic;
using System.Linq;

namespace fouth
{
    public class ShiftRecord
    {
        public SimpleDate Date;

        public int GuardId;

        // index 0..59 represent each minute of the hour
        // value 1 is asleep and 0 is awake
        public int[] MinutesAsleep = new int[60];

        public override string ToString()
        {
            return $"{Date.Month:00}-{Date.Day:00} | Guard ID: {GuardId:0000} | Sleept {MinutesAsleep.Sum()} minutes";
        }
    }


}

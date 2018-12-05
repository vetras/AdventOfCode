using System.Collections.Generic;
using fouth;
using Xunit;

namespace UnitTests
{
    public class CountSleep
    {
        [Fact]
        public void CanSumSequentialSleep()
        {
            var lines = new List<string>();

            lines.Add("[1518-11-01 00:00] Guard #10 begins shift");
            lines.Add("[1518-11-01 00:05] falls asleep");
            lines.Add("[1518-11-01 00:25] wakes up");
            var result = new ShiftRecordBuilder(lines).Build();
            Assert.Equal(20, result[10].TotalMinutesAsleep);

            lines.Add("[1518-11-01 00:30] falls asleep");
            lines.Add("[1518-11-01 00:55] wakes up");
            result = new ShiftRecordBuilder(lines).Build();
            Assert.Equal(45, result[10].TotalMinutesAsleep);

            lines.Add("[1518-11-03 00:24] falls asleep");
            lines.Add("[1518-11-03 00:29] wakes up");
            result = new ShiftRecordBuilder(lines).Build();
            Assert.Equal(50, result[10].TotalMinutesAsleep);
        }

        [Fact]
        public void CanSumSleep_WithMultipleGuards()
        {
            var lines = new List<string>();
            
            lines.Add("[1518-11-01 00:00] Guard #10 begins shift");
            lines.Add("[1518-11-01 00:05] falls asleep");
            lines.Add("[1518-11-01 00:25] wakes up");
            lines.Add("[1518-11-01 00:30] falls asleep");
            lines.Add("[1518-11-01 00:55] wakes up");
            lines.Add("[1518-11-01 23:58] Guard #99 begins shift");
            lines.Add("[1518-11-02 00:40] falls asleep");
            lines.Add("[1518-11-02 00:50] wakes up");
            lines.Add("[1518-11-03 00:05] Guard #10 begins shift");
            lines.Add("[1518-11-03 00:24] falls asleep");
            lines.Add("[1518-11-03 00:29] wakes up");
            lines.Add("[1518-11-04 00:02] Guard #99 begins shift");
            lines.Add("[1518-11-04 00:36] falls asleep");
            lines.Add("[1518-11-04 00:46] wakes up");
            lines.Add("[1518-11-05 00:03] Guard #99 begins shift");
            lines.Add("[1518-11-05 00:45] falls asleep");
            lines.Add("[1518-11-05 00:55] wakes up");

            var result = new ShiftRecordBuilder(lines).Build();
            Assert.Equal(50, result[10].TotalMinutesAsleep);
            Assert.Equal(30, result[99].TotalMinutesAsleep);
        }

    }
}

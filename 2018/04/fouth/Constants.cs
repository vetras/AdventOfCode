using System;
using System.IO;
using System.Reflection;

namespace fouth
{
    public class Constants
    {
        public static string DATA_FILE { get; } = Directory.GetCurrentDirectory() + @"\..\..\..\..\data.txt";
    }
}

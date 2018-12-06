using System.Collections.Generic;
using System.IO;

namespace fifth
{
    public static class Reader
    {
        public static List<string> ReadFile(string filePath)
        {
            var result = new List<string>();

            var file = new StreamReader(filePath);

            string line = file.ReadLine();

            while (line != null)
            {
                result.Add(line);

                line = file.ReadLine();
            }

            file.Close();

            return result;
        }
    }
}

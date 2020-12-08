#!/bin/zsh -e

function test {
  echo " "
  echo " - - - - - - - - - - - - - - - - - "
  echo "   Solution ""$1"" Unit-Tests:"
  echo " "
  cd ./"$1"
  deno test --allow-read || :
  cd ..
}

function run {
  echo " "
  echo " - - - - - - - - - - - - - - - - - "
  echo "   Solution ""$1"":"
  echo " "
  cd ./"$1"
  echo "PART 1"
  deno run --allow-read part1.ts
  echo " "
  echo "PART 2"
  deno run --allow-read part2.ts
  cd ..
}

echo " "
echo " ============================================================== "
echo "Running all unit tests for all solutions for Advent-Of-Code-2020"
echo " "
echo " - - - - - - - - - - - - - - - - - "
echo "   Solution 01 has no tests"
echo " "
echo " - - - - - - - - - - - - - - - - - "
echo "    Solution 02 does not use deno test"
echo " "
cd ./02
deno run policy/tests.ts
cd ..

test 03
test 04
test 05

echo " "
echo " ============================================================== "
echo "Running all solutions for Advent-Of-Code-2020"
run 01
run 02
run 03
run 04
run 05

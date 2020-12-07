import {test, assertEquals} from "./unit-tests.ts";
import Passport from "./passport.ts";

test("First passport should be valid", () => {
  const rawPassport = "ecl:gry pid:860033327 eyr:2020 hcl:#fffffd byr:1937 iyr:2017 cid:147 hgt:183cm";
  const sut = new Passport(rawPassport);
  assertEquals(sut.isValid(), true);
  assertEquals(sut.toString(), "[Passport VALID] byr: 1937 iyr: 2017 eyr: 2020 hgt: 183cm hcl: #fffffd ecl: gry pid: 860033327 cid: 147");
});

test("Second passport should not be valid: Field 'hgt' is missing", () => {
  const rawPassport = "iyr:2013 ecl:amb cid:350 eyr:2023 pid:028048884 hcl:#cfa07d byr:1929";
  const sut = new Passport(rawPassport);
  assertEquals(sut.isValid(), false);
  assertEquals(sut.toString(), "[Passport INVALID] byr: 1929 iyr: 2013 eyr: 2023 hgt:  hcl: #cfa07d ecl: amb pid: 028048884 cid: 350");
});

test("Passport should be valid: Field 'cid' should be optional", () => {
  const rawPassport = "hcl:#ae17e1 iyr:2013 eyr:2024 ecl:brn pid:760753108 byr:1931 hgt:179cm";
  const sut = new Passport(rawPassport);
  assertEquals(sut.isValid(), true);
  assertEquals(sut.toString(), "[Passport VALID] byr: 1931 iyr: 2013 eyr: 2024 hgt: 179cm hcl: #ae17e1 ecl: brn pid: 760753108 cid: ");
});

test("Passport should not be valid: Field 'cid' and 'byr' are missing", () => {
  const rawPassport = "hcl:#cfa07d eyr:2025 pid:166559648 iyr:2011 ecl:brn hgt:59in";
  const sut = new Passport(rawPassport);
  assertEquals(sut.isValid(), false);
  assertEquals(sut.toString(), "[Passport INVALID] byr:  iyr: 2011 eyr: 2025 hgt: 59in hcl: #cfa07d ecl: brn pid: 166559648 cid: ");
});


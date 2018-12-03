package com.vetras;

public class Main {

    public static void main(String[] args) {
        System.out.println("hi Elves !!");

        var claims = Data.ReadClaims();

        var m = new Matrix();

        m.populate(claims);

        var nbr = m.EqualOrGreaterThan(2);

        var id = m.ClaimThatNeverOverlaps(claims);

        System.out.println("Part 1 Solution: '" + nbr + "' (Number of square inches that overlap)");
        System.out.println("Part 2 Solution: '" + id + "' (ID of the claim that never overlaps)");
    }
}


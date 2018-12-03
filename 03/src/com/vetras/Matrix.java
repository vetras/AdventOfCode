package com.vetras;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.stream.Stream;

import static com.vetras.Constants.SQUARE_CLOTH_SIZE;

class Matrix {
    private int[][] _matrix = new int[SQUARE_CLOTH_SIZE][SQUARE_CLOTH_SIZE];

    void populate(ArrayList<Claim> claims) {
        claims.forEach(claim -> {
            var r_str = claim.getTop__offset();
            var r_end = r_str + claim.getTall();
            var c_str = claim.getLeft_offset();
            var c_end = c_str + claim.getWide();

            var x = new int[]{r_str, r_end, c_str, c_end};
            if (Arrays.stream(x).max().getAsInt() > SQUARE_CLOTH_SIZE) {
                System.out.println("Matrix out of bounds on claim: " + claim);
            }

            for (int r = r_str; r < r_end; r++) {
                for (int c = c_str; c < c_end; c++) {
                    _matrix[r][c]++;
                }
            }
        });
    }

    int EqualOrGreaterThan(int reference) {
        var count = 0;
        for (int r = 0; r < SQUARE_CLOTH_SIZE; r++) {
            for (int c = 0; c < SQUARE_CLOTH_SIZE; c++) {
                if (_matrix[r][c] >= reference) {

                    count++;
                }
            }
        }
        return count;
    }

    Claim ClaimThatNeverOverlaps(ArrayList<Claim> claims) {
        final Claim[] result = new Claim[1];

        claims.forEach(claim -> {
            var r_str = claim.getTop__offset();
            var r_end = r_str + claim.getTall();
            var c_str = claim.getLeft_offset();
            var c_end = c_str + claim.getWide();

            for (int r = r_str; r < r_end; r++) {
                for (int c = c_str; c < c_end; c++) {
                    if(_matrix[r][c] != 1) return;
                }
            }
            result[0] = claim;
            return;
        });

        return result[0];
    }
}

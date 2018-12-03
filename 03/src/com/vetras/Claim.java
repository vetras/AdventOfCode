package com.vetras;

public class Claim {
    private final int tall;

    public int getTall() {
        return tall;
    }

    public int getLeft_offset() {
        return left_offset;
    }

    public int getTop__offset() {
        return top__offset;
    }

    public int getWide() {
        return wide;
    }

    private final int left_offset;
    private final int top__offset;
    private final int wide;
    private final String _id;

    @Override
    public String toString() {
        // for logging, if need be
        return _id;
    }

    public Claim(String id) {

        // sample id string:
        // #1 @ 258,327: 19x22
        _id = id;
        var parts = id.split(" ");
        left_offset = Integer.parseInt(parts[2].split(",")[0]);
        top__offset = Integer.parseInt(parts[2].split(",")[1].replace(":", ""));
        wide = Integer.parseInt(parts[3].split("x")[0]);
        tall = Integer.parseInt(parts[3].split("x")[1]);
    }
}


package com.vetras;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;

class Data {

    static ArrayList<Claim> ReadClaims(){

        var result = new ArrayList<Claim>(1310);

        try {
            Files.lines(Paths.get(Constants.DATA_FILE))
                .forEach(x -> result.add(new Claim(x)));
        } catch (IOException e) {
            System.out.println("Cant open file > " + Constants.DATA_FILE);
            System.out.println(e);
        }

        return result;
    }

}

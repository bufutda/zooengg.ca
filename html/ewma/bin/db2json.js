"use strict";
var sqlite3 = require("sqlite3");
var Event = require("events").EventEmitter;
var db = new sqlite3.Database(__dirname + "/db.db", sqlite3.OPEN_READONLY);
db.on("open", function (err) {
    if (err) {
        console.error(err);
        process.exit(1);
        return;
    }
    db.all("SELECT * FROM movies;", function (err, movies) {
        if (err) {
            console.error(err);
            process.exit(1);
        }
        var ev = new Event();
        ev.on("next", function (i) {
            if (i === movies.length) {
                movies.sort(function (a, b) {
                    if (a.year > b.year) {
                        return 1;
                    } else if (a.year === b.year) {
                        return 0;
                    }
                    return -1;
                });
                console.log(JSON.stringify(movies, null, 4));
                db.close();
                return;
            }
            db.all("SELECT name,note FROM award where movie_id = ?;", movies[i].id, function (err, rows) {
                if (err) {
                    console.error(err);
                    db.close();
                    process.exit(1);
                    return;
                }
                movies[i].awards = [];
                for (var j = 0; j < rows.length; j++) {
                    movies[i].awards.push({award: rows[j].name, note: rows[j].note});
                }
                db.get("SELECT display FROM department where abbr = ?;", movies[i].dept, function (err, row) {
                    if (err) {
                        console.error(err);
                        db.close();
                        process.exit(1);
                        return;
                    }
                    if (row) {
                        movies[i].display_dept = row.display;
                    } else {
                        movies[i].display_dept = null;
                        // console.error("No display conversion for " + movies[i].dept + " (" + movies[i].id + ")");
                    }
                    ev.emit("next", ++i);
                });
            });
        });
        ev.emit("next", 0);
    });
});

"use strict";
var sqlite3 = require("sqlite3");
var Event = require("events").EventEmitter;
var data = [
    "2009 - Mech - Batmanu: The Mech Knight (Part 1 of 4) - OUuicbigCNg.webm",
    "2009 - Mech - Batmanu: The Mech Knight (Part 2 of 4) - td7UfKVrFq4.webm",
    "2009 - Mech - Batmanu: The Mech Knight (Part 3 of 4) - B11yvnhz8RQ.webm",
    "2009 - Mech - Batmanu: The Mech Knight (Part 4 of 4) - lC_kQE5-E_w.webm",
    "2017 - Chem - The Chemzard of Oz - QVDbaEq-VeI.mp4",
    "2017 - Zoo - Empire State of Zoo - o8Huxi80_LI.mp4",
    "2014 - Mech - Mechsmas Miracle - jB9H2Vo1c6k.mp4",
    "2013 - Geo - GeoldenEye - I17EdiA8kVs.mp4",
    "2012 - Geo - Geo Presents the 90s (Audio Commentary) - AfsHBHT0Mno.mp4",
    "2012 - Geo - Geo Presents the 90s - IKfQgJ8CAvI.mp4",
    "2010 - Geo - Geostice League - YjF2Uih4Xc8.webm",
    "2014 - Geo - Geotroopers - Kqggx8jC30g.mp4",
    "2014 - Chem - Goldchember - sl9fvhXwFqk.mp4",
    "2016 - Zoo - Lord of the Iron Rings, the Fellowship of Zoo - sUuysEWQ8AM.mp4",
    "2009 - Geo - The Geodfather - CQYnXpLUun8.mp4",
    "2011 - Geo - The Geoffice - zkaCfesHFkE.webm",
    "2015 - Zoo - The Zooperheroes - FurX5HFrUmc.mp4",
    "2014 - Alum - ? - BY0ZETx3Kbg.mp4",
    "2013 - Mech - Mechtendo - amPyT5W6y9M.webm",
    "1991 - ? - Fifteen Minutes - RPpzzmyw45c.webm",
    "1991 - Mech - Mechsico - ljkdi0fvFuo.webm",
    "1991 - Zoo - Zoo Music - 1U10cOPGQNA.webm",
    "1995 - Geo - Star Trek - K4R2E31COhk.webm",
    "1996 - Mech - Mech Files - IxipPYdKixI.webm",
    "1996 - Zoo - X Files - FOYy5Cc1-xg.webm",
    "1997 - Zoo - In Search of the Zooids - hRqlvYdkM9o.webm",
    "1999 - Chem - ? - iUQRrTji6kU.webm",
    "1999 - Zoo - Zooro - CEk9bDVYEE0.webm",
    "2000 - Chem - ? - Gl40jdYPXGw.webm",
    "2000 - Mech - Horror Movie - rxO0V2REFRw.webm",
    "2001 - Zoo - Zookes of Hazzard - fzi-YTHw0lA.webm",
    "2002 - Civil - ? - KGQfCxp7mk4.webm",
    "2002 - Geo - Geolympics - wJ_avugYrBI.webm",
    "2002 - Mech - Mechsmen - h_MOj43rYhs.webm",
    "2002 - Zoo - 00Zoo - dLzdo7_tkS8.webm",
    "2003 - Chem - The Men's Television Network - a8KUjvNdfX0.webm",
    "2003 - Civil - The Civpranos - kEmVSFmDZds.webm",
    "2003 - Mech - Austenite Powers - imaaNtk2ito.webm",
    "2004 - Civil - The Republic Strikes Back - s8DE8lVq1no.webm",
    "2004 - Geo - MarGeo Bros - Itv5n7G_szo.webm",
    "2004 - Mech - Made in Mechsico - p_0XPhqFDPY.webm",
    "2004 - Zoo - ZooBar - 3mXrzqcFoR0.mp4",
    "2005 - Zoo - Zooper Heroes - _LdXD1i7qt8.webm",
    "2006 - Chem - TScheM - 0on_TeHOHXY.webm",
    "2006 - Civil - Ceuslander - UR1KAPe_Ywk.webm",
    "2006 - Mech - Mechopoly - gOkxiVYt3us.webm",
    "2007 - Chem - Cessame Street - rbTKKzJnk3I.webm",
    "2007 - Civil - The Good, The Bad, & The Civil - WMJ7Mzn1hoU.webm",
    "2007 - Mech - Mechscalibur - ?",
    "2008 - Geo - Wayne's Geoid - ZyYG1WCO3P0.webm",
    "2017 - Civil - Puss In Steel Toed Boots - ?",
    "2017 - Mech - Texas Chainsaw Messacre - ?",
    "2017 - Geo - Average Geos - ?",
    "2017 - Special - Saving Private Special - ?",
    "2016 - Chem - Americhem Pie - ?",
    "2016 - Civil - Alice in Civil Land - ?",
    "2016 - Mech - Shmech - ?",
    "2016 - Geo - 2001 a Space Geodessey - ?",
    "2016 - Special - Special School Bus - ?",
    "2015 - Chem - Chemi-Pro - ?",
    "2015 - Civil - 21 F Block - ?",
    "2015 - Mech - SpongeBob MechPants - ?",
    "2015 - Geo - Geoscars - ?",
    "2015 - Special - Survivor: Special Edition - ?",
    "2014 - Special - Dora the Specialized Explorer - 00VdTaj6Wes.mp4",
    "2014 - Zoo - Back to the Zooture - ?",
    "2014 - Civil - Despicivil Me - ?",
    "2013 - Zoo - Scooby Zoo - ?",
    "2013 - Civil - Civil Sucks - ?",
    "2012 - Zoo - Pokemon: ZOO Edition - ?",
    "2011 - Zoo - CSI ZOO York - ?",
    "2010 - Zoo - Spark Trek - ?",
    "2010 - Chem - Combustamove - ?",
    "2010 - Civil - Civil Night Live - ?",
    "2010 - Mech - Mechiana Jones - ?",
    "2010 - Special - Left for Biomed - ?",
    "2009 - Zoo - Matrix Zooloaded - ?",
    "2007 - Zoo - Star Wars: Episode ZOO - ?",
    "2006 - Zoo - Monty Pithon - ?",
    "2006 - Special - Bio-Witch Project - ?",
    "2003 - Zoo - Kung ZOO - ?",
    "2002 - Civil - Wayne's World - ?",
    "2003 - Geo - Geostbusters - ?"
];
var db = new sqlite3.Database(__dirname + "/db.db", sqlite3.OPEN_READWRITE);
db.on("open", function (e) {
    if (e) {
        console.error(e);
        process.exit(1);
        return;
    }
    var m = {};
    for (var i = 0; i < data.length; i++) {
        var s = data[i].split(" - ");
        if (s.length !== 4) {
            console.error("Bad data");
            console.error(data[i]);
            process.exit(1);
        }
        if (!m.hasOwnProperty(s[0])) {
            m[s[0]] = {};
        }
        if (m[s[0]][s[1]]) {
            m[s[0]][s[1]].push([s[2], s[3]]);
        } else {
            m[s[0]][s[1]] = [[s[2], s[3]]];
        }
    }
    var s = [];
    for (var i = 1991; i <= 2017; i++) {
        var o = m[i + ""];
        for (var prop in o) {
            for (var j = 0; j < o[prop].length; j++) {
                var y = i === "?" ? null : i;
                var d = prop === "?" ? null : prop.toLowerCase();
                var t = o[prop][j][0] === "?" ? null : o[prop][j][0];
                var f = o[prop][j][1] === "?" ? null : o[prop][j][1];
                var mt = o[prop][j][1] === "?" ? null : `video/${o[prop][j][1].split(".")[1]}`;
                s.push(["INSERT INTO movies (title, year, dept, src, mime) VALUES (?, ?, ?, ?, ?);", t, y, d, f, mt]);
                //console.log(`Year ${y}, Dept ${d}: \"${t}\" located @ ${f} (${mt})`);
            }
        }
    }
    var ev = new Event();
    ev.on("next", function (i) {
        if (i === s.length) {
            db.close();
            return;
        }
        db.run(s[i][0], s[i][1], s[i][2], s[i][3], s[i][4], s[i][5], function (err) {
            if (err) {
                console.error(err);
                db.close();
                process.exit(1);
                return;
            }
            console.log(`INSERT INTO movies (title, year, dept, src, mime) VALUES (${s[i][1]}, ${s[i][2]}, ${s[i][3]}, ${s[i][4]}, ${s[i][5]});`);
            ev.emit("next", ++i);
        });
    });
    ev.emit("next", 0);
});

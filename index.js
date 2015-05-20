var Song = require('nesly-sound');

var song = Song();
var note = song.note;

var sq1 = song.square1;
var sq2 = song.square2;
var tri = song.triangle;
var noi = song.noise;

var A2 = note('Ab2');
var A3 = note('Ab3');
var A4 = note('Ab4');
var B2 = note('Bb2');
var B3 = note('Bb3');
var B4 = B3.perfectOctave();
var C3 = note('C3');
var C4 = C3.perfectOctave();
var D3 = note('D3');
var D4 = D3.perfectOctave();
var E2 = note('Eb2');
var E3 = note('Eb3');
var E4 = E3.perfectOctave();
var F3 = note('F3');
var G3 = note('G3');
var G2 = note('G2');

function loop(n, fn) {
    for (var i = 0; i <= n; i++) {
        fn();
    }
}

sq1(['C1']).staccato();
tri(['C1']).staccato();

function bar1() {
    sq1([C4, E3, G3, E3]);
    tri([C3, G3, F3, G3]);

    sq1([C3, F3, D3, E3]);
    tri([E3, G3, F3, G3]);

}

function bar2() {
    sq1([A3, F3, 'E3', F3]);
    tri([C3, A3, G3, A3]);

    sq1([C3, F3, E3, F3]);
    tri([F3, A3, G3, A3]);
}

function bar3() {
    sq1(['B3', F3, E3, F3]);
    tri([C3, A4, G3, A4]);

    sq1([D3, F3, E3, F3]);
    tri([F3, A4, G3, A3]);
}

function bar4() {
    sq1([C4, G3, F3, G3]);
    tri([C3, E3, D3, E3]);

    sq1([E3, G3, F3, G3]);
    tri([G3, E3, D3, E3]);
}

function bar5() {
    sq1([E4, A3, G3, A3]);
    tri([C3, C4, B4, C4]);

    sq1([E3, A3, G3, A3]);
    tri([A4, C4, B4, C4]);
}

function bar6() {
    sq1([D4, 'Fs3', 'E3', 'Fs3']);
    tri([C3, 'A4', G3, 'A4']);

    sq1([D3, 'Fs3', 'E3', 'Fs3']);
    tri(['Fs3', 'A4', G3, 'A4']);
}

function bar7() {
    sq1([D4, G3, 'Fs3', G3]);
    tri([B3, B4, 'A4', B4]);

    sq1([D3, G3, 'Fs3', G3]);
    tri([G3, B4, 'A4', B4]);
}

function bar8() {
    sq1([C4, 'E3', D3, 'E3']);
    tri([B3, G3, 'F3', G3]);

    sq1([C3, 'E3', D3, 'E3']);
    tri(['E3', G3, 'F3', G3]);
}

function bar9() {
    sq1([C4, F3, 'E3', F3]);
    tri([A3, A4, G3, A4]);

    sq1([C3, F3, 'E3', F3]);
    tri([F3, A4, G3, A4]);
}

function bar10() {
    sq1([B3, F3, E3, F3]);
    tri([A3, D3, C3, D3]);

    sq1([D3, F3, E3, F3]);
    tri([F3, D3, C3, D3]);
}

function bar11() {
    sq1([B3, G3, F3, G3]);
    tri([G2, E3, D3, E3]);

    sq1([E3, G3, F3, G3]);
    tri([G3, E3, D3, E3]);
}

function bar12() {
    sq1([A3, G3, F3, G3]);
    tri([C3, E3, D3, E3]);
    
    sq1([E3, G3, F3, G3]);
    tri([A4, E3, D3, E3]);
}

function bar13() {
    sq1([A3, D3, C3, D3]);
    tri([D3, F3, E3, F3]);

    sq1([B2, D3, C3, D3]);
    tri([A4, F3, E3, F3]);
}

function bar14() {
    sq1([G3, B2, A2, B2]);
    tri([E3, G3, F3, G3]);
    
    sq1([E3, B2, A2, B2]);
    tri([A4, G3, F3, G3]);
}

function bar15() {
    sq1([F3, C3, B2, C3]);
    tri([E3, 'A4', G3, A4]);
    
    sq1(['A2', C3, B2, C3]);
    tri([F3, 'A4', G3, 'A4']);
}

function bar16() {
    sq1([F3, D3, C3, D3]);
    tri([D3, F3, E3, F3]);
    
    sq1(['B2', D3, C3, D3]);
    tri([A4, F3, E3, F3]);
}

function bar17() {
    sq1([F3, D3, C3, D3]);
    tri([C3, F3, 'E3', F3]);
    
    sq1(['B2', D3, C3, D3]);
    tri([A4, F3, E3, F3]);
}

function bar18() {
    sq1([E3, C3, 'B2', E3]);
    tri([C3, E3, D3, E3]);
    
    sq1(['G2', E3, D3, E3]);
    tri([F3, E3, D3, E3]);
}

function bar19() {
    sq1([E2, E3, D4, E3]);
    tri([A3, C3, 'B3', C3]);
    
    sq1([F3, E3, D3, E3]);
    tri([D3, C3, B3, C3]);
}

function bar20() {
    sq1(['Fs2', C3, 'B2', C3]);
    tri(['A3', E3, D3, E3]);
    
    sq1([E3, C3, 'B2', C3]);
    tri([C3, E3, D3, E3]);
}

function bar21() {
    sq1([E3, C3, 'B2', C3]);
    tri([G2, E3, D3, E3]);
    
    sq1([G2, E3, 'B2', C3]);
    tri([F3, E3, D3, E3]);
}

function bar22() {
    sq1(['Fs3', C3, 'B2', C3]);
    tri([G2, E3, D3, E3]);
    
    sq1(['A2', E3, D3, E3]);
    tri([C3, E3, D3, E3]);
}

function bar23() {
    sq1([]);
    tri([]);
    
    sq1([]);
    tri([]);
}

loop(1, bar1);
loop(1, bar2);
loop(1, bar3);
loop(1, bar4);
loop(1, bar5);
loop(1, bar6);
loop(1, bar7);
loop(1, bar8);
loop(1, bar9);
loop(1, bar10);
loop(1, bar11);
loop(1, bar12);
loop(1, bar13);
loop(1, bar14);
loop(1, bar15);
loop(1, bar16);
loop(1, bar17);
loop(1, bar18);
loop(1, bar19);
loop(1, bar20);
loop(1, bar21);
loop(1, bar22);

song.done();
song.write();

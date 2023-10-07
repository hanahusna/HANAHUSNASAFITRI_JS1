// IF
let groupName = "(G)I-DLE";
if (groupName === "(G)I-DLE") {
    console.log("Group ini baru merilis EP. \n");
}

// IF else
let albumName = "I FEEL";
if (albumName === "I FEEL") {
    console.log("Ini album keenam mereka. \n");
} else {
    console.log("Ini bukan album keenam mereka. \n");
}

// else IF
let track = 6;
if (track === 6) {
    console.log("Track ini berjudul Paradise. \n");
} else if (track === 5) {
    console.log("Ups! Ini bukan track 6. \n");
} else if (track === 4) {
    console.log("Maaf, ini bukan track 6. \n");
} else if (track === 3) {
    console.log("Masih bukan track 6. \n");
} else if (track === 2) {
    console.log("Masih salah, cari track 6 lagi. \n");
} else {
    console.log("Salah! ini bukan track 6! \n");
}

// Nested IF
let number = 20;
if (number%2 === 0) {
    console.log("Number : "+number);
    console.log("Angka tersebut merupakan angka genap");
    if (number > 0) {
        console.log("Angka lebih besar dari 0 \n");
    } else {
        console.log("Angka lebih kecil dari 0 \n");
    }
} else {
    console.log("Number = "+number);
    console.log("Angka tersebut merupakan angka ganjil");
    if(number > 0) {
        console.log("Angka lebih besar dari 0 \n");
    } else {
        console.log("Angka lebih kecil dari 0 \n");
    }
}

// Switch Case
let member = "Soyeon";
switch(member) {
    case "Miyeon" :
        console.log("Main Vocalist. \n");
        break;

    case "Minnie" :
        console.log("Main Vocalist 2. \n");
        break;

    case "Soyeon" :
        console.log("Leader and Main Rapper. \n");
        break;

    case "Yuqi" :
        console.log("Main Dancer and FOTG. \n");
        break;

    case "Shuhua" :
        console.log("Maknae and Visual. \n");

    default :
        console.log("Bukan member (G)I-DLE. \n");
        break;
}

// For Statement
for(i = 1; i <= 12; i++) {
    console.log(i+ ". Hana sedang belajar For Statement \n")
    if(i == 10) {
        break;
    }
}

// While
let a = 1;
while(a <= 12) {
    console.log("Anak kucing naik " +a);
    a++;
}

// Do While
let y = 11;
do {
    y--;
    console.log("\n");
    console.log(y + ". Sedang belajar looping do while");
} while(y >= 1);

// Function
function detailAlbum(track, listnumber = 0) {
    if(listnumber === 13) {
        console.log(`\nThis track is called ${track}, track number ${listnumber} and has unique melody`)
    } else if (listnumber === 14) {
        console.log(`\nThis track is called ${track}, track number ${listnumber} and has unique storytelling.`)
    } else if (listnumber === 15) {
        console.log(`\nThis track is called ${track}, track number ${listnumber} and has melancholy atmosphere.`)
    } else {
        console.log(`\nThis track ${track} and ${listnumber} unrecognized`)   
    }
}

detailAlbum("Mastermind", 13);
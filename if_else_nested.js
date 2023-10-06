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
        console.log("Angka lebih besar dari 0");
    } else {
        console.log("Angka lebih kecil dari 0");
    }
} else {
    console.log("Number = "+number);
    console.log("Angka tersebut merupakan angka ganjil");
    if(number > 0) {
        console.log("Angka lebih besar dari 0");
    } else {
        console.log("Angka lebih kecil dari 0");
    }
}
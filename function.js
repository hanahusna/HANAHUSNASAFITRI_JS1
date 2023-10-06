function detailAlbum(track, listnumber = 0) {
    if(listnumber === 13) {
        console.log(`This track is called ${track}, track number ${listnumber} and has unique melody`)
    } else if (listnumber === 14) {
        console.log(`This track is called ${track}, track number ${listnumber} and has unique storytelling.`)
    } else if (listnumber === 15) {
        console.log(`This track is called ${track}, track number ${listnumber} and has melancholy atmosphere.`)
    } else {
        console.log(`This track ${track} and ${listnumber} unrecognized`)   
    }
}

detailAlbum("Mastermind", 13);
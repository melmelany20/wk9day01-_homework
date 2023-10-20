function noteChecker(ransomeNote: string, magazine: string): boolean {
    const ransomeNoteArray = ransomeNote.split('')
    const magazineArray = magazine.split('')
    const ransomeNoteObj:{[i:string]:number} = {}
    const magazineObj:{[i:string]:number} = {}
    for(let i = 0; i < ransomeNoteArray.length; i ++){
        if (!(ransomeNoteArray[i] in ransomeNoteObj)){
            ransomeNoteObj[ransomeNoteArray[i]] = 1
        } else {
            ransomeNoteObj[ransomeNoteArray[i]] ++
        }
    }
    for(let i = 0; i < magazineArray.length; i ++){
        if(!(magazineArray[i] in magazineObj)){
            magazineObj[magazineArray[i]] = 1
        } else {
            magazineObj[magazineArray[i]] ++
        }
    }
    for(const letter in ransomeNoteObj){
        if(ransomeNoteObj[letter] <= magazineObj[letter]){
            continue
        } else return false
    }
    return true
}

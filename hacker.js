
const hacker_alphabet = {
    a: "4",
    b: "13",
    c: "[",
    d: ")",
    e: "3",
    f: "|=",
    g: "&",
    h: "#",
    i: "1",
    j: ",_|",
    k: ">|",
    l: "1",
    m: "/\\/\\",
    n: "^/",
    o: "0",
    p: "|*",
    q: "(_,)",
    r: "I2",
    s: "5",
    t: "7",
    u: "(_)",
    v: "\\/",
    w: "\\/\\/",
    x: "><",
    y: "j",
    z: "2"
}

function hackerLanguage(text){
    let newText = "";
    let regex = /^[0-9!¡@#\$%\^\&*\)\(+=._-\s,:;]+$/;

    for(let character in text){
        let current_character = text[character].toLowerCase();

        if(regex.test(current_character)){
            newText += current_character;
        }
        else{
            newText += hacker_alphabet[current_character];
        }
    }
    return newText;
}

console.log(hackerLanguage("adrian"));
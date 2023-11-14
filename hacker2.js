const idiomaHacker = {
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

const lengua = (texto) => {

    let nuevotexto = '';
    let  otrocaracteres = /^[0-9!¡@#\$%\^\&*\)\(+=._-\s,:;]+$/;

    for( let caracteres in texto) {
        let recorreCaracteres = texto[caracteres].toLowerCase();

        if (otrocaracteres.test(recorreCaracteres)) {
            nuevotexto += recorreCaracteres            
        }
        else{
            nuevotexto += idiomaHacker[recorreCaracteres]
        }
    }

    return nuevotexto
};

console.log(lengua('mario'))
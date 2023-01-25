//Implemente a função ao lado que recebe como parâmetro uma string, misturando letras e números, e deve retornar uma string contendo apenas as letras da string passada na mesma ordem

//Exemplo: se for passada a string “ab2c4d”, a função deve retornar “abcd”

//Exemplo: se for passada a string “1234”, a função deve retornar “”


function tiraNumeros(string) {

    let texto = "";

    for (let i = 0; i < string.length; i++) {

        let caractere = string[i];

        if (caractere !== "0" && caractere !== "1" && caractere !== "2" && caractere !== "3" && caractere !== "4" && caractere !== "5" && caractere !== "6" && caractere !== "7" && caractere !== "8" && caractere !== "9") {
            texto += caractere;
        }
    }
    return texto;
}
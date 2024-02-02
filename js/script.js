$(document).ready(function(){
    $("#telefone").mask("(00) 00000-0000")
    $("#cpf").mask("000.000.000-00")
    $("#cep").mask("00000-000")

    $("form").validate({
        rules: {
            nome: {required: true},
            email:{required: true, email: true},
            telefone:{required: true},
            cpf:{required: true},
            cep:{required: true},
        },
        messages: {
            nome: "Insira seu nome",
            email: "Coloque seu email",
            cpf: "Preencha o Cpf",
            cep: "Digite o cep desejado",
        },
        submitHandler: function(form) {
            alert(`Cadastro realizado com sucesso!`);

            nome.value = ""
            email.value = ""
            telefone.value = ""
            cpf.value = ""
            cep.value = ""

        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos, favor preencher.`);
            }      
        }
    })
})
angular.module("meuModulo")
.controller("contatoController", function ($scope) {
    $scope.titulo = "Lista de Contatos";
    $scope.contatos = [
		{ nome: "Carlos Wagner", endereco: "Av. Me. Benvenuta", cidade: "Florianópolis", estado: "SC", cep: "94135-012", fone: "(48)99999-9999", email: "wagner@teste.com.br" },
	    { nome: "José Silva", endereco: "Av. Borges de Medeiros", cidade: "Porto Alegre", estado: "RS", cep: "95623-040", fone: "(51)55555-5555", email: "jose@teste.com.br" }
    ];

    $scope.abreAddContato = function () {
        $scope.editando = false;
        limpaForm();
        $('#modal1').openModal();
    };

    $scope.addContato = function (contato) {
        $scope.contatos.push(contato);
        $('#modal1').closeModal();
        limpaForm();
    };

    $scope.editando = false;
    var contatoEditar;

    $scope.editarContato = function (contato) {
        $scope.editando = true;
        angular.copy(contato, $scope.contato);
        $('#modal1').openModal();
        contatoEditar = contato;
    };

    $scope.salvarContato = function (contato) {
        contatoEditar.nome = contato.nome;
        contatoEditar.endereco = contato.endereco;
        contatoEditar.cidade = contato.cidade;
        contatoEditar.estado = contato.estado;
        contatoEditar.cep = contato.cep;
        contatoEditar.fone = contato.fone;
        contatoEditar.email = contato.email;
        $('#modal1').closeModal();
    };

    $scope.deletarContato = function (contato) {
        for (var index in $scope.contatos) {
            var aux = $scope.contatos[index];
            if (contato === aux) {
                $scope.contatos.splice(index, 1);
            }
        }
    };

    var limpaForm = function () {
        $scope.contato = { nome: '', endereco: '', cidade: '', estado: '', cep: '', fone: '', email: '' };
    };
})
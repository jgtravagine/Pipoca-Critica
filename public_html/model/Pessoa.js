class Pessoa {
    constructor(id, email, senha, nome, telefone, cpf, cep, rua, bairro, numero, cidade, estado, complemento) {
        this.id = id;
        this.email = email;
        this.senha = senha;
        this.nome = nome;
        this.telefone = telefone;
        this.cpf = cpf;
        this.cep = cep;
        this.rua = rua;
        this.bairro = bairro;
        this.numero = numero;
        this.cidade = cidade;
        this.estado = estado;
        this.complemento = complemento;
    }
     get idPessoa() {
        return this.id;
    }
    set idPessoa(idPessoa) {
        this.id = idPessoa;
    }
    get emailPessoa() {
        return this.email;
    }
    set emailPessoa(emailPessoa) {
        this.email = emailPessoa;
    }
    get senhaPessoa() {
        return this.senha;
    }
    set senhaPessoa(senhaPessoa) {
        this.senha = senhaPessoa;
    }
    get nomePessoa() {
        return this.nome;
    }
    set nomePessoa(nomePessoa) {
        this.nome = nomePessoa;
    }
    get telefonePessoa() {
        return this.telefone;
    }
    set telefonePessoa(telefonePessoa) {
        this.telefone = telefonePessoa;
    }
    get cpfPessoa() {
        return this.cpf;
    }
    set cpfPessoa(cpfPessoa) {
        this.cpf = cpfPessoa;
    }
    get cepPessoa() {
        return this.cep;
    }
    set cepPessoa(cepPessoa) {
        this.cep = cepPessoa;
    }
    get ruaPessoa() {
        return this.rua;
    }
    set ruaPessoa(ruaPessoa) {
        this.rua = ruaPessoa;
    }
    get bairroPessoa() {
        return this.bairro;
    }
    set bairroPessoa(bairroPessoa) {
        this.bairro = bairroPessoa;
    }
    get numeroPessoa() {
        return this.numero;
    }
    set numeroPessoa(numeroPessoa) {
        this.numero = numeroPessoa;
    }
    get cidadePessoa() {
        return this.cidade;
    }
    set cidadePessoa(cidadePessoa) {
        this.cidade = cidadePessoa;
    }
    get estadoPessoa() {
        return this.estado;
    }
    set estadoPessoa(estadoPessoa) {
        this.estado = estadoPessoa;
    }
    get complementoPessoa() {
        return this.complemento;
    }
    set complementoPessoa(complementoPessoa) {
        this.complemento = complementoPessoa;
    }

}
class Session {
    constructor(id, email, password, nome) {
        this.idPessoa = id;
        this.emailSession = email;
        this.passwordSession = password;
        this.nomeSession = nome;
    }
    get idPessoaSession() {
        return this.id;
    }
    set idPessoaSession(idPessoa) {
        this.idPessoa = idPessoa;
    }
    get emailPessoaSession() {
        return this.emailSession;
    }
    set emailPessoaSession(emailPessoa) {
        this.emailSession = emailPessoa;
    }
    get passwordPessoaSession() {
        return this.passwordSession;
    }
    set passwordPessoaSession(passwordPessoa) {
        this.passwordSession = passwordPessoa;
    }
     get nomePessoaSession() {
        return this.nomeSession;
    }
    set nomePessoaSession(nomePessoa) {
        this.nomeSession = nomePessoa;
    }
}
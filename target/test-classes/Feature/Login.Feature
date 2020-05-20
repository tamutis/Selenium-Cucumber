# language: pt
# encoding: iso-8859-1
#Autor: Andre Luiz Tamutis
@login
Funcionalidade: efetuar um cadastro e que também contenha os cenários (em BDD)

  @login_happy
  Cenário: Login com Sucesso
    Dado que estou acessando a aplicação
    Quando informo o usuario "teste@getnada.com"
    E informo a senha "102030"
    Então devo ver "My account" na área logada.

  @login_hapless
  Esquema do Cenário: Login Inválido
    Dado que estou acessando a aplicação
    Quando informo o usuario <email>
    E informo a senha <senha>
    Então recebo a mensagem <mensagem>

    Exemplos: 
      | email               | senha     | mensagem                     |
      | "teste@getnada"     | "102030"  | "Invalid email address."     |
      | "  "                | "       " | "An email address required." |

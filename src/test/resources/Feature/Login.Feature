# language: pt
# encoding: iso-8859-1
#Autor: Andre Luiz Tamutis
@login
Funcionalidade: efetuar um cadastro e que tamb�m contenha os cen�rios (em BDD)

  @login_happy
  Cen�rio: Login com Sucesso
    Dado que estou acessando a aplica��o
    Quando informo o usuario "teste@getnada.com"
    E informo a senha "102030"
    Ent�o devo ver "My account" na �rea logada.

  @login_hapless
  Esquema do Cen�rio: Login Inv�lido
    Dado que estou acessando a aplica��o
    Quando informo o usuario <email>
    E informo a senha <senha>
    Ent�o recebo a mensagem <mensagem>

    Exemplos: 
      | email               | senha    | mensagem                     |
      | "teste@getnada"     | "102030" | "Invalid email address."     |
      | "              "    | "102030" | "An email address required." |
      | "teste@getnada.com" | "      " | "Password is required."      |

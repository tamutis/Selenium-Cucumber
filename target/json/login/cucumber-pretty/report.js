$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/NOTE ASIS-724/Downloads/java/Ame/src/test/resources/Feature/Login.Feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: pt"
    },
    {
      "line": 2,
      "value": "# encoding: iso-8859-1"
    },
    {
      "line": 3,
      "value": "#Autor: Andre Luiz Tamutis"
    }
  ],
  "line": 5,
  "name": "efetuar um cadastro e que também contenha os cenários (em BDD)",
  "description": "",
  "id": "efetuar-um-cadastro-e-que-também-contenha-os-cenários-(em-bdd)",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 4,
      "name": "@login"
    }
  ]
});
formatter.before({
  "duration": 6472285300,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Login com Sucesso",
  "description": "",
  "id": "efetuar-um-cadastro-e-que-também-contenha-os-cenários-(em-bdd);login-com-sucesso",
  "type": "scenario",
  "keyword": "Cenário",
  "tags": [
    {
      "line": 7,
      "name": "@login_happy"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "que estou acessando a aplicação",
  "keyword": "Dado "
});
formatter.step({
  "line": 10,
  "name": "informo o usuario \"teste@getnada.com\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "informo a senha \"102030\"",
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "devo ver \"My account\" na área logada.",
  "keyword": "Então "
});
formatter.match({
  "location": "LoginTest.queEstouAcessandoAAplicação()"
});
formatter.result({
  "duration": 7739247000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "teste@getnada.com",
      "offset": 19
    }
  ],
  "location": "LoginTest.informoOUsuario(String)"
});
formatter.result({
  "duration": 136290700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "102030",
      "offset": 17
    }
  ],
  "location": "LoginTest.informoASenha(String)"
});
formatter.result({
  "duration": 2636301200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My account",
      "offset": 10
    }
  ],
  "location": "LoginTest.devoVerNaÁreaLogada(String)"
});
formatter.result({
  "duration": 53215600,
  "status": "passed"
});
formatter.after({
  "duration": 150242900,
  "status": "passed"
});
formatter.after({
  "duration": 1962363500,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 15,
  "name": "Login Inválido",
  "description": "",
  "id": "efetuar-um-cadastro-e-que-também-contenha-os-cenários-(em-bdd);login-inválido",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 14,
      "name": "@login_hapless"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "que estou acessando a aplicação",
  "keyword": "Dado "
});
formatter.step({
  "line": 17,
  "name": "informo o usuario \u003cemail\u003e",
  "keyword": "Quando "
});
formatter.step({
  "line": 18,
  "name": "informo a senha \u003csenha\u003e",
  "keyword": "E "
});
formatter.step({
  "line": 19,
  "name": "recebo a mensagem \u003cmensagem\u003e",
  "keyword": "Então "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "efetuar-um-cadastro-e-que-também-contenha-os-cenários-(em-bdd);login-inválido;",
  "rows": [
    {
      "cells": [
        "email",
        "senha",
        "mensagem"
      ],
      "line": 22,
      "id": "efetuar-um-cadastro-e-que-também-contenha-os-cenários-(em-bdd);login-inválido;;1"
    },
    {
      "cells": [
        "\"teste@getnada\"",
        "\"102030\"",
        "\"Invalid email address.\""
      ],
      "line": 23,
      "id": "efetuar-um-cadastro-e-que-também-contenha-os-cenários-(em-bdd);login-inválido;;2"
    },
    {
      "cells": [
        "\"  \"",
        "\"       \"",
        "\"An email address required.\""
      ],
      "line": 24,
      "id": "efetuar-um-cadastro-e-que-também-contenha-os-cenários-(em-bdd);login-inválido;;3"
    }
  ],
  "keyword": "Exemplos"
});
formatter.before({
  "duration": 4822933000,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Login Inválido",
  "description": "",
  "id": "efetuar-um-cadastro-e-que-também-contenha-os-cenários-(em-bdd);login-inválido;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 4,
      "name": "@login"
    },
    {
      "line": 14,
      "name": "@login_hapless"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "que estou acessando a aplicação",
  "keyword": "Dado "
});
formatter.step({
  "line": 17,
  "name": "informo o usuario \"teste@getnada\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 18,
  "name": "informo a senha \"102030\"",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 19,
  "name": "recebo a mensagem \"Invalid email address.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Então "
});
formatter.match({
  "location": "LoginTest.queEstouAcessandoAAplicação()"
});
formatter.result({
  "duration": 7856792900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "teste@getnada",
      "offset": 19
    }
  ],
  "location": "LoginTest.informoOUsuario(String)"
});
formatter.result({
  "duration": 96792700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "102030",
      "offset": 17
    }
  ],
  "location": "LoginTest.informoASenha(String)"
});
formatter.result({
  "duration": 1348876000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid email address.",
      "offset": 19
    }
  ],
  "location": "LoginTest.receboAMensagem(String)"
});
formatter.result({
  "duration": 50506700,
  "status": "passed"
});
formatter.after({
  "duration": 132330000,
  "status": "passed"
});
formatter.after({
  "duration": 1754653900,
  "status": "passed"
});
formatter.before({
  "duration": 4804062700,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Login Inválido",
  "description": "",
  "id": "efetuar-um-cadastro-e-que-também-contenha-os-cenários-(em-bdd);login-inválido;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 4,
      "name": "@login"
    },
    {
      "line": 14,
      "name": "@login_hapless"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "que estou acessando a aplicação",
  "keyword": "Dado "
});
formatter.step({
  "line": 17,
  "name": "informo o usuario \"  \"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 18,
  "name": "informo a senha \"       \"",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 19,
  "name": "recebo a mensagem \"An email address required.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Então "
});
formatter.match({
  "location": "LoginTest.queEstouAcessandoAAplicação()"
});
formatter.result({
  "duration": 7256515800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "  ",
      "offset": 19
    }
  ],
  "location": "LoginTest.informoOUsuario(String)"
});
formatter.result({
  "duration": 70505500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "       ",
      "offset": 17
    }
  ],
  "location": "LoginTest.informoASenha(String)"
});
formatter.result({
  "duration": 953600600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "An email address required.",
      "offset": 19
    }
  ],
  "location": "LoginTest.receboAMensagem(String)"
});
formatter.result({
  "duration": 40611200,
  "status": "passed"
});
formatter.after({
  "duration": 119335900,
  "status": "passed"
});
formatter.after({
  "duration": 1701863800,
  "status": "passed"
});
});
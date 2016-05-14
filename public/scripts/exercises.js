// generated by build-exercises.js
(function(document) {
  'use strict';
  document.querySelector('#app').exercises = [
    {
      "_info": "generated from ex.1.quizz.template.md",
      "i": "1",
      "isQuizz": true,
      "title": "QCM",
      "questions": [
        {
          "i": 1,
          "id": "qcm1",
          "md": "Que renvoie `typeof` quand il est appliqué sur `\"bonjour\"` ?\n",
          "choices": [
            {
              "name": 1,
              "text": "\"string\""
            },
            {
              "name": 2,
              "text": "string"
            },
            {
              "name": 3,
              "text": "\"object\""
            },
            {
              "name": 4,
              "text": "undefined"
            }
          ]
        },
        {
          "i": 2,
          "id": "qcm2",
          "md": "Que renvoie `typeof` quand il est appliqué sur un tableau ?\n",
          "choices": [
            {
              "name": 1,
              "text": "\"array\""
            },
            {
              "name": 2,
              "text": "array"
            },
            {
              "name": 3,
              "text": "\"object\""
            },
            {
              "name": 4,
              "text": "undefined"
            }
          ]
        },
        {
          "i": 3,
          "id": "qcm3",
          "md": "```js\nvar tab = [ 's', 'u', 'p', 'e', 'r' ];\n```\n\nSi je veux afficher une alerte modale seulement quand la valeur de `lettre` n'est pas contenue dans `tab`, quelle condition dois-je utiliser dans mon `if` ?\n",
          "choices": [
            {
              "name": 1,
              "text": "tab[lettre] == false"
            },
            {
              "name": 2,
              "text": "tab[lettre] == -1"
            },
            {
              "name": 3,
              "text": "tab.indexOf(lettre) == false"
            },
            {
              "name": 4,
              "text": "tab.indexOf(lettre) == -1"
            }
          ]
        },
        {
          "i": 4,
          "id": "qcm4",
          "md": "```js\n// la bibliothèque \"underscore\" a été chargée dans l'objet \"_\"\nvar template = '<%= nb %> lutin<%= pl %>';\nvar nombre = 3;\nvar rendu = _.template(template, {\n  nb: nombre,\n  pl: nombre != 0 ? 's' : ''\n});\n```\n\nQue vaut la variable `rendu` ?\n",
          "choices": [
            {
              "name": 1,
              "text": "\"3 lutins\""
            },
            {
              "name": 2,
              "text": "\"trois lutins\""
            },
            {
              "name": 3,
              "text": "\"3 lutin\""
            },
            {
              "name": 4,
              "text": "\"nombre lutins?\""
            }
          ]
        },
        {
          "i": 5,
          "id": "qcm5",
          "md": "Je crée un tableau `[ 'a', 'b', 'c' ]`, puis j'utilise successivement les méthodes `push('d')` et `splice(1, 2)` sur ce tableau. Que contient le tableau à la fin ?\n",
          "choices": [
            {
              "name": 1,
              "text": "[ 'a', 'b', 'c' ]"
            },
            {
              "name": 2,
              "text": "[ 'a', 'b', 'c', 'd' ]"
            },
            {
              "name": 3,
              "text": "[ 'b', ]"
            },
            {
              "name": 4,
              "text": "[ 'a', 'd' ]"
            }
          ]
        },
        {
          "i": 6,
          "id": "qcm6",
          "md": "Pour stocker des données dans un back-end Firebase, y a-t-il besoin d'effectuer une requête Ajax ?\n",
          "choices": [
            {
              "name": 1,
              "text": "Oui, en utilisant XMLHttpRequest"
            },
            {
              "name": 2,
              "text": "Non, pas besoin d'Ajax pour cela"
            },
            {
              "name": 3,
              "text": "Peut-être, mais c'est l'API de Firebase qui le fait pour nous"
            },
            {
              "name": 4,
              "text": "Firebase n'est pas un back-end"
            }
          ]
        },
        {
          "i": 7,
          "id": "qcm7",
          "md": "Si `typeof x` vaut `\"object\"`, et `x.length` vaut `undefined`, quel est le type de la variable `x` ?\n",
          "choices": [
            {
              "name": 1,
              "text": "Tableau vide"
            },
            {
              "name": 2,
              "text": "Objet"
            },
            {
              "name": 3,
              "text": "Chaîne de caractères vide"
            },
            {
              "name": 4,
              "text": "Valeur non définie"
            }
          ]
        },
        {
          "i": 8,
          "id": "qcm8",
          "md": "La ligne `hello();` sert à:\n",
          "choices": [
            {
              "name": 1,
              "text": "appeler la fonction hello"
            },
            {
              "name": 2,
              "text": "définir la fonction hello"
            },
            {
              "name": 3,
              "text": "afficher hello"
            },
            {
              "name": 4,
              "text": "(on ne peut pas répondre à cette question sans plus de contexte)"
            }
          ]
        },
        {
          "i": 9,
          "id": "qcm9",
          "md": "```js\nhello[1] = 2\n```\n",
          "choices": [
            {
              "name": 1,
              "text": "affiche la valeur du tableau hello à l'indice 1"
            },
            {
              "name": 2,
              "text": "sert à vérifier que la valeur à l'indice 1 vaut 2"
            },
            {
              "name": 3,
              "text": "affecte la valeur 1 à l'indice 2 du tableau"
            },
            {
              "name": 4,
              "text": "remplace la valeur à l'indice 1 du tableau par 2"
            }
          ]
        },
        {
          "i": 10,
          "id": "qcm10",
          "md": "Si j'ai deux conditions `if` liées par un `else`, laquelle de ces propositions est fausse:\n",
          "choices": [
            {
              "name": 1,
              "text": "les conditions sont évaluées une à une"
            },
            {
              "name": 2,
              "text": "si la seconde est vraie alors la première est ignorée"
            },
            {
              "name": 3,
              "text": "seule le code d'une des deux condition sera exécuté"
            },
            {
              "name": 4,
              "text": "il est possible qu'aucune condition ne soit vraie"
            }
          ]
        },
        {
          "i": 11,
          "id": "qcm11",
          "md": "Quand on définit une fonction, que faut-il mettre entre les parenthèses qui suivent le nom de la fonction ?\n",
          "choices": [
            {
              "name": 1,
              "text": "rien"
            },
            {
              "name": 2,
              "text": "le nom de la fonction"
            },
            {
              "name": 3,
              "text": "un nom pour chaque paramètre attendu"
            },
            {
              "name": 4,
              "text": "les valeurs littérales (ex: 3) qui serviront de paramètres"
            }
          ]
        },
        {
          "i": 12,
          "id": "qcm12",
          "md": "On définit une fonction `fct` qui prend un nombre en paramètre, et retourne le double de ce nombre. Comment obtenir le double de `2` en utilisant cette fonction ?\n",
          "choices": [
            {
              "name": 1,
              "text": "function fct(2)"
            },
            {
              "name": 2,
              "text": "fct(2)"
            },
            {
              "name": 3,
              "text": "fct(2, 2)"
            },
            {
              "name": 4,
              "text": "fct(2 * 2)"
            }
          ]
        }
      ]
    },
    {
      "_info": "generated from ex.2.code.template.md",
      "i": "2",
      "isCode": true,
      "title": "Exercices de codage",
      "id": "code2",
      "questions": [
        {
          "i": 0,
          "id": "code0",
          "mdVariants": [
            "Écrivez le code JS permettant d'envoyer une requête Ajax de type GET à l'URL `http://jsonplaceholder.typicode.com/users/1`. Une fois la réponse reçue, affichez dans la console seulement la valeur de la propriété `username` de cette réponse JSON.\n",
            "Écrivez le code JS permettant d'envoyer une requête Ajax de type GET à l'URL `http://jsonplaceholder.typicode.com/users/2`. Une fois la réponse reçue, affichez dans la console seulement la valeur de la propriété `email` de cette réponse JSON.\n",
            "Écrivez le code JS permettant d'envoyer une requête Ajax de type GET à l'URL `http://jsonplaceholder.typicode.com/users/3`. Une fois la réponse reçue, affichez dans la console seulement la valeur de la propriété `phone` de cette réponse JSON.\n"
          ]
        },
        {
          "i": 1,
          "id": "code1",
          "mdVariants": [
            "Test"
          ]
        }
      ]
    }
  ];
})(document);
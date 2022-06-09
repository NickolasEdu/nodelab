# Teste - Flags

Teste para passar valores entre módulos, sendo estes valores string declarados em --flags

## main.js

Neste arquivo está o Require do module criado, variáveis sendo atribuídas aos valores que virão pelo exports, duas mensagens com string literal, uma com alguns valores já definidos - que de inicio foi só para teste, mas resolvi deixar - e outra com os valores que seriam declarados nas flags.

## get.js

Um array que contém os objetos que serão atribuídos as variáveis no arquivo main.js - antes estava tentando fazer com que o module retornasse uma função e acabei ficando preso nesta tentativa inicial - e também deixei um console.log que está retornando as posições do process, para que fosse indicado a posição do index na atribuição do objeto. No caso 'process.argv[i]'

## Git Bash line

E por fim, fiz a declaração das flags junto com a execução do arquivo main. Pensei que haveria um problema de comportameto, que não aconteceu.

```javascript

node main --flagName "Andy" --flagGreeting "está tudo certo"
```
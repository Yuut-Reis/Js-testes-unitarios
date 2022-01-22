/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const getCharacter = require('../src/getCharacter');

/*
Essa função recebe como parâmetro o nome de um personagem e retorna um objeto com seu nome, classe e frases.

O retorno será de acordo com a seguinte relação:

 Parâmetro  |      Nome       |    Classe   |              Frases
----------------------------------------------------------------------------------
   Arya     |   Arya Stark    |    Rogue    | 'Not today', 'A girl has no name.'
  Brienne   |  Brienne Tarth  |    Knight   | 'Im No Lady, Your Grace.', 'I, Brienne Of Tarth, Sentence You To Die.'
Melissandre |   Melissandre   | Necromancer | 'Death By Fire Is The Purest Death.', 'For The Night Is Dark And Full Of Terrors.'

- Se o parâmetro não estiver na tabela, a função retorna undefined.
- Se o parâmetro estiver, a função retorna um objeto no formato abaixo:

{
  name: 'Nome do Personagem',
  class: 'Classe do Personagem' ,
  phrases: ['frase1', 'frase2']
}

- OBS.: O parâmetro não é CASE SENSITIVE, portanto Arya, ArYa e ARYA tem o mesmo resultado.

Elabore testes para verificar se a função está funcionando de acordo com o proposto.

Parâmetros:
  - Uma string.

Comportamento: 
  - getCharacter('Arya');

Retorno:
{
  name: 'Arya Stark',
  class: 'Rogue',
  phrases: [ 'Not today', 'A girl has no name.' ]
}
*/

describe('9 - Implemente os casos de teste da função `getCharacter`', () => {
  it('Verifica se a função `getCharacter` retorna o objeto do personagem corretamente.', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se a função, quando não recebe nenhum parâmetro, retorna undefined.
    expect(getCharacter()).toBe(undefined)
    // Teste se a função retorna o objeto correto para o parâmetro 'Arya',

    expect(Object.values(getCharacter('Arya'))[0]).toBe('Arya Stark')
    expect(Object.values(getCharacter('Arya'))[1]).toBe('Rogue')
    const test1 = ['Not today', 'A girl has no name.']
    expect(Object.values(getCharacter('Arya'))[2]).toEqual(test1)

    // Teste se a função retorna o objeto correto para o parâmetro 'Brienne',

    expect(Object.values(getCharacter('Brienne'))[0]).toBe('Brienne Tarth')
    expect(Object.values(getCharacter('Brienne'))[1]).toBe('Knight')
    const test2 = ['Im No Lady, Your Grace.', 'I, Brienne Of Tarth, Sentence You To Die.']
    expect(Object.values(getCharacter('Brienne'))[2]).toEqual(test2);

    // Teste se a função retorna o objeto correto para o parâmetro 'Melissandre',
    expect(Object.values(getCharacter('Melissandre'))[0]).toBe('Melissandre')
    expect(Object.values(getCharacter('Melissandre'))[1]).toBe('Necromancer')
    const test3 = ['Death By Fire Is The Purest Death.', 'For The Night Is Dark And Full Of Terrors.']
    expect(Object.values(getCharacter('Melissandre'))[2]).toEqual(test3);
    // Teste se os parâmetros não são Case Sensitive.
    expect(Object.values(getCharacter('aRYa'))[0]).toBe('Arya Stark')
    // Teste se ao passar um nome que não está na tabela, a função retorna undefined.
    expect(getCharacter('xablau')).toBe(undefined)
  });
});

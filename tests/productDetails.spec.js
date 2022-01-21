const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    expect(typeof productDetails).toBe('function')
    // Teste se o retorno da função é um array.
    expect(productDetails('papel')).toBeInstanceOf(Array)
    // Teste se o array retornado pela função contém dois itens dentro.
    expect(Object.keys(productDetails('papel','gramatura')).length).toBe(2)
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    expect(productDetails('papel' , 'gramatura')).toBeInstanceOf(Object)
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    expect(productDetails('papel' , 'gramatura')[1]).not.toMatchObject(productDetails('papel' , 'gramatura')[0])
    // Teste se os dois productIds terminam com 123.
    expect(productDetails('paepel', 'gramatura')[0].details.productId.endsWith('123', 3))
  });
});

//referencia https://pt.stackoverflow.com/questions/493629/como-verificar-o-tipo-de-um-valor-em-teste-unit%C3%A1rio-utilizando-jest
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
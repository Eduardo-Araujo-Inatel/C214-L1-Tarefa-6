const Constants = require("../src/utils/constants");
const Validation = require("../src/utils/validation");


it('Caso valido', ()=>{
    const result = Validation.create({
        nome: "AAA",
        produtora: "AAA",
        atores: ["AAA"],
        ano: 1990
    })
    expect(result).toEqual(undefined)
})

it('Caso invalido, sem parametro nome', () => {
    const result = Validation.create({
        produtora: "AAA",
        atores: ["AAA"],
        ano: 1990
    })
    expect(result).toEqual(Constants.ErrorValidation)
});


it('Caso valido de atualização de dados', () => {
    const result = Validation.update({
        nome: "AAA",
        produtora: "AAA"
    })
    expect(result).toEqual(undefined);
});

it('Caso invalido de atualização de dados, campo produtora não inserido', () => {
    const result = Validation.update({
        nome: "AAA"
    })
    expect(result).toEqual(Constants.ErrorValidation);
});

it('Caso valido de atualização de dados', () => {
    const result = Validation.getProducer({
        produtora: "AAA",
    })
    expect(result).toEqual(undefined);
});

it('Caso invalido de busca por produtora, campo produtora não informado', () => {
    const result = Validation.getProducer({

    })
    expect(result).toEqual(Constants.ErrorValidation);
});


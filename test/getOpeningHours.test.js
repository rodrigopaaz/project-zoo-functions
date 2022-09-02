const getOpeningHours = require('../src/getOpeningHours');
const { hours } = require('../data/zoo_data');

describe('Testes da função getOpeningHours', () => {
  const closed = 'The zoo is closed';
  const open = 'The zoo is open';
  it('Devido ao horário, retorna que o zoo está fechado', () => {
    const actual = getOpeningHours('Tuesday', '8:00-pm');
    expect(actual).toBe(closed);
  });
  it('retorna que o zoo está em funcionamento', () => {
    const actual = getOpeningHours('Tuesday', '8:00-am');
    expect(actual).toEqual(open);
  });
  it('Se o parametro estiver vazio deverá retornar todos os horários da semana', () => {
    const actual = getOpeningHours();
    const expected = hours;
    expect(actual).toEqual(expected);
  });
  test('Se o dia da semana for inválido deverá retornar um erro', () => {
    const dayError = 'The day must be valid. Example: Monday';
    try {
      getOpeningHours('Erro', '8:00-am');
    } catch (erro) {
      expect(erro.message).toBe(dayError);
    }
  });
  it('A hora deve ser um número entre 0 e 12', () => {
    const error = 'The hour must be between 0 and 12';
    try {
      getOpeningHours('Tuesday', '13:00-am');
    } catch (erro) {
      expect(erro.message).toBe(error);
    }
  });
  it('Os minutos devem estar entre 00 e 59', () => {
    const error = 'The minutes must be between 0 and 59';
    try {
      getOpeningHours('Tuesday', '8:70-am');
    } catch (erro) {
      expect(erro.message).toBe(error);
    }
  });
  it('Verifica se o parametro minutos é um número', () => {
    const error = 'The minutes should represent a number';
    try {
      getOpeningHours('Tuesday', '8:b0-am');
    } catch (erro) {
      expect(erro.message).toBe(error);
    }
  });
  it('Verifica se o motivo da função empty', () => {
    const error = 'The hour should represent a number';
    try {
      getOpeningHours('Monday', 'b:00-am');
    } catch (erro) {
      expect(erro.message).toBe(error);
    }
  });
  it('Verifica se o parametro minutos é um número', () => {
    try {
      getOpeningHours('Tuesday', '8:00-vm');
    } catch (erro) {
      expect(erro.message).toBe('The abbreviation must be \'AM\' or \'PM\'');
    }
  });
  it('Testa a Função empty', () => {
    const expected = getOpeningHours('Monday', '00:00-pm');
    expect(expected).toBe(closed);
  });
  it('Testa a Função fix12 open', () => {
    const expected = getOpeningHours('Tuesday', '12:00-pm');
    expect(expected).toBe('The zoo is open');
  });
  it('Testa a Função fix12 close', () => {
    hours.Sunday.close = 12;
    const expected = getOpeningHours('Sunday', '12:00-am');
    expect(expected).toBe(closed);
  });
  it('Testa a Função fix12 open', () => {
    hours.Sunday.open = 12;
    hours.Sunday.close = 19;
    const expected = getOpeningHours('Sunday', '12:00-pm');
    expect(expected).toBe(open);
  });
});

class Veiculo {
    #chassi;
    #placa;
    #marca;
    #modelo;
    #ano;
    constructor(chassi, placa, marca, modelo, ano){
        this.#chassi = chassi;
        this.#placa = placa;
        this.#marca = marca;
        this.#modelo = modelo;
        this.#ano = ano;
    }

    set setChassi(chassi){
      this.#chassi = chassi; 
    }
    get getChassi(){
        return this.#chassi;
    }
}

function cadastrar(){
    chassi = document.getElementById("chassi").value;
    placa = document.getElementById("placa").value;
    marca = document.getElementById("marca").value;
    modelo = document.getElementById("modelo").value;
    ano = document.getElementById("ano").value;

    let veiculo = new Veiculo(chassi, placa, marca, modelo, ano);

    document.getElementById("painel").innerHTML = `
    <h1>Veículos Cadastrados</h1>
    Chassi: ${veiculo.getChassi}
    
    `
}
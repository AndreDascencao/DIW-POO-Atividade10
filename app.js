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
    set setPlaca(placa){
        this.#placa = placa;
    }
    get getPlaca(){
       return this.#placa; 
    }
    set setMarca(marca){
        this.#marca = marca;
    }

    get getMarca(){
        return  this.#marca;
    }
    set setModelo(modelo){
        this.#modelo = modelo;
    }
    get getModelo(){
        return  this.#modelo;
    }
    set setAno(ano){
        this.#ano = ano;
    }
    get getAno(){
        return  this.#ano;
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
    Chassi: ${veiculo.getChassi}; <div></div>
    Placa: ${veiculo.getPlaca}<div></div>
    Marca: ${veiculo.getMarca}<div></div>
    Modelo: ${veiculo.getModelo}<div></div>
    Ano: ${veiculo.getAno}
    `
}
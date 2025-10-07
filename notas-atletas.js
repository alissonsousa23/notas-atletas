class Atleta{
  constructor(nome,notas){
    this.nome = nome;
    this.notas = notas;
  }
  validarNotas(){
    const notasOrdenadas = [...this.notas].sort((a,b) => a - b);
    const notasValidas = notasOrdenadas.slice(1,notasOrdenadas.length-1);
    return notasValidas;
  }
  somarNotas(){
    return this.validarNotas().reduce((total,atual) => total + atual,0) 
  }
  obterMedia(){
    const media = this.somarNotas() / this.validarNotas().length;
    return Number(media.toFixed(2));
  }
  exibirResultado(){
    console.log(`Atleta: ${this.nome}`);
    console.log(`Notas: ${this.notas.join(", ")}`);
    console.log(`Média Válida: ${this.obterMedia()}`)
  }
 
}
 class Competicao {
    constructor(atletas) {
      this.atletas = atletas.map(a => new Atleta(a.nome,a.notas));
    }
    exibirResultados(){
      console.log("RESULTADOS DA COMPETICAO ")
      return this.atletas.forEach(atleta => atleta.exibirResultado());
    }
  }
const atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }
];
const competicao = new Competicao(atletas);
competicao.exibirResultados();

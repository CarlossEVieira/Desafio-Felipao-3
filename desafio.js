class Hero {
    constructor(Nome, Idade, Tipo) {
      this.nome = Nome;
      this.idade = Idade;
      this.tipo = Tipo;
    }
  
    atacar() {
      const tipos = ["Mago", "Guerreiro", "Monge", "Ninja"];
      const ataques = ["magia", "espada", "artes marciais", "shuriken"];
      
      const index = tipos.findIndex(t => t.toLowerCase() === this.tipo.toLowerCase());
      if (index !== -1) {
        console.log(`O ${this.tipo} atacou usando ${ataques[index]}`);
      } else {
        console.log("Tipo de herói desconhecido");
      }
    }
  }
  
  const hero = new Hero("Naruto", 31, "Ninja");
  hero.atacar();

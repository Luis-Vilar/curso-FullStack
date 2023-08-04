/**
 * Escolhi o  padrão state por que permite que um objeto altere o 
 * seu comportamento quando o seu estado interno muda.
 * O padrão encapsula os estados em classes separadas e 
 * delega as tarefas para o objeto que representa o estado atual.
 */



// Interface 
class EstadoTarefa {
    atualizarEstado(tarefa) { }
    exibirDetalhes(tarefa) { }
}

//estados de tarefas inicio--------------------------------------------------------
class TarefaAFazer extends EstadoTarefa {
    atualizarEstado(tarefa) {
        tarefa.setEstado(new TarefaEmAndamento());
    }

    exibirDetalhes(tarefa) {
        console.log(`Tarefa a fazer: ${tarefa.titulo} - ${tarefa.descricao}`);
    }
}
class TarefaEmAndamento extends EstadoTarefa {
    atualizarEstado(tarefa) {
        tarefa.setEstado(new TarefaConcluida());
    }

    exibirDetalhes(tarefa) {
        console.log(`Tarefa em andamento: ${tarefa.titulo} - ${tarefa.descricao}`);
    }
}
class TarefaConcluida extends EstadoTarefa {
    atualizarEstado(tarefa) {
        console.log('Tarefa já está concluída.');
    }

    exibirDetalhes(tarefa) {
        console.log(`Tarefa concluída: ${tarefa.titulo} - ${tarefa.descricao}`);
    }
}
//estados de tarefas final----------------------------------------------------------

// Classe Tarefa
class Tarefa {
    constructor(titulo, descricao) {
        this.titulo = titulo;
        this.descricao = descricao;
        // Inicializamos a tarefa  no estado "a fazer"
        this.estado = new TarefaAFazer();
    }

    atualizarEstado() {
        this.estado.atualizarEstado(this);
    }

    exibirDetalhes() {
        this.estado.exibirDetalhes(this);
    }

    setEstado(estado) {
        this.estado = estado;
    }
}

// Testes --------------------------------------------------------------------------
const tarefa = new Tarefa("Viagem para uruguay", "Revisão do carro e carta verde.");

tarefa.exibirDetalhes()  // Saída esperada : Tarefa a fazer: Viagem para uruguay - Revisão do carro e carta verde.
tarefa.atualizarEstado() // Mudando estado para => Tarefa em andamento
tarefa.exibirDetalhes()  // Saída esperada : Tarefa em andamento: Viagem para uruguay - Revisão do carro e carta verde.
tarefa.atualizarEstado() // Mudando estado para => Tarefa concluída
tarefa.exibirDetalhes()  // Saída esperada : Tarefa concluída: Viagem para uruguay - Revisão do carro e carta verde.
tarefa.atualizarEstado() // Saída esperada : Tarefa já está concluída.

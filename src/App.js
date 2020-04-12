import React from 'react';
import { Component } from 'react';
import { Card } from './components/card.component';
import './App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      words: [
        { value: 'Picking' },
        { value: 'Expedição' },
        { value: 'Receção' },
        { value: 'Armazenagem' },
        { value: 'Entrega' },
        { value: 'Transporte' },
        { value: 'Fiabilidade' },
        { value: 'Redução de custos' },
        { value: 'Planificação' },
        { value: 'Descarga' },
        { value: 'Registo' },
        { value: 'Inventário' },
        { value: 'Cliente' },
        { value: 'Fornecedor' },
        { value: 'Camião' },
        { value: 'Plataforma' },
        { value: 'Mercadoria' },
        { value: 'Conferir' },
        { value: 'Etiqueta' },
        { value: 'Palete' },
        { value: 'Caixa' },
        { value: 'Conteúdo' },
        { value: 'Stock' },
        { value: 'Guia de Transporte' },
        { value: 'Anomalia' },
        { value: 'Registo' },
        { value: 'Carga' },
        { value: 'Desembalagem' },
        { value: 'Descarga' },
        { value: 'Quantidade' },
        { value: 'Arrumação' },
        { value: 'Referência' },
        { value: 'Espaço' },
        { value: 'Tempo' },
        { value: 'Porta Paletes' },
        { value: 'Separação' },
        { value: 'Distância' },
        { value: 'Tarefa' },
        { value: 'Mão de obra' },
        { value: 'Documentação' },
        { value: 'Pedido' },
        { value: 'Destino' },
        { value: 'Encomenda' },
        { value: 'Prioridade' },
        { value: 'Movimentação' },
        { value: 'Informação' },
        { value: 'Pesagem' },
        { value: 'Área' },
        { value: 'Percurso' },
        { value: 'Estante' },
        { value: 'Escritório' }
      ],
      randomIndex: 0
    };
  }

  componentDidMount() {
    const rndIndex = Math.floor(Math.random() * this.state.words.length);
    this.setState({ randomIndex: rndIndex });
  }

  render() {
    const { randomIndex, words } = this.state;
    return (
      <div className="App">
        <Card word={words[randomIndex]} />
      </div>
    );
  }
}

export default App;

// Importação das dependências necessárias do React
import { useState } from 'react'

// Importação dos componentes criados
import Search from './components/Search'
import Todo from './components/Todo'
import TodoForm from './components/TodoForm'
import Filter from './components/Filter'

// Importação do arquivo CSS para estilização
import "./App.css"

// Definição do componente principal App
function App() {
  // Definição do estado ListTodos e da função setLitsTodos usando o hook useState
  // O estado ListTodos contém a lista de tarefas
  // A função setLitsTodos é usada para atualizar o estado ListTodos
  const [ListTodos, setLitsTodos] = useState([
    {
      id: 1,
      text: "Fazer compras de supermercado",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Estudar JavaScript",
      category: "Estudos",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Preparar apresentação para o trabalho",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 4,
      text: "Fazer exercícios físicos",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 5,
      text: "Ler um livro",
      category: "Estudos",
      isCompleted: false,
    },
  ]);

  // Definição do estado search e da função setSearch usando o hook useState
  // O estado search contém o texto para busca na lista de tarefas
  // A função setSearch é usada para atualizar o estado search
  const [search, setSearch] = useState("");

  // Definição do estado filter e da função setFilter usando o hook useState
  // O estado filter contém o filtro selecionado ("All", "Completed" ou "Incomplete")
  // A função setFilter é usada para atualizar o estado filter
  const [filter, setFilter] = useState("All");

  // Definição do estado sort e da função setSort usando o hook useState
  // O estado sort contém a ordenação selecionada ("Asc" ou "Desc")
  // A função setSort é usada para atualizar o estado sort
  const [sort, setSort] = useState("Asc");

  // Função para adicionar uma nova tarefa à lista de tarefas
  const addTodo = (text, category) => {
    const newTodos = [...ListTodos, {
      id: Math.floor(Math.random() * 1000),
      text,
      category,
      isCompleted: false,
    },
    ];
    setLitsTodos(newTodos);
  };

  // Função para remover uma tarefa da lista de tarefas com base no ID
  const removeTodo = (id) => {
  const newTodos = [...ListTodos];
  const filteredTodos = newTodos.filter((todo) => todo.id !== id ? todo : null);
      setLitsTodos(filteredTodos);
  
  };

  // Função para marcar uma tarefa como concluída ou não concluída com base no ID
  const completeTodo = (id) => {
    const newTodos = [...ListTodos];
    newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo)
    setLitsTodos(newTodos)
  };

  // Renderização do componente App
  return (
    <div className='app'>
      {/* Título do aplicativo */}
      <h1>Lista de Tarefas</h1>

      {/* Componente de busca */}
      <Search search={search} setSearch={setSearch} />

      {/* Componente de filtro */}
      <Filter filter={filter} setFilter={setFilter} setSort = {setSort} />

      {/* Div que contém a lista de tarefas */}
      <div className="listTodo">
        {ListTodos
          // Filtra as tarefas com base no filtro selecionado (filter)
          .filter((ListTodos) => filter === "All" ? true : filter === "Completed" ? ListTodos.isCompleted : !ListTodos.isCompleted)
          // Filtra as tarefas com base no texto de busca (search)
          .filter((ListTodos) => ListTodos.text.toLowerCase().includes(search.toLowerCase()))
          .sort((a,b) =>
            sort === "Asc" ? a.text.localeCompare(b.text) :
            b.text.localeCompare(a.text))
          .map((ListTodos) => (
            // Renderiza cada tarefa usando o componente Todo
            <Todo
              key={ListTodos.id}
              completeTodo={completeTodo}
              ListTodos={ListTodos}
              removeTodo={removeTodo}
            />
          ))}
      </div>

      {/* Componente do formulário para adicionar tarefas */}
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

// Exportação do componente App para que possa ser usado em outras partes da aplicação
export default App;
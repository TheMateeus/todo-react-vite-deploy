import { useState } from "react";

// Componente TodoForm que é usado para adicionar novas tarefas à lista de tarefas
const TodoForm = ({ addTodo }) => {
    // Definição dos estados "value" e "category" usando o hook useState
    // O estado "value" contém o valor do campo de entrada do título da tarefa
    // O estado "category" contém o valor selecionado do campo de seleção da categoria
    const [value, setValue] = useState("");
    const [category, setCategory] = useState("");

    // Função para lidar com o envio do formulário
    const handleSubmit = (e) => {
        e.preventDefault();
        // Verifica se o campo de título ou categoria estão vazios e retorna caso estejam
        if (!value || !category) return;

        // Chama a função "addTodo" passada como propriedade, passando o título e a categoria como parâmetros
        addTodo(value, category);

        // Limpa os campos de título e categoria após o envio do formulário
        setValue("");
        setCategory("");
    };

    // Renderização do componente TodoForm
    return (
        <div className='to-doForm'>
            {/* Título do formulário */}
            <h2>Criar Tarefa</h2>

            {/* Formulário para adicionar novas tarefas */}
            <form onSubmit={handleSubmit}>
                {/* Campo de entrada para o título da tarefa */}
                <input
                    type="text"
                    placeholder='Digite o título'
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />

                {/* Campo de seleção para a categoria da tarefa */}
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="">Selecione uma categoria</option>
                    <option value="Trabalho">Trabalho</option>
                    <option value="Pessoal">Pessoal</option>
                    <option value="Estudos">Estudos</option>
                </select>

                {/* Botão para criar uma nova tarefa */}
                <button type='submit'>Criar Tarefa</button>
            </form>
        </div>
    );
};

// Exportação do componente TodoForm para que possa ser usado em outras partes da aplicação
export default TodoForm;
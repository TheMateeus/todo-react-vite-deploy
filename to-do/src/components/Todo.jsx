import { useState } from 'react';
import DeleteConfirmation from './DeleteConfirmation';


const Todo = ({ ListTodos, removeTodo, completeTodo }) => {

    // Classe de estilo para a cor de fundo quando a tarefa estiver concluída
const completedBackground = ListTodos.isCompleted ? { backgroundColor: "#dc2020" } : {};

// Texto do botão "Concluído" dependendo do estado da tarefa
const buttonText = ListTodos.isCompleted ? "Cancelar" : "Completar";


const [isConfirmationOpen, setConfirmationOpen] = useState(false);

// Componente Todo que representa uma tarefa na lista de tarefas
    return (
        <div className="todos" style={{ backgroundColor: ListTodos.isCompleted ? "#36b55e" : "" }}>
            {/* Div que contém o conteúdo da tarefa */}
            <div className="content">
                {/* Parágrafo que mostra o texto da tarefa */}
                <p>{ListTodos.text}</p>

                {/* Parágrafo que mostra a categoria da tarefa */}
                <p className="category">({ListTodos.category})</p>
            </div>

            {/* Div que contém os botões de Concluído e Remover */}
            <div>
                {/* Botão para marcar a tarefa como concluída ou não concluída */}
                <button style={completedBackground} className='complete' onClick={() => completeTodo(ListTodos.id)}>{buttonText}</button>

                {/* Botão para remover a tarefa */}
                <button className='remove' onClick={() => setConfirmationOpen(true)}>X</button>
            </div>
            <DeleteConfirmation 
            isOpen={isConfirmationOpen} text={ListTodos.text} onCancel= {()=> setConfirmationOpen(false)} onConfirm={()=> {
                removeTodo(ListTodos.id, ListTodos.text);
                setConfirmationOpen(false);
            }}/>
        </div>
    );
};

// Exportação do componente Todo para que possa ser usado em outras partes da aplicação
export default Todo;
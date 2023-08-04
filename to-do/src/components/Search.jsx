// Importação da biblioteca React (não necessária aqui, mas útil caso o código seja ampliado)
import React from 'react';

// Componente Search que é usado para realizar pesquisas na lista de tarefas
// Recebe as propriedades "search" (texto de busca) e "setSearch" (função para atualizar o texto de busca)
const Search = ({ search, setSearch }) => {
    // Renderização do componente Search
    return (
        <div className='search'>
            {/* Título do campo de pesquisa */}
            <h2>Pesquisar:</h2>

            {/* Campo de entrada para digitar o texto de busca */}
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Digite para pesquisar ..."
            />
        </div>
    );
};

// Exportação do componente Search para que possa ser usado em outras partes da aplicação
export default Search;
// Importação da biblioteca React (não necessária aqui, mas útil caso o código seja ampliado)
import React from 'react';

// Componente Filter que é usado para filtrar as tarefas
// Recebe as propriedades "filter" e "setFilter"
const Filter = ({filter, setFilter, setSort}) => {

    // Renderização do componente Filter
    return (
        <div className="filter">
            {/* Título do filtro */}
            <h2>Filtrar:</h2>

            {/* Div que contém as opções de filtro */}
            <div className="option">
                {/* Opção de filtro por status */}
                <div>
                    <p>Status:</p>
                    {/* Seletor (dropdown) para selecionar o filtro por status */}
                    <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                        <option value="All">Todas</option>
                        <option value="Completed">Completas</option>
                        <option value="Incomplete">Incompletas</option>
                    </select>
                </div>

                {/* Opção para ordenar alfabeticamente */}
                <div>
                    <p>Ordem alfabética:</p>
                    {/* Botões para ordenar ascendentemente ou descendentemente (ainda não implementados) */}
                    <div className="mobile">
                    <button onClick={()=> setSort("Asc")}>Asc</button>
                    <button onClick={()=> setSort("Desc")}>Desc</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Exportação do componente Filter para que possa ser usado em outras partes da aplicação
export default Filter;
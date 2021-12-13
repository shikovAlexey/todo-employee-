import './filter.css';

const Filter = ({ onToggleFilter, filter }) => {

    const buttons = [
        { name: 'all', label: 'Все сотрудники' },
        { name: 'promotion', label: 'На повышение' },
        { name: 'salary', label: 'З/П больше 1000$' }
    ];

    const buttonsElements = buttons.map(({ name, label }) => {
        const activeClass = (name === filter) ? 'btn btn-outline-light' : 'btn btn-light';
        return (
            <button
                className={activeClass}
                type='button'
                key={name}
                onClick={() => onToggleFilter(name)}
            >
                {label}
            </button>
        );
    });

    return (
        <div className='btn-group'>
            {buttonsElements}
        </div>
    );
};

export default Filter;
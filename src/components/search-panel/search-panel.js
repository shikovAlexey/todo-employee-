import './search-panel.css';

const SearchPanel = ({ searchEployee }) => {

    const onChangeValue = (e) => {
        searchEployee(e.target.value);
    }

    return (
        <input
            type='text'
            className='form-control search-input'
            placeholder='Найти сотрудника'
            onChange={onChangeValue}
        />
    );
};

export default SearchPanel;
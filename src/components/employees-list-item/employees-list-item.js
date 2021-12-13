import './employees-list-item.css';

const EmployeesListItem = ({ firstName, lastName, salary, deleteItem, onPromotion, onIncrease, id, changeMoneyCount }) => {

    let liClassName = 'list-group-item d-flex justify-content-between';

    if (onPromotion) {
        liClassName += liClassName + ' increase like';
    };

    const moneyValue = (e) => {
        changeMoneyCount(id, e.target.value);
    };
    return (

        <li className={liClassName}>
            <span className='list-group-item-label' onClick={onIncrease}>{`${firstName} ${lastName}`} </span>
            <span className='dollar list-group-item-input'>
                <input type='text' className='list-group-item-input' defaultValue={salary} onChange={moneyValue} />$
            </span>
            <div className='d-flex justify-content-center align-items-center'>
                <button type='button'
                    className='btn btn-cookie btn-sm'
                    onClick={onIncrease}
                >
                    <i className='fas fa-cookie' />
                </button>
                <button type='button'
                    className='btn btn-trash btn-sm' onClick={deleteItem} >
                    <i className='fas fa-trash' />
                </button>
                <i className='fas fa-star ' />
            </div>
        </li>
    );
};

export default EmployeesListItem;
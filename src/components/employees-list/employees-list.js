import './employees-list.css';
import EmployeesListItem from '../employees-list-item';
import { Component } from 'react/cjs/react.production.min';

export default class EmployeesList extends Component {

    render() {
        const { persons, deleteItem, onPromotion, changeMoneyCount } = this.props;

        if (persons.length === 0) {
            return <h4 className='add-employees'>Добавьте сотрудников через форму ниже.</h4>
        }

        const elements = persons.map((item) => {

            const { id } = item;

            return <EmployeesListItem
                changeMoneyCount={changeMoneyCount}
                {...item}
                onIncrease={() => onPromotion(id)}
                deleteItem={() => deleteItem(id)}
                key={id}
            />
        });

        return (
            <ul className='app-list list-group' >
                {elements}
            </ul>
        );
    };
};

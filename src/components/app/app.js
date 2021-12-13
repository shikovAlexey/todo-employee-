import './app.css';
import Info from '../info';
import SearchPanel from '../search-panel';
import Filter from '../filter';
import EmployeesList from '../employees-list';
import EmployeesAddForm from '../employees-add-form';
import { Component } from 'react/cjs/react.production.min';

export default class App extends Component {
    maxId = 10;

    state = {
        persons: [
            { firstName: 'Dmitry', lastName: 'Golovin', salary: 700, id: 1, onPromotion: false },
            { firstName: 'Alexey', lastName: 'Suvorov', salary: 1900, id: 2, onPromotion: true },
            { firstName: 'Pavel', lastName: 'Aruytiniyan', salary: 195, id: 3, onPromotion: true },
            { firstName: 'Stanislav', lastName: 'Semenov', salary: 2450, id: 4, onPromotion: false }
        ],
        term: '',
        filter: 'all'
    };

    onPromotion = (id) => {
        const { persons } = this.state;
        this.setState(() => {
            const index = persons.findIndex((item) => item.id === id);
            const oldItem = persons[index];
            const newItem = { ...oldItem, onPromotion: !oldItem.onPromotion };
            const newArr = [...persons.slice(0, index), newItem, ...persons.slice(index + 1)];
            return {
                persons: newArr
            }
        });
    }

    onSearch = (text) => {
        this.setState({ term: text })
    };

    search = (text, items) => {

        if (text === '') {
            return items;
        }
        return items.filter((item) => {
            return item.lastName.toLowerCase().indexOf(text.toLowerCase()) > -1
                || item.firstName.toLowerCase().indexOf(text.toLowerCase()) > -1;
        });
    };

    onToggleFilter = (filterName) => {
        this.setState({ filter: filterName })
    };

    filter = (items, filter) => {

        if (filter === 'all') {
            return items;
        }
        if (filter === 'promotion') {
            return items.filter((item) => item.onPromotion)
        }
        if (filter === 'salary') {
            return items.filter((item) => item.salary > 1000)
        };
    };

    onDelete = (id) => {
        this.setState({ persons: this.state.persons.filter((item) => item.id !== id) })
    };

    onAddEmployee = (firstName, lastName, salary) => {
        const newEmployee = {
            firstName,
            lastName,
            salary,
            id: this.maxId++,
            onPromotion: false
        };
        this.setState(({ persons }) => {
            const newPersons = [...persons, newEmployee];
            return {
                persons: newPersons
            };
        });
    };

    changeMoneyCount = (id, value, prop) => {

        this.setState(({ persons }) => {
            const arr = persons;
            const index = persons.findIndex((item) => id === item.id);
            arr[index].salary = value;
            return {
                persons: arr
            }
        });
    };

    render() {

        const { persons, term, filter } = this.state
        const searchItems = this.filter(this.search(term, persons), filter);
        const increseEmployees = persons.filter((item) => item.onPromotion).length;

        return (
            <div className='app' >
                <Info employees={persons.length} increseEmployees={increseEmployees} />
                <div className='search-panel'>
                    <SearchPanel searchEployee={this.onSearch} />
                    <Filter onToggleFilter={this.onToggleFilter} filter={filter} />
                </div>
                <EmployeesList
                    persons={searchItems}
                    deleteItem={this.onDelete}
                    onPromotion={this.onPromotion}
                    changeMoneyCount={this.changeMoneyCount}
                />
                <EmployeesAddForm add={this.onAddEmployee} />
            </div>
        );
    }
};

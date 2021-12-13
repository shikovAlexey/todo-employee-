import { Component } from 'react/cjs/react.production.min';
import './employees-add-form.css';

export default class EmployeesAddForm extends Component {

    state = {
        firstName: '',
        lastName: '',
        salary: ''
    };

    onValueChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { firstName, lastName, salary } = this.state;
        this.props.add(firstName, lastName, salary);
    };

    onKeyDownNumber(event) {
        if (isNaN(String.fromCharCode(event.keyCode)) && (event.keyCode !== 8 && event.keyCode !== 46)) {
            return event.preventDefault();
        };
    };

    onKeyDownText(event) {
        if (!isNaN(String.fromCharCode(event.keyCode)) && (event.keyCode !== 8 && event.keyCode !== 46)) {
            return event.preventDefault();
        };
    };

    render() {

        const { firstName, lastName, salary } = this.state;

        return (
            <div className='app-add-form'>
                <h3>Добавьте нового сотрудника</h3>
                <form className='add-form d-flex align-items-center' onSubmit={this.onSubmit}>
                    <input type='text'
                        required
                        className='form-control new-post-label'
                        placeholder='Введите имя'
                        onChange={this.onValueChange}
                        name='firstName'
                        value={firstName}
                        onKeyDown={(event) => this.onKeyDownText(event)}
                    />
                    <input type='text'
                        required
                        className='form-control new-post-label'
                        placeholder='Введите Фамилию'
                        onChange={this.onValueChange}
                        name='lastName'
                        value={lastName}
                        onKeyDown={(event) => this.onKeyDownText(event)}
                    />
                    <input type='number'
                        required
                        className='form-control new-post-label'
                        placeholder='З/П в $?'
                        onChange={this.onValueChange}
                        name='salary'
                        value={salary}
                        onKeyDown={(event) => this.onKeyDownNumber(event)}
                    />
                    <button type="submit"
                        className='btn btn-outline-light'>Добавить</button>
                </form>
            </div>
        );
    };
};



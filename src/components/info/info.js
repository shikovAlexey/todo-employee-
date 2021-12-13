import './info.css';

const Info = ({ employees, increseEmployees }) => {
    return (
        <div className='info'>
            <h1>Учет сотрудников в компании 'Devs'</h1>
            <h2> Общее число сотрудников: {employees}</h2>
            <h3>Премию получат: {increseEmployees}</h3>
        </div>
    );
};

export default Info;
import { useState, useEffect } from 'react';
import '../assets/Tabla.css';

const Tabla = ({ titulo, data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(4);
  const [searchDate, setSearchDate] = useState('');
  const [uniqueDates, setUniqueDates] = useState([]);
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    const dates = data.map(item => item.date);
    const uniqueDates = Array.from(new Set(dates));
    setUniqueDates(uniqueDates);
    setFilteredData(data);
  }, [data]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearch = () => {
    if (searchDate) {
      const filteredData = data.filter(item => item.date === searchDate);
      setFilteredData(filteredData);
      setCurrentPage(1);
    } else {
      setFilteredData(data);
    }
  };

  const resetSearch = () => {
    setSearchDate('');
    setFilteredData(data);
  };

  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentItems = filteredData.slice(firstIndex, lastIndex);

  return (
    <div className="tabla-container">
      <h2>{titulo}</h2>
      <div className="form-custom">
        <label className="mr-2 buscar">Buscar por fecha:</label>
        <select value={searchDate} onChange={(e) => setSearchDate(e.target.value)}>
          <option value="">Seleccione una fecha</option>
          {uniqueDates.map((date, index) => (
            <option key={index} value={date}>{date}</option>
          ))}
        </select>
        <button onClick={handleSearch}>Buscar</button>
        <button onClick={resetSearch}>Limpiar</button>
      </div>
      <table className="custom-table">
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Hora</th>
            <th>Temperatura</th>
            <th>Humedad</th>
            <th>Peso</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.time}</td>
              <td>{item.temperature}</td>
              <td>{item.humidity}</td>
              <td>{item.weight}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <nav>
        <ul className="pagination">
          {Array.from({ length: Math.ceil(filteredData.length / itemsPerPage) }).map((_, index) => (
            <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
              <button className="page-link" onClick={() => handlePageChange(index + 1)}>
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Tabla;

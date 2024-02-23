import React, { useState } from 'react';
import Header from './Header';

export default function HomePage() {
  const [portfolios, setPortfolios] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [editingIndex, setEditingIndex] = useState(-1);

  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPortfolio = { name, description };
    if (editingIndex === -1) {
      setPortfolios([...portfolios, newPortfolio]);
    } else {
      const updatedPortfolios = [...portfolios];
      updatedPortfolios[editingIndex] = newPortfolio;
      setPortfolios(updatedPortfolios);
      setEditingIndex(-1);
    }
    setName('');
    setDescription('');
  }

  const handleEdit = (index) => {
    const portfolioToEdit = portfolios[index];
    setName(portfolioToEdit.name);
    setDescription(portfolioToEdit.description);
    setEditingIndex(index);
  }

  const handleRemove = (index) => {
    const updatedPortfolios = [...portfolios];
    updatedPortfolios.splice(index, 1);
    setPortfolios(updatedPortfolios);
    setEditingIndex(-1);
  }

  return (
    <div>
      <Header/>
      <div style={{margin:'20px'}}></div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <br />
        <label>
          Description:
          <textarea value={description} onChange={handleDescriptionChange} />
        </label>
        <br />
        <button type="submit">{editingIndex === -1 ? 'Add' : 'Update'}</button>
        {editingIndex !== -1 && (
          <button type="button" onClick={() => setEditingIndex(-1)}>Cancel</button>
        )}
      </form>
      <ul>
        {portfolios.map((portfolio, index) => (
          <li key={index}>
            <h2>{portfolio.name}</h2>
            <p>{portfolio.description}</p>
            <button className = 'remove-btn' onClick={() => handleEdit(index)}>Edit</button><br></br>
            <button className = 'remove-btn' onClick={() => handleRemove(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

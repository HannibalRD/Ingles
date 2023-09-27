
function Tea() {
  // Datos de ejemplo sobre diferentes tipos de té
  const teaTypes = [
    { name: 'Black Tea', description: 'A strong and bold tea.' },
    { name: 'Green Tea', description: 'A light and refreshing tea.' },
    { name: 'Herbal Tea', description: 'A caffeine-free infusion of herbs and spices.' },
  ];

  return (
    <div className='tea-content'>
      <h1>Types of Tea</h1>
      <ul>
        {teaTypes.map((tea, index) => (
          <li key={index}>
            <h2>{tea.name}</h2>
            <p>{tea.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tea;
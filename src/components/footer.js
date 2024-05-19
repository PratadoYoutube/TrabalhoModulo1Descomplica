import React from 'react';

// Dados mockados para o histórico de tarefas
const completedTasks = [
  { id: 1, task: 'Finalizar relatório', date: '2023-05-01' },
  { id: 2, task: 'Reunião com cliente', date: '2023-05-02' },
  { id: 3, task: 'Enviar e-mail de follow-up', date: '2023-05-03' },
  { id: 4, task: 'Atualizar planilha de vendas', date: '2023-05-04' },
  { id: 5, task: 'Planejar campanha de marketing', date: '2023-05-05' }
];

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <h3 style={styles.heading}>Histórico de Tarefas Concluídas</h3>
      <ul style={styles.list}>
        {completedTasks.map(task => (
          <li key={task.id} style={styles.listItem}>
            <span style={styles.task}>{task.task}</span>
            <span style={styles.date}>{task.date}</span>
          </li>
        ))}
      </ul>
    </footer>
  );
};

// Estilos para o componente
const styles = {
  footer: {
    backgroundColor: '#f8f9fa',
    padding: '20px',
    borderTop: '1px solid #e9ecef',
    textAlign: 'center'
  },
  heading: {
    margin: '0 0 15px',
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#343a40'
  },
  list: {
    listStyleType: 'none',
    padding: 0,
    margin: 0
  },
  listItem: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '8px 0',
    borderBottom: '1px solid #dee2e6'
  },
  task: {
    fontSize: '16px',
  },
  date: {
    fontSize: '14px',
  }
};

export default Footer;

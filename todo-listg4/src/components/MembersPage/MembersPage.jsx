import React from 'react';
const MembersPage = () => {
  const members = [
    { id: 1, name: 'Mauricio Fredes' },
    { id: 2, name: 'Martin Laurito ' },
    { id: 3, name: 'Martínez Luana' },

  ];

  return (
    <div>
      <h2>Lista de Miembros</h2>
      <ul>
        {members.map((member) => (
          <li key={member.id}>{member.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default MembersPage;

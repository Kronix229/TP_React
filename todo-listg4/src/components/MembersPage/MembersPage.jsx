import React from 'react';
const MembersPage = () => {
  const members = [
    { id: 1, name: 'Mauricio Fredes', socials: 'https://www.linkedin.com/in/mauricio-fredes/' },
    { id: 2, name: 'Martin Laurito', socials: 'https://www.linkedin.com/in/martin-laurito-0488aa232/' },
    { id: 3, name: 'Martínez Luana', socials: 'https://www.linkedin.com/in/luanamartinez24/' },

  ];

  return (
    <div className='footer-members'>
      <h5>Miembros Grupo 4 - Argentina Programa</h5>
      <ul className='ul-members'>
        {members.map((member) => (

          <a className='a-members' href={member.socials} target='_blank'>
            <li key={member.id} className='li-members'>{member.name}</li>
          </a>
        
        ))}
      </ul>
    </div>
  );
};

export default MembersPage;

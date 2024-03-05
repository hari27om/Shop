import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@gmail.com',
    password: bcrypt.hashSync('admin', 10),
    isAdmin: true,
  },
  {
    name: 'test',
    email: 'test@gmail.com',
    password: bcrypt.hashSync('test', 10),
  },
  {
    name: 'Hari Om Tripathi',
    email: 'hariomtri27@gmail.com',
    password: bcrypt.hashSync('Csjmu123@', 10),
  },
];

export default users;

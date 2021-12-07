// interface
// optional properties

interface IContact {
  name: string;
  phone: string;
  email?: string;
}

const contacts: IContact[] = [];

const newContact: IContact = {
  name: 'Anh Vu',
  phone: '0123123123',
  email: 'abc@gmail.com',
};

const otherContact: IContact = {
  name: 'Anh Vu',
  phone: '0123123123',
};

contacts.push(newContact);

export {};

interface IPet {
  name: string;
}

interface IContact {
  name: string;
  phone: string;
  email?: string;
  pet?: IPet;
}

const contacts: IContact[] = [];

const newContact: IContact = {
  name: 'Anh Vu',
  phone: '0123123123',
  email: 'abc@gmail.com',
  pet: {
    name: 'micky',
  },
};

const otherContact: IContact = {
  name: 'Anh Vu',
  phone: '0123123123',
};

contacts.push(newContact);

function getPetName(contact: IContact): string {
  return contact.pet?.name || '';
}

console.log(getPetName(newContact));
console.log(getPetName(otherContact));

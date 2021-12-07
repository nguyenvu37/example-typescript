// implement interface

interface IContact {
  name: string;
  phone: string;
  email?: string;
}

class MyContact implements IContact {
  name: string;
  phone: string;

  contructor(name: string, phone: string) {
    this.name = name;
    this.phone = phone;
  }
}

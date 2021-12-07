// extend interface

export {};

interface Button {
  label: string;
  onClick: () => void;
}

const button: Button = {
  label: 'Submit',
  onClick: () => console.log('click'),
};

interface IconButton extends Button {
  icon: string;
}

const addToCart: IconButton = {
  label: 'Submit',
  onClick: () => console.log('click'),
  icon: 'cart-icon',
};

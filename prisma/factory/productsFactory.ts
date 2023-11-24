const products = [
  {
    name: 'BBQ Chicken Sandwich',
    picture: '',
    price: 10.8,
    description:
      'Peito de frango grelhado com molho barbecue, queijo provolone derretido, cebolas caramelizadas e alface em um pão de ciabatta',
    category: 'snacks',
  },
  {
    name: 'Classic Burger',
    picture:
      'https://images.unsplash.com/photo-1627492374790-866c3598f472?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 15.9,
    description:
      'Hambúrguer de carne angus, queijo cheddar, alface, tomate e maionese em pão de brioche',
    category: 'snacks',
  },
  {
    name: 'Bacon Bliss Burger',
    picture:
      'https://images.unsplash.com/photo-1627492374790-866c3598f472?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 17.9,
    description:
      'Hambúrguer com queijo suíço, bacon, cebolas caramelizadas e molho barbecue em pão tostado.',
    category: 'snacks',
  },
  {
    name: 'Vegetarian Delight Burger',
    picture:
      'https://images.unsplash.com/photo-1627492374790-866c3598f472?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 15.9,
    description:
      'Hambúrguer vegetariano de quinoa e feijão preto, queijo de cabra, abacate e molho de iogurte em pão integral.',
    category: 'snacks',
  },
  {
    name: 'Spicy Inferno Burger',
    picture:
      'https://images.unsplash.com/photo-1627492374790-866c3598f472?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 22.9,
    description:
      ' Hambúrguer temperado, queijo pepper jack, jalapeños, cebolas roxas e molho Sriracha em pão de cebola.',
    category: 'snacks',
  },
  {
    name: 'Mushroom Madness Burger',
    picture:
      'https://images.unsplash.com/photo-1627492374790-866c3598f472?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 18.9,
    description:
      'Hambúrguer com cogumelos salteados, queijo suíço, rúcula e maionese trufada em pão de batata.',
    category: 'snacks',
  },
  {
    name: 'Caprese Ciabatta',
    picture:
      'https://images.unsplash.com/photo-1539252554453-80ab65ce3586?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 15.8,
    description:
      'Fatias de tomate fresco, queijo mozzarella, manjericão, regados com azeite de oliva e balsâmico, tudo servido em um pão ciabatta.',
    category: 'snacks',
  },
  {
    name: 'Crispy Fish Fillet',
    picture:
      'https://images.unsplash.com/photo-1539252554453-80ab65ce3586?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 19.9,
    description:
      'Filé de peixe empanado, queijo americano, molho tártaro e alface em um pão de baguete.',
    category: 'snacks',
  },
  {
    name: 'Turkey Avocado Wrap',
    picture:
      'https://images.unsplash.com/photo-1539252554453-80ab65ce3586?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 15.8,
    description:
      'Fatias de peito de peru, abacate, bacon, tomate e alface, envolvidos em uma tortilha de trigo integral.',
    category: 'snacks',
  },
  {
    name: 'Pesto Veggie Delight',
    picture:
      'https://images.unsplash.com/photo-1539252554453-80ab65ce3586?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 18.5,
    description:
      'Abobrinha grelhada, pimentão, cebola vermelha, queijo feta e molho pesto em um pão ciabatta.',
    category: 'snacks',
  },
  {
    name: 'Coca cola zero 220 ml',
    picture:
      'https://images.unsplash.com/photo-1527960392543-80cd0fa46382?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvY2ElMjBjb2xhfGVufDB8fDB8fHww',
    price: 5.9,
    description: 'Coca cola zero açúcar 220 ml',
    category: 'drinks',
  },
  {
    name: 'Coca cola',
    picture:
      'https://images.unsplash.com/photo-1527960392543-80cd0fa46382?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvY2ElMjBjb2xhfGVufDB8fDB8fHww',
    price: 5.9,
    description: 'Coca cola',
    category: 'drinks',
  },
  {
    name: 'Suco de laranja',
    picture:
      'https://images.unsplash.com/photo-1577680716097-9a565ddc2007?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 4.99,
    description: 'Suco natural de laranja geladinho',
    category: 'drinks',
  },
  {
    name: 'Limonada',
    picture:
      'https://images.unsplash.com/photo-1575596510825-f748919a2bf7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGVtb25hZGV8ZW58MHx8MHx8fDA%3D',
    price: 5.9,
    description: 'Limonada bem gelada',
    category: 'drinks',
  },
  {
    name: 'Chá Gelado',
    picture:
      'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2glQzMlQTElMjBnZWxhZG98ZW58MHx8MHx8fDA%3D',
    price: 4.9,
    description: 'Chá mate com gelo',
    category: 'drinks',
  },
  {
    name: 'Batata frita',
    picture:
      'https://images.unsplash.com/photo-1612870424899-843e93e59ec4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGZyZW5jaCUyMGZyaWVzfGVufDB8fDB8fHww',
    price: 8.5,
    description: 'Porção de batata frita',
    category: 'side_dishes',
  },
  {
    name: 'Anéis de cebola',
    picture:
      'https://images.unsplash.com/photo-1639024471283-03518883512d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW4lQzMlQTlpcyUyMGRlJTIwY2Vib2xhfGVufDB8fDB8fHww',
    price: 8.5,
    description: 'Porção de anéis de cebola fritos',
    category: 'side_dishes',
  },
  {
    name: 'Brownie Sundae',
    picture:
      'https://images.unsplash.com/photo-1606884285898-277317a7bf12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJyb3duaWV8ZW58MHx8MHx8fDA%3D',
    price: 8.5,
    description:
      'Um pedaço generoso de brownie quente, coberto com uma bola de sorvete de baunilha, calda de chocolate, chantilly e uma pitada de nozes.',
    category: 'desserts',
  },
  {
    name: 'Cheesecake de Morango',
    picture:
      'https://w7.pngwing.com/pngs/97/894/png-transparent-strawberry-cheesecake-dessert-toast-cake.png',
    price: 8.5,
    description:
      'Cheesecake cremoso com uma cobertura de geleia de morango fresca, servido em uma base de biscoito de chocolate',
    category: 'desserts',
  },
  {
    name: 'Torta de Limão',
    picture:
      'https://www.doceriasaojose.com.br/estatico/doceriasaojose/images/produto/280-2.jpg?v=1529609112',
    price: 8.5,
    description: ' Fatias de torta de limão refrescante.',
    category: 'desserts',
  },
  {
    name: 'Combo Vegetariano',
    picture:
      'https://w7.pngwing.com/pngs/712/425/png-transparent-hamburger-french-fries-cheeseburger-chicken-sandwich-veggie-burger-burger-king-food-recipe-chicken-meat.png',
    price: 30.5,
    description:
      '1 Vegetarian Delight Burger, 1 porção de batata frita, 1 pedaço de Cheesecake de Morango, 1 Suco de laranja',
    category: 'combo',
  },
  {
    name: 'Combo Classic Burger',
    picture:
      'https://w7.pngwing.com/pngs/712/425/png-transparent-hamburger-french-fries-cheeseburger-chicken-sandwich-veggie-burger-burger-king-food-recipe-chicken-meat.png',
    price: 35.4,
    description:
      '1 Classic Burger, 1 porção de Batata Frita, 1 Coca Cola, 1 Brownie Sundae.',
    category: 'combo',
  },
  {
    name: 'Combo Dupla Bacon',
    picture:
      'https://w7.pngwing.com/pngs/712/425/png-transparent-hamburger-french-fries-cheeseburger-chicken-sandwich-veggie-burger-burger-king-food-recipe-chicken-meat.png',
    price: 50.0,
    description:
      '2 hambúrgueres Bacon Bliss Burger, 2 refrigerantes Coca Cola e 2 porções de Batata Frita.',
    category: 'combo',
  },
];

export default products;

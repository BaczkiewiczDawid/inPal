import arrowDown from 'assets/images/arrow-down.png';

export const navItems = [
    {
        id: 1,
        text: 'Category',
        icon: arrowDown,
        subitem: [
            {
                name: 'Boots'
            },
            {
                name: 'Jackets and blazers'
            },
            {
                name: 'Jeans and chinos'
            },
            {
                name: 'Accessories'
            }
        ]
    },
    {
        id: 2,
        text: 'Collection',
        icon: arrowDown,
        subitem: [
            {
                name: 'Spring'
            },
            {
                name: 'Summer'
            },
            {
                name: 'Autumn'
            },
            {
                name: 'Winter'
            }
        ]
    },
    {
        id: 3,
        text: 'Assistance',
        path: '/assistance'
    },
    {
        id: 4,
        text: 'Contact',
        path: '/contact'
    }
];
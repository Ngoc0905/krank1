const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);

export default 
    [
        {
            id: 1,
            time: today,
            sport: "Football",
            label: "Soccer Five Laplace",
            tags: [
                "5vs5",
                "Expert"
            ],
            user: {
                lastName: "de Krank",
                firstName: "Benoit"
            },
            price: 8,
            duration: 90,
            isFull: false
        },
        {
            id: 2,
            time: today,
            sport: "Running",
            label: "Canal de l'ourq",
            tags: [
                "5vs5",
                "Expert",
                "Skilled"
            ],
            user: {
                lastName: "Niels",
                firstName: "Tedd"
            },
            isFull: true
        },
        {
            id: 3,
            time: tomorrow,
            sport: "Basket",
            label: "Hoops Factory",
            tags: [
                "3vs3",
                "Expert",
                "Bon esprit"
            ],
            user: {
                lastName: "Benaudet",
                firstName: "Maria"
            },
            price: 8,
            duration: 90,
            isFull: false
        },
        {
            id: 4,
            time: tomorrow,
            sport: "Tennis",
            label: "Court Niox",
            tags: [
                "Roger"
            ],
            user: {
                lastName: "de Loire",
                firstName: "Christophe"
            },
            price: 8,
            duration: 90,
            isFull: false
        }
    ];
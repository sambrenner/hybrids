const felids = [
    {
        id: 0,
        latinName: "Felis catus",
        commonName: "Domestic cat"
    },
    {
        id: 1,
        latinName: "Prionailurus bengalensis bengalensis",
        commonName: "Asian leopard cat"
    },
    {
        id: 2,
        latinName: "Prionailurus bengalensis euptailura",
        commonName: "Amur leopard cat"
    }
];

const felidHybrids = [
    {
        id: 0,
        parentAId: 0,
        parentBId: 1,
        commonName: "Bengal"
    }
];

const equids = [
    {
        id: 0,
        latinName: "Equus ferus caballus &#9792;",
        commonName: "Horse (female)",
        sameSpeciesAs: 1
    },
    {
        id: 1,
        latinName: "Equus ferus caballus &#9794;",
        commonName: "Horse (male)",
        sameSpeciesAs: 0
    },
    {
        id: 2,
        latinName: "Equus africanus asinus &#9792;",
        commonName: "Donkey (female)",
        sameSpeciesAs: 3
    },
    {
        id: 3,
        latinName: "Equus africanus asinus &#9794;",
        commonName: "Donkey (male)",
        sameSpeciesAs: 2
    },
    {
        id: 4,
        latinName: "Equus zebra, Equus quagga, Equus grevyi &#9792;",
        commonName: "Zebra (female)",
        sameSpeciesAs: 5
    },
    {
        id: 5,
        latinName: "Equus zebra, Equus quagga, Equus grevyi &#9794;",
        commonName: "Zebra (male)",
        sameSpeciesAs: 4
    }
];

const equidHybrids = [
    {
        id: 0,
        parentAId: 0,
        parentBId: 3,
        commonName: "Mule"
    },
    {
        id: 1,
        parentAId: 1,
        parentBId: 2,
        commonName: "Hinny"
    },
    {
        id: 2,
        parentAId: 5,
        parentBId: 0,
        commonName: "Zorse"
    },
    {
        id: 3,
        parentAId: 4,
        parentBId: 1,
        commonName: "Horbra"
    },
    {
        id: 4,
        parentAId: 5,
        parentBId: 2,
        commonName: "Zonkey"
    },
    {
        id: 5,
        parentAId: 4,
        parentBId: 3,
        commonName: "Zedonk"
    }
];

const animals = [
    {
        id: 0,
        latinName: "Homo sapiens &#9792;",
        commonName: "Human (female)",
        sameSpeciesAs: 1
    },
    {
        id: 1,
        latinName: "Homo sapiens &#9794;",
        commonName: "Human (male)",
        sameSpeciesAs: 0
    },
    {
        id: 2,
        latinName: "Equus ferus caballus &#9792;",
        commonName: "Horse (female)",
        sameSpeciesAs: 3
    },
    {
        id: 3,
        latinName: "Equus ferus caballus &#9794;",
        commonName: "Horse (male)",
        sameSpeciesAs: 2
    },
    {
        id: 4,
        latinName: "Equus africanus asinus &#9792;",
        commonName: "Donkey (female)",
        sameSpeciesAs: 5
    },
    {
        id: 5,
        latinName: "Equus africanus asinus &#9794;",
        commonName: "Donkey (male)",
        sameSpeciesAs: 4
    },
    {
        id: 6,
        latinName: "Capra aegagrus hircus &#9792;",
        commonName: "Goat (female)",
        sameSpeciesAs: 7
    },
    {
        id: 7,
        latinName: "Capra aegagrus hircus &#9794;",
        commonName: "Goat (male)",
        sameSpeciesAs: 6
    },
    {
        id: 8,
        latinName: "Aves &#9792;",
        commonName: "Bird (female)",
        sameSpeciesAs: 9
    },
    {
        id: 9,
        latinName: "Aves &#9794;",
        commonName: "Bird (male)",
        sameSpeciesAs: 8
    }
];

const mythologicalHybrids = [
    {
        id: 0,
        parentAId: 0,
        parentBId: 2,
        commonName: "Anggitay",
        reference: "https://en.wikipedia.org/wiki/Anggitay",
        notes: "Sometimes has a horn."
    },
    {
        id: 1,
        parentAId: 0,
        parentBId: 2,
        commonName: "Centauride",
        reference: "https://en.wikipedia.org/wiki/Centaurides"
    },
    {
        id: 2,
        parentAId: 1,
        parentBId: 3,
        commonName: "Centaur",
        reference: "https://en.wikipedia.org/wiki/Centaur"
    },
    {
        id: 3,
        parentAId: 0,
        parentBId: 4,
        commonName: "Onokentaura",
        reference: "https://en.wikipedia.org/wiki/Onocentaur"
    },
    {
        id: 4,
        parentAId: 1,
        parentBId: 5,
        commonName: "Onocentaur",
        reference: "https://en.wikipedia.org/wiki/Onocentaur"
    },
    {
        id: 5,
        parentAId: 0,
        parentBId: 2,
        commonName: "Ipotane",
        reference: "https://en.wikipedia.org/wiki/Ipotane"
    },
    {
        id: 6,
        parentAId: 1,
        parentBId: 3,
        commonName: "Ipotane",
        reference: "https://en.wikipedia.org/wiki/Ipotane"
    },
    {
        id: 7,
        parentAId: 1,
        parentBId: 7,
        commonName: "Satyr",
        reference: "https://en.wikipedia.org/wiki/Satyr"
    },
    {
        id: 8,
        parentAId: 1,
        parentBId: 7,
        commonName: "Faun",
        reference: "https://en.wikipedia.org/wiki/Faun"
    },
    {
        id: 9,
        parentAId: 0,
        parentBId: 6,
        commonName: "Satyress",
        reference: "https://en.wikipedia.org/wiki/Satyress"
    },
    {
        id: 10,
        parentAId: 0,
        parentBId: 8,
        commonName: "Harpy",
        reference: "https://en.wikipedia.org/wiki/Harpy"
    },
    {
        id: 10,
        parentAId: 0,
        parentBId: 8,
        commonName: "Kinnari",
        reference: "https://en.wikipedia.org/wiki/Kinnara"
        },
    {
        id: 10,
        parentAId: 1,
        parentBId: 9,
        commonName: "Kinnara",
        reference: "https://en.wikipedia.org/wiki/Kinnara"
    },
];

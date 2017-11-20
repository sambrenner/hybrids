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
        sameOffspringAs: 1
    },
    {
        id: 1,
        latinName: "Equus ferus caballus &#9794;",
        commonName: "Horse (male)",
        sameOffspringAs: 0
    },
    {
        id: 2,
        latinName: "Equus africanus asinus &#9792;",
        commonName: "Donkey (female)",
        sameOffspringAs: 3
    },
    {
        id: 3,
        latinName: "Equus africanus asinus &#9794;",
        commonName: "Donkey (male)",
        sameOffspringAs: 2
    },
    {
        id: 4,
        latinName: "Equus zebra, Equus quagga, Equus grevyi &#9792;",
        commonName: "Zebra (female)",
        sameOffspringAs: 5
    },
    {
        id: 5,
        latinName: "Equus zebra, Equus quagga, Equus grevyi &#9794;",
        commonName: "Zebra (male)",
        sameOffspringAs: 4
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

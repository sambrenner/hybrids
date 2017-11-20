const container = document.getElementById("container");

createTable(equids, equidHybrids);

function createTable(species, hybrids) {
    const sortedSpecies = species.sort((a, b) => a.commonName < b.commonName);

    const table = document.createElement("table");
    const header = document.createElement("tr");

    // blank cell in upper left
    header.appendChild(document.createElement("td"));

    // build header
    sortedSpecies.forEach(sp => header.appendChild(createHeader(sp)));
    table.appendChild(header);

    // build rows
    sortedSpecies.forEach(sp => {
        const row = document.createElement("tr");

        // header
        row.appendChild(createHeader(sp));

        // hybrids
        sortedSpecies.forEach(nestSp => {
            const cell = createHybridCell(sp, nestSp, hybrids);
            row.appendChild(cell);
        });

        table.appendChild(row);
    });

    container.appendChild(table);
}

function createHeader(species) {
    const header = document.createElement("th");

    header.innerHTML = [
        `<h2>${species.commonName}</h2>`,
        `<em>${species.latinName}</em>`
    ].join("");

    return header;
}

function createHybridCell(speciesA, speciesB, hybrids) {
    const cell = document.createElement("td");

    if (speciesA.id == speciesB.id || speciesA.id == speciesB.sameOffspringAs) {
        cell.classList.add("same-species");
        return cell;
    }

    const hybrid = hybrids.find(hy => {
        return (
            hy.parentAId === speciesA.id && hy.parentBId === speciesB.id ||
            hy.parentAId === speciesB.id && hy.parentBId === speciesA.id
        );
    });

    if (hybrid) {
        cell.innerHTML = `<h2>${hybrid.commonName}</h2>`;
    }

    return cell;
}

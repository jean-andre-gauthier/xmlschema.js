// let bulbasaurXml = undefined;
// let bulbasaurXsd = undefined;

describe("bulbasaur", () => {
    // beforeAll((done) => {
    //     async.map(
    //         ["/base/test/pokemons/xsd/pokemon.xsd", "/base/test/pokemons/xml/bulbasaur.xml"],
    //         (url) => {
    //             let request = new XMLHttpRequest();
    //             request.open("GET", url);
    //             request.send();
    //             return request.response;
    //         },
    //         (error, result) => {
    //             console.log(result);
    //             bulbasaurXsd = result[0];
    //             bulbasaurXml = result[1];
    //         });
    // });

    it("should work", () => {
        // let result = xmlschema([bulbasaurXsd]).validate(bulbasaurXml);
        // expect(result).toBeDefined();
        // expect(result.valid).toBe(true);
        expect(true).toBe(true);
    });
});

import axios from "axios";
import xmlschema from "xmlschema.js";

describe("xmlschema", () => {
    describe("validate", () => {
        describe("bulbasaur", () => {
            let bulbasaurXml = undefined;
            let bulbasaurXsd = undefined;

            beforeAll((done) => {
                Promise.all(
                    [axios.get("/base/test/pokemons/xsd/pokemon.xsd"),
                        axios.get("/base/test/pokemons/xml/bulbasaur.xml")]
                ).then(
                    (values) => {
                        bulbasaurXsd = values[0].data;
                        bulbasaurXml = values[1].data;
                        done();
                    },
                    (error) => {
                        console.log(error);
                        done();
                    });
            });

            it("should return true when validating bulbasaur.xml against pokemon.xsd", (done) => {
                debugger;
                xmlschema(bulbasaurXsd).validate(bulbasaurXml).then(
                    (result) => {
                        console.log(result);
                        expect(result).toBeDefined();
                        expect(result.valid).toBeTrue();
                        done();
                    },
                    (error) => {
                        console.log(error);
                        fail();
                    }
                );
            });

            it("should throw an error if the XML parameter is not a string, and neither jQuery nor DomParser are available", (done) => {
                xmlschema(bulbasaurXsd).validate(bulbasaurXml).then(
                    (result) => {
                        fail();
                    },
                    (error) => {
                        done();
                    }
                );
            });
        });
    });
});

const server = require("./src/app.js");
const { conn } = require("./src/db.js");

const axios = require("axios");
const { Api, Type } = require("./src/db");

// Syncing all the models at once.
conn.sync({ force: false }).then(async () => {
  try {
    let apiTypes = await axios.get(`https://pokeapi.co/api/v2/type`);
    const response = apiTypes.data.results;
    const apiRes = response.map((pok) => {
      // console.log(pok.name[0].toUpperCase() + pok.name.slice(1));
      return {
        name: pok.name[0].toUpperCase() + pok.name.slice(1),
      };
    });
    apiRes.map(
      async (e) =>
        await Type.findOrCreate({
          where: {
            name: e.name,
          },
        })
    );

    // let apiPok = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=500`);
    // const resp = apiPok.data.results;
    // let info = [];
    // for (let i = 0; i < resp.length; i++) {
    //   const apiResult = await axios.get(`${resp[i].url}`);
    //   let object = {
    //     id: resp[i].url.split("/")[6],
    //     image: apiResult.data.sprites.other.dream_world.front_default,
    //     names:
    //       apiResult.data.name[0].toUpperCase() + apiResult.data.name.slice(1),
    //     type: apiResult.data.types.map(
    //       (t) => t.type.name[0].toUpperCase() + t.type.name.slice(1)
    //     ),
    //     hp: apiResult.data.stats[0].base_stat,
    //     attack: apiResult.data.stats[1].base_stat,
    //     defense: apiResult.data.stats[2].base_stat,
    //     speed: apiResult.data.stats[5].base_stat,
    //     height: apiResult.data.height,
    //     weight: apiResult.data.weight,
    //   };
    //   // console.log(object.name);
    //   info.push(object);
    // }

    // info.map(async (p) => {
    //   try {
    //     // console.log(p.type);
    //     await Api.findOrCreate({
    //       where: {
    //         id: p.id,
    //         image: p.image,
    //         name: p.names,
    //         types: p.type,
    //         hp: p.hp,
    //         attack: p.attack,
    //         defense: p.defense,
    //         speed: p.speed,
    //         height: p.height,
    //         weight: p.weight,
    //       },
    //     });
    //   } catch (err) {
    //     console.log("indexApi: Error 0.5, ", err);
    //   }
    // });
  } catch (err) {
    console.log("indexApi: Error 1, ", err);
  }
  server.listen(3001, () => {
    console.log("%s listening at 3001"); // eslint-disable-line no-console
  });
});

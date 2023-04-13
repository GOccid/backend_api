import rMort from "../models/rm.js";

export const getrMorts = async (req, res) => {
  try {
    const mortRick = await rMort.find();
    res.json(mortRick);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const getrMort = async (req, res) => {
  try {
    const character = await rMort.findById(req.params.id);
    res.json(character);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};



// export const getTeam = async (req, res) => {
//   try {
//     const { id } = req.params;

//     const ballplayer = await Ballplayer.find({"team.full_name": req.params.id});
//     res.json(ballplayer);
//   } catch (error) {
//     console.log(error.message);
//     res.status(500).json({ error: error.message });
//   }
// };

export const createrMort = async (req, res) => {
  try {
    const mortRick = new rMort(req.body);
    await mortRick.save();
    res.json(mortRick);
  } catch (error) {
    console.log(error.message);
    res.status(201).json({ error: error.message });
  }
};

export const updaterMort = async (req, res) => {
  const { id } = req.params;
  const Morty = await rMort.findByIdAndUpdate(id, req.body);
  res.status(200).json(Morty);
};

export const deleterMort = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await rMort.findByIdAndDelete(id);

    if (deleted) {
      return res.status(200).send("Character Deleted");
    }

    throw new Error("Character not found");
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};
const { Registro } = require("../db");

const getRegisters = async (req, res) => {
  try {
    let registers;
    if (req.user.isAdmin) {
      // Admin puede ver todos los registros
      registers = await Registro.findAll({
        order: [["createdAt", "DESC"]],
      });
    } else {
      // Usuario regular solo puede ver sus propios registros
      registers = await Registro.findAll({
        where: { usuarioId: req.user.id },
        order: [["createdAt", "DESC"]],
      });
    }
    return res.status(200).json({ registers });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: "Error al obtener los registros" });
  }
};

module.exports = getRegisters;

const { Registro } = require("../db");
const sendEmail = require('../middlewares/emailService');
const generateEmailTemplate = require('../middlewares/emailTemplate')

const postRegister = async (registerData) => {
    try {
        const { usuarioId, origen, destino, cp_origen, cp_destino, direccion_origen, direccion_destino, estado_origen, estado_destino, unidad, peso, dimensiones, cantidad_skids, userEmail, type_of_requirement, hazmat, fecha_hora_origen, fecha_hora_destino, un, clas  } = registerData;

        const origenAbreviado = origen.slice(0, 1).toUpperCase();
        const destinoAbreviado = destino.slice(0, 1).toUpperCase();
        const cp_OrigenAbreviado = cp_origen.slice(0, 1);
        const cp_DestinoAbreviado = cp_destino.slice(0, 2);

        const cleanAddress = (address) => {
            return address.replace(/[^a-zA-Z0-9\s]/g, '')
                          .split(" ")
                          .map(word => word.charAt(0).toUpperCase())
                          .join("");
        };

        const direccionOrigen = cleanAddress(direccion_origen);
        const direccionDestino = cleanAddress(direccion_destino);

        const combinedId = `${origenAbreviado}${cp_OrigenAbreviado}${direccionOrigen}${destinoAbreviado}${cp_DestinoAbreviado}${direccionDestino}${cantidad_skids}`;

        if (combinedId.length > 255) {
            throw new Error('El ID combinado es demasiado largo.');
        }

        const newRegister = await Registro.create({
            id: combinedId,
            origen,
            cp_origen,
            direccion_origen,
            estado_origen,
            fecha_hora_origen,
            destino,
            cp_destino,
            direccion_destino,
            estado_destino,
            fecha_hora_destino,
            type_of_requirement,
            hazmat,
            unidad,
            peso,
            dimensiones,
            cantidad_skids,
            usuarioId,
            un,
            clas
        });

        // Enviar correo después de crear el registro
        const remitente = userEmail;
        const destinatario = 'eduardo_risk13@hotmail.com';
        const subject = 'Nuevo Registro Posteado';
        const html = generateEmailTemplate(registerData);
        sendEmail(remitente, destinatario, subject, html);

        return newRegister;
    } catch (error) {
        if (error.name === 'SequelizeValidationError') {
            console.error('Validation Error:', error.errors);
        } else {
            console.error('Error:', error.message);
        }
        throw error;
    }
}

module.exports = postRegister;
const generateEmailTemplate = (data) => {
    return `
        <html>
        <head>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f4f4f4;
                    margin: 0;
                    padding: 0;
                }
                .container {
                    width: 100%;
                    max-width: 600px;
                    margin: 40px auto;
                    background-color: #ffffff;
                    border-radius: 10px;
                    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
                    overflow: hidden;
                    padding: 20px;
                    border: 1px solid #e0e0e0;
                }
                .header {
                    background-color: #000;
                    color: white;
                    text-align: center;
                    padding: 20px;
                    border-radius: 10px 10px 0 0;
                }
                .header h1 {
                    margin: 0;
                    font-size: 24px;
                }
                .content {
                    padding: 20px;
                }
                .section {
                    margin-bottom: 20px;
                }
                .section h2 {
                    margin-top: 0;
                    font-size: 18px;
                    color: #000;
                    border-bottom: 2px solid #000;
                    padding-bottom: 5px;
                }
                .section p {
                    margin: 10px 0;
                    color: #333333;
                    font-size: 14px;
                }
                .section p strong {
                    color: #000;
                }
                .footer {
                    text-align: center;
                    padding: 10px;
                    background-color: #f4f4f4;
                    border-top: 1px solid #e0e0e0;
                    font-size: 12px;
                    color: #777777;
                }
                .footer p {
                    margin: 0;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>Bill of Lading</h1>
                </div>
                <div class="content">
                    <div class="section">
                        <h2>User</h2>
                        <p><strong>Usuario:</strong> ${data.userName}</p>
                        <p><strong>Usuario:</strong> ${data.userEmail}</p>
                    </div>
                    <div class="section">
                        <h2>Pick Up</h2>
                        <p><strong>Origin:</strong> ${data.origen}</p>
                        <p><strong>CP:</strong> ${data.cp_origen}</p>
                        <p><strong>Address:</strong> ${data.direccion_origen}</p>
                        <p><strong>State:</strong> ${data.estado_origen}</p>
                        <p><strong>Departure:</strong> ${fecha_hora_origen}</p>
                    </div>
                    <div class="section">
                        <h2>Delivery</h2>
                        <p><strong>Destiny:</strong> ${data.destino}</p>
                        <p><strong>CP:</strong> ${data.cp_destino}</p>
                        <p><strong>Address:</strong> ${data.direccion_destino}</p>
                        <p><strong>State:</strong> ${data.estado_destino}</p>
                    </div>
                    <div class="section">
                        <h2>Cuotes</h2>
                        <p><strong>Weight:</strong> ${data.peso} kg</p>
                        <p><strong>Dimensions:</strong> ${data.dimensiones}</p>
                        <p><strong>Skids:</strong> ${data.cantidad_skids}</p>
                        <p><strong>Type of requirement:</strong> ${data.type_of_requirement}</p>
                        <p><strong>Hazmat:</strong> ${data.un} ${data.clas} </p>
                        <p><strong>Departure:</strong> ${data.fecha_hora_origen}</p>
                        <p><strong>Arrival:</strong> ${data.fecha_hora_destino}</p>
                    </div>
                </div>
                <div class="footer">
                    <p>Este es un correo generado automáticamente, por favor no responda a este mensaje.</p>
                </div>
            </div>
        </body>
        </html>
    `;
};

module.exports = generateEmailTemplate;

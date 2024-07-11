const Pool = require("../../config/pg")

const getProveedores = async () => {
    const query = "SELECT * FROM proveedores";
    const proveedores = await Pool.query(query, []);
    return proveedores;
}

const getProveedoresId = async ( id = "")=>{
    const query = "SELECT  * FROM usuarios WHERE id = $1"
    const parametros = [id]
    const proveedores = await Pool.query(query, parametros);
    return proveedores;
}



module.exports = {
    getProveedores,
    getProveedoresId,
}
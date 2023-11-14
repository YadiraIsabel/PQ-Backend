export const validateSchema = (schema) => (req, res, next) => {
    try {
        //recibe schema para validar (usuarios, poductos)
        //se valida con shema.parse
        schema.parse(req.body)
        next();//execcion sin errores
    } catch (error) {
        // console.log(error);
        return res.status(400).json({
            message: error.errors.map((error) =>
                error.message
            )
        })
    }
}
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    TextField,
    MenuItem,
    Select,
    InputLabel,
    FormControl,
} from "@mui/material";

const EditarProduct = ({ editProducto, productoEditado, setProductoEditado }) => {
    const { register, handleSubmit, setValue, reset } = useForm();
    const [open, setOpen] = useState(true);

    useEffect(() => {
        if (productoEditado) {
            console.log("Datos de productoEditado en useEffect:", productoEditado);
            setValue("nombre", productoEditado.nombre || "");
            setValue("descripcion", productoEditado.descripcion || "");
            setValue("categoria_id", productoEditado.categoria_id || "");
            setValue("proveedor_id", productoEditado.proveedor_id || "");
            setValue("cantidad_actual", productoEditado.cantidad_actual || "");
            setValue("precio_por_gramo", productoEditado.precio_por_gramo || "");
        } else {
            reset();
        }
    }, [productoEditado, setValue, reset]);

    const handleClose = () => {
        setOpen(false);
        setProductoEditado(null);
    };

    const onSubmit = async (data) => {
        console.log("Datos del formulario:", data);
        console.log("Producto editado antes de la actualización:", productoEditado);

        if (!productoEditado || !productoEditado.producto_id) {
            console.error("ID del producto no está definido", productoEditado);
            return;
        }

        const cantidad_actual = parseFloat(data.cantidad_actual) || 0;
        const precio_por_gramo = parseFloat(data.precio_por_gramo) || 0;
        const categoria_id = parseFloat(data.categoria_id) || 0;
        const proveedor_id = parseFloat(data.proveedor_id) || 0;

        const datos = {
            ...data,
            cantidad_actual,
            precio_por_gramo,
            categoria_id,
            proveedor_id,
        };

        try {
            console.log("Datos a enviar a la API:", datos);
            await editProducto(productoEditado.producto_id, datos);
            handleClose();
        } catch (error) {
            console.error("Error al editar el producto:", error);
        }
    };

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Editar Producto</DialogTitle>
            <DialogContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <TextField
                        {...register("nombre", { required: true })}
                        label="Nombre"
                        variant="outlined"
                        fullWidth
                    />
                    <TextField {...register("descripcion")} label="Descripción" variant="outlined" fullWidth />
                    <FormControl fullWidth variant="outlined">
                        <InputLabel id="categoria-label">Categoría</InputLabel>
                        <Select
                            {...register("categoria_id", { required: true })}
                            labelId="categoria-label"
                            label="Categoría"
                            defaultValue={productoEditado ? productoEditado.categoria_id : ""}>
                            <MenuItem value={1}>Esencia</MenuItem>
                            <MenuItem value={2}>Otra categoría</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl fullWidth variant="outlined">
                        <InputLabel id="proveedor-label">Proveedor</InputLabel>
                        <Select
                            {...register("proveedor_id", { required: true })}
                            labelId="proveedor-label"
                            label="Proveedor"
                            defaultValue={productoEditado ? productoEditado.proveedor_id : ""}>
                            <MenuItem value={1}>David</MenuItem>
                            <MenuItem value={2}>Juan</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        {...register("cantidad_actual", { valueAsNumber: true, required: true })}
                        label="Cantidad Actual"
                        variant="outlined"
                        type="number"
                        fullWidth
                    />
                    <TextField
                        {...register("precio_por_gramo", { valueAsNumber: true, required: true })}
                        label="Precio por Gramo"
                        variant="outlined"
                        type="number"
                        fullWidth
                    />
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Cancelar
                        </Button>
                        <Button type="submit" color="primary">
                            Guardar
                        </Button>
                    </DialogActions>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default EditarProduct;



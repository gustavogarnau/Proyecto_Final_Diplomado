import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from "@mui/material";

const EditarProduct = ({ editProducto, productoEditado, setProductoEditado }) => {
    const { register, handleSubmit, reset, setValue, getValues } = useForm();
    const [open, setOpen] = useState(true);

    useEffect(() => {
        if (productoEditado) {
            setValue("nombre", productoEditado.nombre || "");
            setValue("descripcion", productoEditado.descripcion || "");
            setValue("cantidad_actual", productoEditado.cantidad_actual || "");
            setValue("precio_por_gramo", productoEditado.precio_por_gramo || "");
        } else {
            reset();
        }
    }, [productoEditado, setValue, reset]);

    const handleClose = () => {
        setOpen(false);
        setProductoEditado(null); // Limpia el producto editado al cerrar
    };

    const onSubmit = async (data) => {
        // Convertir campos numéricos a números, asegurando que no sean undefined
        const cantidad_actual = parseFloat(data.cantidad_actual) || 0;
        const precio_por_gramo = parseFloat(data.precio_por_gramo) || 0;

        const datos = {
            ...data,
            cantidad_actual,
            precio_por_gramo,
        };

        try {
            await editProducto(productoEditado.id, datos);
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
                </form>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancelar
                </Button>
                <Button onClick={handleSubmit(onSubmit)} color="primary">
                    Guardar
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default EditarProduct;

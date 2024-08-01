import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    TextField,
} from "@mui/material";

const EditarProveedores = ({ editProveedores, proveedoresEditado, setProveedoresEditado }) => {
    const { register, handleSubmit, setValue, reset } = useForm();
    const [open, setOpen] = useState(true);

    useEffect(() => {
        if (proveedoresEditado) {
            console.log("Datos de proveedoresEditado en useEffect:", proveedoresEditado);
            setValue("nombre", proveedoresEditado.nombre || "");
            setValue("contacto", proveedoresEditado.contacto || "");
            setValue("telefono", proveedoresEditado.telefono || "");
            setValue("direccion", proveedoresEditado.direccion || "");
        } else {
            reset();
        }
    }, [proveedoresEditado, setValue, reset]);

    const handleClose = () => {
        setOpen(false);
        setProveedoresEditado(null);
    };

    const onSubmit = async (data) => {
        console.log("Datos del formulario:", data);
        console.log("Producto editado antes de la actualización:", proveedoresEditado);


         if (!proveedoresEditado || !proveedoresEditado.proveedor_id) {
             console.error("ID del producto no está definido", proveedoresEditado);
             return;
         }

        const telefono = parseFloat(data.telefono) || 0;

        const datos = {
            ...data,
            telefono,
        };

        try {
            console.log("Datos a enviar a la API:", datos);
            await editProveedores(proveedoresEditado.proveedor_id, datos);
            handleClose();
        } catch (error) {
            console.error("Error al editar el producto:", error);
        }
    };

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Editar Proveedores</DialogTitle>
            <DialogContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <TextField
                        {...register("nombre", { required: true })}
                        label="Nombre"
                        variant="outlined"
                        fullWidth
                    />
                    <TextField
                        {...register("contacto", { required: true })}
                        label="Contacto"
                        variant="outlined"
                        fullWidth
                    />

                    <TextField
                        {...register("telefono", { valueAsNumber: true, required: true })}
                        label="Telefono"
                        variant="outlined"
                        type="number"
                        fullWidth
                    />
                    <TextField
                        {...register("direccion", { required: true })}
                        label="Direccion"
                        variant="outlined"
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

export default EditarProveedores;

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

const EditarCategoria = ({ editCategoria, categoriaEditado, setCategoriasEditado }) => {
    const { register, handleSubmit, setValue, reset } = useForm();
    const [open, setOpen] = useState(true);

    useEffect(() => {
        if (categoriaEditado) {
            console.log("Datos de categoriaEditado en useEffect:", categoriaEditado);
            setValue("nombre", categoriaEditado.nombre || "");
        } else {
            reset();
        }
    }, [categoriaEditado, setValue, reset]);

    const handleClose = () => {
        setOpen(false);
        setCategoriasEditado(null);
    };

    const onSubmit = async (data) => {
        console.log("Datos del formulario:", data);
        console.log("Categoría editada antes de la actualización:", categoriaEditado);

        if (!categoriaEditado || !categoriaEditado.categoria_id) {
            console.error("ID de la categoría no está definida", categoriaEditado);
            return;
        }

        const datos = {
            ...data,
        };

        try {
            console.log("Datos a enviar a la API:", datos);
            await editCategoria(categoriaEditado.categoria_id, datos);
            handleClose();
        } catch (error) {
            console.error("Error al editar la categoría:", error);
        }
    };

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Editar Categoría</DialogTitle>
            <DialogContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <TextField
                        {...register("nombre", { required: true })}
                        label="Nombre"
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

export default EditarCategoria;

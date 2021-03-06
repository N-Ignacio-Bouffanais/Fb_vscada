import mongoose from 'mongoose'

const MaquinaSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Por favor ingrese título"],
  },
  plot: {
    type: String,
    required: [true, "Por favor ingrese descripción"],
  },
  ubicacion: {
    type: String,
    required: [true, "Ingrese la ubicacion"],
  }

})

export default mongoose.models.Maquina || mongoose.model('Maquina', MaquinaSchema);
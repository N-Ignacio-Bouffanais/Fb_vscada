import conectarDB from "../../../lib/DB.Connect";
import Maquina from "../../../models/Maquina_model";

export default async function handler(req, res) {
  
  await conectarDB();

  //Get api/vscada/:id  (obtener un id y listarlo)

  const {method, query:{ id }} = req 

  switch(method){
    case 'GET':
      try {
        const maquina = await Maquina.findById(id).lean();
        if(!maquina) {
            return res.status(404).json({ success: false })
        }
        return res.json({ success : true , data: maquina})

      } catch (error) {
        return res.status(404).json({ success: false })
      }
    default:
      return res.status(500).json({success: false, error: "Falla del servidor"});
  }
}

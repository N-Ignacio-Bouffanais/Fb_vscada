import conectarDB from "../../lib/DB.Connect";
import Maquina from '../../models/Maquina_model';

export default async function handler(req, res) {
  
  await conectarDB()

  //POST api/vscada
  const {method} = req 
  switch(method){
    case 'POST':
      try {
        
        const maquina = new Maquina(req.body);
        await maquina.save();

        return res.status(200).json({success: true, maquina});

      } catch (error) {
        return res.status(400).json({success: false, error});
      }
    default:
      return res.status(500).json({success: false, error: "Falla del servidor"});
  }
}

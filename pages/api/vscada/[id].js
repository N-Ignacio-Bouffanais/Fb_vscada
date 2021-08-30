import conectarDB from "../../../lib/DB.Connect";
import Maquina from "../../../models/Maquina_model";

export default async function handler(req, res) {

  //GET api/vscada/:id  (obtener un id y listarlo)
  //DELETE api/vscada/:id  (elimina un documento por id)
  //PUT api/vscada/:id  (modificar un documento por id)

  const { method, query: { id } } = req;
  await conectarDB();

  switch (method) {
    case "PUT":
      try {
        const maquina = await Maquina.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!maquina) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: maquina });
      } catch (error) {
        res.status(400).json({ success: false, error });
      }
    case "DELETE":
      try {
        const deletedmaquina = await Maquina.deleteOne({_id:id});
        if (!deletedmaquina) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'GET':
      try {
        const maquina = await Maquina.findById(id).lean();
        if (!maquina) {
          return res.status(404).json({ success: false });
        }
        return res.json({ success: true, data: maquina });

      } catch (error) {
        return res.status(404).json({ success: false });
      }

    default:
      return res.status(500).json({ success: false, error: "Falla del servidor" });
  }
}

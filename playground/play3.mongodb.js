
// Select the database to use.
use('oesia1');
//db.facturas.find();
//db.facturas.countDocuments();
var lista=db.facturas.find().toArray();
var listaModificada= lista.map((elemento)=> {
        
        elemento.importe=elemento.importe+1;
        return elemento;
        
}).forEach(elemento => {

    db.facturas.updateOne({_id: elemento._id},{"$set":{importe:elemento.importe}});
    //db.facturas.update(elemento);
});



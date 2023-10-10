
// Select the database to use.
use('oesia1');
//db.facturas.find();
//db.facturas.countDocuments();
var lista=db.facturas.find().toArray();
lista.forEach(elemento => {
    
    console.log("******");
    console.log(elemento.concepto);
    console.log(elemento.importe);
    console.log("******");

});


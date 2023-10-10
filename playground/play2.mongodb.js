
// Select the database to use.
use('oesia1');
//db.facturas.find();
//db.facturas.countDocuments();
var lista=db.facturas.find().toArray();
lista.map(elemento=> {

        return elemento.concepto;

}).forEach(elemento => {
    
    console.log("******");
    console.log(elemento);
    console.log("******");

});


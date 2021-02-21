const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const { Logger } = require('mongodb');
const { ElastiCache } = require('aws-sdk');
const { localsName } = require('ejs');

const app = express();
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
var division_name="";
let monthNames = ["Jan", "Feb", "Mar", "Apr",
    "May", "Jun", "Jul", "Aug",
    "Sep", "Oct", "Nov", "Dec"];

const parrupuSchema = {
    product_name:String,
    division_name:String,
    one_kg:Number,
    mukal_kg:Number,
    arai_kg:Number,
    kal_kg:Number,
    nuru_kg:Number,
    last_updated:String
}
const arisiSchema = {
    product_name: String,
    division_name: String,
    one_kg: Number,
    mukal_kg: Number,
    arai_kg: Number,
    kal_kg: Number,
    nuru_kg: Number,
    last_updated: String
}
const kaikariSchema = {
    product_name: String,
    division_name: String,
    one_kg: Number,
    mukal_kg: Number,
    arai_kg: Number,
    kal_kg: Number,
    nuru_kg: Number,
    last_updated: String
}
const oilSchema = {
    product_name: String,
    division_name: String,
    one_kg: Number,
    mukal_kg: Number,
    arai_kg: Number,
    kal_kg: Number,
    nuru_kg: Number,
    last_updated: String
}
const vegSchema = {
    product_name: String,
    division_name: String,
    one_kg: Number,
    mukal_kg: Number,
    arai_kg: Number,
    kal_kg: Number,
    nuru_kg: Number,
    last_updated: String
}
const cowfoodSchema = {
    product_name: String,
    division_name: String,
    one_kg: Number,
    mukal_kg: Number,
    arai_kg: Number,
    kal_kg: Number,
    nuru_kg: Number,
    last_updated: String
}
const sandSchema = {
    product_name: String,
    division_name: String,
    one_kg: Number,
    mukal_kg: Number,
    arai_kg: Number,
    kal_kg: Number,
    nuru_kg: Number,
    last_updated: String
}
const bisicutSchema = {
    product_name: String,
    division_name: String,
    one_kg: Number,
    mukal_kg: Number,
    arai_kg: Number,
    kal_kg: Number,
    nuru_kg: Number,
    last_updated: String
}
const soapSchema = {
    product_name: String,
    division_name: String,
    one_kg: Number,
    mukal_kg: Number,
    arai_kg: Number,
    kal_kg: Number,
    nuru_kg: Number,
    last_updated: String
}
const masalaSchema = {
    product_name: String,
    division_name: String,
    one_kg: Number,
    mukal_kg: Number,
    arai_kg: Number,
    kal_kg: Number,
    nuru_kg: Number,
    last_updated: String
}
const speicesSchema = {
    product_name: String,
    division_name: String,
    one_kg: Number,
    mukal_kg: Number,
    arai_kg: Number,
    kal_kg: Number,
    nuru_kg: Number,
    last_updated: String
}
const accessSchema = {
    product_name: String,
    division_name: String,
    one_kg: Number,
    mukal_kg: Number,
    arai_kg: Number,
    kal_kg: Number,
    nuru_kg: Number,
    last_updated: String
}
const kandanSchema = {
    name :String,
    Amount : Number,
    date :String
}

mongoose.connect("mongodb+srv://maher:1O6mcFuaI9x5m7Ms@cluster0.ebuik.mongodb.net/ponmani_store", { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set('useFindAndModify', false);
const Parrupu = mongoose.model('Parrupu', parrupuSchema);
const Arisi = mongoose.model('Arisi', arisiSchema);
const Oil = mongoose.model('Oil', oilSchema);
const Veg = mongoose.model('Veg', vegSchema);
const Cow = mongoose.model("Cow",cowfoodSchema);
const Sand = mongoose.model("Snad",sandSchema);
const Bis = mongoose.model('Bis',bisicutSchema);
const Soap = mongoose.model('Soap',soapSchema);
const Masala = mongoose.model("Masala",masalaSchema);
const Speices = mongoose.model('Speices',speicesSchema);
const Access = mongoose.model('Access',accessSchema);
const Kadan = mongoose.model('Kadan',kandanSchema)

app.get("/",async function(req,res){
    console.log("hello");
    const par = await Parrupu.countDocuments();
    const ari = await Arisi.countDocuments();
    const veg = await Veg.countDocuments();
    const oill = await Oil.countDocuments();
    const coww = await Cow.countDocuments();
    const san = await Sand.countDocuments();
    const mas = await Masala.countDocuments();
    const spi = await Speices.countDocuments();
    const acc = await Access.countDocuments();
    res.render("index",{
        par: par,
         ari: ari,
         veg :veg,
         oill :oill,
         coww  :coww,
         san: san,
         mas :mas ,
         spi: spi,
         acc :acc
    })
});

app.get("/kadan",function(req,res){
    Kadan.find({}, function (err, found) {
        if (err) {
            console.log(err);
        }
        else {
            res.render("kadan", { Products: found});
        }
    });
})

app.get("/billing",function(req,res){
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const day = today.getDate();
    res.render("billing",{date: day+"-"+monthNames[month]+"-"+year})
})

app.get("/parrupu-products", function (req, res) {
     if (division_name ==="பருப்பு வகைகள்"){
        Parrupu.find({}, function (err, found) {
            if (err) {
                console.log(err);
            }
            else {
                res.render("parrupu_products", { Products: found, division:division_name });
    }
});
} 
   else if (division_name === "அரிசி வகைகள்") {
        Arisi.find({}, function (err, found) {
            if (err) {
                console.log(err);
            }
            else {
                res.render("parrupu_products", { Products: found,division:division_name });
            }
        });
    } 

     else if (division_name === "எண்ணெய் வகைகள்") {
        Oil.find({}, function (err, found) {
            if (err) {
                console.log(err);
            }
            else {
                res.render("parrupu_products", { Products: found, division: division_name });
            }
        });
    } 
     else if (division_name === "காய்கறி வகைகள்") {
         Veg.find({}, function (err, found) {
             if (err) {
                 console.log(err);
             }
             else {
                 res.render("parrupu_products", { Products: found, division: division_name });
             }
         });
     } 
     else if (division_name === "மாட்டு தீவனம் வகைகள்") {
        Cow.find({}, function (err, found) {
            if (err) {
                console.log(err);
            }
            else {
                res.render("parrupu_products", { Products: found, division: division_name });
            }
        });
    } 
     else if (division_name === "பத்தி & உப்பு வகைகள்") {
        Sand.find({}, function (err, found) {
            if (err) {
                console.log(err);
            }
            else {
                res.render("parrupu_products", { Products: found, division: division_name });
            }
        });
    } 
     else if (division_name === "இனங்கள் வகைகள்") {
        Speices.find({}, function (err, found) {
            if (err) {
                console.log(err);
            }
            else {
                res.render("parrupu_products", { Products: found, division: division_name });
            }
        });
    } 
     else if (division_name === "துணைக்கருவிகள் வகைகள்") {
        Access.find({}, function (err, found) {
            if (err) {
                console.log(err);
            }
            else {
                res.render("parrupu_products", { Products: found, division: division_name });
            }
        });
    } 
     else if (division_name === "மசாலா வகைகள்") {
        Masala.find({}, function (err, found) {
            if (err) {
                console.log(err);
            }
            else {
                res.render("parrupu_products", { Products: found, division: division_name });
            }
        });
    } 
});   
app.get("/parrupu",function(req,res){
    if (division_name ==="பருப்பு வகைகள்"){
       Parrupu.find({},function(err,found){
        if(err){
            console.log(err);
        }
        else{
            res.render("parrupu", { Products: found, division:division_name});  
        }
    }) 
    }
    else if (division_name ==="அரிசி வகைகள்"){
        Arisi.find({}, function (err, found) {
            if (err) {
                console.log(err);
            }
            else {
                res.render("parrupu", { Products: found, division: division_name });
            }
        }) 
    }
    else if (division_name === "காய்கறி வகைகள்") {
       Veg.find({}, function (err, found) {
            if (err) {
                console.log(err);
            }
            else {
                res.render("parrupu", { Products: found, division: division_name });
            }
        })
    }
    else if (division_name === "எண்ணெய் வகைகள்") {
        Oil.find({}, function (err, found) {
            if (err) {
                console.log(err);
            }
            else {
                res.render("parrupu", { Products: found, division: division_name });
            }
        })
    }
    else if (division_name === "மாட்டு தீவனம் வகைகள்") {
        Cow.find({}, function (err, found) {
            if (err) {
                console.log(err);
            }
            else {
                res.render("parrupu", { Products: found, division: division_name });
            }
        })
    }
    else if (division_name === "பத்தி & உப்பு வகைகள்") {
        Sand.find({}, function (err, found) {
            if (err) {
                console.log(err);
            }
            else {
                res.render("parrupu", { Products: found, division: division_name });
            }
        })
    }
    else if (division_name === "இனங்கள் வகைகள்") {
        Speices.find({}, function (err, found) {
            if (err) {
                console.log(err);
            }
            else {
                res.render("parrupu", { Products: found, division: division_name });
            }
        })
    }
    else if (division_name === "மசாலா வகைகள்") {
        Masala.find({}, function (err, found) {
            if (err) {
                console.log(err);
            }
            else {
                res.render("parrupu", { Products: found, division: division_name });
            }
        })
    }
    else if (division_name === "துணைக்கருவிகள் வகைகள்") {
        Access.find({}, function (err, found) {
            if (err) {
                console.log(err);
            }
            else {
                res.render("parrupu", { Products: found, division: division_name });
            }
        })
    }
    else{
        res.render("parrupu", { Products: [], division: division_name});
    }
    
    
});
app.post("/product_select",function(req,res){
    division_name = req.body.division_name;
    res.redirect("/parrupu");
})

app.post("/parrupu_name",function(req,res){
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const day = today.getDate();
    if (division_name === "பருப்பு வகைகள்") {
    const parrupu = new Parrupu({
        product_name: req.body.product_name,
        division_name: "பருப்பு வகைகள்",
        one_kg: 0,
        mukal_kg: 0,
        arai_kg: 0,
        kal_kg: 0,
        nuru_kg: 0,
        last_updated : day+"-"+monthNames[month]+"-"+year,
        rate: 0,
        last_eg_updated: day + "-" + monthNames[month] + "-" + year
    });
    parrupu.save(function (err) {
        if (err) {
            console.log(err);
        }
        else {
            res.redirect("/parrupu")
        }
    })
    }
    else if (division_name ==="அரிசி வகைகள்")
    {
        const arisi = new Arisi({
            product_name: req.body.product_name,
            division_name: "அரிசி வகைகள்",
            one_kg: 0,
            mukal_kg: 0,
            arai_kg: 0,
            kal_kg: 0,
            nuru_kg: 0,
            last_updated: day + "-" + monthNames[month] + "-" + year
        });
        arisi.save(function (err) {
            if (err) {
                console.log(err);
            }
            else {
                res.redirect("/parrupu")
            }
        })
    }
    else if (division_name === "காய்கறி வகைகள்") {
        const veg = new Veg({
            product_name: req.body.product_name,
            division_name: "காய்கறி வகைகள்",
            one_kg: 0,
            mukal_kg: 0,
            arai_kg: 0,
            kal_kg: 0,
            nuru_kg: 0,
            last_updated: day + "-" + monthNames[month] + "-" + year
        });
        veg.save(function (err) {
            if (err) {
                console.log(err);
            }
            else {
                res.redirect("/parrupu")
            }
        })
    }
    else if (division_name === "எண்ணெய் வகைகள்") {
        const oil = new Oil({
            product_name: req.body.product_name,
            division_name: "எண்ணெய் வகைகள்",
            one_kg: 0,
            mukal_kg: 0,
            arai_kg: 0,
            kal_kg: 0,
            nuru_kg: 0,
            last_updated: day + "-" + monthNames[month] + "-" + year
        });
        oil.save(function (err) {
            if (err) {
                console.log(err);
            }
            else {
                res.redirect("/parrupu")
            }
        })
    }
    else if (division_name === "மாட்டு தீவனம் வகைகள்") {
        const cow = new Cow({
            product_name: req.body.product_name,
            division_name: "மாட்டு தீவனம் வகைகள்",
            one_kg: 0,
            mukal_kg: 0,
            arai_kg: 0,
            kal_kg: 0,
            nuru_kg: 0,
            last_updated: day + "-" + monthNames[month] + "-" + year
        });
        cow.save(function (err) {
            if (err) {
                console.log(err);
            }
            else {
                res.redirect("/parrupu")
            }
        })
    }
    else if (division_name === "பத்தி & உப்பு வகைகள்") {
        const sand = new Sand({
            product_name: req.body.product_name,
            division_name: "பத்தி & உப்பு வகைகள்",
            one_kg: 0,
            mukal_kg: 0,
            arai_kg: 0,
            kal_kg: 0,
            nuru_kg: 0,
            last_updated: day + "-" + monthNames[month] + "-" + year
        });
        sand.save(function (err) {
            if (err) {
                console.log(err);
            }
            else {
                res.redirect("/parrupu")
            }
        })
    }
    else if (division_name === "இனங்கள் வகைகள்") {
        const spieces = new Speices({
            product_name: req.body.product_name,
            division_name: "இனங்கள் வகைகள்",
            one_kg: 0,
            mukal_kg: 0,
            arai_kg: 0,
            kal_kg: 0,
            nuru_kg: 0,
            last_updated: day + "-" + monthNames[month] + "-" + year
        });
        spieces.save(function (err) {
            if (err) {
                console.log(err);
            }
            else {
                res.redirect("/parrupu")
            }
        })
    }
    else if (division_name === "மசாலா வகைகள்") {
        const masala = new Masala({
            product_name: req.body.product_name,
            division_name: "மசாலா வகைகள்",
            one_kg: 0,
            mukal_kg: 0,
            arai_kg: 0,
            kal_kg: 0,
            nuru_kg: 0,
            last_updated: day + "-" + monthNames[month] + "-" + year
        });
        masala.save(function (err) {
            if (err) {
                console.log(err);
            }
            else {
                res.redirect("/parrupu")
            }
        })
    }
    else if (division_name === "துணைக்கருவிகள் வகைகள்") {
        const access = new Access({
            product_name: req.body.product_name,
            division_name: "துணைக்கருவிகள் வகைகள்",
            one_kg: 0,
            mukal_kg: 0,
            arai_kg: 0,
            kal_kg: 0,
            nuru_kg: 0,
            last_updated: day + "-" + monthNames[month] + "-" + year
        });
        access.save(function (err) {
            if (err) {
                console.log(err);
            }
            else {
                res.redirect("/parrupu")
            }
        })
    }
    
})
app.post("/kadan-new",function(req,res){
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const day = today.getDate();
    
    const kadan = new Kadan({
        name: req.body.name,
        Amount:req.body.Amount,
        date: day+ "-"+ monthNames[month] + "-"+ year
    });
    kadan.save(function (err) {
        if (err) {
            console.log(err);
        }
        else {
            res.redirect("/kadan")
        }
    })
    })


app.post("/parrupu",function(req,res){
    
    const id = req.body.UniqueId;
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const day = today.getDate();
    
         const per = {
        one_kg: req.body.rate_o,
        mukal_kg: req.body.rate_s,
        arai_kg: req.body.rate_f,
        kal_kg: req.body.rate_t,
        nuru_kg: req.body.rate_h,
        last_updated: day + "-" + monthNames[month] + "-" + year
     }
     if (division_name ==="பருப்பு வகைகள்"){
    Parrupu.findByIdAndUpdate(id, per, function (err) {
        if (err) {
            console.log(err);
        }
        else {
            res.redirect("/parrupu");
        }
    })
    }
    else if (division_name ==="அரிசி வகைகள்"){
         Arisi.findByIdAndUpdate(id, per, function (err) {
             if (err) {
                 console.log(err);
             }
             else {
                 res.redirect("/parrupu");
             }
         })
    }
     else if (division_name === "காய்கறி வகைகள்") {
         Veg.findByIdAndUpdate(id, per, function (err) {
             if (err) {
                 console.log(err);
             }
             else {
                 res.redirect("/parrupu");
             }
         })
     }
     else if (division_name === "எண்ணெய் வகைகள்") {
         Oil.findByIdAndUpdate(id, per, function (err) {
             if (err) {
                 console.log(err);
             }
             else {
                 res.redirect("/parrupu");
             }
         })
     }
     else if (division_name === "மாட்டு தீவனம் வகைகள்") {
         Cow.findByIdAndUpdate(id, per, function (err) {
             if (err) {
                 console.log(err);
             }
             else {
                 res.redirect("/parrupu");
             }
         })
     }
     else if (division_name === "பத்தி & உப்பு வகைகள்") {
         Sand.findByIdAndUpdate(id, per, function (err) {
             if (err) {
                 console.log(err);
             }
             else {
                 res.redirect("/parrupu");
             }
         })
     }
     else if (division_name === "இனங்கள் வகைகள்") {
         Speices.findByIdAndUpdate(id, per, function (err) {
             if (err) {
                 console.log(err);
             }
             else {
                 res.redirect("/parrupu");
             }
         })
     }
     else if (division_name === "மசாலா வகைகள்") {
         Masala.findByIdAndUpdate(id, per, function (err) {
             if (err) {
                 console.log(err);
             }
             else {
                 res.redirect("/parrupu");
             }
         })
     }
     else if (division_name === "துணைக்கருவிகள் வகைகள்") {
         Access.findByIdAndUpdate(id, per, function (err) {
             if (err) {
                 console.log(err);
             }
             else {
                 res.redirect("/parrupu");
             }
         })
     }
})



// DIVISION_SELECTION
app.post("/par",function(req,res){
    division_name = req.body.product_name;
    res.redirect("/parrupu-products")
})
// app.post("/par", function (req, res) {
//     console.log("req.body");
// })
// app.post("/par", function (req, res) {
//     console.log("req.body");
// })
// app.post("/par", function (req, res) {
//     console.log("req.body");
// })
// app.post("/par", function (req, res) {
//     console.log("req.body");
// })
// app.post("/par", function (req, res) {
//     console.log("req.body");
// })

// Remove_product
app.post("/remove_kadan",function(req,res){
    const UniqueId = req.body.remo;
    Kadan.deleteOne({ _id: UniqueId }, function (err) {
        if (err) {
            console.log(err);
        }
        else {
            res.redirect("/kadan");
        }
    })
})

app.post("/remove_product",function(req,res){
    const UniqueId = req.body.remo;
    console.log(UniqueId);
    if (division_name ==="அரிசி வகைகள்"){
    Arisi.deleteOne({_id:UniqueId}, function (err) {
        if (err) {
            console.log(err);
        }
        else {
            res.redirect("/parrupu");
        }
    })
    }
    else if (division_name ==="பருப்பு வகைகள்"){
        Parrupu.deleteOne({ _id: UniqueId }, function (err) {
            if (err) {
                console.log(err);
            }
            else {
                res.redirect("/parrupu");
            }
        }) 
    }
    else if (division_name === "எண்ணெய் வகைகள்") {
        Oil.deleteOne({ _id: UniqueId }, function (err) {
            if (err) {
                console.log(err);
            }
            else {
                res.redirect("/parrupu");
            }
        })
    }
    
    else if (division_name === "காய்கறி வகைகள்") {
        Veg.deleteOne({ _id: UniqueId }, function (err) {
            if (err) {
                console.log(err);
            }
            else {
                res.redirect("/parrupu");
            }
        })
    }
    else if (division_name === "மாட்டு தீவனம் வகைகள்") {
        Cow.deleteOne({ _id: UniqueId }, function (err) {
            if (err) {
                console.log(err);
            }
            else {
                res.redirect("/parrupu");
            }
        })
    }
    else if (division_name === "பத்தி & உப்பு வகைகள்") {
       Sand.deleteOne({ _id: UniqueId }, function (err) {
            if (err) {
                console.log(err);
            }
            else {
                res.redirect("/parrupu");
            }
        })
    }
    else if (division_name === "மசாலா வகைகள்") {
        Masala.deleteOne({ _id: UniqueId }, function (err) {
            if (err) {
                console.log(err);
            }
            else {
                res.redirect("/parrupu");
            }
        })
    }
    else if (division_name === "இனங்கள் வகைகள்") {
        Speices.deleteOne({ _id: UniqueId }, function (err) {
            if (err) {
                console.log(err);
            }
            else {
                res.redirect("/parrupu");
            }
        })
    }
    else if (division_name === "துணைக்கருவிகள் வகைகள்") {
        Access.deleteOne({ _id: UniqueId }, function (err) {
            if (err) {
                console.log(err);
            }
            else {
                res.redirect("/parrupu");
            }
        })
    }
   
})

app.post("/product_select",function(req,res){
    division_name=req.body.division_name;
    res.redirect("/parrupu")
})

process.on("unhandledRejection",err =>{
    console.log(`Send this to error tracking : ${err.stack}`);
    console.log("--------------------");
})
let port = process.env.PORT;
if (port == null || port == "") {
    port = 3000;
}
app.listen(port, function () {
    console.log("Server started on port");
});
// apikey
// 614f7e7968267ac180b4a9f5f1304076-us18
//listid
//5f2c834509

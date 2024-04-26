const arrayProducts = [
    {"id":1,"imagen":"https://res.cloudinary.com/dyzoubfmd/image/upload/v1712352178/SportyMaxx/products/mhsshxuylhwy0kafsqui.jpg", "imagenSecundaria":"https://res.cloudinary.com/dyzoubfmd/image/upload/v1712352178/SportyMaxx/products/mhsshxuylhwy0kafsqui.jpg" ,"nombre":"Billetera Negra","precio":5624,
    "categories": ["accesorios", "billeteras", "vcp"] ,"discount":15, "initialPrice":6467.6,"stock": 22},
    {"id":2,"imagen":"https://res.cloudinary.com/dyzoubfmd/image/upload/v1712352177/SportyMaxx/products/fouitgp96xvtpvqmu3ps.jpg","imagenSecundaria": "https://res.cloudinary.com/dyzoubfmd/image/upload/v1712720157/SportyMaxx/products/imagen2producto9_mk9uio.jpg","nombre":"Pantalón VCP","precio":4724,
    "categories": ["pantalones", "algodón", "destacado", "vcp"], "discount": 20, "initialPrice":5668.8,"stock": 15, "count": 1},
    {"id":9,"imagen":"https://res.cloudinary.com/dyzoubfmd/image/upload/v1712352176/SportyMaxx/products/fg1khhuqpb6z4x68xf4r.jpg","imagenSecundaria": "https://res.cloudinary.com/dyzoubfmd/image/upload/v1712352176/SportyMaxx/products/jpyx4e9rmuvcqhvv73mg.jpg","nombre":"Buzo VCP","precio":2520,
    "categories": ["buzos", "sin-capucha", "destacado", "vcp"], "stock": 11, "count": 1},
    {"id":3,"imagen":"https://res.cloudinary.com/dyzoubfmd/image/upload/v1712352177/SportyMaxx/products/okf48ts5coldmcr8is7m.jpg","imagenSecundaria":"https://res.cloudinary.com/dyzoubfmd/image/upload/v1712352177/SportyMaxx/products/okf48ts5coldmcr8is7m.jpg","nombre":"Cinto VCP negro","precio":4049,
    "categories": ["accesorios", "cintos", "vcp"] , "stock": 28},
    {"id":4,"imagen":"https://res.cloudinary.com/dyzoubfmd/image/upload/v1712352177/SportyMaxx/products/wedhovberhsssxm0wuwu.jpg","imagenSecundaria": "https://res.cloudinary.com/dyzoubfmd/image/upload/v1712720143/SportyMaxx/products/imagen2lompa_f8ycpc.jpg","nombre":"Pantalón VCP gris","precio":2940,
    "categories": ["pantalones", "algodón", "vcp"], "stock": 2, "count": 1},
    {"id":5,"imagen":"https://res.cloudinary.com/dyzoubfmd/image/upload/v1712352176/SportyMaxx/products/jydljjbasubbina5qorg.jpg","imagenSecundaria":"https://res.cloudinary.com/dyzoubfmd/image/upload/v1712352176/SportyMaxx/products/jydljjbasubbina5qorg.jpg","nombre":"Gorro VCP negro","precio":4274,
    "categories": ["accesorios", "gorros", "vcp"],"stock": 9},
    {"id":6,"imagen":"https://res.cloudinary.com/dyzoubfmd/image/upload/v1712352176/SportyMaxx/products/ioe8j3ssvafhuclzcfif.jpg","imagenSecundaria":"https://res.cloudinary.com/dyzoubfmd/image/upload/v1712352176/SportyMaxx/products/ioe8j3ssvafhuclzcfif.jpg","nombre":"Buzo","precio":3915,
    "categories": ["buzos", "con-capucha", "vcp"] ,"discount": 25, "initialPrice":4893.75,"stock": 20},
    {"id":7,"imagenSecundaria":"https://res.cloudinary.com/dyzoubfmd/image/upload/v1712352176/SportyMaxx/products/txte2aqq1xh8i9hxkbyh.jpg","imagen": "https://res.cloudinary.com/dyzoubfmd/image/upload/v1712720151/SportyMaxx/products/imagen2buzo_pdsb7x.jpg","nombre":"Buzo VCP azul","precio":1469,
    "categories": ["buzos", "con-capucha", "vcp"], "stock": 19, "count": 1},
    {"id":8,"imagen":"https://res.cloudinary.com/dyzoubfmd/image/upload/v1712352176/SportyMaxx/products/fkph0nxoj1upvvvu27m1.jpg","imagenSecundaria":"https://res.cloudinary.com/dyzoubfmd/image/upload/v1712352176/SportyMaxx/products/fkph0nxoj1upvvvu27m1.jpg","nombre":"Buzo VCP rosado","precio":2376,
    "categories": ["buzos", "con-capucha", "vcp"] ,"stock": 11},
    {"id": 10, "imagen": "https://res.cloudinary.com/dyzoubfmd/image/upload/v1714071476/SportyMaxx/products/WhatsApp_Image_2024-04-13_at_17.53.01_3_jflzgf.jpg", "imagenSecundaria": "https://res.cloudinary.com/dyzoubfmd/image/upload/v1714071476/SportyMaxx/products/WhatsApp_Image_2024-04-13_at_17.53.01_3_jflzgf.jpg", "nombre": "Medias Harvey Willys negras", "precio": 12000, 
    "categories": ["medias", "accesorios", "harvey-willys"], "stock": 10, "count": 1},
    {"id": 11, "imagen": "https://res.cloudinary.com/dyzoubfmd/image/upload/v1714071495/SportyMaxx/products/WhatsApp_Image_2024-04-13_at_17.52.51_1_dsooi5.jpg", "imagenSecundaria": "https://res.cloudinary.com/dyzoubfmd/image/upload/v1714071498/SportyMaxx/products/WhatsApp_Image_2024-04-13_at_17.52.51_mhkfmo.jpg", "nombre": "Pantalón Viejascul", "precio": 20000, 
    "categories": ["pantalones", "viejascul", "algodón", "destacado"], "stock": 10, "count": 1},
    {"id": 12, "imagen": "https://res.cloudinary.com/dyzoubfmd/image/upload/v1714071493/SportyMaxx/products/WhatsApp_Image_2024-04-13_at_17.52.51_2_be1q00.jpg", "imagenSecundaria": "https://res.cloudinary.com/dyzoubfmd/image/upload/v1714071490/SportyMaxx/products/WhatsApp_Image_2024-04-13_at_17.52.51_3_hxa7pk.jpg", "nombre": "Buzo Viejascul diseño", "precio": 40000, 
    "categories": ["buzos", "viejascul", "con-capucha"], "stock": 10, "count": 1},
    {"id": 13, "imagen": "https://res.cloudinary.com/dyzoubfmd/image/upload/v1714071490/SportyMaxx/products/WhatsApp_Image_2024-04-13_at_17.52.51_4_f6fzyy.jpg", "imagenSecundaria": "https://res.cloudinary.com/dyzoubfmd/image/upload/v1714071486/SportyMaxx/products/WhatsApp_Image_2024-04-13_at_17.52.51_5_pjquht.jpg", "nombre": "Buzo Viejascul gris", "precio": 40000, 
    "categories": ["buzos", "vieajascul", "con-capucha"], "stock": 10, "count": 1},
    {"id": 14, "imagen": "https://res.cloudinary.com/dyzoubfmd/image/upload/v1714071485/SportyMaxx/products/WhatsApp_Image_2024-04-13_at_17.52.51_6_cku6ca.jpg", "imagenSecundaria": "https://res.cloudinary.com/dyzoubfmd/image/upload/v1714071485/SportyMaxx/products/WhatsApp_Image_2024-04-13_at_17.52.51_6_cku6ca.jpg", "nombre": "Gorro Harvey Willys negro", "precio": 10000, 
    "categories": ["gorros", "accesorios", "harvey-willys"], "stock": 10, "count": 1},
    {"id": 15, "imagen": "https://res.cloudinary.com/dyzoubfmd/image/upload/v1714071485/SportyMaxx/products/WhatsApp_Image_2024-04-13_at_17.52.51_7_bsdonx.jpg", "imagenSecundaria": "https://res.cloudinary.com/dyzoubfmd/image/upload/v1714071485/SportyMaxx/products/WhatsApp_Image_2024-04-13_at_17.52.51_7_bsdonx.jpg", "nombre": "Gorro Harvey Willys diseño", "precio": 10000, 
    "categories": ["gorros", "accesorios", "harvey-willys"], "stock": 10, "count": 1},
    {"id": 16, "imagen": "https://res.cloudinary.com/dyzoubfmd/image/upload/v1714071481/SportyMaxx/products/WhatsApp_Image_2024-04-13_at_17.52.51_8_a5k7d2.jpg", "imagenSecundaria": "https://res.cloudinary.com/dyzoubfmd/image/upload/v1714071481/SportyMaxx/products/WhatsApp_Image_2024-04-13_at_17.52.51_8_a5k7d2.jpg", "nombre": "Gorro Harvey Willys gris", "precio": 10000, 
    "categories": ["gorros", "accesorios", "harvey-willys"], "stock": 10, "count": 1},
    {"id": 17, "imagen": "https://res.cloudinary.com/dyzoubfmd/image/upload/v1714071475/SportyMaxx/products/WhatsApp_Image_2024-04-13_at_17.52.36_11_qx6mu6.jpg", "imagenSecundaria": "https://res.cloudinary.com/dyzoubfmd/image/upload/v1714071481/SportyMaxx/products/WhatsApp_Image_2024-04-13_at_17.53.01_eh4ycs.jpg", "nombre": "Buzo Harvey Willys marrón", "precio": 50000, 
    "categories": ["buzos", "con-capucha", "harvey-willys"], "stock": 10, "count": 1},
    {"id": 18, "imagen": "https://res.cloudinary.com/dyzoubfmd/image/upload/v1714071475/SportyMaxx/products/WhatsApp_Image_2024-04-13_at_17.53.01_4_wloeov.jpg", "imagenSecundaria": "https://res.cloudinary.com/dyzoubfmd/image/upload/v1714071475/SportyMaxx/products/WhatsApp_Image_2024-04-13_at_17.53.01_4_wloeov.jpg", "nombre": "Medias Harvey Willys blancas", "precio": 12000, 
    "categories": ["medias", "accesorios", "harvey-willys"], "stock": 10, "count": 1},
    {"id": 19, "imagen": "https://res.cloudinary.com/dyzoubfmd/image/upload/v1714071480/SportyMaxx/products/WhatsApp_Image_2024-04-13_at_17.53.01_1_rcqztz.jpg", "imagenSecundaria": "https://res.cloudinary.com/dyzoubfmd/image/upload/v1714071477/SportyMaxx/products/WhatsApp_Image_2024-04-13_at_17.53.01_2_kanono.jpg", "nombre": "Buzo Harvey Willys negro", "precio": 50000, 
    "categories": ["buzos", "con-capucha", "harvey-willys"], "stock": 10, "count": 1},
    {"id": 20, "imagen": "https://res.cloudinary.com/dyzoubfmd/image/upload/v1714071498/SportyMaxx/products/WhatsApp_Image_2024-04-13_at_17.52.36_10_jr4am2.jpg", "imagenSecundaria": "https://res.cloudinary.com/dyzoubfmd/image/upload/v1714071499/SportyMaxx/products/WhatsApp_Image_2024-04-13_at_17.52.36_9_kci33f.jpg", "nombre": "Remera Harvey Willys negra", "precio": 50000, 
    "categories": ["remeras", "manga-corta", "harvey-willys"], "stock": 10, "count": 1},
    {"id": 21, "imagen": "https://res.cloudinary.com/dyzoubfmd/image/upload/v1714072439/SportyMaxx/products/WhatsApp_Image_2024-04-13_at_17.52.36_7_de8pr7.jpg", "imagenSecundaria": "https://res.cloudinary.com/dyzoubfmd/image/upload/v1714071504/SportyMaxx/products/WhatsApp_Image_2024-04-13_at_17.52.36_8_bpujdy.jpg", "nombre": "Buzo Harvey Willys blanco", "precio": 50000, 
    "categories": ["buzos", "con-capucha", "harvey-willys"], "stock": 10, "count": 1},
    {"id": 22, "imagen": "https://res.cloudinary.com/dyzoubfmd/image/upload/v1714072455/SportyMaxx/products/WhatsApp_Image_2024-04-13_at_17.52.35_1_yggkgr.jpg", "imagenSecundaria": "https://res.cloudinary.com/dyzoubfmd/image/upload/v1714072465/SportyMaxx/products/WhatsApp_Image_2024-04-13_at_17.52.35_2_mndamw.jpg", "nombre": "Buzo Harvey Willys negro", "precio": 50000, 
    "categories": ["buzos", "sin-capucha", "harvey-willys"], "stock": 10, "count": 1},
    {"id": 23, "imagen": "https://res.cloudinary.com/dyzoubfmd/image/upload/v1714072487/SportyMaxx/products/WhatsApp_Image_2024-04-13_at_17.52.36_cucgdg.jpg", "imagenSecundaria": "https://res.cloudinary.com/dyzoubfmd/image/upload/v1714072487/SportyMaxx/products/WhatsApp_Image_2024-04-13_at_17.52.36_cucgdg.jpg", "nombre": "Remera Viejascul negra", "precio": 50000, 
    "categories": ["remeras", "manga-corta", "viejascul"], "stock": 10, "count": 1},
    {"id": 24, "imagen": "https://res.cloudinary.com/dyzoubfmd/image/upload/v1714072503/SportyMaxx/products/WhatsApp_Image_2024-04-13_at_17.52.36_5_kr2a2y.jpg", "imagenSecundaria": "https://res.cloudinary.com/dyzoubfmd/image/upload/v1714072503/SportyMaxx/products/WhatsApp_Image_2024-04-13_at_17.52.36_5_kr2a2y.jpg", "nombre": "Remera Viejascul negra", "precio": 50000, 
    "categories": ["remeras", "manga-corta", "viejascul"], "stock": 10, "count": 1},
    {"id": 25, "imagen": "https://res.cloudinary.com/dyzoubfmd/image/upload/v1714072495/SportyMaxx/products/WhatsApp_Image_2024-04-13_at_17.52.36_2_uemzc7.jpg", "imagenSecundaria": "https://res.cloudinary.com/dyzoubfmd/image/upload/v1714072489/SportyMaxx/products/WhatsApp_Image_2024-04-13_at_17.52.36_1_ekwbye.jpg", "nombre": "Remera Viejascul violeta", "precio": 50000, 
    "categories": ["remeras", "manga-corta", "viejascul"], "stock": 10, "count": 1},
    {"id": 26, "imagen": "https://res.cloudinary.com/dyzoubfmd/image/upload/v1714072509/SportyMaxx/products/WhatsApp_Image_2024-04-13_at_17.52.36_6_ho4w5m.jpg", "imagenSecundaria": "https://res.cloudinary.com/dyzoubfmd/image/upload/v1714072509/SportyMaxx/products/WhatsApp_Image_2024-04-13_at_17.52.36_6_ho4w5m.jpg", "nombre": "Remera Viejascul blanca", "precio": 50000, 
    "categories": ["remeras", "manga-corta", "viejascul"], "stock": 10, "count": 1},
    {"id": 27, "imagen": "https://res.cloudinary.com/dyzoubfmd/image/upload/v1714072496/SportyMaxx/products/WhatsApp_Image_2024-04-13_at_17.52.36_3_qsicpe.jpg", "imagenSecundaria": "https://res.cloudinary.com/dyzoubfmd/image/upload/v1714072502/SportyMaxx/products/WhatsApp_Image_2024-04-13_at_17.52.36_4_iecewo.jpg", "nombre": "Buzo Viejascul verde", "precio": 50000, 
    "categories": ["buzos", "con-capucha", "destacado","viejascul"], "stock": 10, "count": 1},

]

export default arrayProducts
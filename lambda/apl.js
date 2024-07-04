
//BIENVENIDA
const datasourceBienvenido = {
    "headlineTemplateData": {
        "type": "object",
        "objectId": "headlineSample",
        "properties": {
            "backgroundImage": {
                "contentDescription": null,
                "smallSourceUrl": null,
                "largeSourceUrl": null,
                "sources": [
                    {
                        "url": "https://i.gifer.com/origin/75/75c14e881894363e58fdea043cc66797.gif",
                        "size": "large"
                    }
                ]
            },
            "textContent": {
                "primaryText": {
                    "type": "PlainText",
                    "text": "BIENVENIDO A CURIOSIDADES DE RIO DE JANEIRO DE MEMO"
                }
            },
            "logoUrl": "",
            "hintText": "Decir: \"Alexa, dime sobre la ciudad de rio de janeiro\""
        }
    }
};

const createDirectivePayloadBienvenido = (aplDocumentId, dataSources = {}, tokenId = "documentToken") => {
    return {
        type: "Alexa.Presentation.APL.RenderDocument",
        token: tokenId,
        document: {
            type: "Link",
            src: "doc://alexa/apl/documents/" + aplDocumentId
        },
        datasources: dataSources
    }
};
//AYUDA

const datasourceayuda = {
    "imageListData": {
        "type": "object",
        "objectId": "imageListSample",
        "backgroundImage": {
            "contentDescription": null,
            "smallSourceUrl": null,
            "largeSourceUrl": null,
            "sources": [
                {
                    "url": "https://elviajerofeliz.com/wp-content/uploads/2017/10/que-ver-en-rio-de-janeiro.jpg",
                    "size": "large"
                }
            ]
        },
        "title": "AYUDA",
        "listItems": [
            {
                "primaryText": "dime sobre lugares turisticos de rio de janeiro",
                "imageSource": "https://th.bing.com/th/id/OIP.v40QGUTtAVXmSWvgScCDogHaE8?rs=1&pid=ImgDetMain"
            },
            {
                "primaryText": "dime sobre la comida tipica de rio de janeiro",
                "imageSource": "https://2.bp.blogspot.com/-at3LQAlOE1o/W34guAkip4I/AAAAAAAADAM/1D02hQhZ7hwDVWiK3DS_2wHyHOwhLuA9wCLcBGAs/s1600/gastronomia.png"
            },
            {
                "primaryText": "dime sobre trajes tipicos de rio de janeiro",
                "imageSource": "https://i.pinimg.com/originals/00/9b/6d/009b6d0182906b513bf70e5464eb4f10.jpg"
            },
            {
                "primaryText": "dime sobre los personajes sobresalientes de rio de janeiro",
                "imageSource": "https://th.bing.com/th/id/R.0d9db42693f9a6efbec600eff247df4b?rik=mMPkH1yBvf50ww&riu=http%3a%2f%2f1.bp.blogspot.com%2f-Topr1wy10yg%2fUDkcSasYt3I%2fAAAAAAAAAD4%2f5hh-t2PGpPs%2fs1600%2fimages.jpeg&ehk=N2F2ZPQEzC3Y8soXL5EouqPrg7%2fPrjhIYGj8eaOfoAs%3d&risl=&pid=ImgRaw&r=0"
            },
            {
                "primaryText": "dime sobre sobre la musica de rio de janeiro",
                "imageSource": "https://th.bing.com/th/id/OIP.2GHbVKAOzrR2an3IQ22SBwHaE7?rs=1&pid=ImgDetMain"
            },
            {
                "primaryText": "dime sobre la ciudad de rio de janeiro",
                "imageSource": "https://cdn.holidayguru.es/wp-content/uploads/2016/08/Aerial-view-of-Christ-Sugarloaf-Rio-de-Janeiro-Brazil-iStock_55264880_LARGE-EDITORIAL-ONLY-dolphinphoto-2.jpg"
            }
        ],
        "logoUrl": "https://elviajerofeliz.com/wp-content/uploads/2017/10/que-ver-en-rio-de-janeiro.jpg",
        "hintText": "Decir: \"dime sobre lugares turisticos de janeiro\""
    }
};

const createDirectivePayloadayuda = (aplDocumentId, dataSources = {}, tokenId = "documentToken") => {
    return {
        type: "Alexa.Presentation.APL.RenderDocument",
        token: tokenId,
        document: {
            type: "Link",
            src: "doc://alexa/apl/documents/" + aplDocumentId
        },
        datasources: dataSources
    }
};
//CANCELAR
const datasourcecancel = {
    "headlineTemplateData": {
        "type": "object",
        "objectId": "headlineSample",
        "properties": {
            "backgroundImage": {
                "contentDescription": null,
                "smallSourceUrl": null,
                "largeSourceUrl": null,
                "sources": [
                    {
                        "url": "https://p4.wallpaperbetter.com/wallpaper/221/480/971/rio-de-janeiro-cityscape-wallpaper-thumb.jpg",
                        "size": "large"
                    }
                ]
            },
            "textContent": {
                "primaryText": {
                    "type": "PlainText",
                    "text": "*** RIO DE JANEIRO DE MEMO***  DICE VUELVA PRONTO, ADIOS!!!"
                }
            },
            "logoUrl": "https://p4.wallpaperbetter.com/wallpaper/221/480/971/rio-de-janeiro-cityscape-wallpaper-thumb.jpg",
            "hintText": "ADIOS!!!"
        }
    }
};

const createDirectivePayloadcancel = (aplDocumentId, dataSources = {}, tokenId = "documentToken") => {
    return {
        type: "Alexa.Presentation.APL.RenderDocument",
        token: tokenId,
        document: {
            type: "Link",
            src: "doc://alexa/apl/documents/" + aplDocumentId
        },
        datasources: dataSources
    }
};

//FALLBACK
const datasourcefall = {
    "simpleTextTemplateData": {
        "type": "object",
        "properties": {
            "backgroundImage": "https://elviajerolibre.com/wp-content/uploads/2019/05/Anochecer-Pan-de-Azucar-Rio.jpg",
            "foregroundImageLocation": "bottom",
            "foregroundImageSource": "https://www.pngarts.com/files/1/Sad-Face-Free-PNG-Image.png",
            "headerTitle": "",
            "headerSubtitle": "",
            "hintText": "Por favor intenta de nuevo.",
            "headerAttributionImage": "https://th.bing.com/th/id/OIP.msyTnz4nMkMS2VMFDrbUGAHaFj?rs=1&pid=ImgDetMain",
            "primaryText": "",
            "textAlignment": "center",
            "titleText": "CURIOSIDADES RIO DE JANEIRO NO SABE SOBRE ESO"
        }
    }
};

const createDirectivePayloadfall = (aplDocumentId, dataSources = {}, tokenId = "documentToken") => {
    return {
        type: "Alexa.Presentation.APL.RenderDocument",
        token: tokenId,
        document: {
            type: "Link",
            src: "doc://alexa/apl/documents/" + aplDocumentId
        },
        datasources: dataSources
    }
};

//Error
const datasourceerror = {
    "simpleTextTemplateData": {
        "type": "object",
        "properties": {
            "backgroundImage": "https://th.bing.com/th/id/OIP.2QAb2xw-ldu3UAGYLw5d5AHaE7?w=626&h=417&rs=1&pid=ImgDetMain",
            "foregroundImageLocation": "bottom",
            "foregroundImageSource": "https://images.vexels.com/media/users/3/134499/isolated/preview/15919ef0465bf8c31fbc307d9b20f1a9-emoticon-emoji-muertos-by-vexels.png",
            "headerTitle": "",
            "headerSubtitle": "",
            "hintText": "Vuelva a intentarlo",
            "headerAttributionImage": "https://th.bing.com/th/id/OIP.2QAb2xw-ldu3UAGYLw5d5AHaE7?w=626&h=417&rs=1&pid=ImgDetMain",
            "primaryText": "",
            "textAlignment": "center",
            "titleText": "CURIOSIDADES RIO DE JANEIRO TUVO UN ERROR"
        }
    }
};

const createDirectivePayloaderror = (aplDocumentId, dataSources = {}, tokenId = "documentToken") => {
    return {
        type: "Alexa.Presentation.APL.RenderDocument",
        token: tokenId,
        document: {
            type: "Link",
            src: "doc://alexa/apl/documents/" + aplDocumentId
        },
        datasources: dataSources
    }
};
//DESCRIPCION
const datasourcedes = {
    "videoPlayerTemplateData": {
        "type": "object",
        "properties": {
            "backgroundImage": "https://th.bing.com/th/id/OIP.hX1dvpoBXnyMNlcbhQ88RwAAAA?rs=1&pid=ImgDetMain",
            "displayFullscreen": false,
            "headerTitle": "RIO DE JANEIRO",
            "headerSubtitle": "",
            "logoUrl": "https://th.bing.com/th/id/OIP.hX1dvpoBXnyMNlcbhQ88RwAAAA?rs=1&pid=ImgDetMain",
            "videoControlType": "jump10",
            "videoSources": [
                "https://fframkjxqtiqlzsmxmwt.supabase.co/storage/v1/object/public/videosGuille/Rio_de_Janeiro___Cinematic_Video.mp4?t=2024-07-03T04%3A49%3A31.074Z"
            ],
            "sliderType": "determinate"
        }
    }
};

const createDirectivePayloaddes = (aplDocumentId, dataSources = {}, tokenId = "documentToken") => {
    return {
        type: "Alexa.Presentation.APL.RenderDocument",
        token: tokenId,
        document: {
            type: "Link",
            src: "doc://alexa/apl/documents/" + aplDocumentId
        },
        datasources: dataSources
    }
};

//LUGAR
const datasourcelug = {
    "cardsLayoutTemplateData": {
        "type": "object",
        "properties": {
            "backgroundImage": "https://i.gifer.com/origin/75/75c14e881894363e58fdea043cc66797.gif",
            "headerTitle": "",
            "headerSubtitle": "",
            "headerAttributionImage": "https://www.bing.com/images/search?view=detailV2&ccid=h0Jg3h7N&id=20C094C9D50209626BD9018E051394AA7EC3117F&thid=OIP.h0Jg3h7NUTLY41ZWMNPZgQHaDt&mediaurl=https%3a%2f%2fi.gifer.com%2forigin%2f75%2f75c14e881894363e58fdea043cc66797.gif&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.874260de1ecd5132d8e3565630d3d981%3frik%3dfxHDfqqUEwWOAQ%26pid%3dImgRaw%26r%3d0&exph=240&expw=480&q=rio+de+janeiro++gifs&simid=608003512592832987&FORM=IRPRST&ck=90FF68949DC3A4A65D727626AF844B3A&selectedIndex=7&itb=0",
            "primaryText": "LUGARES TURISTICOS",
            "listItems": [
                {
                    "secondaryText": "Copacabana",
                    "thumbnailImage": "https://th.bing.com/th/id/OIP.v40QGUTtAVXmSWvgScCDogHaE8?rs=1&pid=ImgDetMain"
                },
                {
                    "secondaryText": "Pan de Azucar",
                    "thumbnailImage": "https://th.bing.com/th/id/OIP.xW7Ef9C9SYn7C4VK1GcpngHaFj?rs=1&pid=ImgDetMain"
                },
                {
                    "secondaryText": "Cristo Redentor",
                    "thumbnailImage": "https://th.bing.com/th/id/R.7f17558a459e37822fe2c5b5ded5f28a?rik=OZd5pPFZrxwBOQ&riu=http%3a%2f%2f3.bp.blogspot.com%2f-UnBeBGXxuqg%2fTvFC7by0jOI%2fAAAAAAAAAIE%2fT8cexRa6wcc%2fs1600%2fbrezil%2b%2525282%252529.jpg&ehk=f8DJXxygGfn%2bSvCCUWMoTFvQ6xhAWrlcFWxIalu3tEM%3d&risl=&pid=ImgRaw&r=0"
                },
                {
                    "secondaryText": "Playa Ipanema",
                    "thumbnailImage": "https://franks-travelbox.com/wp-content/uploads/2017/11/brasilien-rio-de-janeiro-am-westende-des-strandes-von-ipanema-in-rio-ragen-die-markanten-hucc88gel-dois-irmacc83os-zwei-brucc88der-in-den-himmel-brasilien-donatas-dabravolskas-shutter-1200x800@2x.jpg"
                }
            ]
        }
    }
};

const createDirectivePayloadlug = (aplDocumentId, dataSources = {}, tokenId = "documentToken") => {
    return {
        type: "Alexa.Presentation.APL.RenderDocument",
        token: tokenId,
        document: {
            type: "Link",
            src: "doc://alexa/apl/documents/" + aplDocumentId
        },
        datasources: dataSources
    }
};

//COMIDA
const datasourcecom  = {
    "cardsLayoutTemplateData": {
        "type": "object",
        "properties": {
            "backgroundImage": "https://picstatio.com/large/e4c47d/Rio-de-Janeiro-night-city-mountians-aerial-view.jpg",
            "headerTitle": "",
            "headerSubtitle": "",
            "headerAttributionImage": "https://d2o906d8ln7ui1.cloudfront.net/images/response_builder/logo-world-of-plants-2.png",
            "primaryText": "COMIDA TIPICA ",
            "listItems": [
                {
                    "secondaryText": "la feijoada",
                    "thumbnailImage": "https://th.bing.com/th/id/OIP.K6omge0MUnFjvCFuodmHCgHaE7?rs=1&pid=ImgDetMain"
                },
                {
                    "secondaryText": "el pão de queijo",
                    "thumbnailImage": "https://th.bing.com/th/id/OIP.I1eJEsFVPlQXOs3sI4grtAHaF7?rs=1&pid=ImgDetMain"
                },
                {
                    "secondaryText": "la caipirinha",
                    "thumbnailImage": "https://c8.alamy.com/compes/fabn1w/una-deliciosa-bebida-caipirinha-de-kiwi-con-vistas-a-la-legendaria-playa-de-ipanema-en-rio-de-janeiro-brasil-fabn1w.jpg"
                },
                {
                    "secondaryText": "la moqueca",
                    "thumbnailImage": "https://lacenabynola.com/templates/yootheme/cache/8e/lacena-by-nola-food-drinks-comida-bebidas-eten-drank-015-8e0bb1a9.jpeg"
                }
            ]
        }
    }
};

const createDirectivePayloadcom = (aplDocumentId, dataSources = {}, tokenId = "documentToken") => {
    return {
        type: "Alexa.Presentation.APL.RenderDocument",
        token: tokenId,
        document: {
            type: "Link",
            src: "doc://alexa/apl/documents/" + aplDocumentId
        },
        datasources: dataSources
    }
};

//TRAJE
const datasourcetra = {
    "cardsLayoutTemplateData": {
        "type": "object",
        "properties": {
            "backgroundImage": "https://th.bing.com/th/id/OIP.tMcfRxXU2gxjm6YqAWecywHaEK?rs=1&pid=ImgDetMain",
            "headerTitle": "",
            "headerSubtitle": "",
            "headerAttributionImage": "https://th.bing.com/th/id/OIP.tMcfRxXU2gxjm6YqAWecywHaEK?rs=1&pid=ImgDetMain",
            "primaryText": "TRAJES Y VESTIMENTAS TIPICAS",
            "listItems": [
                {
                    "thumbnailImage": "https://www.bing.com/th/id/OGC.db688f459e96f74e59e94894bbf7445b?pid=1.7&rurl=https%3a%2f%2fmedia.giphy.com%2fmedia%2fklsZYFRvAdynK%2fgiphy.gif&ehk=VUqxou%2f9gSMdyRNDCSyGlsP3s7WeFqQfEmy9nSSx%2f0U%3d"
                },
                {
                    "thumbnailImage": "https://th.bing.com/th/id/OIP.eA1uk0CXkFL37JDKck6X8gHaEJ?rs=1&pid=ImgDetMain"
                },
                {
                    "thumbnailImage": "https://th.bing.com/th/id/R.afd3ea1719b03d4d5d41f0cd74ffb8c8?rik=0s40dr8h%2bAYwsg&pid=ImgRaw&r=0"
                },
                {
                    "primaryText": "Mint",
                    "secondaryText": "Garden herbs",
                    "thumbnailImage": "https://media.giphy.com/media/DtBOFb51wSvvi/giphy.gif"
                }
            ]
        }
    }
};

const createDirectivePayloadtra = (aplDocumentId, dataSources = {}, tokenId = "documentToken") => {
    return {
        type: "Alexa.Presentation.APL.RenderDocument",
        token: tokenId,
        document: {
            type: "Link",
            src: "doc://alexa/apl/documents/" + aplDocumentId
        },
        datasources: dataSources
    }
};

//PERSONAJES
const datasourceper = {
    "cardsLayoutTemplateData": {
        "type": "object",
        "properties": {
            "backgroundImage": "https://i.pinimg.com/originals/3d/0a/77/3d0a77c91e33a226c520038dd73023d7.jpg",
            "headerTitle": "",
            "headerSubtitle": "",
            "headerAttributionImage": "https://i.pinimg.com/originals/3d/0a/77/3d0a77c91e33a226c520038dd73023d7.jpg",
            "primaryText": "PERSONAJES FAMOSOS ",
            "listItems": [
                {
                    "secondaryText": "Vinicius de Moraes",
                    "thumbnailImage": "https://1.bp.blogspot.com/-rC681WDTR7g/XwnBYwFQPNI/AAAAAAAAg_Q/uarVBrCGUGEDRgPEpiJazv4Ske1n7StDgCLcBGAsYHQ/s1600/vinicius-de-moraes.png"
                },
                {
                    "secondaryText": "Adriana Lima",
                    "thumbnailImage": "https://th.bing.com/th/id/OIP.cjKMcWkG8pAq4nJGjrUgxQAAAA?rs=1&pid=ImgDetMain"
                },
                {
                    "secondaryText": "Pelé",
                    "thumbnailImage": "https://th.bing.com/th/id/R.177a34f76f650147c4e6ccb549241c79?rik=Cq2JWG6%2fxiwLKg&pid=ImgRaw&r=0"
                },
                {
                    "secondaryText": "Fernanda Montenegro",
                    "thumbnailImage": "https://th.bing.com/th/id/R.0896f2804796f4b6a2899f98a117f64f?rik=ELF0syRpvPtIQQ&pid=ImgRaw&r=0"
                },
                {
                    "secondaryText": "Oscar Niemeyer",
                    "thumbnailImage": "https://th.bing.com/th/id/OIP.ustVNvycnoktqsnIhqZwBQHaJN?rs=1&pid=ImgDetMain"
                },
                {
                    "secondaryText": "Tom Jobim",
                    "thumbnailImage": "https://s2.glbimg.com/6C5RGWh4D3MacON9txr5v5doH_Y=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2021/r/w/7iGnHySzGmSBPEcpmPug/sem-titulo.png"
                }
            ]
        }
    }
};

const createDirectivePayloadper = (aplDocumentId, dataSources = {}, tokenId = "documentToken") => {
    return {
        type: "Alexa.Presentation.APL.RenderDocument",
        token: tokenId,
        document: {
            type: "Link",
            src: "doc://alexa/apl/documents/" + aplDocumentId
        },
        datasources: dataSources
    }
};

//MUSICA
const datasourcemus = {
    "audioPlayerTemplateData": {
        "type": "object",
        "properties": {
            "audioControlType": "jump10",
            "audioSources": [
                "https://fframkjxqtiqlzsmxmwt.supabase.co/storage/v1/object/public/videosGuille/Robson_Moura_e_Lino_Krizz___Vem_Dan_ar_com_Tudo_(Kuduro)_(_lbum_Som_dos_Craques).mp3?t=2024-07-03T05%3A40%3A10.713Z"
            ],
            "backgroundImage": "https://i.gifer.com/origin/75/75c14e881894363e58fdea043cc66797.gif",
            "coverImageSource": "https://th.bing.com/th/id/R.73d3255315094f689bb91cdc201a8a2c?rik=MykcU2VfBJXMYg&pid=ImgRaw&r=0",
            "headerTitle": "Musica Brasileña de Rio de Janeiro",
            "logoUrl": "https://i.gifer.com/origin/75/75c14e881894363e58fdea043cc66797.gif",
            "primaryText": "Rio de Janeiro",
            "secondaryText": "Vem Dancar Kuduro",
            "sliderType": "determinate"
        }
    }
};

const createDirectivePayloadmus = (aplDocumentId, dataSources = {}, tokenId = "documentToken") => {
    return {
        type: "Alexa.Presentation.APL.RenderDocument",
        token: tokenId,
        document: {
            type: "Link",
            src: "doc://alexa/apl/documents/" + aplDocumentId
        },
        datasources: dataSources
    }
};

//EXPORTAR

module.exports = { datasourceBienvenido, createDirectivePayloadBienvenido,datasourceayuda,createDirectivePayloadayuda,
datasourcecancel,createDirectivePayloadcancel,datasourcefall,createDirectivePayloadfall,datasourceerror,createDirectivePayloaderror,
datasourcedes,createDirectivePayloaddes,datasourcelug,createDirectivePayloadlug,datasourcecom,createDirectivePayloadcom,
datasourcetra,createDirectivePayloadtra,datasourceper,createDirectivePayloadper,datasourcemus,createDirectivePayloadmus};
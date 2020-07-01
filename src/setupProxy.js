const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app){
    app.use("/enseignantDisplay", 
    createProxyMiddleware({
            target: "https://169.254.226.185:9443/services/estiadmin",
            secure: false,
            changeOrigin: true
        })
    );
    app.use("/enseignantDisplayById", 
    createProxyMiddleware({
            target: "https://169.254.226.185:9443/services/estiadmin",
            secure: false,
            changeOrigin: true
        })
    );
    app.use("/enseignantAdd",
    createProxyMiddleware({
            target: "https://169.254.226.185:9443/services/estiadmin",
            secure: false,
            changeOrigin: true
        })
    );
    app.use("/enseignantEdit",
    createProxyMiddleware({
            target: "https://169.254.226.185:9443/services/estiadmin",
            secure: false,
            changeOrigin: true
        })
    );
    app.use("/enseignantDelete",
    createProxyMiddleware({
            target: "https://169.254.226.185:9443/services/estiadmin",
            secure: false,
            changeOrigin: true
        })
    );
    app.use("/moduleDisplay",
    createProxyMiddleware({
            target: "https://127.0.0.1:9443/services/estiadmin",
            secure: false,
            changeOrigin: true
        })
    );
    app.use("/moduleDisplayById",
    createProxyMiddleware({
            target: "https://127.0.0.1:9443/services/estiadmin",
            secure: false,
            changeOrigin: true
        })
    );
    app.use("/moduleAdd",
    createProxyMiddleware({
            target: "https://127.0.0.1:9443/services/estiadmin",
            secure: false,
            changeOrigin: true
        })
    );
    app.use("/moduleEdit",
    createProxyMiddleware({
            target: "https://169.254.226.185:9443/services/estiadmin",
            secure: false,
            changeOrigin: true
        })
    );
    app.use("/moduleDelete",
    createProxyMiddleware({
            target: "https://169.254.226.185:9443/services/estiadmin",
            secure: false,
            changeOrigin: true
        })
    );
    app.use("/syllabusDisplay",
    createProxyMiddleware({
            target: "https://127.0.0.1:9443/services/estiadmin",
            secure: false,
            changeOrigin: true
        })
    );
    app.use("/syllabusDisplayById",
    createProxyMiddleware({
            target: "https://127.0.0.1:9443/services/estiadmin",
            secure: false,
            changeOrigin: true
        })
    );
    app.use("/syllabusAdd",
    createProxyMiddleware({
            target: "https://169.254.226.185:9443/services/estiadmin",
            secure: false,
            changeOrigin: true
        })
    );
    app.use("/syllabusEdit",
    createProxyMiddleware({
            target: "https://169.254.226.185:9443/services/estiadmin",
            secure: false,
            changeOrigin: true
        })
    );
    app.use("/syllabusDelete",
    createProxyMiddleware({
            target: "https://169.254.226.185:9443/services/estiadmin",
            secure: false,
            changeOrigin: true
        })
    );
    app.use("/ueDisplay",
    createProxyMiddleware({
            target: "https://127.0.0.1:9443/services/estiadmin",
            secure: false,
            changeOrigin: true
        })
    );
    app.use("/ueDisplayById",
    createProxyMiddleware({
            target: "https://127.0.0.1:9443/services/estiadmin",
            secure: false,
            changeOrigin: true
        })
    );
    app.use("/ueAdd",
    createProxyMiddleware({
            target: "https://127.0.0.1:9443/services/estiadmin",
            secure: false,
            changeOrigin: true
        })
    );
    app.use("/ueEdit",
    createProxyMiddleware({
            target: "https://169.254.226.185:9443/services/estiadmin",
            secure: false,
            changeOrigin: true
        })
    );
    app.use("/ueDelete",
    createProxyMiddleware({
            target: "https://169.254.226.185:9443/services/estiadmin",
            secure: false,
            changeOrigin: true
        })
    );
    app.use("/contratDisplay",
    createProxyMiddleware({
            target: "https://127.0.0.1:9443/services/estiadmin",
            secure: false,
            changeOrigin: true
        })
    );
    app.use("/contratDisplayById",
    createProxyMiddleware({
            target: "https://127.0.0.1:9443/services/estiadmin",
            secure: false,
            changeOrigin: true
        })
    );
    app.use("/contratAdd",
    createProxyMiddleware({
            target: "https://127.0.0.1:9443/services/estiadmin",
            secure: false,
            changeOrigin: true
        })
    );
    app.use("/contratEdit",
    createProxyMiddleware({
            target: "https://169.254.226.185:9443/services/estiadmin",
            secure: false,
            changeOrigin: true
        })
    );
    app.use("/contratDelete",
    createProxyMiddleware({
            target: "https://169.254.226.185:9443/services/estiadmin",
            secure: false,
            changeOrigin: true
        })
    );
    app.use("/avenantDisplay",
    createProxyMiddleware({
            target: "https://127.0.0.1:9443/services/estiadmin",
            secure: false,
            changeOrigin: true
        })
    );
    app.use("/avenantDisplayById",
    createProxyMiddleware({
            target: "https://127.0.0.1:9443/services/estiadmin",
            secure: false,
            changeOrigin: true
        })
    );
    app.use("/avenantAdd",
    createProxyMiddleware({
            target: "https://127.0.0.1:9443/services/estiadmin",
            secure: false,
            changeOrigin: true
        })
    );
    app.use("/avenantEdit",
    createProxyMiddleware({
            target: "https://169.254.226.185:9443/services/estiadmin",
            secure: false,
            changeOrigin: true
        })
    );
    app.use("/avenantDelete",
    createProxyMiddleware({
            target: "https://127.0.0.1:9443/services/estiadmin",
            secure: false,
            changeOrigin: true
        })
    );
    app.use("/utilisateurDisplay",
    createProxyMiddleware({
            target: "https://127.0.0.1:9443/services/estiadmin",
            secure: false,
            changeOrigin: true
        })
    );
    app.use("/utilisateurDisplayById",
    createProxyMiddleware({
            target: "https://127.0.0.1:9443/services/estiadmin",
            secure: false,
            changeOrigin: true
        })
    );
    app.use("/utilisateurDisplayByMail",
    createProxyMiddleware({
            target: "https://127.0.0.1:9443/services/estiadmin",
            secure: false,
            changeOrigin: true
        })
    );
    app.use("/utilisateurAdd",
    createProxyMiddleware({
            target: "https://169.254.226.185:9443/services/estiadmin",
            secure: false,
            changeOrigin: true
        })
    );
    app.use("/utilisateurEdit",
    createProxyMiddleware({
            target: "https://169.254.226.185:9443/services/estiadmin",
            secure: false,
            changeOrigin: true
        })
    );
    app.use("/utilisateurDelete",
    createProxyMiddleware({
            target: "https://169.254.226.185:9443/services/estiadmin",
            secure: false,
            changeOrigin: true
        })
    );

    app.use("/estiFb",
    createProxyMiddleware({
            target: "https://www.facebook.com/EstiMadagascar/",
            secure: false,
            changeOrigin: true
        })
    );
    app.use("/estiTwitter",
    createProxyMiddleware({
            target: "https://twitter.com/esti_mg",
            secure: false,
            changeOrigin: true
        })
    );
    app.use("/estiLinkedIn",
    createProxyMiddleware({
            target: "https://www.linkedin.com/in/esti-mg",
            secure: false,
            changeOrigin: true
        })
    );
};
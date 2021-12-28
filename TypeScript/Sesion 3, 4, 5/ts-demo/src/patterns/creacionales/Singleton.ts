class Singleton {

    private static instance: Singleton;

    private constructor() { }

    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton(); // se crea la única unstancia compartida a nivel de aplicación
        }
        return Singleton.instance;
    }

    public mostrarPorConsola() {
        console.log("Método del Singleton");
    }

}